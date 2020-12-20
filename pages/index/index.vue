<template>
  <view>
    <view v-for="(article,index) in articles" :key="index">
      <my-card :article="article"></my-card>
    </view>
  </view>
</template>

<script>
import { mapState } from 'vuex';
import myCard from '@/components/my-card/my-card.vue';
import $C from '@/common/config.js';
export default {
  components:{
    myCard
  },
  data() {
    return {
      articles: [],
      pageNum: 1,
      pageSize: 6,
      more: true
    };
  },
  computed:{
    ...mapState({
      loginStatus: state => state.loginStatus,
      user: state => state.user
    })
  },
  onLoad() {
    uni.getSystemInfo({
      success: res => {
        this.scrollH = res.windowHeight - uni.upx2px(101);
      }
    });
    uni.showLoading({
      title: '加载中'
    });
    this.getData();
    setTimeout(function() {
      console.log('开启下拉刷新');
    }, 1000);
    uni.startPullDownRefresh();
  },
  //触底
  onReachBottom() {
    //没有更多数据了
    if(!this.more) {
      uni.showToast({
        title: '已加载完毕',
        duration:1000
      });
      //直接返回，不要执行下面的代码
      return false;
    }
    //正常加载下一页
    this.pageNum = this.pageNum + 1;
    uni.showLoading({
      title:'加载中'
    });
    uni.request({
      url: $C.webUrl + '/article/page?pageNum='+this.pageNum+'&pageSize='+this.pageSize,
      method:'POST',
      header:{
        userId:1
      },
      success: (res) => {
        setTimeout(() => {
          uni.hideLoading();
        },100);
        //追加到原数组的尾部，不能覆盖原数组
        this.articles = this.articles.concat(res.data.data.list);
        //已经最后一页
        if(res.data.data.list.length < this.pageSize && this.pageNum > 0) {
          this.more = false;
        }
      }
    });
  },
  //下拉刷重新，要将当前页码重置为1，more属性回归成true
  onPullDownRefresh() {
    this.pageNum = 1
    this.more = true
    this.getData();
    //1秒下拉复原
    setTimeout(function() {
      uni.stopPullDownRefresh();
    },1000);
  },
  methods:{
    //请求数据，使用了uni原生的request请求，
    getData() {
      uni.request({
        url: $C.webUrl + '/article/page?pageNum='+this.pageNum+'&pageSize='+this.pageSize,
        method: 'POST',
        header: {
          userId: 1 //把id改为数量少点的用户
        },
        success: (res) => {
          //请求结束延时隐藏加载动画
          setTimeout(() => {
            uni.hideLoading();
          },100);
          //res.data.data包含了分页的许多信息，list属性才是真正的数据！
          console.log(res.data.data.pageSize);
          console.log(res.data.data.total);
          this.articles = res.data.data.list
        }
      });
    }
  }
};
</script>


<style >
	/* .cardes{
		height: 600rpx;
		display: flex;
		flex-direction: column;
		background-color: rgb(153,158,207);
		padding: 20rpx;
		border-radius: 10rpx;
		margin: 10rpx 10rpx 20rpx 10rpx;
	}
.cover{
  width: 700rpx;
  height :440px;
  border-radius: 10rpx;
  margin-bottom: 20rpx;
} */
</style>
