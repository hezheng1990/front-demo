import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Paint from '@/components/Paint'
import Test from '@/components/Test'
import TestParent from "../components/TestParent.vue";
import TestEvent from "../components/TestEvent.vue";
import TimeLine  from '../components/TimeLine.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/TestEvent',
      name: 'TestEvent',
      component: TestEvent
    },
    {
      path: '/',
      name: 'Paint',
      component: Paint
    },
    {
      path: '/TimeLine',
      name: 'TimeLine',
      component: TimeLine
    }
  ]
})
