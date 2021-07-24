import {request} from '@/plugins/request'

// 获取公共文章列表
// 查询参数：
// 按标签筛选
//     ?tag=AngularJS
//     按作者筛选
//         ?author=jake
//         按用户筛选
//             ?favorited=jake
//             文章分页数（默认20）
// ?limit=20
//     文章偏移/跳跃数（默认0）
// ?offset=0
export const getArticles = params => {
    return request({
        method: 'GET',
        url: '/api/articles',
        params
    })
}

// 获取关注的用户文章列表
export const getFeedArticles = params => {
    return request({
        method: 'GET',
        url: '/api/articles/feed',
        // Authorization: Token jwt.token.here
        // headers: {
        //     // 注意数据格式：Token空格数据Token
        //     // 先手动写死，自动处理后续介绍
        //     Authorization: `Token eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTg3MjM4LCJ1c2VybmFtZSI6Indvbml1NTA2NzM0ODgiLCJleHAiOjE2MzIyNjc5ODZ9.zYGxYQ9aXfVHlLJfgQIqZgnZWkVjKBf38AUORPs4cIo`
        // },
        params
    })
}

// 添加点赞
export const addFavorite = slug => {
    return request({
        method: 'POST',
        url: `/api/articles/${slug}/favorite`
    })
}

// 取消点赞
export const deleteFavorite = slug => {
    return request({
        method: 'DELETE',
        url: `/api/articles/${slug}/favorite`
    })
}

// 获取文章详情
export const getArticle = slug => {
    return request({
        method: 'GET',
        url: `/api/articles/${slug}`
    })
}
