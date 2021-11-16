<!--
 * @Descripttion: 
 * @version: 
 * @Author: xuke10@lenovo.com
 * @Date: 2021-11-16 14:08:03
 * @LastEditors: xuke10@lenovo.com
 * @LastEditTime: 2021-11-16 14:41:07
-->
<template>
  <div>
    <img class="type_title" src="../assets/lsqs.png" alt="">
    <div class="instruction">
      <img src="../assets/text_frame.png" alt="">
      <div class=""></div>
    </div>
    <img class="start_btn" src="../assets/start_btn.png" alt="" @click="next">
  </div>
</template>
<script>
export default {
  name: '',
  data () {
    return {
    }
  },
  mounted () {},
  methods: {
    next () {
      this.$emit('next','questions')
    }
  }
}
</script>
<style scoped lang='scss'>
    .type_title {
      position: absolute;
      width: 461px;
      left: 0;
      right: 0;
      top: 250px;
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
    .instruction {
      position: absolute; 
      left: 0;
      right: 0; 
      width: 322px;
      margin: auto;
      top: 462px;
      img {
        width: 100%;
      }
    }
</style>
