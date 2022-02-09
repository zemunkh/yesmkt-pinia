<template>
  <div class="group inline-flex flex-grow focus-within:z-5">
    <div
      class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
    >
      <svg-icon class="h-6 w-6 text-indigo-700" :name="iconName" />
    </div>
    <input
      class="text-gray-700 py-3 form-input block w-full rounded-none rounded-l-md pl-10 transition ease-in-out duration-150 font-semibold sm:text-sm sm:leading-5"
      :placeholder="placeholder"
      type="text"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>

import { ref, defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    value: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: 'Text'
    },
    iconName: {
      type: String,
      default: 'world'
    }
  },
  emits: [
    'update:text'
  ]
  // setup({emit}) {

  //   const onInput =  (event) => {
  //     emit('input', event.target.value);
  //   }

  //   return {
  //     onInput
  //   }
  // }
})

</script>
