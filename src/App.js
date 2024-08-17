import ReactDOM from 'react-dom/client';
import Body from './components/Body';
import NavBar from './components/NavBar';
import {Routes, Route, BrowserRouter as Router} from 'react-router-dom';
import Restaurant from './components/Restaurant';
import { lazy, Suspense } from 'react';
import Cart from './components/Cart';
import { Provider } from 'react-redux';
import store from './redux/store';
const About = lazy(()=>import('./components/About'))
function App(){
    return (
      <Provider store={store}>
        <div>
          <Router>
            <NavBar />
            <Routes>
              <Route path="/" element={<Body />}></Route>
              <Route path="/cart" element={<Cart />}></Route>
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
      </Provider>
    );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);