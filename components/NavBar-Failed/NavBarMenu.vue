<template>
  <nav-bar-item
    ref="root"
    type="block"
    :has-divider="hasDivider"
    :active="isDropdownActive"
    dropdown
    class="dropdown"
    @click="toggle"
  >
    <a
      class="flex items-center py-2 px-3 dark:bg-gray-800 lg:bg-transparent lg:dark:bg-transparent"
      :class="[ navBarMenuListUpperLabelStyle ]"
    >
      <slot />
      <icon
        :path="toggleDropdownIcon"
        class="hidden lg:inline-flex transition-colors"
      />
    </a>
    <div
      class="text-sm border-b lg:border-b-0 lg:border-gray-200 lg:border-t lg:bg-white lg:absolute
          lg:top-full lg:left-0 lg:min-w-full lg:z-20 lg:shadow-md lg:rounded-b lg:dark:bg-gray-800
          dark:border-gray-700"
      :class="[lightBorderStyle, {'lg:hidden':!isDropdownActive}]"
    >
      <slot name="dropdown" />
    </div>
  </nav-bar-item>
</template>

<script>
import { computed, ref, onMounted, onBeforeUnmount, defineComponent } from '@nuxtjs/composition-api'
import { useDeviceStore } from "~/store/device";
import { mdiChevronUp, mdiChevronDown } from '@mdi/js'
import NavBarItem from './NavBarItem.vue'
import Icon from './Icon.vue'

export default defineComponent({
  components: {
    NavBarItem,
    Icon,
  },
  props: {
    hasDivider: {
      type: Boolean,
      default: false
    }
  },
  setup () {
    const store = useDeviceStore()

    const lightBorderStyle = computed(() => store.lightBorderStyle)

    const navBarMenuListUpperLabelStyle = computed(() => store.navBarMenuListUpperLabelStyle)

    const isDropdownActive = ref(false)

    const toggleDropdownIcon = computed(() => isDropdownActive.value ? mdiChevronUp : mdiChevronDown)

    const toggle = () => {
      isDropdownActive.value = !isDropdownActive.value
    }

    const root = ref(false)

    const forceClose = event => {
      if(process.client) {
        console.log('Root: ', root.value);
        if (!root.value.$el.contains(event.target)) {
          isDropdownActive.value = false
        }
      }
    }

    onMounted(() => {
      if(process.client) {
        window.addEventListener('click', forceClose)
      }
    })

    onBeforeUnmount(() => {
      if(process.client) {
        window.removeEventListener('click', forceClose)
      }
    })

    return {
      lightBorderStyle,
      navBarMenuListUpperLabelStyle,
      toggleDropdownIcon,
      toggle,
      isDropdownActive,
    }
  }
})

</script>
