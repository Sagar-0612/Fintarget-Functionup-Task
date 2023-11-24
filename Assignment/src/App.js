
import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { WebSocketProvider } from './contexts/WebSocketContext';
import WebSocketManager from './components/WebSocketManager';
import Navbar from './components/Navbar';
import CandlestickChart from './components/CandlestickChart';

const App = () => {
  const [selectedInstrument, setSelectedInstrument] = useState('Nifty');
  const [selectedTimestamp, setSelectedTimestamp] = useState('1min');
  const [candlestickData, setCandlestickData] = useState([]);

  const handleInstrumentChange = (instrument) => {
    setSelectedInstrument(instrument);
  };

  const handleTimestampChange = (timestamp) => {
    setSelectedTimestamp(timestamp);
  };

  const fetchCandlestickData = async () => {
    try {
      
      const response = await fetch(`wss://functionup.fintarget.in/ws?id=fintarget-functionup?instrument=${selectedInstrument}&timestamp=${selectedTimestamp}`);
      const data = await response.json();
      setCandlestickData(data);
    } catch (error) {
      console.error('Error fetching candlestick data:', error);
    }
  };

  useEffect(() => {
    fetchCandlestickData();
  }, [selectedInstrument, selectedTimestamp]);

  return (
    <Provider store={store}>
      <WebSocketProvider>
        <div className="app">
          <WebSocketManager />
          <Navbar
            selectedInstrument={selectedInstrument}
            selectedTimestamp={selectedTimestamp}
            onInstrumentChange={handleInstrumentChange}
            onTimestampChange={handleTimestampChange}
          />
          <CandlestickChart data={candlestickData} color="green" />
        </div>
      </WebSocketProvider>
    </Provider>
  );
};

export default App;
