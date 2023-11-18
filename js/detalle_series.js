let apiKey = 'f5ffd30de9f03f8a95e76344c36e6cc3'
let contenedor = document.querySelector(".mitad1")
let contenedor2 = document.querySelector(".otra_mitad")

let queryDetalle = location.search;
let queryStringDetalle = new URLSearchParams(queryDetalle)
let series_id = queryStringDetalle.get("id")
// HAY QUE VER SI SE PUEDE SACAR

let api = `https://api.themoviedb.org/3/tv/${series_id}?api_key=${apiKey}`

fetch (api)
.then(function(response){
    return response.json()
})

.then (function(data) {
    console.log(data)
    contenedor.innerHTML += `
    <div class="cali_fav">
        <article class="cali">
            <h4 class="calificacion">Calificación: </h4>
            <p class="rating"> ${data.vote_average} </p>
        </article>
        
                
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

    let generosLista = ``
        for (i=0; i< resultados.genres.length; i++){
            let genero =  resultados.genres[i]
            url= `./detalle_genero.html?idGenero=${genero.id}&name=${genero.name}`
            generosLista +=
            `
            <li><p> <a href = './detalle_genero.html?idGenero=${resultados.genres[i].id}&name=${resultados.genres[i].name}' > ${resultados.genres[i].name} </a> </p></li> 
            ` //sigue sin andar genero
        }

    contenedor2.innerHTML += `
        <article class="titulo">
             <h1 class="gilmore">${resultados.name}<h1>
        </article>

        <div class="detalles">
            <ul class="generico">
            <li><h4>Estreno: ${resultados.first_air_date}</h4></li>
            <ul class= "generos"> <h4> <a href="./detalle_genero.html">Genero:  </a></h4>
                ${generosLista}
            </ul>
    
        </div>

        <article class="sinopsis">
            <h3 class="resumen">    Sinopsis: </h3>
        </article>
        <article class="texto">
            <p> ${resultados.overview}</p>
        </article>

    `
    console.log('termina el fetch')
    })
.catch(function(error){
    console.log(error)
    })

let contenedor3 = document.querySelector (".recomendaciones")

let boton = document.querySelector(".boton2")
console.log(boton.addEventListener)
boton.addEventListener("click", function(e){
    console.log('Reconoce el evento')
    console.log(e)
    
    fetch (`https://api.themoviedb.org/3/tv/${series_id}/recommendations?api_key=${apiKey}`)
    .then (function(response3){ //no anda el then
        return response3.json()
    })
    .then (function(data2){
        console.log (data2)
        for (let i=0; i<10; i++){        
        let url2 = `./detalle_peli.html?id=${data2.results[i].id};`
        contenedor3.innerHTML += `
        <article class ="recomendacion" >
        <a href = ${url2}"> <img src = "https://image.tmdb.org/t/p/w185/${data2.results[i].poster_path}" > </a>
        </article>
        `
    }
    contador += 1
    
})

.catch (function(error3){
    console.log(error3)
})
})

let api3 = `https://api.themoviedb.org/3/tv/${series_id}/videos?api_key=${apiKey}`
let contenedor4 = document.querySelector (".trailer")
fetch(api3)
.then(function(response4){
    return response4.json()
})
.then(function(data3){
    console.log(data3)
    if (data3.results.length == 0){
        contenedor4.innerHTML +=
        `<p class= "aviso" > NO HAY TRAILERES DISPONIBLES </p>`
    }
    else {contenedor4.innerHTML += 
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/${data3.results[0].key}?si=owGirNL45lrh-asG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`}
})


let reviewsS= document.querySelector("#reviewsSeries")
let reviews_series= `https://api.themoviedb.org/3/tv/${series_id}/reviews?api_key=${apiKey}`

let iterador = 0
fetch(reviews_series)

.then(function (response){
    return response.json()
})

.then(function(data4) {   

    console.log(data4)
    reviewsS.style.color= "#c6c6c6"

    reviewsS.innerHTML+=
    
        `
        <h3 class= "opinion" > Reviews: </h3>
        <p class= "comentario" > ${data4.results[iterador].content}</p>
        <p class= "autor" > -${data4.results[iterador].author}</p>
        
        `

    
    
   


})

.catch (function(error){
    console.log(error)
})
