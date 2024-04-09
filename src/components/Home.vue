<template>
  <div class="main-wrapper">
    <!-- Top -->
    <div class="top-container">
      <h1 class="text-4xl font-bold mb-8">Choose a country</h1>
      <form class="max-w-lg ma-auto">
        <label
          for="countries"
          class="block mb-2 text-lg font-medium text-gray-900"
          >Select an option</label
        >
        <select
          v-model="selectedCountry"
          id="countries"
          @change="getCountryInfoByName"
          class="select bg-neutral-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option disabled selected>Choose a country</option>
          <option
            v-for="(item, index) in countryArray"
            :value="item.name.common"
            :key="index"
          >
            {{ item.name.common }}
          </option>
        </select>
      </form>
    </div>

    <!-- Bottom -->
    <FlagAndInfo v-if="countryToDisplay" :country="countryToDisplay" />
    <!-- Typing cat -->
    <div v-else class="flex justify-center items-center pb-12">
      <img
        class="object-cover h-28 w-46"
        src="../assets/cat-typing.gif"
        alt="typing cat picture"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCountriesStore } from "../stores/CountriesStore";
import { ref, onMounted } from "vue";
import { Country } from "../types/types";
import FlagAndInfo from "./FlagAndInfo.vue";

const store = useCountriesStore();
const selectedCountry = ref<string>("");
const countryArray = ref<Country[]>([]);
const countryToDisplay = ref<Country | null>(null);

const getAllCountries = async () => {
  await store.getAllCountries();
  countryArray.value = store.countryArray.sort((a, b) =>
    a.name.common.localeCompare(b.name.common)
  );
};

const getCountryInfoByName = () => {
  if (selectedCountry.value) {
    countryToDisplay.value = store.modifiedCountryArray[selectedCountry.value];
  }
};

onMounted(getAllCountries);
</script>

<style scoped>
.main-wrapper {
  display: flex;
  flex-direction: column;
}

.top-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 38vh;
  align-items: center;
}

.select {
  max-width: 330px;
}
</style>
