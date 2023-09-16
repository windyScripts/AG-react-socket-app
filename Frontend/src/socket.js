import { io } from 'socket.io-client';
import authHeader from './services/auth-header';

const socket = io('http://localhost:3000', {
  extraHeaders:
    { Authorization: authHeader() },
});

export default socket;