import request from './request'


// 用户登录
export const LoginApi = (params) => request.post('/api/login', params);
// 用户退出登录
export const LoginOutApi = (params) => request.get('/api/login/exitSession', {params})
// 用户注册的请求
export const RegisterApi = (params) => request.post('/api/register', params);
// export const RegisterApi = (params) => request.get('/register', {params});




// 请求 后台数据
export const AdminApi = (params) => request.post('/api/admin', params);


// 请求 管理员信息 数据 
export const InFoApi = (params) => request.post('/api/admin/info', params);
// 修改管理员的登录密码
export const ChangeApi = (params) => request.post('/api/admin/info/changepassword', params);

// 用户管理模块
// 请求用户列表的请求数据
export const UserListApi = (params) => request.post('/api/admin/user/userlist', params);
// 删除用户列表中指定的用户
export const UserDeleteApi = (params) => request.post('/api/admin/user/userlist/delete', params);
//编辑用户信息
export const UserEditApi = (params) => request.post('/api/admin/user/userlist/edit', params);


// 文章管理模块
// 请求文章列表的数据
export const ArticleListApi = (params) => request.post('/api/admin/article/articlelist', params);
// 文章上传到服务器
export const ReportApi = (params) => request.post('/api/admin/article/addarticle/report', params);
//删除文章的请求
export const ArticleDeleteApi = (params) => request.post('/api/admin/article/articlelist/delete', params);

// 医生管理模块
export const DoctorListApi = (params) =>request.post('/api/admin/doctors', params);
//删除指定的医生
export const DoctorDeleteApi = (params) => request.post('/api/admin/doctors/delete', params);
//编辑医生信息
export const DoctorEditApi = (params) => request.post('/api/admin/doctors/edit', params);

//药品管理模块
//药品列表数据请求模块
export const DurgListApi = (params) => request.post('/api/admin/durg', params);
//删除指定药品
export const DurgDeleteApi = (params) => request.post('/api/admin/durg/delete', params);
//编辑药品信息
export const DurgEditApi = (params) => request.post('/api/admin/durg/edit', params);

