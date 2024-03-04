<script setup lang="ts">
import SMLogoIcon from "@/assets/icons/logo/logo.svg";
</script>


<template>
  <div class="sm-logo">
    <nuxt-link
      title="Перейти на главную"
      to="/"
      :class="[
        'sm-logo__link',
        'sm-logo__link_asd',
      ]"
    >
    </nuxt-link>
      <SMLogoIcon
        class="sm-logo__icon"
      />
  </div>
</template>


<style lang="scss">
.sm-logo {
  &__link {
    @apply no-underline;
  }

  &__icon {
    @apply w-32 h-12;
  }

  .path {
    &_dark {
      @apply
        theme-light:fill-gray-505
        theme-dark:fill-white
      ;
    }

    &_white {
      @apply
        theme-light:fill-white
        theme-dark:fill-gray-505
      ;
    }
  }
}
</style>