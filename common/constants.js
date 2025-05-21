let updateSet = new Set([]);
let tabbar = {
	value: 0,
	items: [{
			icon: "grid",
			text: '主页',
			name: 0
		},
		{
			icon: "account",
			text: '我的',
			name: 1
		}
	]
}

let sex = [{
		name: "保密",
		value: "0"
	},
	{
		name: "男",
		value: "1"
	},
	{
		name: "女",
		value: "2"
	}
]

export default {
	tabbar,
	reload,
	sex
}

function reload(name) {
	switch (name) {
		case 0:
			uni.$u.route({
				url: 'pages/index/index',
				type: 'reLaunch'
			})
			break;
		case 1:
			uni.$u.route({
				url: 'pages/personal/index',
				type: 'reLaunch'
			})
			break;
		default:
			console.log("error name")
			break;
	}
}