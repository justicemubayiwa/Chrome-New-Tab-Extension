fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=war")
    .then(res => res.json())
    .then(data => {
        document.body.style.backgroundImage = `url(${data.urls.full})`
    })