import {request} from '@/plugins/request'

// 获取公共文章列表
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
        //     Authorization: `Token eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTg3MjM4LCJ1c2VybmFtZSI6Indvbml1NTA2NzM0ODgiLCJleHAiOjE2MzIwNzE1NjZ9.pfk19o9JWHbgoBlEu1LGqi1OUvDRN5GT61TFOZgPlOA`
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
