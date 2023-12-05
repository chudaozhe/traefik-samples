# 手把手教你用Traefik搭建Nextcloud，快速享受私人云服务！

## 启动服务
```shell
docker-compose up -d
```

## 停止服务
```shell
docker-compose down
```

## 关键设置
```shell
#批量解压.tar.gz文件
for file in *.tar.gz; do tar -xzvf "$file"; done

#手动安装应用后，给目录适当的权限
chown -R 33:tape custom_apps/

#消除告警，修改php文件
vi config/config.php
  'overwriteprotocol' => 'https',
  'trusted_proxies' => ['172.17.0.0/16'],
  'default_phone_region' => 'CN',
```

## 视频教程
https://www.bilibili.com/video/BV1ya4y1R7q2/