fetch('https://api.kanye.rest/')
    .then(response => response.text())
    .then(data => {
      let quote = JSON.stringify(data)
      document.getElementById('quote').innerHTML = `
       <p>${quote.slice(13,-4)}"<span id='quoteAuth'> - <strong>Kanye West"</strong></span> <p>
      ` 
    });


fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=night")
    .then(res => res.json())
    .then(data => {
        let backImg = document.body.style.backgroundImage = `url(${data.urls.full})`
        document.getElementById("author").innerHTML =`<a href="https://unsplash.com/@${data.user.username}" id='authorLink'>By: <strong>${data.user.name}</strong></a>`
        let authorLink = data.user.name
        console.log(data)

    })
    .catch(err => {

    document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1511195448930-75ffebe8e3a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MzA1MTc0NTM&ixlib=rb-1.2.1&q=80&w=1080)`

    })

    fetch("https://api.coingecko.com/api/v3/coins/ethereum")
    .then(res => {
      if(!res.ok){
        throw Error('Something went wrong')
      }
      return res.json()
    })
    .then(data => {
      document.getElementById("crypto-top").innerHTML = `
            <img src=${data.image.small} />
            <span>${data.name}</span>
            `
      document.getElementById("crypto").innerHTML += `
            <p> <span class='cryptoPrice'> Current:</span><span>$</span>${data.market_data.current_price.usd}</p>
            <p> <span class='cryptoPrice'> High:</span><span>$</span>${data.market_data.high_24h.usd}</p>
            <p> <span class='cryptoPrice'> Low:</span><span>$</span>${data.market_data.low_24h.usd}</p>
        `  
      const date = new Date()
      console.log(date.toLocaleTimeString("en-us", {timeStyle: "short"})) 
      
      function getCurrentTime() {
        const date = new Date()
        document.getElementById("time").textContent = date.toLocaleTimeString("en-us", {timeStyle: "medium"})
    }
    
    setInterval(getCurrentTime, 1000)

    navigator.geolocation.getCurrentPosition(position => {
      fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=imperial`)
          .then(res => {
              if (!res.ok) {
                  throw Error("Weather data not available")
              }
              return res.json()
          })
          .then(data => {
              const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
              document.getElementById("weather").innerHTML = `
                  <img src=${iconUrl} />
                  <p class="weather-temp">${Math.round(data.main.temp)}&deg;</p>
                  <p class="weather-city">${data.name}</p>
              `
          })
          .catch(err => console.error(err))
  });
          
          })
          .catch(err => console.error(err))

    

          