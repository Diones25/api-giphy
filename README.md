![img](./src/assets/giphy.png)
## API de consulta de gifs e stickers

Esta API tem como finalidade retornar um JSON gifs e stickers do site [giphy](https://developers.giphy.com/), com esse dados e possivel criar um sistema de pesquisa de gifs ou stickers ou mesmo exibir diretamente os gifs na tela de acordo com o que o usuario desejar. 

## Instalação

Para rodar o projeto deve ter instalado o Node JS e o NPM e rodar os comandos abaixo:

```bash
  npm install 
  npm run start
```

## Documentação da API

#### Rota de pesquisa de gifs

```
  GET /gifs/search
```
*Sem parâmetros
#### Retorna um JSON

```
  Deve retornar um JSON com os dados dos gifs como no exemplo abaixo.
  {
    "data": [
        {
            "type": "gif",
            "id": "YDVrp1M0myCQ",
            "url": "https://giphy.com/gifs/cheeseburger-food-YDVrp1M0myCQ",
            "slug": "cheeseburger-food-YDVrp1M0myCQ",
            "bitly_gif_url": "http://gph.is/VwBghy",
            "bitly_url": "http://gph.is/VwBghy",
            "embed_url": "https://giphy.com/embed/YDVrp1M0myCQ",
            "username": "",
            "source": "http://second-impact.tumblr.com/post/7372076237",
            "title": "cheeseburger GIF",
            "rating": "g",
            "content_url": "",
            "source_tld": "",
            "source_post_url": "http://second-impact.tumblr.com/post/7372076237",
            "is_sticker": 0,
            "import_datetime": "1970-01-01 00:00:00",
            "trending_datetime": "1970-01-01 00:00:00",
            "images": {
                "original": {
                    "height": "326",
                    "width": "480",
                    "size": "351849",
                    "url": "https://media3.giphy.com/media/YDVrp1M0myCQ/giphy.gif?cid=0307afd04l0qqtcyrmemi7x540npaurwzm2c0oz41mv63wd8&rid=giphy.gif&ct=g",
                    "mp4_size": "146003",
                    "mp4": "https://media3.giphy.com/media/YDVrp1M0myCQ/giphy.mp4?cid=0307afd04l0qqtcyrmemi7x540npaurwzm2c0oz41mv63wd8&rid=giphy.mp4&ct=g",
                    "webp_size": "132414",
                    "webp": "https://media3.giphy.com/media/YDVrp1M0myCQ/giphy.webp?cid=0307afd04l0qqtcyrmemi7x540npaurwzm2c0oz41mv63wd8&rid=giphy.webp&ct=g",
                    "frames": "10",
                    "hash": "382902c2dc3dba843e29815d36699024"
                },
                ......
````

#### Rota de pesquisa de stickers

```
  GET /stickers/search
```
*Sem parâmetros

#### Retorna um JSON

```
  Deve retornar um JSON com os dados dos stickers como no exemplo abaixo..

{
    "data": [
        {
            "type": "sticker",
            "id": "xuMP92roIsc0M",
            "url": "https://giphy.com/stickers/transparent-xuMP92roIsc0M",
            "slug": "transparent-xuMP92roIsc0M",
            "bitly_gif_url": "http://gph.is/1GcTEUN",
            "bitly_url": "http://gph.is/1GcTEUN",
            "embed_url": "https://giphy.com/embed/xuMP92roIsc0M",
            "username": "",
            "source": "http://reddit.com/r/gifs/comments/31fvrs/cheeseburger_cheeseburger_cheeseburger/",
            "title": "burger nom STICKER",
            "rating": "g",
            "content_url": "",
            "source_tld": "reddit.com",
            "source_post_url": "http://reddit.com/r/gifs/comments/31fvrs/cheeseburger_cheeseburger_cheeseburger/",
            "is_sticker": 1,
            "import_datetime": "2015-04-04 18:20:13",
            "trending_datetime": "0000-00-00 00:00:00",
            "images": {
                "original": {
                    "height": "334",
                    "width": "500",
                    "size": "1005109",
                    "url": "https://media1.giphy.com/media/xuMP92roIsc0M/giphy.gif?cid=0307afd0if43dfy9clebd0bnwmp4kqmp896jc9c8seacoczi&rid=giphy.gif&ct=s",
                    "mp4_size": "500891",
                    "mp4": "https://media1.giphy.com/media/xuMP92roIsc0M/giphy.mp4?cid=0307afd0if43dfy9clebd0bnwmp4kqmp896jc9c8seacoczi&rid=giphy.mp4&ct=s",
                    "webp_size": "503464",
                    "webp": "https://media1.giphy.com/media/xuMP92roIsc0M/giphy.webp?cid=0307afd0if43dfy9clebd0bnwmp4kqmp896jc9c8seacoczi&rid=giphy.webp&ct=s",
                    "frames": "18",
                    "hash": "b7b7b528a3beef86070a9d0362804c30"
                },
                .........
````

## Stack utilizada

**Back-end:** Node, Express, Axios

## 🚀 Sobre mim
Eu sou uma pessoa desenvolvedora full-stack, usando as tecnologias Node JS no Back-end e React no Fron-end, API Restfull e estudando outras tecnologias interessantes e em alta no mercado.

## 🛠 Habilidades
Javascript, HTML, CSS, Node JS, PHP, Mongo DB, React...

## 🔗 Links
[![GitHub](https://img.shields.io/badge/github-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://github.com/Diones25)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/diones-pereira-alves-31bb3969/)