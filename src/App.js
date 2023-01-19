import logo from './logo.svg';
import './App.css';

// Redux toolkit 의 등장.
// 1. 설정할 게 너무 많음.
// 2. 미들웨어 설치.
// 3. 반복되는 코드.
// 4. 불변성 유지의 어려움.

function Counter() {
  return (
    <div>
      <button>+</button>0
    </div>
  );
}
function App() {
  return <Counter />;
}

export default App;
