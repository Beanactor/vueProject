import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
//import test from '@/components/test'
//import Carousel from '@/components/Carousel/Carousel'
Vue.use(Router)


const Carousel = resolve => {require.ensure([], () => {resolve(require('../components/Carousel/Carousel'))})};
const HelloWorld = resolve => {require.ensure([], () => {resolve(require('../components/HelloWorld'))})};
const test = resolve => {require.ensure([], () => {resolve(require('../components/test'))})};
const DGZTC = resolve => {require.ensure([], () => {resolve(require('../components/DGZTC'))})};
const RandomStr = resolve => {require.ensure([], () => {resolve(require('../components/RandomStr'))})};

const routes = [
  { path: '/', component: HelloWorld },
  { path: '/test', component: test },
  { path: '/Carousel', component: Carousel },
  { path: '/DGZTC', component: DGZTC },
  { path: '/RandomStr', component: RandomStr }
]

const router = new Router({
routes // （缩写）相当于 routes: routes
})
const app = new Vue({
  router
}).$mount('#app')


//export default new Router({
//routes: [
//  {
//    path: '/',
//    name: 'HelloWorld',
//    component: HelloWorld
//  },
//    {
//    path: '/test',
//    name: 'test',
//    component: test
//  }
//]
//})
export default new Router({routes})


