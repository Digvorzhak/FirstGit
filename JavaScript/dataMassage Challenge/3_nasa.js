/*
  https://data.nasa.gov/resource/gh4g-9sfh.json
  The data returned by this end point is a collection of meteorites that have fallen on Earth. The data includes information about the meteorites such as their name, mass, year of fall, location of fall, and classification. The data structure contains an array of objects, where each object represents a meteorite. Each object has properties such as name, mass, year, location, classification and other related information .
*/

const data = [
  {
    name: "Aachen",
    id: "1",
    nametype: "Valid",
    recclass: "L5",
    mass: "21",
    fall: "Fell",
    year: "1880-01-01T00:00:00.000",
    reclat: "50.775000",
    reclong: "6.083330",
    geolocation: {
      latitude: "50.775",
      longitude: "6.08333"
    }
  },
  {
    name: "Aarhus",
    id: "2",
    nametype: "Valid",
    recclass: "H6",
    mass: "720",
    fall: "Fell",
    year: "1951-01-01T00:00:00.000",
    reclat: "56.183330",
    reclong: "10.233330",
    geolocation: {
      latitude: "56.18333",
      longitude: "10.23333"
    }
  },
  {
    name: "Abee",
    id: "6",
    nametype: "Valid",
    recclass: "EH4",
    mass: "107000",
    fall: "Fell",
    year: "1952-01-01T00:00:00.000",
    reclat: "54.216670",
    reclong: "-113.000000",
    geolocation: {
      latitude: "54.21667",
      longitude: "-113.0"
    }
  },
  {
    name: "Acapulco",
    id: "10",
    nametype: "Valid",
    recclass: "Acapulcoite",
    mass: "1914",
    fall: "Fell",
    year: "1976-01-01T00:00:00.000",
    reclat: "16.883330",
    reclong: "-99.900000",
    geolocation: {
      latitude: "16.88333",
      longitude: "-99.9"
    }
  },
  {
    name: "Achiras",
    id: "370",
    nametype: "Valid",
    recclass: "L6",
    mass: "780",
    fall: "Fell",
    year: "1902-01-01T00:00:00.000",
    reclat: "-33.166670",
    reclong: "-64.950000",
    geolocation: {
      latitude: "-33.16667",
      longitude: "-64.95"
    }
  },
  {
    name: "Adhi Kot",
    id: "379",
    nametype: "Valid",
    recclass: "EH4",
    mass: "4239",
    fall: "Fell",
    year: "1919-01-01T00:00:00.000",
    reclat: "32.100000",
    reclong: "71.800000",
    geolocation: {
      latitude: "32.1",
      longitude: "71.8"
    }
  },
  {
    name: "Adzhi-Bogdo (stone)",
    id: "390",
    nametype: "Valid",
    recclass: "LL3-6",
    mass: "910",
    fall: "Fell",
    year: "1949-01-01T00:00:00.000",
    reclat: "44.833330",
    reclong: "95.166670",
    geolocation: {
      latitude: "44.83333",
      longitude: "95.16667"
    }
  },
  {
    name: "Agen",
    id: "392",
    nametype: "Valid",
    recclass: "H5",
    mass: "30000",
    fall: "Fell",
    year: "1814-01-01T00:00:00.000",
    reclat: "44.216670",
    reclong: "0.616670",
    geolocation: {
      latitude: "44.21667",
      longitude: "0.61667"
    }
  },
  {
    name: "Aguada",
    id: "398",
    nametype: "Valid",
    recclass: "L6",
    mass: "1620",
    fall: "Fell",
    year: "1930-01-01T00:00:00.000",
    reclat: "-31.600000",
    reclong: "-65.233330",
    geolocation: {
      latitude: "-31.6",
      longitude: "-65.23333"
    }
  },
  {
    name: "Aguila Blanca",
    id: "417",
    nametype: "Valid",
    recclass: "L",
    mass: "1440",
    fall: "Fell",
    year: "1920-01-01T00:00:00.000",
    reclat: "-30.866670",
    reclong: "-64.550000",
    geolocation: {
      latitude: "-30.86667",
      longitude: "-64.55"
    }
  },
  {
    name: "Aioun el Atrouss",
    id: "423",
    nametype: "Valid",
    recclass: "Diogenite-pm",
    mass: "1000",
    fall: "Fell",
    year: "1974-01-01T00:00:00.000",
    reclat: "16.398060",
    reclong: "-9.570280",
    geolocation: {
      latitude: "16.39806",
      longitude: "-9.57028"
    }
  },
  {
    name: "Aïr",
    id: "424",
    nametype: "Valid",
    recclass: "L6",
    mass: "24000",
    fall: "Fell",
    year: "1925-01-01T00:00:00.000",
    reclat: "19.083330",
    reclong: "8.383330",
    geolocation: {
      latitude: "19.08333",
      longitude: "8.38333"
    }
  },
  {
    name: "Aire-sur-la-Lys",
    id: "425",
    nametype: "Valid",
    recclass: "Unknown",
    fall: "Fell",
    year: "1769-01-01T00:00:00.000",
    reclat: "50.666670",
    reclong: "2.333330",
    geolocation: {
      latitude: "50.66667",
      longitude: "2.33333"
    }
  },
  {
    name: "Akaba",
    id: "426",
    nametype: "Valid",
    recclass: "L6",
    mass: "779",
    fall: "Fell",
    year: "1949-01-01T00:00:00.000",
    reclat: "29.516670",
    reclong: "35.050000",
    geolocation: {
      latitude: "29.51667",
      longitude: "35.05"
    }
  },
  {
    name: "Akbarpur",
    id: "427",
    nametype: "Valid",
    recclass: "H4",
    mass: "1800",
    fall: "Fell",
    year: "1838-01-01T00:00:00.000",
    reclat: "29.716670",
    reclong: "77.950000",
    geolocation: {
      latitude: "29.71667",
      longitude: "77.95"
    }
  },
  {
    name: "Akwanga",
    id: "432",
    nametype: "Valid",
    recclass: "H",
    mass: "3000",
    fall: "Fell",
    year: "1959-01-01T00:00:00.000",
    reclat: "8.916670",
    reclong: "8.433330",
    geolocation: {
      latitude: "8.91667",
      longitude: "8.43333"
    }
  },
  {
    name: "Akyumak",
    id: "433",
    nametype: "Valid",
    recclass: "Iron, IVA",
    mass: "50000",
    fall: "Fell",
    year: "1981-01-01T00:00:00.000",
    reclat: "39.916670",
    reclong: "42.816670",
    geolocation: {
      latitude: "39.91667",
      longitude: "42.81667"
    }
  },
  {
    name: "Al Rais",
    id: "446",
    nametype: "Valid",
    recclass: "CR2-an",
    mass: "160",
    fall: "Fell",
    year: "1957-01-01T00:00:00.000",
    reclat: "24.416670",
    reclong: "39.516670",
    geolocation: {
      latitude: "24.41667",
      longitude: "39.51667"
    }
  },
  {
    name: "Al Zarnkh",
    id: "447",
    nametype: "Valid",
    recclass: "LL5",
    mass: "700",
    fall: "Fell",
    year: "2001-01-01T00:00:00.000",
    reclat: "13.660330",
    reclong: "28.960000",
    geolocation: {
      latitude: "13.66033",
      longitude: "28.96"
    }
  },
  {
    name: "Alais",
    id: "448",
    nametype: "Valid",
    recclass: "CI1",
    mass: "6000",
    fall: "Fell",
    year: "1806-01-01T00:00:00.000",
    reclat: "44.116670",
    reclong: "4.083330",
    geolocation: {
      latitude: "44.11667",
      longitude: "4.08333"
    }
  },
  {
    name: "Albareto",
    id: "453",
    nametype: "Valid",
    recclass: "L/LL4",
    mass: "2000",
    fall: "Fell",
    year: "1766-01-01T00:00:00.000",
    reclat: "44.650000",
    reclong: "11.016670",
    geolocation: {
      latitude: "44.65",
      longitude: "11.01667"
    }
  },
  {
    name: "Alberta",
    id: "454",
    nametype: "Valid",
    recclass: "L",
    mass: "625",
    fall: "Fell",
    year: "1949-01-01T00:00:00.000",
    reclat: "2.000000",
    reclong: "22.666670",
    geolocation: {
      latitude: "2.0",
      longitude: "22.66667"
    }
  },
  {
    name: "Alby sur Chéran",
    id: "458",
    nametype: "Valid",
    recclass: "Eucrite-mmict",
    mass: "252",
    fall: "Fell",
    year: "2002-01-01T00:00:00.000",
    reclat: "45.821330",
    reclong: "6.015330",
    geolocation: {
      latitude: "45.82133",
      longitude: "6.01533"
    }
  },
  {
    name: "Aldsworth",
    id: "461",
    nametype: "Valid",
    recclass: "LL5",
    mass: "700",
    fall: "Fell",
    year: "1835-01-01T00:00:00.000",
    reclat: "51.783330",
    reclong: "-1.783330",
    geolocation: {
      latitude: "51.78333",
      longitude: "-1.78333"
    }
  },
  {
    name: "Aleppo",
    id: "462",
    nametype: "Valid",
    recclass: "L6",
    mass: "3200",
    fall: "Fell",
    year: "1873-01-01T00:00:00.000",
    reclat: "36.233330",
    reclong: "37.133330",
    geolocation: {
      latitude: "36.23333",
      longitude: "37.13333"
    }
  },
  {
    name: "Alessandria",
    id: "463",
    nametype: "Valid",
    recclass: "H5",
    mass: "908",
    fall: "Fell",
    year: "1860-01-01T00:00:00.000",
    reclat: "44.883330",
    reclong: "8.750000",
    geolocation: {
      latitude: "44.88333",
      longitude: "8.75"
    }
  },
  {
    name: "Alexandrovsky",
    id: "465",
    nametype: "Valid",
    recclass: "H4",
    mass: "9251",
    fall: "Fell",
    year: "1900-01-01T00:00:00.000",
    reclat: "50.950000",
    reclong: "31.816670",
    geolocation: {
      latitude: "50.95",
      longitude: "31.81667"
    }
  },
  {
    name: "Alfianello",
    id: "466",
    nametype: "Valid",
    recclass: "L6",
    mass: "228000",
    fall: "Fell",
    year: "1883-01-01T00:00:00.000",
    reclat: "45.266670",
    reclong: "10.150000",
    geolocation: {
      latitude: "45.26667",
      longitude: "10.15"
    }
  },
  {
    name: "Bali",
    id: "4928",
    nametype: "Valid",
    recclass: "CV3",
    mass: "1000",
    fall: "Fell",
    year: "1907-01-01T00:00:00.000",
    reclat: "5.383330",
    reclong: "16.383330",
    geolocation: {
      latitude: "5.38333",
      longitude: "16.38333"
    }
  },
  {
    name: "Ban Rong Du",
    id: "4934",
    nametype: "Valid",
    recclass: "Iron, ungrouped",
    mass: "16700",
    fall: "Fell",
    year: "1993-01-01T00:00:00.000",
    reclat: "16.666670",
    reclong: "101.183330",
    geolocation: {
      latitude: "16.66667",
      longitude: "101.18333"
    }
  },
  {
    name: "Bandong",
    id: "4935",
    nametype: "Valid",
    recclass: "LL6",
    mass: "11500",
    fall: "Fell",
    year: "1871-01-01T00:00:00.000",
    reclat: "-6.916670",
    reclong: "107.600000",
    geolocation: {
      latitude: "-6.91667",
      longitude: "107.6"
    }
  },
  {
    name: "Bansur",
    id: "4936",
    nametype: "Valid",
    recclass: "L6",
    mass: "15000",
    fall: "Fell",
    year: "1892-01-01T00:00:00.000",
    reclat: "27.700000",
    reclong: "76.333330",
    geolocation: {
      latitude: "27.7",
      longitude: "76.33333"
    }
  },
  {
    name: "Banswal",
    id: "4937",
    nametype: "Valid",
    recclass: "L5",
    mass: "14",
    fall: "Fell",
    year: "1913-01-01T00:00:00.000",
    reclat: "30.400000",
    reclong: "78.200000",
    geolocation: {
      latitude: "30.4",
      longitude: "78.2"
    }
  },
  {
    name: "Banten",
    id: "4938",
    nametype: "Valid",
    recclass: "CM2",
    mass: "629",
    fall: "Fell",
    year: "1933-01-01T00:00:00.000",
    reclat: "-6.333330",
    reclong: "106.000000",
    geolocation: {
      latitude: "-6.33333",
      longitude: "106.0"
    }
  },
  {
    name: "Barbotan",
    id: "4942",
    nametype: "Valid",
    recclass: "H5",
    mass: "6400",
    fall: "Fell",
    year: "1790-01-01T00:00:00.000",
    reclat: "43.950000",
    reclong: "-0.050000",
    geolocation: {
      latitude: "43.95",
      longitude: "-0.05"
    }
  },
  {
    name: "Barcelona (stone)",
    id: "4944",
    nametype: "Valid",
    recclass: "OC",
    fall: "Fell",
    year: "1704-01-01T00:00:00.000",
    reclat: "41.366670",
    reclong: "2.166670",
    geolocation: {
      latitude: "41.36667",
      longitude: "2.16667"
    }
  },
  {
    name: "Barea",
    id: "4946",
    nametype: "Valid",
    recclass: "Mesosiderite-A1",
    mass: "3200",
    fall: "Fell",
    year: "1842-01-01T00:00:00.000",
    reclat: "42.383330",
    reclong: "-2.500000",
    geolocation: {
      latitude: "42.38333",
      longitude: "-2.5"
    }
  },
  {
    name: "Barnaul",
    id: "4947",
    nametype: "Valid",
    recclass: "H5",
    mass: "23.2",
    fall: "Fell",
    year: "1904-01-01T00:00:00.000",
    reclat: "52.733330",
    reclong: "84.083330",
    geolocation: {
      latitude: "52.73333",
      longitude: "84.08333"
    }
  },
  {
    name: "Barntrup",
    id: "4948",
    nametype: "Valid",
    recclass: "LL4",
    mass: "17",
    fall: "Fell",
    year: "1886-01-01T00:00:00.000",
    reclat: "52.000000",
    reclong: "9.100000",
    geolocation: {
      latitude: "52.0",
      longitude: "9.1"
    }
  },
  {
    name: "Baroti",
    id: "4949",
    nametype: "Valid",
    recclass: "L6",
    mass: "4500",
    fall: "Fell",
    year: "1910-01-01T00:00:00.000",
    reclat: "31.616670",
    reclong: "76.800000",
    geolocation: {
      latitude: "31.61667",
      longitude: "76.8"
    }
  },
  {
    name: "Barwell",
    id: "4954",
    nametype: "Valid",
    recclass: "L5",
    mass: "44000",
    fall: "Fell",
    year: "1965-01-01T00:00:00.000",
    reclat: "52.565280",
    reclong: "-1.339720",
    geolocation: {
      latitude: "52.56528",
      longitude: "-1.33972"
    }
  },
  {
    name: "Bassikounou",
    id: "44876",
    nametype: "Valid",
    recclass: "H5",
    mass: "29560",
    fall: "Fell",
    year: "2006-01-01T00:00:00.000",
    reclat: "15.783330",
    reclong: "-5.900000",
    geolocation: {
      latitude: "15.78333",
      longitude: "-5.9"
    }
  },
  {
    name: "Baszkówka",
    id: "4957",
    nametype: "Valid",
    recclass: "L5",
    mass: "15500",
    fall: "Fell",
    year: "1994-01-01T00:00:00.000",
    reclat: "52.033330",
    reclong: "20.935830",
    geolocation: {
      latitude: "52.03333",
      longitude: "20.93583"
    }
  },
  {
    name: "Blansko",
    id: "5072",
    nametype: "Valid",
    recclass: "H6",
    mass: "470",
    fall: "Fell",
    year: "1833-01-01T00:00:00.000",
    reclat: "49.366670",
    reclong: "16.633330",
    geolocation: {
      latitude: "49.36667",
      longitude: "16.63333"
    }
  },
  {
    name: "Bo Xian",
    id: "5090",
    nametype: "Valid",
    recclass: "LL3.9",
    mass: "7500",
    fall: "Fell",
    year: "1977-01-01T00:00:00.000",
    reclat: "33.833330",
    reclong: "115.833330",
    geolocation: {
      latitude: "33.83333",
      longitude: "115.83333"
    }
  },
  {
    name: "Bocas",
    id: "5093",
    nametype: "Valid",
    recclass: "L6",
    mass: "56",
    fall: "Fell",
    year: "1804-01-01T00:00:00.000",
    reclat: "23.000000",
    reclong: "-102.000000",
    geolocation: {
      latitude: "23.0",
      longitude: "-102.0"
    }
  },
  {
    name: "Bogou",
    id: "5097",
    nametype: "Valid",
    recclass: "Iron, IAB-MG",
    mass: "8800",
    fall: "Fell",
    year: "1962-01-01T00:00:00.000",
    reclat: "12.500000",
    reclong: "0.700000",
    geolocation: {
      latitude: "12.5",
      longitude: "0.7"
    }
  },
  {
    name: "Boguslavka",
    id: "5098",
    nametype: "Valid",
    recclass: "Iron, IIAB",
    mass: "256000",
    fall: "Fell",
    year: "1916-01-01T00:00:00.000",
    reclat: "44.550000",
    reclong: "131.633330",
    geolocation: {
      latitude: "44.55",
      longitude: "131.63333"
    }
  },
  {
    name: "Borgo San Donino",
    id: "5110",
    nametype: "Valid",
    recclass: "LL6",
    mass: "1676",
    fall: "Fell",
    year: "1808-01-01T00:00:00.000",
    reclat: "44.866670",
    reclong: "10.050000",
    geolocation: {
      latitude: "44.86667",
      longitude: "10.05"
    }
  },
  {
    name: "Bori",
    id: "5111",
    nametype: "Valid",
    recclass: "L6",
    mass: "8600",
    fall: "Fell",
    year: "1894-01-01T00:00:00.000",
    reclat: "21.950000",
    reclong: "78.033330",
    geolocation: {
      latitude: "21.95",
      longitude: "78.03333"
    }
  },
  {
    name: "Boriskino",
    id: "5112",
    nametype: "Valid",
    recclass: "CM2",
    mass: "1342",
    fall: "Fell",
    year: "1930-01-01T00:00:00.000",
    reclat: "54.233330",
    reclong: "52.483330",
    geolocation: {
      latitude: "54.23333",
      longitude: "52.48333"
    }
  },
  {
    name: "Borkut",
    id: "5113",
    nametype: "Valid",
    recclass: "L5",
    mass: "7000",
    fall: "Fell",
    year: "1852-01-01T00:00:00.000",
    reclat: "48.150000",
    reclong: "24.283330",
    geolocation: {
      latitude: "48.15",
      longitude: "24.28333"
    }
  },
  {
    name: "Borodino",
    id: "5114",
    nametype: "Valid",
    recclass: "H5",
    mass: "500",
    fall: "Fell",
    year: "1812-01-01T00:00:00.000",
    reclat: "55.466670",
    reclong: "35.866670",
    geolocation: {
      latitude: "55.46667",
      longitude: "35.86667"
    }
  },
  {
    name: "Botschetschki",
    id: "5117",
    nametype: "Valid",
    recclass: "L4",
    mass: "614",
    fall: "Fell",
    year: "1823-01-01T00:00:00.000",
    reclat: "51.333330",
    reclong: "33.883330",
    geolocation: {
      latitude: "51.33333",
      longitude: "33.88333"
    }
  },
  {
    name: "Boumdeid (2003)",
    id: "57168",
    nametype: "Valid",
    recclass: "L6",
    mass: "190",
    fall: "Fell",
    year: "2003-01-01T00:00:00.000",
    reclat: "17.710670",
    reclong: "-11.371500",
    geolocation: {
      latitude: "17.71067",
      longitude: "-11.3715"
    }
  },
  {
    name: "Boumdeid (2011)",
    id: "57167",
    nametype: "Valid",
    recclass: "L6",
    mass: "3599",
    fall: "Fell",
    year: "2011-01-01T00:00:00.000",
    reclat: "17.174930",
    reclong: "-11.341330",
    geolocation: {
      latitude: "17.17493",
      longitude: "-11.34133"
    }
  },
  {
    name: "Bovedy",
    id: "5121",
    nametype: "Valid",
    recclass: "L3",
    mass: "5460",
    fall: "Fell",
    year: "1969-01-01T00:00:00.000",
    reclat: "54.566670",
    reclong: "-6.333330",
    geolocation: {
      latitude: "54.56667",
      longitude: "-6.33333"
    }
  },
  {
    name: "Chetrinahatti",
    id: "5344",
    nametype: "Valid",
    recclass: "Stone-uncl",
    mass: "72",
    fall: "Fell",
    year: "1880-01-01T00:00:00.000",
    reclat: "14.500000",
    reclong: "76.500000",
    geolocation: {
      latitude: "14.5",
      longitude: "76.5"
    }
  },
  {
    name: "Chiang Khan",
    id: "5345",
    nametype: "Valid",
    recclass: "H6",
    mass: "367",
    fall: "Fell",
    year: "1981-01-01T00:00:00.000",
    reclat: "17.900000",
    reclong: "101.633330",
    geolocation: {
      latitude: "17.9",
      longitude: "101.63333"
    }
  },
  {
    name: "Chisenga",
    id: "5355",
    nametype: "Valid",
    recclass: "Iron, IIIAB",
    mass: "3920",
    fall: "Fell",
    year: "1988-01-01T00:00:00.000",
    reclat: "-10.059440",
    reclong: "33.395000",
    geolocation: {
      latitude: "-10.05944",
      longitude: "33.395"
    }
  },
  {
    name: "Chitado",
    id: "5356",
    nametype: "Valid",
    recclass: "L6",
    fall: "Fell",
    year: "1966-01-01T00:00:00.000",
    reclat: "-17.350000",
    reclong: "13.966670",
    geolocation: {
      latitude: "-17.35",
      longitude: "13.96667"
    }
  },
  {
    name: "Chitenay",
    id: "5357",
    nametype: "Valid",
    recclass: "L6",
    mass: "4000",
    fall: "Fell",
    year: "1978-01-01T00:00:00.000",
    reclat: "47.470830",
    reclong: "0.976670",
    geolocation: {
      latitude: "47.47083",
      longitude: "0.97667"
    }
  },
  {
    name: "Cilimus",
    id: "5364",
    nametype: "Valid",
    recclass: "L5",
    mass: "1600",
    fall: "Fell",
    year: "1979-01-01T00:00:00.000",
    reclat: "-6.950000",
    reclong: "108.100000",
    geolocation: {
      latitude: "-6.95",
      longitude: "108.1"
    }
  },
  {
    name: "Claxton",
    id: "5374",
    nametype: "Valid",
    recclass: "L6",
    mass: "1455",
    fall: "Fell",
    year: "1984-01-01T00:00:00.000",
    reclat: "32.102500",
    reclong: "-81.872780",
    geolocation: {
      latitude: "32.1025",
      longitude: "-81.87278"
    },
  },
  {
    name: "Clohars",
    id: "5383",
    nametype: "Valid",
    recclass: "L4",
    mass: "48.6",
    fall: "Fell",
    year: "1822-01-01T00:00:00.000"
  },
];

// Question 1: Extract an array the names of all meteorites that have a mass greater than 10,000 kg and have fallen in the 21st century (2000-2099).

// Question 2: Extract an array the top 10 meteorites by mass that have fallen in the United States, sorted in descending order.

// Question 3: Create an object that groups the meteorites by their class and calculates the total mass of each class.

// Question 4: Create a new object that groups meteorites by their class, and within each class, groups them by their year found. The object should have the class as the key and the value should be another object with the year as the key and an array of meteorites as the value.

