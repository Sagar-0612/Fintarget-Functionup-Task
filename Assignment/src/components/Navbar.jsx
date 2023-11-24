
import React from 'react';
import { useSelector } from 'react-redux';

const Navbar = ({ selectedInstrument, selectedTimestamp, onInstrumentChange, onTimestampChange }) => {
  const liveData = useSelector((state) => state.liveData);

  const instruments = Object.keys(liveData);

  const handleInstrumentChange = (e) => {
    const newInstrument = e.target.value;
    onInstrumentChange(newInstrument);
  };

  const handleTimestampChange = (e) => {
    const newTimestamp = e.target.value;
    onTimestampChange(newTimestamp);
  };

  return (
    <div className="navbar">
      <div>
        <label>Select Instrument: </label>
        <select value={selectedInstrument} onChange={handleInstrumentChange}>
          {instruments.map((instrument) => (
            <option key={instrument} value={instrument}>
              {instrument}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Select Timestamp: </label>
        <select value={selectedTimestamp} onChange={handleTimestampChange}>
          <option value="1min">1 min</option>
          <option value="3min">3 min</option>
          <option value="5min">5 min</option>
        </select>
      </div>
    </div>
  );
};

export default Navbar;
