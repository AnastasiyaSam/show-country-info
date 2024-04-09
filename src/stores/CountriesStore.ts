import { defineStore } from 'pinia';
import axios from 'axios';
import { Country } from '../types/types';

export const useCountriesStore = defineStore('countriesStore', {
  state: () => ({
    modifiedCountryArray: {} as { [key: string]: Country },
    countryArray: [] as Country[]
  }),
  actions: {
    async getAllCountries() {
      try {
        const { data: countries } = await axios.get<Country[]>('https://restcountries.com/v3.1/all?fields=name,flags,capital,currencies,timezones,languages');
        this.countryArray = countries;

        countries.forEach(country => {
          this.modifiedCountryArray[country.name.common] = country;
        });
      } catch (error) {
        console.error('Error fetching countries data:', error);
      }
    }
  }
});

