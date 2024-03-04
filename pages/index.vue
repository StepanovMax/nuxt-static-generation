<script setup lang="ts">
</script>

<template>
  <div class="sm-page-home">
    <div class="sm-layout__container">
      <header class="sm-layout__header">
        <h1 class="sm-layout__title">
          {{ $t('homepage.title') }}
        </h1>
      </header>

      <div class="sm-layout__content">
        <p class="paragraph">
          {{ $t('homepage.content') }}
        </p>
      </div>
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
