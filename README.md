6-3

# 项目介绍
    视频：https://www.imooc.com/video/17315
    文档：https://www.imooc.com/article/28240
    
    打包：npm run release
    
    
    npm install babel-core babel-loader babel-polyfill babel-preset-es2015 babel-preset-latest webpack webpack-cli --save-dev
    
    把项目运行在8880端口
    npm install http-server -g
    npm run example
    
    
    生成文档
    npm install gitbook-cli -g
    执行gitbook init，会看到SUMMARY.md的各个文件都被创建了
    执行gitbook build转换成html
    
    创建标签：git tag -a 'v0.0.1' -m "第一版本"
    提交标签：git push origin v0.0.1
    
    提交到npm上，能让使用者通过npm进行安装
    首先运行npm adduser 和 npm login
    最后npm publish .
    
    升级项目
    新建dev分支并切换到当前分支：git checkout -b dev
    查看当前所在的分支：git branch
    到package.json把版本改掉
    
    把dev的分支合并到master，首先先切换到master分支上
    切换分支：git checkout master
    git merge dev
    
    
# lio-fast-cache
    短小精悍的前端缓存工具，防止内存“测漏”
    
## 简介

## 安装下载

- 安装下载 https://github.com/js-lio/lio-fast-cache/releases
- npm i lio-fast-cache
- CDN http://unpkg.com/lio-cache-npm/release/bundle.js

## 快速使用
    简单接入的文档
    
- [使用文档](./doc/use/README.md)
- [二次开发文档](./doc/dev/README.md)

## 交流 & 提问
    https://github.com/js-lio/lio-fast-cache/issues

## 关于作者

- 个人主页
- 收款二维码






