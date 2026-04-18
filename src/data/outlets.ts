export interface Outlet {
  id: string;
  name: string;
  city: string;
  address: string;
  rating: number | string;
  lat: number;
  lng: number;
  googleMapsLink: string;
  phone?: string;
  hours?: string;
}

export interface City {
  name: string;
  outletCount: number;
  lat: number;
  lng: number;
}

export const outlets: Outlet[] = [
  // MADIUN
  {
    id: "madiun-1",
    name: "Nasgor 69 Plaza Madiun ",
    city: "Madiun",
    address: "Jl. Pahlawan No. 38-40, Madiun",
    rating: "3+",
    lat: -7.6298,
    lng: 111.5230,
    googleMapsLink: "https://share.google/uhL8NYltFrGUtkewO",
    phone: "+62 899-5899-449",
    hours: "10:00 - 22:00",
  },

  // SEMARANG
  {
    id: "semarang-1",
    name: "Nasgor 69 Semarang 1",
    city: "Semarang",
    address: "Jl. Hassanudin No. 8, Semarang",
    rating: 4.6,
    lat: -6.9666,
    lng: 110.4196,
    googleMapsLink: "#",
    phone: "+62 899-5899-449",
    hours: "10:00 - 22:00",
  },
  {
    id: "semarang-2",
    name: "Nasgor 69 Semarang 2",
    city: "Semarang",
    address: "Jl. Pandanaran No. 52, Semarang",
    rating: "3+",
    lat: -6.9820,
    lng: 110.4100,
    googleMapsLink: "#",
    hours: "10:00 - 22:00",
  },
  {
    id: "semarang-3",
    name: "Nasgor 69 Semarang 3",
    city: "Semarang",
    address: "Jl. Pemuda No. 150, Semarang",
    rating: "3+",
    lat: -6.9732,
    lng: 110.4249,
    googleMapsLink: "#",
    hours: "10:00 - 22:00",
  },

  // MALANG
  {
    id: "malang-1",
    name: "Nasgor 69 Malang 1",
    city: "Malang",
    address: "Kauman, Klojen, Malang City, East Java 65119",
    rating: "3+",
    lat: -7.9666,
    lng: 112.6326,
    googleMapsLink: "https://maps.app.goo.gl/Mso6465FCRMr4xGbA",
    phone: "+62 814-9903-1397",
    hours: "10:00 - 22:00",
  },
  {
    id: "malang-2",
    name: "Nasgor 69 Malang 2",
    city: "Malang",
    address: "Jl. Veteran UF-07,LS01-01, Penanggungan, Kec. Klojen, Kota Malang, Jawa Timur 65145",
    rating: "3+",
    lat: -7.9450,
    lng: 112.6150,
    googleMapsLink: "https://share.google/CNxsIYIKI5xwadFBP",
    hours: "10:00 - 22:00",
  },

  // SIDOARJO
  {
    id: "sidoarjo-1",
    name: "Nasgor 69 Sidoarjo 3",
    city: "Sidoarjo",
    address: "Jl. Jati Raya No.1, Jati, Kec. Sidoarjo, Kabupaten Sidoarjo, Jawa Timur 61226",
    rating: "3+",
    lat: -7.4478,
    lng: 112.7183,
    googleMapsLink: "https://share.google/gIilMan5zR9yssIEU",
    hours: "10:00 - 22:00",
  },
  {
    id: "sidoarjo-2",
    name: "Nasgor 69 Sidoarjo 1",
    city: "Sidoarjo",
    address: "Jl. Raya Taman Tiara No.3, Nggrekmas, Pagerwojo, Kec. Buduran, Kabupaten Sidoarjo, Jawa Timur 61219",
    rating: "5",
    lat: -7.4350,
    lng: 112.7100,
    googleMapsLink: "https://share.google/aLObzSObr0K1XJFpQ",
    hours: "10:00 - 22:00",
  },
  {
    id: "sidoarjo-3",
    name: "Nasgor 69 Sidoarjo 4",
    city: "Sidoarjo",
    address: "Jl. Pahlawan No.1, Rw6, Sidokumpul, Kec. Sidoarjo, Kabupaten Sidoarjo, Jawa Timur 61212",
    rating: "3+",
    lat: -7.4550,
    lng: 112.7250,
    googleMapsLink: "https://share.google/mCV7DfmUcl5qJrCiS",
    hours: "10:00 - 22:00",
  },
  {
    id: "sidoarjo-4",
    name: "Nasgor 69 Sidoarjo 5",
    city: "Sidoarjo",
    address: "Jl. Raya Taman Tiara, Nggrekmas, Pagerwojo, Kec. Buduran, Kabupaten Sidoarjo, Jawa Timur 61219",
    rating: "3+",
    lat: -7.3567,
    lng: 112.7333,
    googleMapsLink: "https://share.google/qRES6eiDYCvSVb1N9",
    hours: "10:00 - 22:00",
  },
  {
    id: "sidoarjo-5",
    name: "Nasgor 69 Sidoarjo 6",
    city: "Sidoarjo",
    address: "Jl. Diponegoro No.1, Rw5, Sidokumpul, Kec. Sidoarjo, Kabupaten Sidoarjo, Jawa Timur 61212",
    rating: "3+",
    lat: -7.3900,
    lng: 112.7300,
    googleMapsLink: "https://share.google/bD0RhA4bdB2WhbLDt",
    hours: "10:00 - 22:00",
  },
  {
    id: "sidoarjo-6",
    name: "Nasgor 69 Sidoarjo 2",
    city: "Sidoarjo",
    address: "Jl. Kahuripan Raya No.65, Sumput, Jati, Kec. Sidoarjo, Kabupaten Sidoarjo, Jawa Timur 61226",
    rating: "4+",
    lat: -7.4100,
    lng: 112.5800,
    googleMapsLink: "https://share.google/DBky7KlVHaAnwRZ8U",
    hours: "10:00 - 22:00",
  },

  // MOJOKERTO
  {
    id: "mojokerto-1",
    name: "Nasgor 69 Mojokerto 1",
    city: "Mojokerto",
    address: "Jl. Benteng Pancasila No.9 Lt. 1, Mergelo, Balongsari, Kec. Magersari, Kota Mojokerto, Jawa Timur 61314",
    rating: "3+",
    lat: -7.4704,
    lng: 112.4342,
    googleMapsLink: "https://share.google/anjNOcHgwlUyYzfxP",
    hours: "10:00 - 22:00",
  },

  // GRESIK
  {
    id: "gresik-1",
    name: "Nasgor 69 Gresik 1",
    city: "Gresik",
    address: "Jl.Kembangan, Kebomas, Gresik Regency, East Java 61124\n",
    rating: "3+",
    lat: -7.1617,
    lng: 112.6500,
    googleMapsLink: "https://share.google/1FwnqFneIRRkB80ZK",
    hours: "10:00 - 22:00",
  },
  {
    id: "gresik-2",
    name: "Nasgor 69 Gresik 2",
    city: "Gresik",
    address: "Jl.Kembangan, Kebomas, Gresik Regency, East Java 61124\n",
    rating: "3+",
    lat: -7.1550,
    lng: 112.6550,
    googleMapsLink: "https://share.google/8HOMfCcegcxJmvdUC",
    hours: "10:00 - 22:00",
  },

  // YOGYAKARTA
  {
    id: "yogyakarta-1",
    name: "Nasgor 69 Yogyakarta 1",
    city: "Yogyakarta",
    address: "Jl. Penggung,Tridadi, Kec.Sleman ",
    rating: "3+",
    lat: -7.7928,
    lng: 110.3658,
    googleMapsLink: "https://share.google/rvUzN7xciZpVWVBlJ",
    hours: "10:00 - 23:00",
  },
  {
    id: "yogyakarta-2",
    name: "Nasgor 69 Yogyakarta 2",
    city: "Yogyakarta",
    address: "Jl. Malioboro, Sosromenduran, Kec. Danurejan, Kota Yogyakarta, Daerah Istimewa Yogyakarta",
    rating: "3+",
    lat: -7.7600,
    lng: 110.3850,
    googleMapsLink: "https://share.google/nO5bNHDb5dj1iOsCo",
    hours: "10:00 - 22:00",
  },
  {
    id: "yogyakarta-3",
    name: "Nasgor 69 Yogyakarta 3",
    city: "Yogyakarta",
    address: "Jl. Kaliwaru, Condongcatur, Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta",
    rating: "3+",
    lat: -7.7700,
    lng: 110.3950,
    googleMapsLink: "https://share.google/YdGbQTdZcrDIROmR3",
    hours: "10:00 - 22:00",
  },

  // SOLO
  {
    id: "solo-1",
    name: "Nasgor 69 Solo 1",
    city: "Solo",
    address: "Jl. Slamet Riyadi, Penumping, Kec Leweyan No. 200, Solo",
    rating: "4+",
    lat: -7.5700,
    lng: 110.8200,
    googleMapsLink: "https://share.google/uk8zCsOt2iBaBNfql",
    hours: "10:00 - 22:00",
  },
  {
    id: "solo-2",
    name: "Nasgor 69 Solo 3",
    city: "Solo",
    address: "Jl. Yosodipuro No.133 Lt.2 RFK 15, Mangkubumen, Kec. Banjarsari, Solo",
    rating: "3+",
    lat: -7.5550,
    lng: 110.8100,
    googleMapsLink: "https://share.google/VV8LNldBf83j6uHe8",
    hours: "10:00 - 22:00",
  },
  {
    id: "solo-3",
    name: "Nasgor 69 Solo 4",
    city: "Solo",
    address: "Jl. Brigjend Slamet Riyadi Solo Square Bengawan Solo Food Cort Lt. 3, Pajang, Laweyan, Pajang, Kec. Laweyan, Solo",
    rating: "3+",
    lat: -7.5600,
    lng: 110.8500,
    googleMapsLink: "https://share.google/mVHHPQ7DoPoSotmIz",
    hours: "10:00 - 22:00",
  },
  {
    id: "solo-2-2",
    name: "Nasgor 69 Solo 2",
    city: "Solo",
    address: "Jl. Slamet Riyadi No.1, Pajang, Kec. Laweyan, Solo",
    rating: "4+",
    lat: -7.5800,
    lng: 110.8150,
    googleMapsLink: "https://share.google/ZvA0koUPHJ6QtS97H",
    hours: "10:00 - 22:00",
  },

  // MAGELANG
  {
    id: "magelang-1",
    name: "Nasgor 69 Magelang 1",
    city: "Magelang",
    address: "Jl. Jenderal Bambang Sugeng, Mertoyudan, Magelang, Kedungdowo, Mertoyudan, Kec. Mertoyudan, Kabupaten Magelang, Jawa Tengah 56172",
    rating: "3+",
    lat: -7.4797,
    lng: 110.2177,
    googleMapsLink: "https://share.google/4jfClCCRjQmaIMD6W",
    hours: "10:00 - 22:00",
  },
];

export const cities: City[] = [
  { name: "Madiun", outletCount: 1, lat: -7.6298, lng: 111.5230 },
  { name: "Semarang", outletCount: 3, lat: -6.9666, lng: 110.4196 },
  { name: "Malang", outletCount: 2, lat: -7.9666, lng: 112.6326 },
  { name: "Sidoarjo", outletCount: 6, lat: -7.4478, lng: 112.7183 },
  { name: "Mojokerto", outletCount: 1, lat: -7.4704, lng: 112.4342 },
  { name: "Magelang", outletCount: 1, lat: -7.4797, lng: 110.2177 },
  { name: "Gresik", outletCount: 2, lat: -7.1617, lng: 112.6500 },
  { name: "Yogyakarta", outletCount: 3, lat: -7.7928, lng: 110.3658 },
  { name: "Solo", outletCount: 4, lat: -7.5700, lng: 110.8200 },
];
