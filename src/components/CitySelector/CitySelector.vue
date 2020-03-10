<template>
    <div class="out-box" v-show="toggle">
        <header>
            <div class="title">选择所需要的服务地区</div>
        </header>
        <div class="wrapper" ref="wrapper">
            <ul class="content">
                <li v-for="(country,index) in supportArea" :key="index" @click.prevent="setCurrentCity(index)">{{country.name}}</li>
            </ul>
        </div>
    </div>
</template>
<script>
import { mapState,mapActions } from 'vuex';
import BScroll from 'better-scroll'
export default {
    name:'CitySelector',
    props: ["toggle"],
    computed:{
        ...mapState(['supportArea'])
    },
    mounted(){
        this.getSupportArea();
        this.$nextTick(() => {
            if(!this.scroll){
                this.scroll = new BScroll(this.$refs.wrapper,{
                    click: true,
                    preventDefault: true,
                    mouseWheel: true
                })
            }else{
                this.scroll.refresh();
            }
        })
    },
    updated(){
        this.scroll.refresh();
        console.log("update");
    },
    methods:{
        ...mapActions(['setCurrentCity','getSupportArea'])
    }
}
</script>
<style lang="scss" scoped>
.out-box{
		// display: none;
	    height: 320px;
	    width: 240px;
	    background-color: rgba(0,0,0,0.7);
	    border-radius: 10px;
	    position: absolute;
	    left: 50%;
	    top: 50%;
	    margin-left: -120px;
	    margin-top: -160px;
	    z-index: 55;
	    header {
	        width: 100%;
	        height: 44px;
	        .title {
	        	    box-sizing: border-box;
	        	    width: auto;
	        	    height: 100%;
	        	    margin: 0 32px;
	        	    padding-top: 14px;
	        	    padding-bottom: 14px;
	        	    border-bottom: 2px solid #c8026f;
	        	    color: #fff;
	        	    font-size: 14px;
	        	    text-align: center;
	        	}
	    }
	    .wrapper {
	        width: 100%;
	        height: 275px;
			overflow: hidden;
	        .content {
	        	li {
	        	    width: 100%;
	        	    height: 55px;
	        	    line-height: 55px;
	        	    text-align: center;
	        	    font-size: 20px;
	        	    color: #fff;
	        	}
	        }
	    }
	}	
</style>

