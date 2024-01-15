<script setup lang="ts">
import VBanner from '@/components/middle/VBanner.vue';

const activityTypesArray = [
  {
    id: 1,
    title: 'Typesetting industry',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  },
  {
    id: 2,
    title: 'Lorem Ipsum',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  }
];

interface activityObject {
  id: number;
  title: string;
  description: string;
}

const activityViewsArray: activityObject[] = [
  {
    id: 1,
    title: 'Typesetting industry',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  },
  {
    id: 2,
    title: 'Lorem Ipsum',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  }
];
</script>


<template>
  <div class="sm-page-storybook">
    <header class="sm-page-storybook__header">
      <div class="sm-page-storybook__container">
        <h1 class="sm-page-storybook__title">
          Страница компонентов
        </h1>
      </div>
    </header>

    <div class="sm-page-storybook__main">
      <div class="sm-page-storybook__container">
        <ul class="sm-page-storybook__list">
          <li class="sm-page-storybook__list-item">
            <section class="sm-page-storybook__section">
              <header class="sm-page-storybook__section-header">
                <h4 class="sm-page-storybook__section-title">
                  VBanner default
                </h4>
              </header>
              <div class="sm-page-storybook__section-content">
                <div class="sm-page-storybook__section-content-left">
                  <VBanner
                    :img="false"
                  />
                </div>
                <div class="sm-page-storybook__section-content-right">
                  Описание
                </div>
              </div>
            </section>
          </li>
          <li class="sm-page-storybook__list-item">
            <section class="sm-page-storybook__section">
              <header class="sm-page-storybook__section-header">
                <h4 class="sm-page-storybook__section-title">
                  VBanner image
                </h4>
              </header>
              <div class="sm-page-storybook__section-content">
                <div class="sm-page-storybook__section-content-left">
                  <VBanner
                    :img="true"
                  />
                </div>
                <div class="sm-page-storybook__section-content-right">
                  Описание
                </div>
              </div>
            </section>
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>


<style lang="scss" scoped>
.sm-page-storybook {
  &__container {
    @extend .sm-container !optional;
  }

  &__header {
    @apply py-8;
  }

  &__title {
    @extend .title, .title_h1;
  }

  &__list {
    @apply flex flex-col gap-10;
  }

  &__section {
    @apply flex flex-col gap-2;

    &-title {
      @extend .title, .title_h4;
    }

    &-content {
      @apply grid grid-cols-4 gap-4;

      &-left {
        @apply col-span-3;
      }

      &-right {
        @apply col-span-1;
      }
    }
  }
}
</style>
