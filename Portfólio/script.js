function toggleMode () {
    const html = document.documentElement

//  if(html.classList.contains('light')) {
//   html.classList.remove('light')
//  } else {
//   html.classList.add('light')
//  }

    html.classList.toggle("dark")

    const img = document.querySelector("#profile img")

    if(html.classList.contains('dark')) {
        img.setAttribute('src', './assets/profile1.jpg')
    } else {
        img.setAttribute('src', './assets/profile2.jpg')}

        
}

