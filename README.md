# ncache

This is a Rest API with propose to show how to use MySQL and cache with Redis.

## About project

The idea is to demonstrate how to allow access to the most resilient cache. The environment variable **REDIS_REQUEST_TIMEOUT_MILLISECONDS**
indicates the time the request will wait for the cache to respond (Redis), using the **bluebird** library.

If the Redis service is unavailable, access to the cache will be interrupted and the data will be searched directly into
the database.

## Getting Started

### Running docker (only infrastructure) services:

```
docker-compose up -d
```

### Checkout

1. [nodejs.org](https://nodejs.org)
2. [npmjs.com](https://www.npmjs.com) (includes node)
3. git clone https://github.com/leandroandrade/ncache
3. cd ./ncache/
4. npm install or npm run dev

### Services:

Insert new language:
```
Method: POST
URL: http://localhost:3000/ncache/languages
Payload: {"language": "some_language", "description": "some_description"}

curl -X POST -H "Content-Type: application/json" -d '{"language": "some_language", "description": "some_description"}' http://localhost:3000/ncache/languages
```

Get all languages:
```
Method: GET
URL: http://localhost:3000/ncache/languages

curl http://localhost:3000/ncache/languages
```

Get specific language:
```
Method: GET
URL: http://localhost:3000/ncache/languages/:language

curl http://localhost:3000/ncache/languages/somelanguage
```

Email: leandro.andrade2588@gmail.com

Connect with me on [LinkedIn](http://www.linkedin.com/in/leandro-andrade)

