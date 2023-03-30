// Conexão com o servidor Socket.io
const socket = io("http://localhost:3000/sala1");

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

socket.on("connect", () => {
  socket.on("chat message", (msg) => {
    const item = document.createElement("li");
    const teste = localStorage.getItem("nickname");
    item.textContent = `${teste}: ${msg}`;
    mensagens.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
  });
});

// Escute o evento de desconexão
socket.on("disconnect", () => {
  console.log("Desconectado do servidor Socket.io!");
});
