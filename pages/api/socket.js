import io from 'socket.io-client';
let socket;

export const SocketApi = () => {
  socket = io('http://mobe-backend.herokuapp.com');
  socket.connect();
  return socket;
}