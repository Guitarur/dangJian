<!--
 * @Descripttion: 
 * @version: 
 * @Author: xuke10@lenovo.com
 * @Date: 2021-11-15 11:15:50
 * @LastEditors: xuke10@lenovo.com
 * @LastEditTime: 2021-11-17 10:05:46
-->
<template>
  <div class="wrapper">
    <img class="bg_img" src="../assets/bg.jpg" alt="">
    <img class="top_flag" src="../assets/flag.png" alt="">
    <img class="title" src="../assets/title.png" alt="">
    <img class="bottom_flag" src="../assets/flag2.png" alt="">
    <img class="bird_1" src="../assets/bird.png" alt="">
    <img class="bird_2" src="../assets/bird.png" alt="">

    <first-page v-if="active == 'first'" @next="next"></first-page>
    <select-question v-if="active == 'selectType'" @selectQestion="selectQestion" @next="next"></select-question>
    <ready-answer v-if="active == 'readyAnswer'" @next="next"></ready-answer>
    <questions-pages v-if="active == 'questions'" @next="next" :theChoosedQuestionList='theChoosedQuestionList'></questions-pages>
    <score-page v-if="active == 'score'"  @next="next"></score-page>
  </div>
</template>
<script>
import firstPage from './firstPage.vue'
import scorePage from './score.vue'
import selectQuestion from './selectQuestion.vue'
import readyAnswer from './readyAnswer.vue'
import questionsPages from './questions.vue'

export default {
  name: '',
  components: {
    firstPage,
    scorePage,
    selectQuestion,
    questionsPages,
    readyAnswer,
  },
  data () {
    return {
      active: 'first',
      theChoosedQuestionList: [],
    }
  },
  mounted () {},
  methods: {
    next (name) {
      this.active = name
      // console.log(this.active)
    },
    selectQestion (data) {
      this.theChoosedQuestionList = data
    }
  }
}
</script>
<style scoped lang="scss">
  @keyframes bgMove {
    0%{
      transform: translateX(0px);
    }
    50%{
      transform: translateX(-33%);
    }
    100%{
      transform: translateX(0px);
    }
  }
  .wrapper {
    height: 100%;
    width: 100%;
    overflow: hidden;
    position: relative; 
    .bg_img {
      position: absolute;
      height: 100%;
      width: 150%;
      animation: bgMove 60s linear infinite;
    }
    .top_flag {
      position: absolute;
      width: 562px;
      right: 0;
      top: 0;
    }
    .title {
      position: absolute;
      width: 217px;
      left: 35px;
      top: 22px;
    }
    .bottom_flag {
      position: absolute;
      bottom: 0;
      width: 100%;
    }
    .bird_1, .bird_2 {
      position: absolute;
      width: 60px;
    }
    .bird_1 {
      top: 118px;
      right: 555px;
    }
    .bird_2 {
      transform: rotateY(180deg);
      top: 311px;
      left: 88px; 
    }
  }
</style>