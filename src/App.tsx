
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import FirstPage from './Components/FirstPage';

function App() {
  return (
    <section>
      <Router>
        <Routes>
          <Route path="/" element={<FirstPage header="Intervall" text="For all your timing needs"/>}></Route>
        </Routes>
      </Router>

    </section>
  );
}

export default App;
