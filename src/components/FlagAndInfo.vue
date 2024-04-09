<template>
    <div v-if="country" class="flag-info-container">
      <div class="flag-info-wrapper">
        <div>
          <p><b>Common names:</b> {{ commonNames }}</p>
          <p><b>Official names:</b> {{ officialNames }}</p>
          <p v-if="currencyName && currencySymbol"><b>Currencies:</b> {{ currencyName }} ({{ currencySymbol }})</p>
          <p v-for="capital in country.capital" :key="capital"><b>Capital:</b> {{ capital }}</p>
          <p><b>Timezones:</b> {{ formattedTimezones }}</p>
          <p>
            <b>Languages: </b>
            <span v-for="(language, code, index) in country.languages" :key="code">
              {{ language }} ({{ code }}){{ index !== Object.keys(country.languages).length - 1 ? ', ' : ' ' }}
            </span>
          </p>
        </div>
        <!-- Flag -->
        <img class="object-contain h-48 w-96" :src="country.flags.png" :alt="country.flags.alt" />
      </div>
    </div>
    <!-- Typing cat -->
    <div v-else class="flex justify-center items-center pb-12">
      <img class="object-cover h-28 w-46" src="../assets/cat-typing.gif" alt="typing cat picture" />
    </div>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue';
import { Country } from '../types/types';

const props = defineProps({
  country: {
    type: Object as () => Country,
    required: true
  }
});

const commonNames = computed(() => {
  if (!props.country) return '';
  const nativeNames = Object.values(props.country.name.nativeName);
  const commonName = props.country.name.common;
  return nativeNames.length ? `${commonName}, ${nativeNames.map(name => name.common).join(', ')}` : commonName;
});

const officialNames = computed(() => {
  if (!props.country) return '';
  const nativeNames = Object.values(props.country.name.nativeName);
  const officialName = props.country.name.official;
  return nativeNames.length ? `${officialName}, ${nativeNames.map(name => name.official).join(', ')}` : officialName;
});

const currencyName = computed(() => {
  return props.country ? Object.values(props.country.currencies)[0]?.name : '';
});

const currencySymbol = computed(() => {
  return props.country ? Object.values(props.country.currencies)[0]?.symbol : '';
});

const formattedTimezones = computed(() => {
  return props.country? props.country.timezones.join(', ') : '';
});
</script>

<style scoped>

.flag-info-container {
  display: flex;
  justify-content: center;
  margin-bottom: 5%;
}

.flag-info-wrapper {
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  gap: 50px;
  width: 100%;
  max-width: 900px;
}

.flag-info-wrapper div {
  max-width: 350px;
}

@media (max-width: 1199px) {
  .flag-info-wrapper {
    width: 70%;
    gap: 30px;
  }
}

@media (max-width: 944px) {
  .flag-info-wrapper {
    flex-direction: column;
    gap: 50px;
    align-items: center;
  }
}
</style>
