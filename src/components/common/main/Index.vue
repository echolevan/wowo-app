<template>
    <div>
        <div class="header">
            <div class="main">
                <div class="left">
                    嘿市
                </div>
                <div class="right">
                    <span>登录</span>
                    <span>|</span>
                    <span>注册</span>
                </div>
            </div>
        </div>
        <v-nav></v-nav>
        <div style="height:40px;width:100%"></div>
        <router-view/>
    </div>
</template>

<script>
  import VNav from './Nav'

  export default {
    data() {
      return {}
    },
    mounted() {
    },
    components: {
      VNav
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    .header
        width 100%
        height 30px
        line-height 30px
        background $lmColor

        .main
            width 1240px
            margin 0 auto
            color #fff
            display flex
            flex-direction row
            justify-content space-between

            span
                margin 0 5px
</style>