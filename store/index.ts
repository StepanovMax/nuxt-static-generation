import { defineStore } from 'pinia';
import {
  eLangs,
  eColorThemes,
} from '@/ts/index.ts';

export const useMainStore = defineStore('main', {
  state: () => ({
    lang: eLangs.rus,
    colorTheme: eColorThemes.dark,
  }),
  getters: {
    // changeLang: (state) => state.count * 2,
    // changeColorTheme: (state) => state.count * 2,
  },
  actions: {
    setLang(data) {
      console.log('> setLang', data);
      this.lang = data;
    },
    setColorTheme(data) {
      this.colorTheme = data;
    },
  },
});