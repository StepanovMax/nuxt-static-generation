<script setup lang="ts">
defineProps({
  data: {
    type: Array,
  },
})
</script>


<template>
  <ul class="sm-social-links">
    <li
      v-for="item in data"
      :key="item.id"
      class="sm-social-links__item"
    >
      <a
        :title="item.title"
        :href="item.url"
        target="_blank"
        class="sm-social-links__link"
      >
        <component
          :is="item.component"
          class="sm-social-links__icon"
        />
      </a>
    </li>
  </ul>
</template>


<style lang="scss">
.sm-social-links {
  @apply flex flex-row justify-start lg:justify-end gap-4;

  &__icon {
    @apply text-gray-501 transition-colors ease-in-out w-10 h-10;

    &:hover {
      @apply text-blue-700;
    }
  }

  &__link {
    @extend .link, .link_view-2 !optional;
  }
}
</style>