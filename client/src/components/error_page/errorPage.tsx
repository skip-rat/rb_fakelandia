import { useNavigate } from 'react-router-dom';
import './errorPage.css';

export interface ErrorPageProps {
    msg: string | undefined;
}

const ErrorPage: React.FC<ErrorPageProps> = ({ msg }: ErrorPageProps) => {

    function getMessage() {
        return msg !== undefined ? msg : 
            "The Page you are looking for doesn't exist or an other error occured";
    }

    const navigate = useNavigate();  
    const gotoHomePage = () => { navigate('/'); }

    return (
        <div className="container">
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <p>{getMessage()}</p>

            <p><button onClick={gotoHomePage}>Return to the Home Page</button></p>
        </div>

    );
}

export default ErrorPage;