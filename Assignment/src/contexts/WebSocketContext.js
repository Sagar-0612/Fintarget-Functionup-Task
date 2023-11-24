
import React, { createContext, useContext } from 'react';
import useWebSocket from '../hooks/useWebSocket';

const WebSocketContext = createContext();

export const WebSocketProvider = ({ children }) => {
  const socket = useWebSocket('wss://functionup.fintarget.in/ws?id=fintarget-functionup');

  return (
    <WebSocketContext.Provider value={socket}>
      {children}
    </WebSocketContext.Provider>
  );
};

export const useWebSocketContext = () => {
  return useContext(WebSocketContext);
};
