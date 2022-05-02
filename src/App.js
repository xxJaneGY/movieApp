import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Detail from './routes/Detail';
import Home from './routes/Home';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/movieApp/:movieId' element={<Detail />} />
        <Route path='/movieApp' element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
