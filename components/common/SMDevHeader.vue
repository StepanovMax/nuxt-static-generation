<script setup lang="ts">
const menuArray = [
  {
    id: 0,
    title: 'Главная',
    url: '/'
  },
  {
    id: 1,
    title: 'Страница компонентов',
    url: '/storybook'
  }
];
</script>


<template>
  <div class="sm-dev-header">
    <nav class="sm-dev-header__nav">
      <router-link
        v-for="item in menuArray"
        :key="item.id"
        :to="item.url"
        :class="['sm-dev-header__nav-link']"
      >
        {{ item.title }}
      </router-link>
    </nav>
  </div>
</template>


<style lang="scss">
.sm-dev-header {
  @apply fixed bottom-0 left-0 right-0 px-4 py-2 z-50;

  &__nav {
    @apply flex justify-end;

    &-link {
      @extend .link, .link_view-1 !optional;
      @apply text-sm mx-2;

      &.router-link-active {
        @apply underline;

        &:hover {
          @apply no-underline;
        }
      }
    }
  }
}
</style>
