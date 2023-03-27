// Conexão com o servidor Socket.io
const socket = io("http://localhost:3000/sala1");

// Escute o evento de conexão
socket.on("connect", () => {
  const engine = socket.io.engine;
  console.log(engine);
  console.log("Conectado na sala 1");
});

// Escute o evento de desconexão
socket.on("disconnect", () => {
  console.log("Desconectado do servidor Socket.io!");
});
