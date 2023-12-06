# Docker 部署 Mastodon - 一个去中心化的社交平台

## 快速开始

### 初始化
```
docker compose -f docker-compose.yml run --rm mastodon-web bundle exec rake mastodon:setup
```

接着，按照提示，一步步来

![169908382570482.jpg](https://www.cuiwei.net/data/upload/2023-11-04/169908382570482.jpg)

接下来，生成一份配置，需要手动复制到`.env.production`文件

![169908382556411.jpg](https://www.cuiwei.net/data/upload/2023-11-04/169908382556411.jpg)

最后是导入数据，和创建管理员用户

![169908382571691.jpg](https://www.cuiwei.net/data/upload/2023-11-04/169908382571691.jpg)


### 启动服务
初始化完成，就能启动服务了
```
docker compose up -d
```

## 访问
https://test.cuiwei.net


## 其他
1. `.env.production` 从何而来？

下载官方代码
```
git clone git@github.com:mastodon/mastodon.git
```
根目录有个`.env.production.sample`文件，改名为 `.env.production`，(必须的)

如果是初次运行，记得把里面`LOCAL_DOMAIN`, `PostgreSQL`，`redis`这些你知道的都配好（不配也可以，只是最后一步创建管理员账号会失败）
