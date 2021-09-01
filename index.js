fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=rome")
    .then(res => res.json())
    .then(data => {
        document.body.style.backgroundImage = `url(${data.urls.full})`
        document.getElementById("author").textContent = `By: ${data.user.name}`
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
          })
          .catch(err => console.error(err))