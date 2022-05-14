
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import FirstPage from './Components/FirstPage';
import TimerCounter from './Components/TimerCounter';
import TimeSet from './Components/TimeSet';

function App() {
  return (
    <section>
      <Router>
        <Routes>
          <Route path="/" element={<FirstPage header="Intervall" text="For all your timing needs"/>}></Route>
          <Route path="/TimeSet" element={<TimeSet/>}></Route>
          <Route path="/TimerCounter" element={<TimerCounter/>}></Route>
        </Routes>
      </Router>

    </section>
  );
}

export default App;
