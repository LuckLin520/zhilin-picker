#### 使用方法
1､在 script 中引用组件
```javascript
	import zhilinPicker from "@/components/zhilin-picker/zhilin-picker.vue"
	//此插件已发布到npm，你也可以使用npm i zhilin-picker来安装到项目
	//uniapp官方插件市场https://ext.dcloud.net.cn/plugin?id=1469
	export default {
		components:{ zhilinPicker },
		data() {
			return {
				show: false,
				title: '选择福利',
				data: ['五险', '加班补助', '出国旅行', '生日福利', '年终分红', '带薪年假', '节日福利', '包吃', '包住', '聚餐经费', '交通补贴'],
			}
		},
		methods:{
			onChange(val){
				console.log(val)
			}
		}
	}
```
2､在 template 中使用组件
```html
<zhilin-picker
    v-model="show"
    :data="data"
    @change="onChange"
/>
```
#### 属性说明
| 属性名       | 类型              | 必填 | 默认值   | 说明                                                     |
| ------------ | ----------------- | ---- | -------- | :------------------------------------------------------- |
| v-model      | Boolean           | 是   |          | 控制选择器弹出/隐藏                                      |
| data         | Array/ObjectArray | 是   |          | 格式：["五险","加班补助"]或者[{label:"五险",value:"11"}] |
| title        | String            | 否   | "请选择" | 选择器的标题                                             |
| initSelected | Array             | 否   |          | 默认选中项                                               |
| multiple | Boolean             | 否   |   true    |  是否开启多选模式                                       |
| showSearch | Boolean          | 否   |   false    | 是否支持列表搜索，开启后默认对列表内进行模糊筛选，若要异步搜索需结合searchInput方法 |
| searchInput | Function          | 否   |           |  搜索的input事件回调，接收搜索框当前value，可用于对列表异步筛选 |
#### 事件说明
| 事件名  | 说明                 | 返回值                                                  |
| ------- | -------------------- | ------------------------------------------------------- |
| change  | 选中项发生改变时触发 | 接收当前选中项value，多选模式下为以英文逗号拼接的字符串 |
| confirm | 点击确定时触发       | 接收当前选中项value，多选模式下为以英文逗号拼接的字符串 |

