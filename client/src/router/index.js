import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Example from '@/components/Examples'
import NewExample from '@/components/NewExample'
import EditExample from '@/components/EditExample'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/examples',
      name: 'Examples',
      component: Example
    },
    {
      path:'/examples/new',
      name: 'NewExample',
      component: NewExample
    },
    {
      path:'/examples/:id',
      name: 'EditExample',
      component: EditExample
    }
  ]
})
