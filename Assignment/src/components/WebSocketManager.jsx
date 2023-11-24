
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setWebSocket, setLiveData } from '../redux/actions';
import { useWebSocketContext } from '../contexts/WebSocketContext';

const WebSocketManager = () => {
  const socket = useWebSocketContext();
  const dispatch = useDispatch();

  useEffect(() => {
    if (socket) {
      dispatch(setWebSocket(socket));

      socket.on('message', (data) => {
        console.log('Received data:', data);
        dispatch(setLiveData(JSON.parse(data)));
      });

      return () => {
        socket.off('message');
      };
    }
  }, [socket, dispatch]);

  return null;
};

export default WebSocketManager;
