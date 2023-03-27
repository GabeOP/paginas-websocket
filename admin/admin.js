// Conexão com o servidor Socket.io
const socket = io("http://localhost:3000/admin");

// Escute o evento de conexão
socket.on("connect", () => {
  const engine = socket.io.engine;
  console.log(engine);
  console.log("Conectado ao servidor na rota ADMIN");
});

// Escute o evento de desconexão
socket.on("disconnect", () => {
  console.log("Desconectado do servidor Socket.io!");
});
