<!--  -->
<template>
  <el-icon v-if="icon.includes('ele')">
    <component :is="icon.split('-')[1]" class="svg-icon"></component>
  </el-icon>
  <div v-else class="svg-warper">
    <svg-icon :icon="icon"></svg-icon>
  </div>
  <span>{{ title }}</span>
</template>

<script setup>
import { defineProps } from 'vue'
defineProps({
  title: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  }
})
</script>
<style lang="scss" scoped>
.svg-warper {
  margin-right: 5px;
  width: 24px;
  text-align: center;
  font-size: 18px;
  vertical-align: middle;
}
</style>
