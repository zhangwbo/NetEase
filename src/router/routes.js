
/**
* 所有路由的数组
*/
import Home from '../pages/Home/Home.vue'
import Item from '../pages/Item/Item.vue'
import Topic from '../pages/Topic/Topic.vue'
import Cart from '../pages/Cart/Cart.vue'
import Personal from '../pages/Personal/Personal.vue'

export default [
  {
    path:'/home',
    component:Home,
    meta: {
      isShow: true  // 是否显示footer
    }
  },
  {
    path:'/item',
    component:Item,
    meta: {
      isShow: true  // 是否显示footer
    }
  },
  {
    path:'/topic',
    component:Topic,
    meta: {
      isShow: true  // 是否显示footer
    }
  },
  {
    path:'/cart',
    component:Cart,
    meta: {
      isShow: true  // 是否显示footer
    }
  },
  {
    path:'/personal',
    component:Personal
  },
  {
    path:'/',
    redirect:'/home'
  }
]
