<template>
	<view>
		<template v-if="loginStatus">
			<uni-list-item title="账号与安全" @click="open('user-safe')"></uni-list-item>
			<uni-list-item title="资料编辑" @click="open('user-info')"></uni-list-item>
		</template>
		<uni-list-item title="清除缓存" @click="clear">
			<view slot="right" class="text-muted">{{ currentSize | format }}</view>
		</uni-list-item>
		<uni-list-item v-if="loginStatus" title="意见反馈" @click="open('user-feedback')"></uni-list-item>
	    <uni-list-item title="关于社区" @click="open('about')"></uni-list-item>
		<view class="py-2 px-3" v-if="loginStatus">
			<button class="bg-main text-white" style="border-radius: 50rpx; border: 0;" type="primary" @click="logout">退出登录</button>
		</view>	
	</view>
</template>

<script>
	import uniListItem from'@/components/uni-ui/uni-list-item/uni-list-item.vue';
	import{mapState} from 'vuex';
	export default {
		components:{
			uniListItem
		},
		data() {
			return {
				currentSize:0
			};
		},
		onLoad(){
			//调用methods中的getStrorgeInfo方法，获取本地存储
			this.getStrorgeInfo();
		},
		//过滤器，按照缓存大小显示不同单位
		filters:{
			format(value){
				return value>1024 ? (value/1024).toFixed(2) + 'MB': value.toFixed(2)+'KB';
			}
		},
		computed:{
			...mapState({
				loginStatus:state => state.loginStatus
			})
		},
		methods: {
			//获得本地存储内容
		  getStrorgeInfo(){
			  let res = uni.getStorageInfoSync();
			  this.currentSize = res.currentSize;
		  },
		  //封装根据path跳转页面的方法
		  open(path){
			  console.log(path)
			  uni.navigateTo({
			  	url: `../${path}/${path}`
			  });
		  },
		  //清除缓存
		  clear(){
			  uni.showaModal({
			  	title:'提示',
				content:'是否清除缓存',
				canceText:'不清除',
				confirmText:'清除',
				success:res =>{
					if(res.confirm){
						uni.clearStorageSync();
						this.getStrorgeInfo();
						uni.showToast({
							title:'清除成功',
							icon:'none'
						});
					}
				}
			  });
		  },
		  //退出登陆
		logout(){
			uni.showModal({
				content:'是否要退出登录',
				success: res =>{
					if(res.confirm){
						this.$store.commit('logout');
						//返回上一级
						uni.navigateBack({
							delta:1
						});
						uni.showToast({
							title:'退出成功',
							icon:'none'
						});	
				    }
			    }
		    });  
		}
	}
};	
</script>

<style>

</style>
