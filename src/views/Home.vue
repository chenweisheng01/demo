<template>
  <div class="home">
    <!-- 头部 toggleCitySelector-->
    <div><HeaderTop :rightIcon="rightIcon" :toggle="toggle" @toggleCitySelector="toggleCitySelector()" /></div>
    <!-- 导航 -->
    <NavBar ref="nav" :tabs='tabs' :navStyleObj='navStyleObj' :itemStyleObj='itemStyleObj'/>
    <!-- 轮播 -->
    <div class="wrapper" ref="wrapper">
      <div class="content">
        <div class="swiper-box" v-show="selectedIndex == 0">
          <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <img src="./image/banner1.png" alt="">
                </div>
                <div class="swiper-slide">
                  <img src="./image/banner2.png" alt="">
                </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
        </div>
        <v-touch  @swipeleft="swipeLeft" @swiperight="swipeRight">
          <FoodList></FoodList>
        </v-touch>
        <br><br><br><br><br><br><br>
      </div>
    </div>
   <!-- 选择城市模态框 -->
		<div class="v-modal" style="z-index: 20;background:rgba(0, 0, 0, 0);touch-action:none"  v-show="toggle" @click.stop="toggle=!toggle"></div>
    <CitySelector :toggle.sync="toggle"/>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { Indicator } from 'mint-ui'
import HeaderTop from "../components/HeaderTop/HeaderTop";
import NavBar from '../components/NavBar/Navbar';
import FoodList from '../components/FoodList/FoodList'
import CitySelector from '../components/CitySelector/CitySelector'
import 'swiper/css/swiper.min.css';
import Swiper from 'swiper';
import { setTimeout } from 'timers';
export default {
  name: "home",
  data(){
    return {
      tabs: [{name: '水果'},{name: '食材'},{name: '零食'},{name: '牛奶'},{name: '蔬菜'}],
      navStyleObj: {
        height: '38px',
        fontSize: '13.5px',
        background: '#E1017E'
      },
      itemStyleObj: {
        color: 'pink',
        activeColor: '#fff'
      },
      toggle: false,
      rightIcon: require('./image/membercenter.png'),
      swiperIndex: 0
    }
  },
  methods: {
    toggleCitySelector(){
      console.log('toggle===',this.toggle)
      this.toggle = !this.toggle;
    },
    swipeLeft(){
      if(this.swiperIndex === 4){
        return;
      }else{
        this.swiperIndex ++;
        this.$refs.nav.updateSelectedIndex(this.swiperIndex);
        // this.swiperInit();
      }
    },
    swipeRight(){
      if(this.swiperIndex === 0){
        return;
      }else{
        this.swiperIndex --;
        this.$refs.nav.updateSelectedIndex(this.swiperIndex);
        // this.swiperInit();
      }
    },
    swiperInit(){
      new Swiper(".swiper-container",{
          autoplay: {
            disableOnInteraction: false, //手动滑动之后不打断播放
            delay: 2000
          },
          speed: 300,
          loop: true,
          pagination: {
            el: '.swiper-pagination',
          },
        })
    }
  },
  beforeCreate(){
    // Indicator.open();
  },
  mounted(){
    this.$nextTick(()=>{
      this.swiperInit();
    //  setTimeout(()=>{
    //     Indicator.close();
    //  },2000)
    })
  },
  // updated(){
  //   this.$nextTick(() => {
  //       this._swiperInit()
  //     })
  // },
  components: {
    HeaderTop,NavBar,FoodList,CitySelector
  },
  computed: {
    ...mapState(['selectedIndex','indicator'])
  }
};
</script>

<style lang="scss" scoped> 
// .swiper-container{
//   margin-top: 88px;
//   .swiper-wrapper{
//     height: 150px;
//     .swiper-slide{
//       img{
//         width: 100%;
//         height: 100%;
//       }
//     }
//   }
// }
	.wrapper {
		margin-top: 88px;
		width: 100%;
		height: 680px;
		.content {
			width: 100%;
			// 轮播
			// overflow-y: ;
			.swiper-box {
				// padding-top: 28PX;
				width: 100%;
				height: 130px;
				// padding: 5px 7px;
				// padding-right: 20px;
				
				.swiper-container {
					width: 100%;
					height: 130px;
					box-sizing: border-box;
					.swiper-slide {
						img {
							width: 100%;
							height: 100%;
						}
					}
				}	
			}
		}
	}
</style>