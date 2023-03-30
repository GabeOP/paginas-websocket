const formCadastro = document.getElementById("formCadastro")
const nicknameCadastro = document.getElementById("nicknameCadastro")
const senhaCadastro = document.getElementById("senhaCadastro")


formCadastro.addEventListener('submit', cadastrarUsuario)

function cadastrarUsuario(e){
  e.preventDefault()

  if(!nicknameCadastro.value || !senhaCadastro.value){
    return alert("Preencha todos os campos")
  }
  
  const data = {
    name: nicknameCadastro.value,
    password: senhaCadastro.value
  }
  fetch("http://localhost:3000/cadastro", {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  .then(res =>{
    if(res.ok){
      alert("Usuário cadastrado com sucesso!")
      location.reload()
    }else if(res.status === 400){
      alert("Usuário já cadastrado. Tente novamente.")
    }
  })
  .catch(err => console.log(err))

}
