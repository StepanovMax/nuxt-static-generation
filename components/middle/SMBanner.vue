<script setup lang="ts">
import DummyImage1 from '@/assets/images/dummy/dummy-image-1.jpg';

defineProps({
  img: {
    type: Boolean,
    default: true,
  },
  title: {
    type: String,
    default: "Баннер ПОС",
  }
})
</script>


<template>
  <div
    :class="[
      'sm-banner',
      { 'sm-banner_default': !img },
    ]"
  >
    <img
      v-if="img"
      :src="DummyImage1"
      class="sm-banner__img"
    />

    <div
      v-else
      class="sm-banner__bg"
    />

    <p class="sm-banner__title">
      {{ title }}
    </p>
  </div>
</template>


<style lang="scss">
.sm-banner {
  @apply flex flex-row justify-center items-center relative w-full overflow-hidden;

  &_default {
    @apply aspect-[4/1];
  }

  &__bg {
    background: radial-gradient(theme("colors.gray.503"), theme("colors.gray.504"));
  }

  &__title {
    @extend .title, .title_h4;
    @apply text-gray-502 z-20 absolute text-center mx-10 my-6 leading-snug text-ellipsis overflow-hidden;
  }

  &__img {
    @apply w-full z-10;
  }

  &__bg {
    @apply w-full h-full absolute z-10;
  }
}
</style>