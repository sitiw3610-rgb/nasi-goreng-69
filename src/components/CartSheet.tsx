import { useEffect, useMemo, useState } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { useCart } from "@/context/CartContext";
import { useLang } from "@/i18n/LanguageContext";
import { formatRp } from "@/data/menuData";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Minus,
  Plus,
  Trash2,
  ShoppingBag,
  ArrowLeft,
  Store,
  ExternalLink,
  Copy,
  Check,
  CheckCircle2,
} from "lucide-react";
import { toast } from "@/components/ui/sonner";
import { WA_NUMBER } from "@/lib/whatsapp";
import { checkoutOutlets } from "@/data/checkoutOutlets";

type Step = "method" | "cart" | "form" | "payment" | "success";
type Method = "pickup" | "gofood" | null;
type PayMethod = "cod" | "qris";

const STEPS: { key: Step; label: string }[] = [
  { key: "method", label: "Metode" },
  { key: "cart", label: "Cart" },
  { key: "form", label: "Form" },
  { key: "payment", label: "Pembayaran" },
  { key: "success", label: "Sukses" },
];

const genOrderId = () => {
  const d = new Date();
  const pad = (n: number) => String(n).padStart(2, "0");
  const stamp = `${d.getFullYear()}${pad(d.getMonth() + 1)}${pad(d.getDate())}${pad(d.getHours())}${pad(d.getMinutes())}`;
  const rand = Math.floor(Math.random() * 900 + 100);
  return `NG69-${stamp}-${rand}`;
};

export const CartSheet = () => {
  const { lines, open, setOpen, setQty, remove, total, clear } = useCart();
  const { lang } = useLang();

  const [step, setStep] = useState<Step>("method");
  const [method, setMethod] = useState<Method>(null);

  // form
  const [name, setName] = useState("");
  const [outletName, setOutletName] = useState("");
  const [note, setNote] = useState("");
  const [pay, setPay] = useState<PayMethod>("cod");

  // result
  const [orderId, setOrderId] = useState("");
  const [copied, setCopied] = useState(false);

  // GoFood selection
  const [gofoodOutlet, setGofoodOutlet] = useState("");

  const selectedOutlet = useMemo(
    () => checkoutOutlets.find((o) => o.name === outletName),
    [outletName],
  );
  const selectedGofood = useMemo(
    () => checkoutOutlets.find((o) => o.name === gofoodOutlet),
    [gofoodOutlet],
  );

  // Reset state whenever the sheet is closed
  useEffect(() => {
    if (!open) {
      setTimeout(() => {
        setStep("method");
        setMethod(null);
        setName("");
        setOutletName("");
        setNote("");
        setPay("cod");
        setOrderId("");
        setCopied(false);
        setGofoodOutlet("");
      }, 200);
    }
  }, [open]);

  const activeIdx = STEPS.findIndex((s) => s.key === step);

  const itemsText = lines
    .map((l, i) => `${i + 1}. ${l.item.name[lang]} x${l.qty} - ${formatRp(l.item.price * l.qty)}`)
    .join("\n");

  const buildWaMessage = () => {
    const lines2 = [
      "Halo Admin Nasgor 69,",
      "",
      `Nama: ${name}`,
      `Outlet: ${outletName}`,
      `Pesanan:\n${itemsText}`,
      `Total: ${formatRp(total)}`,
      `Metode: ${pay === "cod" ? "COD (Bayar di Outlet)" : "QRIS"}`,
      `Order ID: ${orderId}`,
    ];
    if (note) lines2.push(`Catatan: ${note}`);
    if (pay === "qris") {
      lines2.push("", "Saya sudah melakukan pembayaran via QRIS, berikut bukti pembayaran saya.");
    }
    return encodeURIComponent(lines2.join("\n"));
  };

  const sendToWhatsApp = () => {
    window.open(`https://wa.me/${WA_NUMBER}?text=${buildWaMessage()}`, "_blank", "noopener,noreferrer");
    setTimeout(() => {
      clear();
      setOpen(false);
    }, 400);
  };

  const goPayment = () => {
    if (!name.trim()) {
      toast.error("Nama pemesan wajib diisi");
      return;
    }
    if (!outletName) {
      toast.error("Pilih outlet terlebih dahulu");
      return;
    }
    setStep("payment");
  };

  const confirmPayment = () => {
    setOrderId(genOrderId());
    setStep("success");
  };

  const copyTotal = async () => {
    try {
      await navigator.clipboard.writeText(String(total));
      setCopied(true);
      toast.success("Nominal disalin");
      setTimeout(() => setCopied(false), 1500);
    } catch {
      toast.error("Gagal menyalin");
    }
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent className="w-full sm:max-w-md flex flex-col p-0">
        <SheetHeader className="px-6 py-5 border-b border-border">
          <SheetTitle className="font-display text-2xl text-brand">Checkout</SheetTitle>
          {/* Progress bar */}
          <div className="mt-3 flex items-center gap-1">
            {STEPS.map((s, i) => (
              <div key={s.key} className="flex-1 flex flex-col items-center gap-1">
                <div
                  className={`h-1.5 w-full rounded-full transition-colors ${i <= activeIdx ? "bg-brand" : "bg-border"
                    }`}
                />
                <span
                  className={`text-[10px] uppercase tracking-wider ${i === activeIdx ? "text-brand font-semibold" : "text-muted-foreground"
                    }`}
                >
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </SheetHeader>

        {/* ============== STEP: METHOD ============== */}
        {step === "method" && (
          <div className="flex-1 overflow-y-auto px-6 py-6 space-y-3">
            <p className="text-sm text-muted-foreground">Pilih metode pemesanan</p>

            <button
              onClick={() => {
                setMethod("pickup");
                setStep("cart");
              }}
              className="w-full text-left p-5 rounded-2xl border-2 border-border hover:border-brand hover:bg-brand/5 transition-all group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand/10 grid place-items-center text-brand group-hover:bg-brand group-hover:text-brand-foreground transition-colors">
                  <Store className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-base text-foreground">Ambil di Outlet</h3>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Pesan & ambil langsung di outlet pilihan Anda
                  </p>
                </div>
              </div>
            </button>

            <button
              onClick={() => setMethod("gofood")}
              className={`w-full text-left p-5 rounded-2xl border-2 transition-all group ${method === "gofood"
                ? "border-brand bg-brand/5"
                : "border-border hover:border-brand hover:bg-brand/5"
                }`}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 grid place-items-center text-emerald-600">
                  <ExternalLink className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-base text-foreground">Pesan via GoFood</h3>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Diantar ke lokasi Anda lewat GoFood
                  </p>
                </div>
              </div>
            </button>

            {method === "gofood" && (
              <div className="mt-4 p-5 rounded-2xl border border-border bg-muted/30 space-y-4">
                <div>
                  <Label className="text-xs uppercase tracking-wider text-muted-foreground">
                    Pilih Outlet GoFood
                  </Label>
                  <Select value={gofoodOutlet} onValueChange={setGofoodOutlet}>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="-- Pilih Outlet --" />
                    </SelectTrigger>
                    <SelectContent className="max-h-72">
                      <SelectGroup>
                        <SelectLabel>Jawa Timur</SelectLabel>
                        {checkoutOutlets
                          .filter((o) => o.region === "jatim" && o.gofood)
                          .map((o) => (
                            <SelectItem key={o.name} value={o.name}>
                              {o.name}
                            </SelectItem>
                          ))}
                      </SelectGroup>
                      <SelectGroup>
                        <SelectLabel>Jawa Tengah & DIY</SelectLabel>
                        {checkoutOutlets
                          .filter((o) => o.region === "jateng-diy" && o.gofood)
                          .map((o) => (
                            <SelectItem key={o.name} value={o.name}>
                              {o.name}
                            </SelectItem>
                          ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>

                {selectedGofood && (
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-foreground">{selectedGofood.name}</p>
                    <p className="text-xs text-muted-foreground">{selectedGofood.address}</p>
                    <a
                      href={selectedGofood.gofood}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full h-11 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm shadow-soft transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Buka GoFood
                    </a>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* ============== STEP: CART ============== */}
        {step === "cart" && (
          <>
            {lines.length === 0 ? (
              <div className="flex-1 grid place-items-center px-6 text-center">
                <div>
                  <div className="w-20 h-20 mx-auto rounded-full bg-brand/5 grid place-items-center mb-4">
                    <ShoppingBag className="w-9 h-9 text-brand/40" />
                  </div>
                  <p className="text-muted-foreground">Keranjang masih kosong.</p>
                </div>
              </div>
            ) : (
              <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
                {lines.map((l) => (
                  <div
                    key={l.item.id}
                    className="flex gap-3 pb-4 border-b border-border/60 last:border-0"
                  >
                    <img
                      src={l.item.image}
                      alt={l.item.name[lang]}
                      className="w-20 h-20 rounded-lg object-cover bg-muted flex-shrink-0"
                      loading="lazy"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-sm text-foreground truncate">
                        {l.item.name[lang]}
                      </h4>
                      <p className="text-brand font-bold text-sm mt-0.5">
                        {formatRp(l.item.price)}
                      </p>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center gap-1 border border-border rounded-full">
                          <button
                            onClick={() => setQty(l.item.id, l.qty - 1)}
                            className="w-7 h-7 grid place-items-center hover:text-brand"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="w-7 text-center text-sm font-semibold">{l.qty}</span>
                          <button
                            onClick={() => setQty(l.item.id, l.qty + 1)}
                            className="w-7 h-7 grid place-items-center hover:text-brand"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <span className="text-xs font-semibold text-muted-foreground">
                          Subtotal: {formatRp(l.item.price * l.qty)}
                        </span>
                        <button
                          onClick={() => remove(l.item.id)}
                          className="text-muted-foreground hover:text-destructive p-1"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="border-t border-border px-6 py-5 bg-brand-cream/30 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm uppercase tracking-wider text-muted-foreground">Total</span>
                <span className="font-display text-2xl font-bold text-brand">{formatRp(total)}</span>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  onClick={() => setStep("method")}
                  className="h-12 rounded-full px-4"
                >
                  <ArrowLeft className="w-4 h-4" />
                </Button>
                <Button
                  disabled={lines.length === 0}
                  onClick={() => setStep("form")}
                  className="flex-1 bg-brand hover:bg-brand/90 text-brand-foreground h-12 rounded-full text-base font-semibold shadow-soft"
                >
                  Lanjut
                </Button>
              </div>
            </div>
          </>
        )}

        {/* ============== STEP: FORM ============== */}
        {step === "form" && (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-5 space-y-4">
              <div>
                <Label htmlFor="name">Nama Pemesan *</Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Nama lengkap"
                  className="mt-1.5"
                  maxLength={80}
                />
              </div>

              <div>
                <Label>Pilih Outlet *</Label>
                <Select value={outletName} onValueChange={setOutletName}>
                  <SelectTrigger className="mt-1.5">
                    <SelectValue placeholder="-- Pilih Outlet --" />
                  </SelectTrigger>
                  <SelectContent className="max-h-72">
                    <SelectGroup>
                      <SelectLabel>Jawa Timur</SelectLabel>
                      {checkoutOutlets
                        .filter((o) => o.region === "jatim")
                        .map((o) => (
                          <SelectItem key={o.name} value={o.name}>
                            {o.name}
                          </SelectItem>
                        ))}
                    </SelectGroup>
                    <SelectGroup>
                      <SelectLabel>Jawa Tengah & DIY</SelectLabel>
                      {checkoutOutlets
                        .filter((o) => o.region === "jateng-diy")
                        .map((o) => (
                          <SelectItem key={o.name} value={o.name}>
                            {o.name}
                          </SelectItem>
                        ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
                {selectedOutlet && (
                  <p className="mt-2 text-xs text-muted-foreground italic">
                    📍 {selectedOutlet.address}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="note">Catatan (opsional)</Label>
                <Textarea
                  id="note"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="Catatan untuk pesanan..."
                  className="mt-1.5"
                  maxLength={300}
                  rows={3}
                />
              </div>

              <div>
                <Label>Metode Pembayaran *</Label>
                <div className="mt-2 grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setPay("cod")}
                    className={`p-3 rounded-xl border-2 text-sm font-semibold transition ${pay === "cod"
                      ? "border-brand bg-brand/5 text-brand"
                      : "border-border hover:border-brand/50"
                      }`}
                  >
                    Cash (COD)
                  </button>
                  <button
                    type="button"
                    onClick={() => setPay("qris")}
                    className={`p-3 rounded-xl border-2 text-sm font-semibold transition ${pay === "qris"
                      ? "border-brand bg-brand/5 text-brand"
                      : "border-border hover:border-brand/50"
                      }`}
                  >
                    QRIS
                  </button>
                </div>
              </div>
            </div>

            <div className="border-t border-border px-6 py-5 bg-brand-cream/30 flex gap-2">
              <Button
                variant="outline"
                onClick={() => setStep("cart")}
                className="h-12 rounded-full px-4"
              >
                <ArrowLeft className="w-4 h-4" />
              </Button>
              <Button
                onClick={goPayment}
                className="flex-1 bg-brand hover:bg-brand/90 text-brand-foreground h-12 rounded-full text-base font-semibold shadow-soft"
              >
                Lanjut ke Pembayaran
              </Button>
            </div>
          </>
        )}

        {/* ============== STEP: PAYMENT ============== */}
        {step === "payment" && (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-5 space-y-4">
              <div className="flex items-center justify-between p-4 rounded-xl bg-brand-cream/40 border border-border">
                <span className="text-sm text-muted-foreground">Total Pembayaran</span>
                <span className="font-display text-xl font-bold text-brand">
                  {formatRp(total)}
                </span>
              </div>

              {pay === "cod" ? (
                <div className="text-center py-8 space-y-3">
                  <div className="w-16 h-16 mx-auto rounded-full bg-brand/10 grid place-items-center">
                    <Store className="w-8 h-8 text-brand" />
                  </div>
                  <h3 className="font-semibold text-lg">Bayar di Outlet</h3>
                  <p className="text-sm text-muted-foreground max-w-xs mx-auto">
                    Datang ke outlet, sebutkan Order ID, dan lakukan pembayaran tunai saat
                    pengambilan pesanan.
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="space-y-4 text-center">
                    <h3 className="font-semibold text-lg">QRIS (di Outlet)</h3>

                    <p className="text-sm text-muted-foreground">
                      Bayar di kasir dengan salah satu cara:
                    </p>

                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Scan QRIS kasir</li>
                      <li>• Tunjukkan QRIS Anda untuk discan kasir</li>
                    </ul>
                  </div>

                  <Button
                    type="button"
                    variant="outline"
                    onClick={copyTotal}
                    className="w-full rounded-full h-11"
                  >
                    {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    Salin Nominal ({formatRp(total)})
                  </Button>
                </div>
              )}
            </div>

            {/* FOOTER BUTTON */}
            <div className="border-t border-border px-6 py-5 bg-brand-cream/30 flex gap-2">
              <Button
                variant="outline"
                onClick={() => setStep("form")}
                className="h-12 rounded-full px-4"
              >
                <ArrowLeft className="w-4 h-4" />
              </Button>

              <Button
                onClick={confirmPayment}
                className="flex-1 bg-brand hover:bg-brand/90 text-brand-foreground h-12 rounded-full text-base font-semibold shadow-soft"
              >
                {pay === "cod" ? "Konfirmasi Pesanan" : "Saya Sudah Bayar"}
              </Button>
            </div>
          </>
        )}

        {/* ============== STEP: SUCCESS ============== */}
        {step === "success" && (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-5">
              <div className="text-center space-y-2">
                <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 grid place-items-center">
                  <CheckCircle2 className="w-9 h-9 text-emerald-600" />
                </div>
                <h3 className="font-display text-2xl font-bold text-brand">Pesanan Diterima!</h3>
                <p className="text-sm text-muted-foreground">
                  Terima kasih, {name}. Mohon kirim detail pesanan ke WhatsApp kami.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-muted/30 p-4 space-y-2 text-sm">
                <Row k="Order ID" v={orderId} />
                <Row k="Outlet" v={outletName} />
                <Row k="Metode" v="Pickup" />
                <Row k="Pembayaran" v={pay === "cod" ? "Cash (COD)" : "QRIS"} />
                <Row k="Total" v={formatRp(total)} />
                <div className="pt-2 border-t border-border">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Status</p>
                  {pay === "cod" ? (
                    <p className="text-sm font-medium text-emerald-700">👉 Bayar di outlet</p>
                  ) : (
                    <>
                      <p className="text-sm font-medium text-amber-700">
                        👉 Menunggu verifikasi pembayaran
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Kirim bukti pembayaran via WhatsApp.
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>

            <div className="border-t border-border px-6 py-5 bg-brand-cream/30">
              <Button
                onClick={sendToWhatsApp}
                className="w-full bg-brand hover:bg-brand/90 text-brand-foreground h-12 rounded-full text-base font-semibold shadow-soft"
              >
                Kirim Detail ke WhatsApp
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

const Row = ({ k, v }: { k: string; v: string }) => (
  <div className="flex items-start justify-between gap-3">
    <span className="text-xs uppercase tracking-wider text-muted-foreground shrink-0">{k}</span>
    <span className="text-sm font-medium text-foreground text-right break-all">{v}</span>
  </div>
);


