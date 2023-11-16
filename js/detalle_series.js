let apiKey = 'f5ffd30de9f03f8a95e76344c36e6cc3'
let contenedor = document.querySelector(".mitad1")
let contenedor2 = document.querySelector(".otra_mitad")

let queryDetalle = location.search;
let queryStringDetalle = new URLSearchParams(queryDetalle)
let movie_id = queryStringDetalle.get("id")
// HAY QUE VER SI SE PUEDE SACAR

let api = `https://api.themoviedb.org/3/tv/${series_id}?api_key=${apiKey}`

fetch (api)
//fetch (`https://api.themoviedb.org/3/movie/?api_key=${apiKey}&query=${movie_id}`) 

.then(function(response){
    return response.json()
})

.then (function(data) {
    console.log(data)
    contenedor.innerHTML += `
    <div class="cali_fav">
        <article class="cali">
            <h4 class="calificacion">Calificación:</h4>
                <img src="./imgs/Black-5-Star-Rating-Transparent-PNG.png" alt="Imagen 5 estrellas">
        </article>
        article><h4 class="fav"><a href="./favoritos.html"> Añadir a favoritos</a></h4></article>
                
    </div>
           
    <article class="serie">
        <img class="igilmore" src="https://image.tmdb.org/t/p/w185/${data.poster_path}" alt="Imagen Gilmore Girls">
    </article>
    
    <br>
    <br>
`
})
    

fetch (api)

.then(function(response2){
    return response2.json()
})

.then (function(resultados) {
    console.log (resultados)
    //let genres = resultados.genres
    //for(let i=0; i<[resultados.genres].length; i++){
    //let generos = genres[i].name
    //}
    // ver generos
    contenedor2.innerHTML += `
        <article class="titulo">
                <h1 class="matilda"> ${resultados.original_title} <h1>
        </article>

        <div class="detalles">
            <ul class="generico">
                <li> <h4>Duración: ${resultados.runtime}  min</h4></li>
                <li><h4>Estreno: ${resultados.release_date}  </h4></li>
                <li> <h4> <a href="./detalle_genero.html">Genero:  </a></h4></li>                  
            </ul>
                
        </div>
    
        <article class="sinopsis">
            <h3 class="resumen"> Sinopsis:  </h3>
        </article>
    
        <article class="texto">
            <p> ${resultados.overview} </p>
        </article>
                
        </div>
    `
    })

.catch(function(error){
    console.log(error)
    })