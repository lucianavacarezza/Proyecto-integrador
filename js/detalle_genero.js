let apiKey = 'f5ffd30de9f03f8a95e76344c36e6cc3'

fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`)

.then(function (response){
    return response.json()
})
.then(function(data) {
    console.log(data)
})




// https://api.themoviedb.org/3/discover/tv