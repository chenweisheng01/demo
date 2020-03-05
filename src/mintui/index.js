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
	Picker
};

Object.keys(obj).forEach( key => Vue.component(obj[key].name,obj[key]));