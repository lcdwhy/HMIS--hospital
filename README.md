# HMIS-hospital

## 下载使用
```
git clone git@github.com:lcdwhy/HMIS--hospital.git //下载到本地
cd HMIS-hospital //进入目录
npm install  或者yarn   //安装依赖
npm run serve //本地运行   （npm run build  //打包）
```

本项目采用前后端分离的写法，我把前端和后端都分开来写了，运行页面前需要启动本地后台服务器，可以下载我用express框架搭建的node服务器。node服务器地址：https://github.com/lcdwhy/HMIS-Server。

运行服务器后，再npm run serve 本地运行，打开页面就有数据了。

## 技术栈

vue+element-ui. vue中使用了vue-router配置路由，封装了axios来用作数据请求。 element-ui（使用Ant Design也行）帮助我们更快的构造页面。

## 项目介绍

医院后台管理系统，实现功能有：登录/注册功能、用户管理、医生管理、诊断管理、药品管理、文章管理。

登录界面：![image-20200913101111046](C:\Users\luochaodong\AppData\Roaming\Typora\typora-user-images\image-20200913101111046.png)

注册界面：

![image-20200913101139529](C:\Users\luochaodong\AppData\Roaming\Typora\typora-user-images\image-20200913101139529.png)



登录成功后，进入到主页，我们看用户列表模块，用户列表模块可以对用户进行编辑和删除

![image-20200913101240405](C:\Users\luochaodong\AppData\Roaming\Typora\typora-user-images\image-20200913101240405.png)

![image-20200913101357139](C:\Users\luochaodong\AppData\Roaming\Typora\typora-user-images\image-20200913101357139.png)

进入到用户编辑界面

![image-20200913101417190](C:\Users\luochaodong\AppData\Roaming\Typora\typora-user-images\image-20200913101417190.png)

医生管理和药品管理与用户管理功能类似。

文章管理，管理员可以发布文章

![image-20200913101531196](C:\Users\luochaodong\AppData\Roaming\Typora\typora-user-images\image-20200913101531196.png)