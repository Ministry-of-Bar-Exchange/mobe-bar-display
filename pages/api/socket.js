import io from 'socket.io-client';
let socket;

export const SocketApi = () => {
  // socket = io('http://192.168.1.108:8003');
  socket = io('https://mobe-backend.herokuapp.com');
  socket.connect();
  return socket;
}