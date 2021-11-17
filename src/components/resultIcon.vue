<!--
 * @Descripttion: 
 * @version: 
 * @Author: xuke10@lenovo.com
 * @Date: 2021-11-17 11:00:04
 * @LastEditors: xuke10@lenovo.com
 * @LastEditTime: 2021-11-17 16:05:10
-->
<template>
  <div class="result">
    <div class="img_box" :style="(result ? 'width:49px;':'width:0px;')+'left:'+left+'px;'">
      <img src="../assets/right.png" alt="">
    </div>
  </div>
</template>
<script>
export default {
  name: '',
  props: ['result','answer'],
  data () {
    return {
      left: 0,
    }
  },
  created () {
    // 将每个对勾动画的位置固定
    switch(this.answer) {
      case 0: this.left = 83;break;
      case 1: this.left = 255;break;
      case 2: this.left = 427;break;
      case 3: this.left = 600;break;
    }
  },
  mounted () {},
  methods: {}
}
</script>
<style scoped lang='scss'>
  .img_box {
    position: absolute; 
    top: 52px;
    overflow: hidden;
    width: 0px;
    transition: width .5s ease-in-out;
    img {
     
    }
  }
</style>