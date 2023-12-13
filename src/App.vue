<template>
  <div id="app">
    <p>num: {{ this.$store.state.num }}</p>
    <p>double: {{ this.$store.getters.double }}</p>
    <button @click="() => this.$store.commit('increment', 1)">increment</button>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
#app {
  font-size: 24px;
}
</style>
