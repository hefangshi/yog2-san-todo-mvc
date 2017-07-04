# YOG2-SAN-TODO-MVC
=========================

## 安装依赖

```javascript
npm i -g yog2
```

## 准备基础运行环境

```bash
yog2 init project 
# 进入运行环境，安装NPM包
cd yog
npm i
# 启动运行环境，会持续监听
npm run debug
```

## 准备业务代码

```bash
# 准备APP
git clone https://github.com/hefangshi/yog2-san-todo-mvc
cd yog2-san-todo-mvc
# 安装编译依赖，忽略UNMET PEER DEPENDENCY
npm i
# 安装服务端NPM包
cd server
npm i
cd ..
# 安装客户端NPM包
cd client
npm i
cd ..
# 发布项目，会持续监听
npm run debug
# 或者使用发布模式，查看优化后的效果
npm run debug-prod
```

## 查看

```bash
# 前端渲染
open http://127.0.0.1:8085/san-todo-mvc
# 开启后端渲染
open http://127.0.0.1:8085/san-todo-mvc?ssr=1
```