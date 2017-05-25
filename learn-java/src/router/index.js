import Vue from 'vue'
import Router from 'vue-router'
import ExamJava from '@/pages/ExamJava'
import ListsExam from '@/pages/ListsExam'
import Home from '@/pages/Home'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/ExamJava',
      name: 'ExamJava',
      component: ExamJava
    },
    {
      path: '/ListsExam',
      name: 'ListsExam',
      component: ListsExam
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
