export function queryArticle(data) {
  return Promise.all([
    window.$axios.post(`${window.url}/uploadimage?imageName=${data.imageName}`, data.param, data.config) //上传图片
  ])
}

export function queryNewArticle(data) {
  return Promise.all([
    window.$axios.post(`${window.url}/newarticle`, data.data, data.config) // 发布文章
  ])
}

export function queryGetArticle(data) {
  return Promise.all([
    window.$axios.post(`${window.url}/getarticle`, data.data) // 获取文章列表
  ])
}