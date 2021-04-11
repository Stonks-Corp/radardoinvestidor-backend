# Radar do investido - REST API (backend)

## Como rodar o projeto

O projeto está organizado em containers. Para rodar o projeto em ambiente de desenvolvimento:

1. Clonar o projeto:
```
git clone http://tools.ages.pucrs.br/radar-do-investidor/backend.git
```
2. Entrar no diretório do projeto:
```
$ cd backend
$ docker-compose -f docker-compose.yaml up
```


## Alguns comandos para minupulação do postgres

'''
$ docker exec -it warren-db bash
$ psql warren warren
$ \x
$ select * from public."Fundo";
$ select count(*) from public."Fundo";
$ delete from public."Fundo";
'''