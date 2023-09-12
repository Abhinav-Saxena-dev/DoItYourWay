import {Routes, Route} from 'react-router-dom';
import BoardContainer from './components/boards/BoardContainer';
import ShowActiveBoard from './components/boards/activeBoard/ShowActiveBoard';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<BoardContainer/>} />
        <Route path="/b/:id" element={<ShowActiveBoard/>} />
        {/* <Route component={NotFound} /> */}
      </Routes>
    </div>
  );
};

export default App;
