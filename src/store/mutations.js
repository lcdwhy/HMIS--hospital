export default{
    //存储到sessionStorage和vuex中
    AddAccount(state, payload){
        sessionStorage.setItem("token", payload.token);
        sessionStorage.setItem("UserName", payload.username);
        sessionStorage.setItem("UserImage", payload.imgUrl)
        state.token = payload.token;
        state.UserName = payload.username;
        state.UserImage = payload.imgUrl
    },
    //退出登录
    RemoveAccount(state){
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("UserName");
        sessionStorage.removeItem("UserImage")
        state.token = '';
        state.UserName = ''

    }
}