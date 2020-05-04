<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import 'normalize.css'
export default {};
</script>


<style lang="scss">
html {
  box-sizing: border-box;
}
html,
body {
  height: 100%;
}
#app {
  font-family: 'Noto Sans Japanese', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  background-color: teal;
}
</style>
