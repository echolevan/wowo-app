<template>
    <div class="nav">
        <div class="tab" @mouseleave="leave">
            <div class="tabBar">
                <span @mouseover="leave">首页</span>
                <span>|</span>
                <span @mouseover="hover(1)">WA<Icon type="ios-arrow-down"/></span>
                <span>|</span>
                <span @mouseover="hover(2)">TMW<Icon type="ios-arrow-down"/></span>
                <span>|</span>
                <span @mouseover="hover(3)">ElvUI<Icon type="ios-arrow-down"/></span>
                <span>|</span>
                <span @mouseover="hover(4)">魔兽插件<Icon type="ios-arrow-down"/></span>
                <span>|</span>
                <span @mouseover="leave">魔兽DB</span>
                <span>|</span>
                <span @mouseover="leave">易游</span>
                <span>|</span>
                <span @mouseover="leave">潘达利亚</span>
            </div>
            <div class="tabDiv">
                <div class="tab_one" v-show="[1,2,3].indexOf(is_show) > -1">
                    <p><span>战士</span><span>武器</span><span>狂怒</span></p>
                    <p><span>猎人</span><span>武器</span><span>狂怒</span></p>
                    <p><span>猎人</span><span>武器</span><span>狂怒</span></p>
                    <p><span>猎人</span><span>武器</span><span>狂怒</span></p>
                    <p><span>猎人</span><span>武器</span><span>狂怒</span></p>
                </div>
                <div class="tab_two" v-show="is_show === 4">
                    <p>
                        <span>界面梅花</span>
                        <span>宠物做起</span>
                        <span>背包银行</span>
                    </p>
                    <p>
                        <span>界面梅花</span>
                        <span>宠物做起</span>
                        <span>背包银行</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        is_show: 0
      }
    },
    mounted() {
    },
    methods: {
      hover(v) {
        this.is_show = v
        anime.remove('.tabDiv div p')
        anime({
          targets: v === 4 ? '.tabDiv .tab_two p' : '.tabDiv .tab_one p',
          delay: function(el, i) {
            return i * 100
          },
          opacity: [0, 1],
          translateX: [200, 0],
          duration: 1000
        });
      },
      leave() {
        this.is_show = 0
        anime.remove('.tabDiv div p')
      }
    },
    components: {}
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    .nav
        width 100%

        .tab
            display flex
            flex-direction column
            position absolute
            width 100%
            z-index 999
            .tabBar
                width 1240px
                margin 0 auto
                display flex
                flex-direction row

                span
                    padding 8px 12px
                    font-size 15px
                    color #69696d
                    font-weight 500
                    display block

                    i
                        padding-left 5px

                &:hover
                    cursor pointer

            .tabDiv
                & > div
                    width 1240px
                    margin 0 auto
                    background #fff
                    display flex
                    flex-direction column

                    p
                        padding 5px 15px
                        display block

                        & > span:first-child
                            color $lmColor
                            margin-right 15px

                        & > span
                            margin-right 5px
</style>