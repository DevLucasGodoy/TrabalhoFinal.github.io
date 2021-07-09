let requestURL = "https://www.luizpicolo.com.br/api.json";

var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

let mostrar = document.getElementById("not");
request.onload = function () {
  let noticias = request.response.articles;
  noticias.forEach(function(noticia) {
    let noticia01 = new Noticia(noticia.title, noticia.publishedAt, noticia.description, noticia.author, noticia.url);
    mostrar.insertAdjacentHTML('afterbegin', noticia01.mostrarNoticia);
  })
}