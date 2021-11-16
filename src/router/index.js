/*
 * @Descripttion: 
 * @version: 
 * @Author: xuke10@lenovo.com
 * @Date: 2021-11-15 11:15:50
 * @LastEditors: xuke10@lenovo.com
 * @LastEditTime: 2021-11-15 14:04:02
 */
import Vue from 'vue'
import Router from 'vue-router'
import answerGame from '@/components/answerGame'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'game',
      component: answerGame
    }
  ]
})
