import ReactDOM from 'react-dom/client';
import Body from './components/Body';
import NavBar from './components/NavBar';
import {Routes, Route, BrowserRouter as Router} from 'react-router-dom';
import Restaurant from './components/Restaurant';
import { lazy, Suspense } from 'react';
const About = lazy(()=>import('./components/About'))
function App(){
    return (
      <div>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Body />}></Route>
            <Route
              path="/about"
              element={
                <Suspense fallback={<h1>Loaidng..</h1>}>
                  <About />
                </Suspense>
              }
            ></Route>
            <Route path="/restaurant/:resId" element={<Restaurant />}></Route>
          </Routes>
        </Router>
      </div>
    );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);