// Conexão com o servidor Socket.io
const socket = io("http://localhost:3000/sala1");


const form = document.getElementById("form");
const input = document.getElementById("input");
const mensagens = document.getElementById("messages")

form.addEventListener('submit', (e)=>{
  e.preventDefault();
  if(input.value){
    socket.emit('chat message', input.value);
    input.value = '';
  }
})


// Escute o evento de conexão
socket.on("connect", () => {
  const engine = socket.io.engine;
  console.log(engine);
  console.log("Conectado na sala 1");
  
  socket.on('chat message', (msg)=>{
    const item = document.createElement('li');
    item.textContent = msg;
    console.log(msg)
    mensagens.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
  })
});



// Escute o evento de desconexão
socket.on("disconnect", () => {
  console.log("Desconectado do servidor Socket.io!");
});
