- Start CMD
docker swarm init
docker swarm join --token SWMTKN-1-61x1vz706bybfql8uk3j6qpgfbaczl9ocimvg6ojzyxgo55x8r-6ltojxqinzyk9us11au62qw95 192.168.65.2:2377
docker stack deploy --compose-file=docker-compose.yml  prod
