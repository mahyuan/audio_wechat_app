import wepy from 'wepy'
import qs from 'qs'
import _ from 'underscore'
export default {
	// 获取栈中的某个页面，默认当前页
	page(page) {
		const pages = getCurrentPages()
		page = page || pages.length - 1

		return pages[page]
	},

	reload() {
		const page = this.page()
		let url = '/' + this.page().route

		if(!_isEmpty(page.options)) {
			url += `?${qs.stringify(page.options)}`
		}

		wepy.reLaunch({
			url: url
		})
	}
}