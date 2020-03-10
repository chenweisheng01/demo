<template>
    <div class="list">
        <mt-tab-container v-model='selectedIndex' :swipeable='swipeable'>
            <mt-tab-container-item v-for="(type,index) in foodType" :key="index" :id='tabContainer[index]'> 
                <Food v-for="(item,index) in $store.state[type]" :key="index" :food="item"></Food>
            </mt-tab-container-item>
        </mt-tab-container>        
    </div>
</template>

<script>
import { mapState } from 'vuex';
import Food from '../Food/Food'
export default {
    name: 'FoodList',
    data(){
        return {
            swipeable: true,
            currentIndex: 0,
            swipeIndex: 0,
            tabContainer: [
                'tab-container1',
                'tab-container2',
                'tab-container3',
                'tab-container4',
                'tab-container5'
            ]
        }
    },
    components: {
        Food
    },
    computed: {
        ...mapState(['foodType','food','fruits']),
        selectedIndex: {
            get() {
                return this.currentIndex = `tab-container${this.$store.state.selectedIndex + 1}`;
            },
            set(val) {
				return this.currentIndex = `tab-container${this.$store.state.selectedIndex + 1}`
			}
        }
    },
    mounted(){
        console.log("food",this.food)
        if(this.fruits.length === 0){
            this.$store.dispatch('getFoods',{foodIndex: 0});
        }
    }
}
</script>

<style lang="scss" scoped>

</style>