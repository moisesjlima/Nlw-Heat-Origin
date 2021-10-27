//window.prompt('Hello !!')

// const user = {
//   name: 'Moisés',
//   idade: 10,
//   Estagio: true
// }
//window.alert(user)

const linksSocialMedia = {
  github: 'moisesjlima',
  youtube: 'UCIINP7GJOxFoa7eEgC7OzNw',
  facebook: 'moises.jorge.7',
  instagram: 'moises_jorgecl',
  twitter: 'maykbrito'
}

function changeSocialMediaLinks() {
  //document.getElementById('userName').textContent = 'Mayke brito'
  //userName.textContent = 'Jorge costa' Já identifica que o nome antes do ponto é um ID, visto que, o proximo é um comando que faz alteração/interação do elemento (mexe no DOM)

  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    // alert(social)
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}
changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`
  //Fetch -> pega o Json/ou a informação que contiver nessa rota da rota e traz para dentro
  //Promise -> recurso que pega resposta de algo .then + Arrow Function
  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLinkGitHub.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()

//arrow function => forma contraida da function *Função anônima
