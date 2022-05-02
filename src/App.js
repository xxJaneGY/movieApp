import { BrowserRouter as Routes, Route } from 'react-router-dom';
import Main from './componts/Main';
import Movie from './components/Movie';
import Detail from './components/MovieDetail';
import NotFound from './components/NotFound';
import { MOVIE, ROOT } from './constants/path';
function App() {
  return (
    <div className='container'>
      <Routes>
        <Route path={ROOT.ROOT} element={<Main />} />
        <Route path={ROOT.MOVIE} element={<Movie />} />
        <Route path={MOVIE.VIEW} element={<Detail />} />
        <Route path={ROOT.NOTFOUND} element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
