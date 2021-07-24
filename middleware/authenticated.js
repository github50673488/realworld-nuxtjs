/**
 * 验证是否登录的中间件 ,它既能处理服务端渲染的路由拦截又能处理客户端渲染的路由拦截
 */
export default function ({store, redirect}) {
    // If the user is not authenticated
    if (!store.state.user) {
        return redirect('/login')
    }
}
