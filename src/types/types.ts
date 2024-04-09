interface Flag {
  png: string
  svg: string
  alt: string
}

interface NativeName {
  official: string
  common: string
}

interface Name {
  common: string
  official: string
  nativeName: {
    [key: string]: NativeName
  }
}

interface Currency {
  name: string
  symbol: string
}

interface Language {
  [key: string]: string // Language code to language name mapping
}

export interface Country {
  flags: Flag
  name: Name
  currencies: {
    [key: string]: Currency // Currency code to Currency mapping
  }
  capital: string[]
  languages: Language
  timezones: string[]
}


export interface ModifiedCountry {
  [countryName: string]: Country
}
