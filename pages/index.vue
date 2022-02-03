<template>
  <div>
    <h3>Protected page</h3>
    <Counter />
  </div>
</template>

<script>
import Counter from "~/components/Counter.vue";
export default {
    name: "IndexPage",
    components: { Counter }
}
</script>
