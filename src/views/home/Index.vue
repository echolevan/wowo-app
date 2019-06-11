<template>
    <div class="home">
        <div class="input-string">
           <div class="input-string-left">
               <Input type="textarea" rows="5" placeholder="Enter something..." />
               <span>共12字符</span>
           </div>
            <div class="input-string-right">
                <Select>
                    <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>

                <Button style="margin: 15px 0">快速分享</Button>

                <div class="share_button">
                    <Button>整合界面分享</Button>
                    <Button>原创插件分享</Button>
                </div>
            </div>
        </div>

        <div class="list">
            <div class="one">
                <Card>
                    <p slot="title">The standard card</p>
                    <p>Content of card</p>
                    <p>Content of card</p>
                    <p>Content of card</p>
                </Card>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        cityList: []
      }
    },
    mounted() {
    },
    components: {}
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    .home
        width 1240px
        margin 0 auto
        .input-string
            width 100%
            display flex
            flex-direction row
            .input-string-left
                width 70%
            .input-string-right
                padding-left 15px
                width 30%
                display flex
                flex-direction column
                align-items flex-end
                .share_button button
                    margin-left 5px
</style>
