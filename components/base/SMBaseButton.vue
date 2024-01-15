<script setup lang="ts">
const props = defineProps({
  label: {
    type: String,
    default: 'Кнопка'
  },
  iconFirst: {
    type: Boolean,
    default: false,
    required: false,
  },
  disabled: {
    type: Boolean,
    default: false,
    required: false,
  },
  view: {
    type: String,
    default: 'primary',
    validator(value: string) {
      return ['primary', 'secondary', 'tertiary', 'fourth'].includes(value);
    },
    required: true,
  },
});
</script>


<template>
  <button
    :class="[
      'sm-base-btn',
      `sm-base-btn_${props.view}`,
      { 'sm-base-btn_order-reverse': props.iconFirst },
      { 'sm-base-btn_square': !$slots.label },
      props.disabled ? `sm-base-btn_${props.view}-disabled` : `sm-base-btn_${props.view}`,
    ]"
    :disabled="props.disabled"
  >
    <span
      v-if="$slots.label"
      :class="[
        'sm-base-btn__label',
        `sm-base-btn__label_${props.view}`,
        props.disabled ? `sm-base-btn__label_${props.view}-disabled` : `sm-base-btn__label_${props.view}`,
      ]"
    >
      <slot name="label" />
    </span>

    <span
      v-if="$slots.icon"
      :class="[
        'sm-base-btn__icon',
        `sm-base-btn__icon_${props.view}`,
        props.disabled ? `sm-base-btn__icon_${props.view}-disabled` : `sm-base-btn__icon_${props.view}`,
      ]"
    >
      <slot
        name="icon"
      />
    </span>
  </button>
</template>


<style lang="scss">
  
</style>