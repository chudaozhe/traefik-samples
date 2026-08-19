

# Traefik

启动服务
```shell
docker-compose up -d
```

停止服务
```shell
docker-compose down
```

部署示例应用前，先创建外部网络：
```shell
docker network create traefik_web-network
```
