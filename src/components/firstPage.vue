<!--
 * @Descripttion: 
 * @version: 
 * @Author: xuke10@lenovo.com
 * @Date: 2021-11-15 14:35:54
 * @LastEditors: xuke10@lenovo.com
 * @LastEditTime: 2021-11-16 11:24:01
-->
<template>
  <div>
      <img class="mid_word" src="../assets/word.png" alt="">
      <img class="start_btn" src="../assets/start_btn.png" alt="" @click="next">
      <!-- <button class="" @click="next"></button> -->
  </div>
</template>
<script>
export default {
  name: '',
  data () {
    return {
    }
  },
  mounted () {
    
  },
  methods: {
    next () {
      this.$emit('next','selectType')  
    }
  }
}
</script>
<style scoped lang="scss">
    .mid_word {
      position: absolute;
      width: 645px;
      left: 0;
      right: 0;
      top: 246px;
      margin: auto;
    }
    .start_btn {
      position: absolute;
      width: 211px;
      top: 540px;
      left: 0;
      right: 0;
      margin: auto;
    }
</style>