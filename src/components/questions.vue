<!--
 * @Descripttion: 
 * @version: 
 * @Author: xuke10@lenovo.com
 * @Date: 2021-11-15 14:42:34
 * @LastEditors: xuke10@lenovo.com
 * @LastEditTime: 2021-11-16 15:53:02
-->
<template>
  <div class="questions_page">
      <div class="questions_body">
        
        <p v-for="(item,index) in theChoosedQuestionList" :key="index" v-show="active==index">{{item.text}}</p>
        <div class="bntn" @click="hahah">选择答案</div>
        <div class="step">
            <img src="../assets/step.png" alt="">
        </div>
      </div>
  </div>
</template>
<script>
export default {
  name: '',
  props: ['theChoosedQuestionList'],
  data () {
    return {
      active: 0,
    }
  },
  mounted () {
    console.log(this.theChoosedQuestionList)
  },
  methods: {
    hahah () {
      let that = this
    //   if(this.active >= 2){
    //     that.$emit('next','score')
    //     that.active = 0
    //     return
    //   }
      that.$emit('next','score')
      that.active ++
    }
  }
}
</script>
<style scoped lang="scss">
  .bntn {
    position: absolute;
    bottom: 100px;
    left: 50%;
  }
  .step {
    position: absolute;
    width: 14px;
    right: 20px;
    top: 407px;
    img {
        width: 100%;
    }
  }
</style>
