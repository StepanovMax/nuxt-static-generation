<script setup lang="ts">
import {useI18n} from "vue-i18n";

import {
  ref,
  watch,
  computed,
} from 'vue';

import { useMainStore } from '@/store/index.ts';

import {
  eLangs,
  eColorThemes,
} from '@/ts/index.ts';

import IconSun from '@/assets/icons/base/sm-sun.svg';
import IconMoon from '@/assets/icons/base/sm-moon.svg';
import IconLang from '@/assets/icons/base/sm-lang.svg';

import SMBaseButton from '@/components/base/SMBaseButton.vue';
import SMLogo from '@/components/middle/SMLogo.vue';
import SMList from '@/components/middle/SMList.vue';


const storeMain = useMainStore();

const { t, locale } = useI18n();

const menuArray = computed(() => {
  let array = [
    {
      id: 0,
      title: t('menu.home'),
      url: '/',
      active: true,
    },
    {
      id: 1,
      title: t('menu.services'),
      url: '/services',
      active: false,
    },
    {
      id: 2,
      title: t('menu.contacts'),
      url: '/contacts',
      active: false,
    },
    {
      id: 3,
      title: t('menu.storybook'),
      url: '/storybook',
      active: false,
    },
  ];

  return array;
});


/**
 * Changes theme between 'light' and 'dark'.
 * @returns {void}.
 */
const toggleDarkTheme = () => {
  let currentTheme = eColorThemes.dark;
  if (storeMain.colorTheme === eColorThemes.dark) {
    currentTheme = eColorThemes.light;
  } else {
    currentTheme = eColorThemes.dark;
  }
  storeMain.setColorTheme(currentTheme);
};


const toggleLanguage = () => {
  let result = eLangs.eng;
  if (storeMain.lang === eLangs.eng) {
    result = eLangs.rus;
  } else {
    result = eLangs.eng;
  }
  storeMain.setLang(result);
  locale.value = storeMain.lang;
};


const themeSwitcherTitle = computed(() => {
  let result = '';
  const darkTheme = 'Тёмная тема';
  const lightTheme = 'Светлая тема';
  if (storeMain.colorTheme === eColorThemes.dark) {
    result = lightTheme;
  } else {
    result = darkTheme;
  }
  return result;
});


const langTitle = computed(() => {
  let result = '';
  const rus = 'Русский';
  const eng = 'English';
  if (storeMain.lang === eLangs.eng) {
    result = rus;
  } else {
    result = eng;
  }
  return result;
});
</script>


<template>
  <header class="sm-header">
    <div class="sm-layout__container">
      <div class="sm-header__top">
        <div class="sm-header__top-left">
          <nuxt-link
            title="Перейти на главную"
            to="/"
          >
            <SMLogo class="sm-header__logo" />
          </nuxt-link>
        </div>
        <div class="sm-header__top-right">
          <div class="sm-header__top-right_top">
            <SMList
              class="sm-header__menu"
              :data="menuArray"
            />
          </div>
          <div class="sm-header__top-right_bottom">
            <SMBaseButton
              view="tertiary"
              :class="[
                'sm-header__btn',
                'sm-header__btn_theme-switcher',
              ]"
              :title="themeSwitcherTitle"
              @click="toggleDarkTheme"
            >
              <template v-slot:icon>
                <IconSun
                  v-if="storeMain.colorTheme === eColorThemes.dark"
                  :class="[
                    'sm-header__icon',
                    'sm-header__icon_sun',
                  ]"
                />
                <IconMoon
                  v-else
                  :class="[
                    'sm-header__icon',
                    'sm-header__icon_moon',
                  ]"
                />
              </template>
            </SMBaseButton>
            <SMBaseButton
              view="tertiary"
              :class="[
                'sm-header__btn',
                'sm-header__btn_theme-switcher',
              ]"
              :title="langTitle"
              @click="toggleLanguage"
            >
              <template v-slot:icon>
                <IconLang
                  :class="[
                    'sm-header__icon',
                    'sm-header__icon_sun',
                  ]"
                />
              </template>
            </SMBaseButton>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
