<!--
 * @Descripttion: 
 * @version: 
 * @Author: xuke10@lenovo.com
 * @Date: 2021-11-16 14:08:03
 * @LastEditors: xuke10@lenovo.com
 * @LastEditTime: 2021-11-17 18:17:31
-->
<template>
  <div>
    <img class="type_title" src="../assets/lsqs.png" alt="">
    <div class="instruction">
      <img src="../assets/text_frame.png" alt="">
      <p class="title">答题说明</p>
      <div class="content">
        <i>·点按选项进行答题·</i>
        <i>·一共五道题，满分100分·</i>
        <i>·试试打开话筒，直接说出你的答案·</i>
        <i>·选项闪烁时可以点击其他答案修改·</i>
      </div>
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
      width: 540px;
      left: 0;
      right: 0;
      top: 209px;
      margin: auto;
    }
    .start_btn {
      position: absolute;
      width: 211px;
      top: 590px;
      left: 0;
      right: 0;
      margin: auto;
    }
    .instruction {
      position: absolute; 
      left: 0;
      right: 0; 
      width: 343px;
      margin: auto;
      top: 462px;
      font-size: 18px;
      text-align: center;
      img {
        width: 100%;
      }
      .title {
        position: absolute;
        width: 83px;
        top: -9px;
        left: 0;
        right: 0;
        margin: auto;
        opacity: 72%;
        font-weight: bold;
        color: #282828;
      }
      .content {
        i {
          margin-top: 14px;
          height: 25px;
          opacity: 70%;
          display: block;
          font-style: normal;
          letter-spacing: 1px;
        }
        width: 100%;
        position: absolute;
        top: 10px;
      }
    }
</style>
