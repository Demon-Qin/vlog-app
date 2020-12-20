<template>
  <view>
    <view class="flex align-center p-2" hover-class="bg-light">
      <image :src="avatar" style="width: 100rpx;height: 100rpx;" class="rounded-circle"></image>
      <view class="flex flex-column flex-1 px-2">
        <text class="font-md">{{ user.nickname }}</text>
        <text class="font-sm font-weight-light">{{ article.publishDate }}</text>
      </view>
    </view>
    <uni-card
        :title="article.title"
      mode="style"
      :is-shadow="true"
      :thumbnail="article.cover"
      :extra="article.category"
      note="true"
    >
        <template v-slot:footer>
        <view class="footer-box">
          <span class="bg-color mr-3" v-for="(tag,index) in article.tagList " :key="index">
            {{ tag.tagName }}
          </span>
        </view>
      </template>
    </uni-card>
    <view style="background: #FFF;padding: 30rpx;"><rich-text :nodes="article.content"></rich-text>
    </view>
  </view>
</template>

<script>
import uniCard from '@/components/uni-card/uni-card.vue';
import { mapState } from 'vuex';
export default {
  data() {
    return {
      id:'',
      article:{}
    };
  },
  components: { uniCard },
  computed: {
    ...mapState({
      loginStatus: state => state.loginStatus,
      user: state => state.user
    }),
    //用户头像
    avatar() {
      return this.user.avatar ? this.user.avatar : '/static/default.jpg';
    }
  },
  onLoad(option) {
    console.log(option.id);
    this.id = option.id;
    this.getData();
  },
  methods:{
    getData() {
      this.$H.get('/article/' + this.id).then(res => {
        this.article = res;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
  .bg-color {
    color: #ffffff;
    background: #4568dc;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, rgb(69, 104, 220), rgb(176, 106, 179));  /* Chrome 10-25, Safari 5.1-6 */      
    background: linear-gradient(to right, rgb(69, 104, 220), rgb(176, 106, 179)); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */      
    opacity: 0.7;
    padding: 10rpx;
    border-radius: 20rpx;
  }
</style>