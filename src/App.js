import {Routes, Route} from 'react-router-dom';
import BoardContainer from './components/boards/BoardContainer';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<BoardContainer/>} />
      </Routes>
    </div>
  );
};

export default App;
