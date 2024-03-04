<script setup lang="ts">
interface IProps {
  dir: 'horizontal' | 'vertical';
  view: 'blue' | 'gray';
  data: any[];
}

withDefaults(defineProps<IProps>(), {
  dir: 'horizontal',
  view: 'blue',
  data: () => [],
});
</script>


<template>
  <ul
    :class="[
      'sm-list',
      `sm-list_${dir}`,
    ]"
  >
    <li
      v-for="item in data"
      :key="item.id"
      class="sm-list__item"
        :class="[
          'sm-list__item',
          `sm-list__item_${dir}`,
        ]"
    >
      <nuxt-link
        :title="item.title"
        :to="item.url"
        :class="[
          'sm-list__link',
          `sm-list__link_${view}`,
          item.active ? `sm-list__link_${view}-active` : `sm-list__link_${view}`,
        ]"
      >
        {{ item.title }}
      </nuxt-link>
    </li>
  </ul>
</template>
