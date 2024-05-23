const url = 'https://api.openweathermap.org/data/2.5/'
const key = 'a586dfafdbc32da3c1640c21cdf30bd4'

const setQuery = (e) => {
    if (e.keyCode == '13') 
        getResult(searchBar.value)
    
}

const getResult = (cityName) => {
    let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=de`
    fetch(query)
    .then(weather => {
        return weather.json()
    })
    .then(displayResult)
}

const displayResult = (weather) => {
    console.log(weather)
}


const searchBar = document.getElementById('searchBar')
searchBar.addEventListener('keypress', setQuery)