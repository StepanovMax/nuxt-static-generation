<script setup lang="ts">
import { useMainStore } from '@/store/index.ts';


const storeMain = useMainStore();
</script>


<template>
  <div class="sm-app">
    <div
      :class="[
        'theme',
        `theme-${storeMain.colorTheme}`,
      ]"
    >
      <div class="theme__bg-radial" />
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
  </div>
</template>


<style lang="scss">
.sm-app {
  @apply relative z-10;
}

.theme {
  @apply
    relative z-30
    flex flex-col h-full min-h-full
    theme-light:bg-gray-100
    theme-dark:bg-blue-901
  ;

  &__bg-radial {
    @apply absolute z-20 bg-center bg-no-repeat bg-auto;
    // @apply bg-radial-gradient;
    // width: 6000px;
    // height: 6000px;
    left: -900px;
    top: -1200px;
    width: 2000px;
    height: 2000px;
    background-image: url('@/assets/images/sm-bg-radial.png');
    // background-image: url(v-bind(ImageRadialBind));
    // background: radial-gradient(circle, rgba(255,255,255,0.05) 0%, rgba(0,212,255,0) 100%);
  }
}
</style>