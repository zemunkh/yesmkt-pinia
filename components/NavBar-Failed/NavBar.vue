<template>
  <nav
    v-show="isNavBarVisible"
    class="top-0 left-0 right-0 fixed flex bg-white h-14 border-b z-30 w-screen
    transition-position xl:pl-60 lg:w-auto lg:items-stretch dark:bg-gray-900 dark:border-gray-800"
  >
    <div class="flex items-stretch flex h-14 lg:hidden">
      <nav-bar-item @click.prevent="menuNavBarToggle">
        <icon
          :path="menuNavBarToggleIcon"
          size="24"
        />
      </nav-bar-item>
    </div>
    <div
      class="absolute w-screen top-14 left-0 bg-white shadow
        lg:w-auto lg:items-stretch lg:flex lg:grow lg:static lg:border-b-0 lg:overflow-visible lg:shadow-none dark:bg-gray-900"
      :class="[isMenuNavBarActive ? 'block' : 'hidden']"
    >
      <div
        class="max-h-screen-menu overflow-y-auto lg:overflow-visible lg:flex lg:items-stretch lg:justify-end lg:ml-auto"
      >
        <nav-bar-item-label :label="userName" class="py-0">
          <user-avatar class="w-6 h-6 mr-3 inline-flex" />
        </nav-bar-item-label>

        <nav-bar-item
          has-divider
          is-desktop-icon-only
          @click="logout()"
        >
          <nav-bar-item-label
            :icon="mdiLogout"
            label="Log Out"
            is-desktop-icon-only
          />
        </nav-bar-item>
        <nav-bar-item
          has-divider
          is-desktop-icon-only
          @click.prevent="toggleLightDark"
        >
          <nav-bar-item-label
            :icon="mdiThemeLightDark"
            label="Light/Dark"
            is-desktop-icon-only
          />
        </nav-bar-item>
      </div>
    </div>
  </nav>
</template>


<script>
import { ref, computed, defineComponent, useRouter } from "@nuxtjs/composition-api";
import { useDeviceStore } from "~/store/device";
import Icon from './Icon.vue';
import UserAvatar from "./UserAvatar";
import NavBarItemLabel from "./NavBarItemLabel.vue";
import NavBarItem from "./NavBarItem.vue";
import NavBarMenu from "./NavBarMenu.vue";
import Divider from "./Divider.vue";
import {
  mdiBackburger,
  mdiClose,
  mdiAccount,
  mdiCogOutline,
  mdiLogout,
  mdiThemeLightDark
} from '@mdi/js'


export default defineComponent({
  components: {
    Icon,
    NavBarItemLabel,
    NavBarItem,
    NavBarMenu,
    UserAvatar,
    Divider
  },
  setup() {
    const isMenuNavBarActive = ref(false)

    const deviceStore = useDeviceStore()

    const toggleLightDark = () => {
      deviceStore.darkMode()
    }

    const logout = () => alert('Clicked to logout');

    const isNavBarVisible = computed(() => deviceStore.isFullScreen)

    const userName = computed(() => deviceStore.userName)

    const menuNavBarToggleIcon = computed(() => isMenuNavBarActive.value ? mdiClose : mdiBackburger)

    const menuNavBarToggle = () => {
      isMenuNavBarActive.value = !isMenuNavBarActive.value
    }

    return {
      toggleLightDark,
      isMenuNavBarActive,
      isNavBarVisible,
      userName,
      menuNavBarToggleIcon,
      menuNavBarToggle,
      mdiAccount,
      mdiCogOutline,
      mdiLogout,
      mdiThemeLightDark,
      logout
    }
  }
})
</script>

<style>
.dropdown:hover .dropdown-menu {
  display: block;
}
</style>
