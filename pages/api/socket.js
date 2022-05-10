import io from 'socket.io-client';
let socket;

export const SocketApi = () => {
  socket = io('https://mobe-backend.herokuapp.com');
  socket.connect();
  return socket;
}