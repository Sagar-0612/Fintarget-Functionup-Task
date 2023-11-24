
const initialState = {
    liveData: {},
    socket: null,
  };
  
  export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_LIVE_DATA':
        return {
          ...state,
          liveData: action.payload,
        };
      case 'SET_WEBSOCKET':
        return {
          ...state,
          socket: action.payload,
        };
      default:
        return state;
    }
  };
  