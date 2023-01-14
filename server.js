const { Server } = require("socket.io");

const io = new Server(3000);

console.log("server is running");

io.on("connection", (socket) => {
  // send a message to the client
  let emergencyMode = false;
  let batteryLow = false;
  if (batteryLow){
    socket.emit("batteryAlert", false);
  }else if(emergencyMode){
    socket.emit("emergency", true);
  }else{
    socket.emit("hello from server", true);
  };
  
  



  /*
  // receive a message from the client
  socket.on("hello from client", (...args) => {
    console.log(args[0]);
  });*/
});
