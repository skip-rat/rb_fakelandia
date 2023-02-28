import './home.css';
import { MisdemeanoursContext } from "../../router";
import { useContext } from 'react';

const Home : React.FC = () => {

const misdemeanourContext = useContext(MisdemeanoursContext);

    return (
        <>
            <div className='home'>
                <p>Welcome to the home of the Justice Department of Fakelandia.</p>
                <p>Here you can browse a list of recent misdemeanours committed by our citizens, or 
                you can confess to your own misdemeanour.
                </p> 
                                                     
                <p>Total misdemeanours {misdemeanourContext?.misdemeanoursState.length}</p> 
                <p>Number of confessions today {misdemeanourContext?.misdemeanoursState
                                                .filter(md => md.confession !== undefined).length
                                               }</p>
            
            </div>            
        </>
    )};
export default Home;