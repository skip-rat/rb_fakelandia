
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './router';

const App : React.FC = () => {

	return (
    <div className='grid-layout'>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
	);
}

export default App;
