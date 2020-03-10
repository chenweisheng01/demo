<template>
    <header id="header">
        <div class="left" v-if="$route.path == '/home'" @click.stop="showCitySelector"> 
            <div id="cityArrow" class="arrow-down" :style="{ transform: toggle? 'rotate(-180deg)': '' }" ></div>
            <div id="cityText" class="city-text">{{currentCity.name}}</div>
        </div>
       
        <div class="back" v-else @click.stop="$router.back()"></div>
        <div class="title" v-if="$route.path=='/home'"></div>
        
        <div class="win-name">
            <slot name="winName"></slot>
        </div>

        <div class="right" v-if="$route.path =='/home'">
            <div class="member-center" :style="{ backgroundImage: `url(${rightIcon})` }"></div>
        </div>
        <slot name="address-right"></slot>
    </header>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'HeaderTop',
    props:{
        rightIcon: String,
        toggle: Boolean
    },
    computed:{
        ...mapState(['currentCity'])
    },
    watch: {
        currentCity: {
            handler: function(val,oval){
                this.$emit('toggleCitySelector')
            },
            deep: true
        }
    },
    methods: {
        showCitySelector(){
			console.log("showCitySelector")
            this.$emit('toggleCitySelector');
        }
    }
}
</script>


<style lang="scss" scoped>
	header {
	    position: fixed;
	    top: 0px;
	    width: 100%;
	    height: 50px;
	    z-index: 100;
	    background-color: #e1017e;
	    .win-name{
	    	position: relative;
	    	left: 113px;
	    	height: 20px;
	    	width: 150px;
	    	text-align: center;
	    	color: #fff;
	    	font-size: 20px;
	    	line-height: 50px;
	    }
	    .back{
	    	position: absolute;
	    	bottom: 0;
	    	left: 0;
	    	width: 50px;
	    	height: 50px;
	    	background: url(./image/back.png);
	    	background-position: 12px 16px;
	    	background-size: 11px 18px;
	    	background-repeat: no-repeat;
	    }
	    
	    .left {
	    	    position: absolute;
	    	    left: 0px;
	    	    bottom: 0px;
	    	    width: 90px;
	    	    height: 50px;
	    	    .arrow-down {
	    	    	    position: absolute;
	    	    	    top: 21px;
	    	    	    left: 12px;
	    	    	    width: 13px;
	    	    	    height: 8px;
	    	    	    background-image: url(./image/arrow_down.png);
	    	    	    background-size: 13px 8px;
	    	    	    -webkit-transition: all 200ms;
	    	    	    transition: all 200ms;
	    	    	}
	    	    .arrow-up {
	    	    	    -webkit-transform: rotate(-180deg);
	    	    	    transform: rotate(-180deg);
	    	    	}
	    	    .city-text {
	    	    	    width: 100%;
	    	    	    box-sizing: border-box;
	    	    	    height: 14px;
	    	    	    padding-left: 28px;
	    	    	    padding-top: 18px;
	    	    	    line-height: 14px;
	    	    	    font-size: 14px;
	    	    	    text-align: left;
	    	    	    color: #fff;
	    	    	}
	    	}
	    .title {
	    	    position: relative;
	    	    top: 15px;
	    	    left: 113px;
	    	    height: 20px;
	    	    width: 150px;
	    	    background-size: auto 20px;
	    	    background-image: url(./image/title_main.png);
	    	    background-position: center center;
	    	    background-repeat: no-repeat;
	    	}
	    .right {
	    	    position: absolute;
	    	    right: 0px;
	    	    bottom: 0px;
	    	    width: 60px;
	    	    height: 50px;
	    	    .member-center {
	    	    	    position: absolute;
	    	    	    top: 13px;
	    	    	    right: 12px;
	    	    	    width: 24px;
	    	    	    height: 24px;
	    	    	    // background-image: url(./image/membercenter.png);
	    	    	    background-size: auto 24px;
	    	    	    background-position: center center;
	    	    	}	
	    	}
	    	
	}
    // header {
    //     position: fixed;
    //     top: 0;
    //     width: 100%;
    //     height: 50px;
    //     z-index: 100;
    //     background-color: #e1017e;
    //     .back{
    //         position: absolute;
    //         bottom: 0;
    //         left: 0;
    //         width: 50px;
    //         height: 50px;
    //         background: url(./image/back.png) no-repeat 12px 16px / 11px 18px ;//background-size是最后的
    //     }
    //     .title{
    //        position: relative;
    //     //    top: 15px;
    //        left: 113px;
    //        width: 150px;
    //        height: 20px;
    //        background: url(./image/title_main.png) no-repeat center center ; 
    //        background-size: auto 20px;
    //     }
    //     .right{
    //         position: absolute;
    //         right: 0;
    //         bottom: 0;
    //         width: 60px;
    //         height: 50px;
    //         .member-center{
    //             position: absolute;
    //             top: 13px;
    //             right: 12px;
    //             width: 24px;
    //             height: 24px;
    //             background: url(./image/membercenter.png) no-repeat center center/ auto 24px;
    //         }
    //     }
    // }
</style>