import { GET_FOOD_LIST,UPDATE_SELECTEDINDEX, GET_SUPPORTAREA, SET_CURRENTCITY } from "./types";
import { Indicator } from 'mint-ui';
export default {
    [GET_FOOD_LIST](state, {foods, foodsImage, typeIndex}){
        foodsImage.forEach((item, index) => {
           if(foods[index] != undefined){
            foods[index].thumbnail.url = item.url;
           }
        });
        let foodType = state.foodType[typeIndex];
        state[foodType] = foods;
        Indicator.close();
    },
    [UPDATE_SELECTEDINDEX](state,selectedIndex){
        state.selectedIndex = selectedIndex;
    },
    [GET_SUPPORTAREA](state,result){
        state.supportArea = result;
    },
    [SET_CURRENTCITY](state,index){
        state.currentCity = state.supportArea[index]
    }
}