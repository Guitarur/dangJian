<!--
 * @Descripttion: 
 * @version: 
 * @Author: xuke10@lenovo.com
 * @Date: 2021-11-15 14:36:47
 * @LastEditors: xuke10@lenovo.com
 * @LastEditTime: 2021-11-16 16:19:32
-->
<template>
  <div class="score_page">
    <img class="thx_text" src="../assets/thx.png" alt="">
    <div class="score_text">
      你得到了<span class="spe_text">{{score}} </span>分，击败了<span class="spe_text">{{percent}}</span> 的参与者
    </div>
    <div class="level_text">
      获得称号：<img src="../assets/level.png" alt=""> 冲锋者
    </div>
    <div class="btn_group">
      <img src="../assets/agin.png" alt="">
      <img src="../assets/back.png" alt="" @click="next">
    </div>
  </div>
</template>
<script>
export default {
  name: '',
  data () {
    return {
      score: 80,
      percent: '80%'
    }
  },
  mounted () {},
  methods: {
    next() {
      this.$emit('next','first')
    }
  }
}
</script>
<style scoped lang="scss">
  .score_page {
    color: #EE1103;
    font-size: 25px;
    letter-spacing: 2px;
    font-weight: bold;
    .spe_text {
      padding-left: 10px;
      font-size: 40px;
    }
  }
  .thx_text {
    width: 304px;
    top: 298px;
  }
  .score_text {
    width: 542px;
    top: 400px;  
  }
  .level_text {
    width: 330px;
    top: 480px;
    img {
     vertical-align: middle;
    }
  }
  .btn_group {
    width: 500px;
    top: 600px;
  }
  .thx_text, .score_text, .level_text, .btn_group  {
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    // width: 304px;
    // top: 298px;
  }

</style>