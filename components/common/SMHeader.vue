<script setup lang="ts">
import {
  inject,
  computed,
} from 'vue';

import IconSun from '@/assets/icons/base/sm-sun.svg';
import IconMoon from '@/assets/icons/base/sm-moon.svg';

import SMBaseButton from '@/components/base/SMBaseButton.vue';
import SMLogo from '@/components/middle/SMLogo.vue';
import SMList from '@/components/middle/SMList.vue';


const changeTheme: any = inject('changeTheme');

const menuArray = [
  {
    id: 0,
    title: 'Home',
    url: '/home',
    active: true,
  },
  {
    id: 1,
    title: 'Services',
    url: '/services',
    active: false,
  },
  {
    id: 2,
    title: 'Contacts',
    url: '/contacts',
    active: false,
  },
];

let themeFlag = false;

/**
 * Changes theme between 'default' and 'inverse'.
 * @returns {void}.
 */
const toggleDarkTheme = () => {
  themeFlag = !themeFlag;
  let currentTheme = 'default';
  if (themeFlag) {
    currentTheme = 'default';
  } else {
    currentTheme = 'dark';
  }
  changeTheme(currentTheme);
};

const themeSwitcherTitle = computed(() => {
  let result = '';
  const darkTheme = 'Тёмная тема';
  const lightTheme = 'Светлая тема';
  if (themeFlag) {
    result = lightTheme;
  } else {
    result = darkTheme;
  }
  return result;
});
</script>


<template>
  <header class="sm-header">
    <div class="sm-header__container">
      <div class="sm-header__top">
        <div class="sm-header__top-left">
          <SMLogo class="sm-header__logo" />
        </div>
        <div class="sm-header__top-right">
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
                :class="[
                  'sm-header__icon',
                  'sm-header__icon_sun',
                ]"
              />
              <IconMoon
                :class="[
                  'sm-header__icon',
                  'sm-header__icon_moon',
                ]"
              />
            </template>
          </SMBaseButton>
          <SMList
            class="sm-header__menu"
            :data="menuArray"
          />
        </div>
      </div>
    </div>
  </header>
</template>
