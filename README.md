# ncache

Esta é uma API Rest desenvolvida em Nodejs com a proposta de demonstrar a utilização de cache com Redis.

## Sobre o projeto

A ideia é demonstrar como permitir o acesso ao cache mais resiliente. A variável de ambiente **REDIS_REQUEST_TIMEOUT_MILLISECONDS** 
indica o tempo que a requisição aguardará a resposta o cache (Redis), utilizando a biblioteca **bluebird**. 

Caso o serviço do Redis esteja indisponível, o acesso ao cache será interrompido e a pesquisa do dado será feita diretamente no banco de dados.
  
## Getting Started

### Pré-requisitos

1. [nodejs.org](https://nodejs.org)
2. [npmjs.com](https://www.npmjs.com) (includes node)
3. git clone https://github.com/leandroandrade/ncache
3. cd ./ncache/
4. npm install
5. npm run dev

### Executando docker:

**Serviço Redis**
```
docker run --name redis --memory=50m -p 6379:6379 -d redis:5
```

**Serviço MySQL**
```
docker run --name mysql -e MYSQL_ROOT_PASSWORD=password -e MYSQL_DATABASE=dbcarros -p 3306:3306 -d mysql:5.7
```

**Cliente Redis Web**
```
docker run --rm --name redis-commander -d --env REDIS_HOSTS=10.238.34.83 -p 8081:8081 rediscommander/redis-commander:latest
```

**Acessando o MySQL e criando a tabela**
```
docker exec -ti mysql bash
create table carros(id int not null auto_increment primary key, placa varchar(20), situacao varchar(45));
```

Email: leandro.andrade2588@gmail.com

Conecte-se comigo em [LinkedIn](http://www.linkedin.com/in/leandro-andrade)

