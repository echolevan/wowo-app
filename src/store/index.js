// @ts-ignore
import Vuex from 'vuex'
import * as getters from './getters'
import base from './modules/base'

export default new Vuex.Store({
  strict: process.env.NODE_ENV === 'production', //在非生产环境下，使用严格模式
  getters,
  modules: {
    base
  }
})
