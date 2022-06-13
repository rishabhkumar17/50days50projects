 const jokeEl = document.getElementById('id')
 const jokeBtn = document.getElementById('jokeBtn')

 generateJoke()

 function generateJoke() {
    const config = {
        headers: {
            Accept: 'application/json',
        },
    }

    fetch('https://icanhazdadjoke.com', config)
    .then(res => res.json())
    .then(data => console.log(data))
 }

