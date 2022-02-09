<template>
  <div>
    <slot />
    <icon
      v-if="icon"
      :path="icon"
      class="transition-colors"
    />
    <span
      class="px-2 transition-colors"
      :class="{ 'lg:hidden':isDesktopIconOnly && icon }"
    >{{ label }}</span>
  </div>
</template>

<script>

import Icon from './Icon.vue'

export default {
  components: {
    Icon,
  },
  props: {
    icon: {
      type: String,
      default: null
    },
    label: {
      type: String,
      required: true
    },
    isDesktopIconOnly: Boolean
  }
}
</script>
