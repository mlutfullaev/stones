export type ProjectT = { img: HTMLImageElement, name: string, link: string }
export type ProductT = {
  img: string,
  title: string,
  type: string,
}

export type BlogT = {
  title: string,
  uploadedFile: { id: string }[],
  id: number,
  link: "",
  createdAt: string
}

export type StoneT = {
  title: string,
  abrasion: string,
  uploadedFile: { id: number }[],
  categoryTitle: string,
  country: string,
  id: number,
  variants: { format: string, pricerub: string, priceusd: string, product: string }[],
  createdAt: string
}

const json = {
  "title": "Черный полированный гранит Абсолют Блэк | Granite Absolute Black",
  "country": "Индия",
  "radioactivityClass": "I (для внешних и внутренних отделочных работ)",
  "waterAbsorption": null,
  "mohsHardness": null,
  "density": "3.04 гр/куб.см.<br>\\nИстираемость: 0.42 гр/куб.см.",
  "abrasion": "0.42 гр/куб.см.",
  "otherNames": "Indian Black, Bengal Black, Hebei Black",
  "similarGranites": "Габбро Диабаз, Shanxi black, China black, Fengzhen black, Mongolia black, G771",
  "variants": [
    {
      "format": "305х305х10",
      "product": "Плитка",
      "priceusd": "59",
      "pricerub": "4932.9"
    }, {"format": "457х457х12", "product": "Плитка", "priceusd": "59", "pricerub": "4932.9"}, {
      "format": "600х300х15",
      "product": "Плитка",
      "priceusd": "59",
      "pricerub": "4932.9"
    }, {"format": "600х300х18/20", "product": "Плитка", "priceusd": "50", "pricerub": "4180.4"}, {
      "format": "600х600х20",
      "product": "Плитка",
      "priceusd": "69",
      "pricerub": "5768.9"
    }, {"format": "600х600х15", "product": "Плитка", "priceusd": "69", "pricerub": "5768.9"}, {
      "format": "600x300x30",
      "product": "Плитка",
      "priceusd": "79",
      "pricerub": "6605"
    }, {
      "format": "ПриблизительныеL*750*30",
      "product": "Полосы",
      "priceusd": "114",
      "pricerub": "9531.3"
    }, {
      "format": "Приблизительные2970х1950х20",
      "product": "Слэбы 20мм",
      "priceusd": "109",
      "pricerub": "9113.2"
    }, {
      "format": "Приблизительные2970х1950х30",
      "product": "Слэбы 30мм",
      "priceusd": "139",
      "pricerub": "11621.5"
    }, {
      "format": "Приблизительные2970х1950х70",
      "product": "Слэбы 70мм",
      "priceusd": "317",
      "pricerub": "26503.6"
    }, {"format": "Приблизительные2970х1950х80", "product": "Слэбы 80мм", "priceusd": "317", "pricerub": "26503.6"}],
  "categoryTitle": "Гранит"
}