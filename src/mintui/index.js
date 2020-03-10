import Vue from "vue"
import {
	Navbar, 
	TabItem, 
	Search, 
	Switch, 
	Field, 
	Cell, 
	Button,
	TabContainer,
	TabContainerItem,
	Toast,
	Picker,
	// MessageBox,
	Indicator 
} from 'mint-ui';

let obj = {
    Navbar, 
	TabItem, 
	Search, 
	Switch, 
	Field, 
	Cell, 
	Button,
	TabContainer,
	TabContainerItem,
	Toast,
	Picker,
};

Object.keys(obj).forEach( key => Vue.component(obj[key].name,obj[key]));