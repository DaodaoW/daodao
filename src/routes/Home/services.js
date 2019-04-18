export function queryGetArticleDetails(params) {
  return Promise.all([
    window.$axios.post(`${window.url}/getdetails`, params) // 获取文章列表
  ])
}