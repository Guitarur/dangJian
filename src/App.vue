<!--
 * @Descripttion: 
 * @version: 
 * @Author: xuke10@lenovo.com
 * @Date: 2021-11-15 11:15:50
 * @LastEditors: xuke10@lenovo.com
 * @LastEditTime: 2021-11-15 17:25:58
-->
<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html {
  height: 100%;
}
body{
  height: 100%;
  margin: 0;
  padding: 0;
}
#app {
  height: 100%;
}
</style>
