const formLogin = document.getElementById("formLogin");
const nicknameLogin = document.getElementById("nicknameLogin");
const nicknameSenha = document.getElementById("nicknameSenha");

formLogin.addEventListener("submit", logarUsuario)

function logarUsuario(e){
  e.preventDefault();

  const data = {
    name: nicknameLogin.value,
    password: nicknameSenha.value 
  }

  fetch("http://localhost:3000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
  .then(res=> {
    if(res.status === 200){
      alert("Login realizado com sucesso!");
      localStorage.setItem("nickname", nicknameLogin.value)
      // window.location.replace("http://127.0.0.1:5500/sala1/sala1.html")
      
    }else{
      alert("Usuário não encontrado!")
    }
  })
  .catch((err) => console.log(err))
}