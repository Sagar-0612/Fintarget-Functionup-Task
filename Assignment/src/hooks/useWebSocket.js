
import { useState, useEffect } from 'react';
import io from 'socket.io-client';

const useWebSocket = (url) => {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    
    const socketOptions = {
      transports: ['websocket'], 
    };

    const newSocket = io(url, socketOptions);

    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, [url]);

  return socket;
};

export default useWebSocket;
