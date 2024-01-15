<script setup lang="ts">
import SMHeader from '@/components/common/SMHeader.vue';
import SMFooter from '@/components/common/SMFooter.vue';
</script>


<template>
  <div class="sm-layout">
    <SMHeader />
    <div class="sm-content">
      <slot />
    </div>
    <SMFooter />
  </div>
</template>