const formLogin = document.getElementById("formLogin");
const nicknameLogin = document.getElementById("nicknameLogin");
const nicknameSenha = document.getElementById("nicknameSenha");

formLogin.addEventListener("submit", logarUsuario);

function logarUsuario(e) {
  e.preventDefault();

  if(!nicknameLogin.value|| !nicknameSenha.value){
    return alert("Preencha todos os campos.")
  }


  const data = {
    name: nicknameLogin.value,
    password: nicknameSenha.value,
  };

  fetch("https://api-websocket.onrender.com/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      if (res.status === 200) {
        localStorage.setItem("nickname", nicknameLogin.value);
        window.location.replace("../sala1/sala1.html")
      } else if(res.status === 404){
        alert("Usuário não encontrado!")
      }else if(res.status === 422){
        alert("Senha incorreta.");
    }})
    .catch((err) => console.log(err));
}
