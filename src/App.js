import './App.css';
import { createStore } from 'redux';
import { Provider, useDispatch, useSelector } from 'react-redux';
// Redux toolkit 의 등장.
// 1. 설정할 게 너무 많음.
// 2. 미들웨어 설치.
// 3. 반복되는 코드.
// 4. 불변성 유지의 어려움.
import { createSlice, configureStore } from '@reduxjs/toolkit';
// 1. Slice = 작은 스토어! 객체를 전달하면 됨.
const counterSlice = createSlice({
  name: 'counterSlice',
  initialState: { value: 0 },
  reducers: {
    up: (state, action) => {
      // console.log(action);
      // state.value = state.value + action.step;
      state.value = state.value + action.payload;
    },
  },
});
// 2. 스토어 구성. 객체를 전달하면 됨.
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

// function reducer(state, action) {
//   if (action.type === 'up') {
//     return { ...state, value: state.value + action.step };
//   }
//   return state;
// }
// const initialState = { value: 0 };
// const store = createStore(reducer, initialState);

function Counter() {
  // const count = useSelector((state) => state.value);
  const count = useSelector((state) => {
    // console.log(state);
    return state.counter.value;
  });
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => {
          // dispatch({ type: 'up', step: 2 });
          dispatch(counterSlice.actions.up(2));
        }}
      >
        +
      </button>
      {count}
    </div>
  );
}
function App() {
  return (
    <Provider store={store}>
      <div>
        <Counter />
      </div>
    </Provider>
  );
}

export default App;
