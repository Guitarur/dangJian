<!--
 * @Descripttion: 
 * @version: 
 * @Author: xuke10@lenovo.com
 * @Date: 2021-11-15 14:40:04
 * @LastEditors: xuke10@lenovo.com
 * @LastEditTime: 2021-11-17 15:56:13
-->
<template>
  <div ref='type_box'>
    <img class="type_btn btn_1" :style="'opacity:'+ opacity" src="../assets/type (1).png" alt="" @click="chooseQuestionType(1)">
    <img class="type_btn btn_2" :style="'opacity:'+ opacity" src="../assets/type (2).png" alt="">
    <img class="type_btn btn_3" :style="'opacity:'+ opacity" src="../assets/type (3).png" alt="">
    <img class="type_btn btn_4" :style="'opacity:'+ opacity" src="../assets/type (4).png" alt="">
    <img class="type_btn btn_5" :style="'opacity:'+ opacity" src="../assets/type (5).png" alt="">
    <!-- <button v-for="(item,index) in buttonList" :key="index" @click="chooseQuestionType(index)">{{item.text}}</button> -->
  </div>
</template>
<script>
export default {
  name: '',
  data () {
    return {
      opacity: 0,
      buttonList: [{
        text: '类型一'
      },{
        text: '类型二'
      },{
        text: '类型三'
      }],
      questionList: [
        [{
            text: '11111111?'
        },{
            text: '22222222'
        },{
            text: '33333333'
        }],[{
            text: '1.在俄国十月革命影响下，率先在中国举起马克思主义旗帜的是______。',
            options: ['选项A','选项B','选项C','选项D'],
            answer: 0
        },{
            text: '2二二二二二二二二二二二二二二二二二二二二二二二二二二二二二二',
            options: ['选项A','选项B','选项C','选项D'],
            answer: 1
        },{
            text: '3三三三三三三三三三三三三三三三三三三三三三三三三三三三三三三',
            options: ['选项A','选项B','选项C','选项D'],
            answer: 2
        },{
            text: '4四四四四四四四四四四四四四四四四四四四四四四四四四四四四四四',
            options: ['选项A','选项B','选项C','选项D'],
            answer: 3
        }],[{
            text: 'oneoneoneoneone'
        },{
            text: 'two',
        },{
            text: 'three'
        }]
      ]
    }
  },
  mounted () {
    let that = this
    setTimeout( () => {
      this.opacity = 1
    },100)
  },
  methods: {
    chooseQuestionType (index) {
      let theChoosedQuestionList = this.questionList[index]
      this.$emit('selectQestion', theChoosedQuestionList)
      this.$emit('next', 'readyAnswer')
    }
  }
}
</script>
<style scoped lang="scss">
  .type_btn {
    position: absolute;
    width: 276px;
    transition: all 2s ease-out;
  }
  .btn_1, .btn_2, .btn_3{
    top: 257px;
  }
  .btn_1 {
    left: 170px;
  }
  .btn_2 {
    left: 523px;
  }
  .btn_3 {
    left: 876px;
  }
  .btn_4 {
    left: 344px;
    bottom: 184px; 
  }
  .btn_5 {
    left: 697px;
    bottom: 184px; 
  }
</style>