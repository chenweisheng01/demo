<template>
    <mt-navbar v-model="selectedIndex" :style="{ height: navStyleObj.height,background: navStyleObj.background, top: top? '190px' : '50px' }">
        <mt-tab-item v-for="(tab,index) in tabs" :key="index" :id='index' 
        :class="{selected: index == selectedIndex}"
        :style="{borderBottomWidth: navStyleObj.fontSize?'0px':'2px'}"
        >
            <span :style="{ color: index==selectedIndex? itemStyleObj.activeColor: 'pink',
                            fontSize: navStyleObj.fontSize,
                            fontWeight: index==selectedIndex?'bold': 'normal' }"
            >{{tab.name}}</span>
        </mt-tab-item>
    </mt-navbar>
</template>
<script>
export default {
    name: 'NavBar',
    data() {
        return {
            selectedIndex: '0',
            fixedBoolean: true
        }
    },
    props:{
        tabs: Array,
        navStyleObj: {
            type: Object,
            default: function(){
                return {
                    height: '45px',
                    background: '#fff',
                    fontSize: '13.5px',
                }
            }
        },
        itemStyleObj: {
            type: Object,
            default: function(){
                return {
                    activeColor: '#E1017E'
                }
            }
        },
        top: {
            type: Boolean,
            default: false
        }
    },
    mounted(){
        console.log('fontSize='+this.navStyleObj.fontSize)
    }
}
</script>

<style lang="scss" scoped>
    .mint-navbar{
        position: fixed;
        top:50px;
        z-index: 5;
        width: 100%;
        background-color: #e1017e;
        .mint-tab-item{
            padding-top: 12px;
            padding-bottom: 12px;
            font-weight: bolder;
        }
        .mint-tab-item.is-selected {
			border-bottom: 2px solid #E1017E;
            color: #E1017E;
            margin-bottom: 0;
        }
        .is-selected {
            color: #fff;
        }
    }
    span{
        font-size: 15px;
        color: #fff;
        padding-left: 24.0235px;
        padding-right: 24.0235px;
        i{
            font-size: 20px;
            margin-right: 12px;
        }
    }
    .selected{
        border-bottom: 2px solid #E1017E;
    }
</style>