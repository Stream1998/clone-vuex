<template>
  <div id="app">
    <p>num: {{ this.$store.state.num }}</p>
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
