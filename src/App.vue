<script>
  import HeaderApp from './components/HeaderApp.vue';
  import Main from './components/Main.vue';
  import "@fontsource/roboto";
  // bc32337b339c1e8a50ca13e7353af33e

  export default{
    components:{
      HeaderApp,
      Main,
    }
  }
</script>

<template>
  <HeaderApp/>
  <Main/>
</template>

<style>
*{
  font-family: "Roboto";
}
</style>