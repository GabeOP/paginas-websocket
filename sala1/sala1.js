// Conexão com o servidor Socket.io
const socket = io("https://api-websocket.onrender.com/sala1");

//=========Parte que cuida das mensagens=========//
const form = document.getElementById("form");
const input = document.getElementById("input");
const mensagens = document.getElementById("messages");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (input.value) {
    socket.emit("chat message", input.value);
    input.value = "";
  }
});

const btnSair = document.getElementById("btnSair")

btnSair.addEventListener("click", ()=>{
  const confirmar = confirm("Tem certeza que você quer sair?");

  if(confirmar){
    localStorage.removeItem("nickname")
    window.location.replace("../inicio/inicio.html")
  }else{
    console.log("Negou")
  }
})

socket.on("connect", () => {
  socket.on("chat message", (msg) => {
    const item = document.createElement("li");
    const teste = localStorage.getItem("nickname");
    item.innerHTML = `${teste}: ${msg}`;
    mensagens.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
  });
});

// Escute o evento de desconexão
socket.on("disconnect", () => {
  console.log("Desconectado do servidor Socket.io!");
});
