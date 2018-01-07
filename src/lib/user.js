import wepy from 'wepy'
import utills from './utils'
import request from './request'
import _ from 'underscore'

const KEY = 'music_userToken'

export default {
	async login() {
		/*const loginData = await wepy.login({
			success: function(res) {
				if(res.code) {
					// 发起请求
					wepy.request({
						url: '',
						data: {
							code: res.code
						}
					})
				} esle {
					console.log('获取用户登录态失败' + res.errMsg)
				}
			}
		});*/
/*
		const loginData = await wepy.login()
		let userinfo = await wepy.getUserInfo({withCredentials: true})

		// 网易云音乐登录接口: /login/cellphone?phone=xxx&password=yyy

		unserinfo = await request('' + loginData.code, {
			methods: 'POST',
			data: {
				rawData: userinfo.rawData,
			},
			loadding: false
		})
		await wx.setStorage({
		  key: KEY,
		  data: _.pick(userinfo.data, 'token', 'timeout')
		})

		return userinfo.data*/

	},

	/*async uid() {
		const user = await wx.getStorage({key: KEY})

		return user,data.token.splite('').[0]
	}*/


}