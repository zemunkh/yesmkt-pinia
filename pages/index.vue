<template>
  <div>
    <nav-bar />
    <br>
    <br>
    <Counter />
  </div>
</template>

<script>
import Counter from "~/components/Counter.vue";
import NavBar from "~/components/NavBar/NavBar.vue"
export default {
    name: "IndexPage",
    components: { Counter, NavBar }
}
</script>
