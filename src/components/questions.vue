<!--
 * @Descripttion: 
 * @version: 
 * @Author: xuke10@lenovo.com
 * @Date: 2021-11-15 14:42:34
 * @LastEditors: xuke10@lenovo.com
 * @LastEditTime: 2021-11-17 16:40:11
-->
<template>
  <div class="questions_page">
      <div class="questions_body">
        <div v-for="(item,qIndex) in theChoosedQuestionList" :key="qIndex" v-show="active==qIndex">
          <!-- 题干 -->
          <p class="question_title">{{item.text}}</p>
          <!-- 选项 -->
          <div class="options_btn">
            <i v-for="(prop,index) in item.options" :key="index" @click="chooseAnswer(index,qIndex)">
              <img src="../assets/empty_btn.png" alt="">
              <span>{{prop}}</span>
            </i>
            <!-- "对号" 组件, answer: 正确答案的索引位 -->
            <result-icon :result="result" :answer="item.answer"></result-icon>
          </div>
        </div>
      </div>
      <!-- 屏幕右侧进度条 -->
      <div class="step">
        <img class="step_tree" src="../assets/step.png" alt="">
        <i class="status" v-for="(item,index) in answerStatus" :key="index" :style="'top:'+item.top">
          <img v-show="item.value==3" src="../assets/circle.png" alt="">
          <img v-show="item.value==2" src="../assets/wrong.png" alt="">
          <img v-show="item.value==1" src="../assets/right_l.png" alt="">
        </i>
      </div>
      
  </div>
</template>
<script>
import resultIcon from './resultIcon.vue';
export default {
  name: '',
  components: {
    resultIcon,
  },
  props: ['theChoosedQuestionList'],
  data () {
    return {
      //答题状态, 0-尚未答题  1-答对 2-答错 3-正在答题
      answerStatus: [{
        value: 3,
        top: '-4px;'
      },{
        value: 0,
        top: '61px;'
      },{
        value: 0,
        top: '126px;'
      },{
        value: 0,
        top: '191px;'
      }],
      active: 0,
      result: false
    }
  },
  mounted () {},
  methods: {
    // 选择答案, 查看结果
    chooseAnswer (index,qIndex) {
      let that = this
      this.getResult(index)
      .then(res => {
        if( res ) {
          //答题正确
          that.answerStatus[qIndex].value = 1
        }else {
          // 答题错误
          that.answerStatus[qIndex].value = 2
        }
        that.result = true
        // 为了视界效果美观, 延迟1s切换下一题
        setTimeout( () => {
          if(this.active >= 3){
            that.$emit('next','score')
            that.active = 0
            return
          }
          that.result = false
          that.active ++
          that.answerStatus[qIndex + 1].value = 3
        },1000)
        
      })
    },
    getResult(index) {
      return new Promise( (resolve,reject) => {
        setTimeout(() => {
          if(index == 1){
            resolve(true)
          }else {
            resolve(false)
          }
        },300)
      })
      
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
    width: 17px;
    right: 20px;
    top: 328px;
    .step_tree {
        width: 100%;
    }
  }
  .questions_body {
    position: absolute;
    width: 840px;
    left: 0;
    right: 0;
    top: 400px;
    margin: auto;
    font-size: 25px;
    letter-spacing: 2px;
    color: #282828;
    font-weight: bold;
    .question_title {
      padding: 0;
      opacity: 72%;
    }
    .options_btn {
      position: relative;
      font-size: 20px;
      color: #fff;
      i {
        display: inline-block;
        margin-right: 30px;
        font-style: normal;
        position: relative;
        img {
          width: 143px;
        }
        span {
          position: absolute;
          width: 140px;
          top: 53px;
          left: 43px;
        }
      }
      
    }
  }
  .status {
    width: 10px;
    position: absolute;
    left: 4px;
    img{
      width: 100%;
    }
  }
</style>
