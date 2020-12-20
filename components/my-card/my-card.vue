<template>
	<view class="my-card" @click="onClick">		
		<view style="display: flex;">
			<view class="thumb" style="width: 25%;">
				<view >
				<image :src="article.cover" class="img" mode="aspectFill" />			
				<view class="category">{{ article.category }}</view>							
				</view>	
			</view>	
			<view class="detail">
			    <view class="mid">	
				      <view class="title" >{{ article.title }}</view>		
				     <view class="summary" >
					     {{ article.summary.length >30 ? article.summary.substring(0,30) : article.summary}}
					</view>
					<view class="datetime" style="margin-right: 0rpx;">{{ article.publishDate }}</view>
			    </view>
				<view class="right"></view>
			</view>
		</view>
		<view class="tags" style="">				
				 <button class="tagItem" style="font-size: 8px;width: auto; margin: 0;" text v-for="(tag,index) in article.tagList" :key="index">{{ tag.tagName }}</button>
		</view>
	</view>
</template>

<script>
export default {
	name: 'MyCard',
	props: ['article'],//通过props传值，父组件中将article传过来
	computed: {
		//计算属性，文章长度超出时用。。。代替
		summary() {
			let summary = this.article.summary;
			if ( summary && summary.length > 30) {
				summary = summary.substring(0,30) + '....';
			}
			return summary;
		}
	},
	methods: {
		onClick() {
			//在子组件my-card.vue 中将点击事件传回父组件index.vue
			this.$emit('click');
		}
	}
};	
</script>

<style lang="scss" scoped>
	.my-card {
		padding: 20rpx 20rpx;
		border-bottom: 1px dashed #ddd;
		display: flex;
		flex-direction: column;
		background-color: #fff;
		font-size: 14px;
	.thumb {
		width: 200rpx;
		height: 220rpx;
		position: relative;
		.img {
			width: 150rpx;
			height: 150rpx;
			border-radius: 10%;
			position: absolute;
			top: 10rpx;
			left: 10rpx;
		}
		.category {
			color: #754a8f;
			padding: 2px 2px;
			position: absolute;
			bottom: 0;
			left: 10rpx;
		}
	}	
	.detail {
		padding-left: 20px;
		word-wrap: break-word;
        width: 550rpx;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		.mid {
			.title {
				font-weight: bold;
			}
		}
		.right {
			width: 70px;
			text-align: right;
		}
	}
	.tagItem{
		  color: #FFFFFF;
		  opacity: 0.5;
          background: #4568dc;  /* fallback for old browsers */      
		  background: -webkit-linear-gradient(to right, rgb(69, 104, 220), rgb(176, 106, 179));  /* Chrome 10-25, Safari 5.1-6 */      
		  background: linear-gradient(to right, rgb(69, 104, 220), rgb(176, 106, 179)); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */      
   	}
}

.tags {
	display: flex;
	justify-content: flex-start;
	width: 100%;
	//background-color: red;
	}
</style>
