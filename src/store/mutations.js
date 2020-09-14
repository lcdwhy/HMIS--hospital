export default{
    //存储到sessionStorage和vuex中
    AddAccount(state, payload){
        sessionStorage.setItem("token", payload.token);
        sessionStorage.setItem("UserName", payload.username);
        state.token = payload.token;
        state.UserName = payload.username;
    },
    //退出登录
    RemoveAccount(state){
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("UserName");
        state.token = '';
        state.UserName = ''

    }
}