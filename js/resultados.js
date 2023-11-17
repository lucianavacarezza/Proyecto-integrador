let apiKey = 'f5ffd30de9f03f8a95e76344c36e6cc3';


let queryString= location.search;
let queryStringObj= new URLSearchParams(queryString);
let valor= queryStringObj.get("buscador"); //valor query que voy a usar
let contador= 0 //utilizo un contador para poder recorrer mi lista de resultados

let link_busquedas= `https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&query=${valor}`; //formo un link en base a mi parametro valor
let resultadospelis= document.querySelector(".resultados") //selecciono la parte del html que quiero trabajar
fetch(link_busquedas) //accedo con el valor a los resultados parecidos a la busqueda dentro de mi api
.then(function(respuesta){
    return respuesta.json()
})
.then(function(data){
    console.log(data)
    if (data.results.length == 0 ) {

    document.querySelector(".resultados").style.display="none" //oculto la section de resultados
    document.querySelector(".error").innerText= `No se encontraron resultados para la busqueda ${valor}`
    document.querySelector(".error").style.display= "show"
    document.querySelector("error").style.color= "#c6c6c6"



    


        
    } else{
        document.querySelector(".resultados").style="show"
        document.querySelector(".titulo").innerText=` Resultados para: ${valor}`
        document.querySelector(".titulo").style.color= "#c6c6c6"
        document.querySelector(".sinresultados").style.display= "none"// oculto la secc sin resultados 

        
        
        for(let i=0; i<6 ; i++){
            if(data.results[i].media_type == "tv"){

                let url2 = `./detalle_series.html?id=${data.results[i].id};`
                document.querySelector(".resultados").innerHTML += `
                <article class="parecidobusqueda">
                        <a href=${url2}><img class="imagen_resultados" src="https://image.tmdb.org/t/p/w342${data.results[i].poster_path}" alt=""></a>
                        <h2 class="tituloparecido"><a class="link" href=${url2}>${data.results[i].title}</a></h2> 
                        <a class="link" href= ${url2} >${data.results[i].release_date}</a>
                </article>`


            }else if (data.results[i].media_type == "movie"){
                let url = `./detalle_peli.html?id=${data.results[i].id};`
                document.querySelector(".resultados").innerHTML+=

                `
                <article class="parecidobusqueda">
                        <a href=${url}><img class="imagen_resultados" src="https://image.tmdb.org/t/p/w342${data.results[i].poster_path}" alt=""></a>
                        <h2 class="tituloparecido"> <a class="link" href=${url}>${data.results[i].title}</a></h2> 
                        <a class= "link" href=${url}> ${data.results[i].release_date}</a>
                </article>
                `


            }
            
            
        } 
        contador += 1
        

        
    } 
})
.catch(function(error){
    console.log(error)
})
