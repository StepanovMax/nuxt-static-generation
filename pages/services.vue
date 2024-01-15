<script setup lang="ts">
</script>

<template>
  <div class="sm-page-home">
    <div class="sm-page-home__container">
      <p class="paragraph">
        Page services
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.sm-page-home {
  &__title {
    @extend .title !optional;
    @extend .title_h1 !optional;
  }

  &__container {
    @extend .sm-container !optional;
    @apply py-4;
  }
}
</style>
