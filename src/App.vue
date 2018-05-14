<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  created() {
     // var env = process.env.NODE_ENV === 'production' ? config.build.prodEnv : config.build.sitEnv;
     console.log(process.env.NODE_ENV);
  }
}
</script>

<style>
</style>
