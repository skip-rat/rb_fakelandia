
import Navbar from './nav/navbar';
import './header.css';


const Header : React.FC = () => {
   
   return (
    
    <header className='header'>
        <div className='header__content'>
            FAKLANDIA<br/>
            JUSTICE<br/>
            DEPARTMENT<br/>
        </div>
    
        <Navbar /> 
    </header>
    
)};

export default Header;