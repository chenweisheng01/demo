export default {
    selectedIndex: 0,
    foodType: ["fruits", "ingredients", "snacks", "milks", "vegetables"],
    food: [{name:'佳沛奇异果', price: 28.9}, {name:'佳沛奇异果', price: 28.9},{name:'无敌菠萝', price: 30}, {name:'佳沛奇异果', price: 28.9}, {name:'无敌菠萝', price: 30}],
	fruits: [], //获取该地区商品列表
	ingredients: [],
	snacks:[],
	milks: [],
	vegetables: [],
    currentCity: {
		createAt: "2016-02-20T06:56:12.317Z",
		id: "56c80e0c789b068408ab5a6f",
		name: "北京市",
		updateAt: "2016-02-20T06:56:12.317Z"
	}, //默认为北京
	foodTypeId: [   //定义食品类别列表
		'56c80da883af652643474b6b',
		'56c80db78d04c83d3d1dedea',
		'56c80dc031da9e480de1cb49',
		'56c80dc383af652643474b6d',
		'56c80dc88d04c83d3d1dedf3'
	],
	indicator: {
		text: '加载中...',
		spinnerType: 'fading-circle'
	},//加载对象,
	supportArea: [], //支持地区列表
}