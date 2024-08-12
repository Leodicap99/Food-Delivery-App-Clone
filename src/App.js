import ReactDOM from 'react-dom/client';
import Body from './components/Body';
import NavBar from './components/NavBar';
function App(){
    return (
        <div>
            <NavBar />
            <Body />
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);