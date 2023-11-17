let apiKey = 'f5ffd30de9f03f8a95e76344c36e6cc3'
let lista = document.querySelector(".ulpeliculas")
fetch (`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`)

.then(function (response){
    return response.json()
})

.then (function(data) {
  console.log(data)
 for (let i = 0; i < data.genres.length ; i++) {
      let genero =  data.genres[i]
      lista.innerHTML += `
      <li class="terror"> <a class="link"  href="./detalle_genero.html?idGenero=${genero.id}&name=${genero.name}"> ${data.genres[i].name}</a></li>
      `
    }
  })

  .catch(function(error){
    console.log(error)
})
    
let lista2 = document.querySelector(".ulseries")
fetch (`https://api.themoviedb.org/3/genre/tv/list?api_key=${apiKey}`)

.then(function (response2){
    return response2.json()
 })
 .then (function(data2) {
    console.log(data2)

    for (let i = 0; i < data2.genres.length ; i++) {
      lista2.innerHTML += `
      <li class="terror"> <a class="link"  href="./detalle_genero.html"> ${data2.genres[i].name}</a></li>
      `
    }
  })

.catch(function(error2){
      console.log(error2)
})