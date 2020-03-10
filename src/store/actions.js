import { reqFoodList, reqFruitsImage, reqSupportArea } from "../api";
import { GET_FOOD_LIST, UPDATE_SELECTEDINDEX, GET_SUPPORTAREA, SET_CURRENTCITY } from "./types";
import { Indicator } from 'mint-ui';
export default {
    async getFoods({commit,state},{foodIndex}) {
        Indicator.open();
        let filter = {
            fields: {},
            where: {
                supportAreaId: state.currentCity.id,
                wareTypeId: state.foodTypeId[foodIndex]
            },
            skip:0,
            limit: 5
        }
        filter = JSON.stringify(filter);
        console.log('filter', {filter});

        let foods,result;
        switch(foodIndex) {
            case 0: 
                foods = await reqFoodList({filter});
                result = await reqFruitsImage();
                break;
            case 1:
                foods = await reqFoodList({filter});
                result = await reqFruitsImage();
                break;
            case 2:
                foods = await reqFoodList({filter});
                result = await reqFruitsImage();
                break;
            case 3:
                foods = await reqFoodList({filter});
                result = await reqFruitsImage();
                break;
           default:
                foods = await reqFoodList({filter});
                result = await reqFruitsImage();
                break;
        }
        let foodsImage = result.data.url;
        // console.log("foodsImage==",foodsImage)
        // console.log("foods==",foods)
        commit(GET_FOOD_LIST,{ foods, foodsImage, typeIndex: foodIndex })
    },
    updateSelectedIndex({commit},selectedIndex){
        commit(UPDATE_SELECTEDINDEX,selectedIndex)
    },
    async getSupportArea({commit}){
        const result = await reqSupportArea();
        commit(GET_SUPPORTAREA,result)
    },
    setCurrentCity({commit},index){
        commit(SET_CURRENTCITY,index)
    }
}