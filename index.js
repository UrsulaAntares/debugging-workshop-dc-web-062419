document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('joke-form')
  const jokeList = document.getElementById('joke-list')
  // const newJokeLi = document.createElement('li')
  
  let joke

  function fetchJoke(){
    return fetch('https://icanhazdadjoke.com/', {
        headers: {
          'accept': "application/json",
          // 'Content-Type': 'application/json'
        }
      }
    )
    .then(res => res.json() )
    // .then(res => console.log(res))
    .then(jokeData => joke = jokeData.joke)

    // .then(jokeData => jokeData.joke)
    
  }

  fetchJoke()


  form.addEventListener('submit', (event) => {
    event.preventDefault()
    let username = document.getElementById('name-input').value
    if(username === "") return;
    // debugger
    // if(username !== "") {
    fetchJoke()
    let newJokeLi = document.createElement('li')
    newJokeLi.innerHTML = `
    <span class="username">${username} says:</span> ${joke}
    `
    jokeList.appendChild(newJokeLi)
  // }
})
})
