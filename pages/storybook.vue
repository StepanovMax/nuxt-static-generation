<script setup lang="ts">

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
    <div class="sm-layout__container">
      <header class="sm-layout__header">
        <h1 class="sm-layout__title">
          {{ $t('storybook.title') }}
        </h1>
      </header>
    </div>

    <div class="sm-layout__container">
      <div class="sm-page-storybook__main">
        <div class="sm-page-storybook__container">
          <ul class="sm-page-storybook__list">
            <li class="sm-page-storybook__list-item">
              <section class="sm-page-storybook__section">
                <header class="sm-page-storybook__section-header">
                  <h4 class="sm-page-storybook__section-title">
                    
                  </h4>
                </header>
                <div class="sm-page-storybook__section-content">
                  <div class="sm-page-storybook__section-content-left">
                   
                  </div>
                  <div class="sm-page-storybook__section-content-right">
                    <p class="paragraph">
                      Описание
                    </p>
                  </div>
                </div>
              </section>
            </li>
            <li class="sm-page-storybook__list-item">
              <section class="sm-page-storybook__section">
                <header class="sm-page-storybook__section-header">
                  <h4 class="sm-page-storybook__section-title">
                    
                  </h4>
                </header>
                <div class="sm-page-storybook__section-content">
                  <div class="sm-page-storybook__section-content-left">
                  </div>
                  <div class="sm-page-storybook__section-content-right">
                    <p class="paragraph">
                      Описание
                    </p>
                  </div>
                </div>
              </section>
            </li>
          </ul>
        </div>
      </div>
    </div>

  </div>
</template>


<style lang="scss" scoped>
.sm-page-storybook {
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
