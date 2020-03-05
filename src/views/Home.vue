<template>
  <div class="home">
    <!-- 头部 -->
    <div><HeaderTop/></div>
    <!-- 导航 -->
    <NavBar :tabs='tabs' :navStyleObj='navStyleObj' :itemStyleObj='itemStyleObj'/>
  </div>
</template>

<script>
import HeaderTop from "../components/HeaderTop/HeaderTop";
import NavBar from '../components/NavBar/Navbar';
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
      }
    }
  },
  components: {
    HeaderTop,NavBar
  },
  beforeRouteEnter(to, from, next){
    next();
  }
};
</script>
