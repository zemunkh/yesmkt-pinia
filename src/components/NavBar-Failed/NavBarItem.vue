<template>
  <component
    :is="is"
    :class="componentClass"
    :to="to"
    :href="href"
    :exact-active-class="activeClass"
  >
    <slot />
  </component>
</template>

<script>

import { computed, defineComponent } from "@nuxtjs/composition-api";
import { useDeviceStore } from "~/store/device";


export default defineComponent({
  props: {
    href: {
      type: String,
      default: null
    },
    to: {
      type: String,
      default: null
    },
    type: {
      type: String,
      default: 'flex'
    },
    activeColor: {
      type: String,
      default: null
    },
    hasDivider: Boolean,
    isDesktopIconOnly: Boolean,
    dropdown: Boolean,
    active: Boolean
  },
  setup(props) {
    const is = computed(() => {
      if (props.href) {
        return 'a'
      }

      if (props.to) {
        return 'router-link'
      }

      return 'div'
    })

    const store = useDeviceStore()

    const componentClass = computed(() => {
      const activeColor = props.activeColor ?? `${store.navBarItemLabelActiveColorStyle} dark:text-gray-400`

      const base = [
        props.type,
        'items-center',
        'grow-0',
        'shrink-0',
        'relative',
        'cursor-pointer',
        props.active
          ? activeColor
          : `${store.navBarItemLabelStyle} dark:text-white dark:hover:text-gray-400 ${store.navBarItemLabelHoverStyle}`
      ]

      if (props.type === 'block') {
        base.push('lg:flex')
      }

      if (!props.dropdown) {
        base.push('py-2', 'px-3')
      } else {
        base.push('p-0', 'lg:py-2', 'lg:px-3')
      }

      if (props.hasDivider) {
        base.push('lg:border-r', store.lightBorderStyle, 'lg:dark:border-gray-800')
      }

      if (props.isDesktopIconOnly) {
        base.push('lg:w-16', 'lg:justify-center')
      }

      return base
    })

    const activeClass = computed(() => {
      return is.value === 'router-link' ? props.activeColor : null
    })

    return {
      is,
      componentClass,
      activeClass
    }
  }
})




</script>
