import wepy from 'wepy'

export default async function request(url, options = {}) {
	options.url = url
	let response = await wpy.request(options)

	if(response.statusCode !== 200) {
		return Promise.reject(response)
	}

	return response
}