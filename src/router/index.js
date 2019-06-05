import Router from 'vue-router'
import home from './home'

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    scrollBehavior(to, from, savedPosition) {
        return {x: 0, y: 0}
    },
    routes: [
        ...home
        // {
        //   name: '404',
        //   path: '*',
        //   component: NotFound
        // }
    ]
})

router.beforeEach((to, from, next) => {
    NProgress.start()
    if (to.meta.title) {
        document.title = to.meta.title
    }
    next()
    // if (!localStorage.getItem('token')) {
    //   if (to.name === 'login') {
    //     next()
    //   } else {
    //     next({
    //       name: 'login'
    //     })
    //   }
    // } else {
    //   next()
    // }
})

router.afterEach((to, from, next) => {
    NProgress.done()
})

export default router
