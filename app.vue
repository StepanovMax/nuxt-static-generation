<script setup lang="ts">
import {
  ref,
  provide,
} from 'vue';

const themes = {
  default: {
    active: true,
  },
  inverse: {
    active: false,
  },
};

const themeName = ref('default');

const changeTheme = (themeNameProp: string) => {
  themeName.value = themeNameProp;
};

provide('themeFlag', false);
provide('changeTheme', changeTheme);
</script>


<template>
  <div class="sm-app">
    <div
      :class="[
        'theme',
        `theme-${themeName}`,
      ]"
    >
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
  </div>
</template>


<style lang="scss">
.theme {
  @apply
    flex flex-col relative h-full min-h-full
    theme-default:bg-gray-101
    theme-dark:bg-gray-400
  ;
}
</style>