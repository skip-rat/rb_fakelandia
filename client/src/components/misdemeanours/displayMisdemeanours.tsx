import { useState, useContext } from 'react';
import DisplayMisdemeanour from "./displayMisdemeanour";
import { MisdemeanoursContext } from "../../router";
import FilterField from "./filterField";
import { ALL_MISDEMEANOURS } from '../../types/misdemeanours.types';
import './displayMisdemeanours.css';
import LoadingSpinner from './loadingSpinner';

const DisplayMisdemeanours : React.FC = () => {
    const misdemeanourContext = useContext(MisdemeanoursContext);

    const [filter, setFilter] = useState(ALL_MISDEMEANOURS);

    if (misdemeanourContext?.misdemeanoursState.length === 0) {
        return (
            <LoadingSpinner />
        );
    }

    return (
        <>
            <FilterField onChangeFilter={setFilter}></FilterField>

            <table className='table'>
                <tbody >
                    <tr >
                        <th>Citizen ID</th>
                        <th>Date</th>
                        <th>Misdemeanour</th>
                        <th>Punishment idea</th>
                        <th>Confession</th>
                    </tr>
                    {
                        (filter === ALL_MISDEMEANOURS)
                            ? misdemeanourContext?.misdemeanoursState
                                .map((md, index) =>
                                    <DisplayMisdemeanour key={index} misdemeanour={md} />
                                )
                            : misdemeanourContext?.misdemeanoursState
                                .filter(item => item.misdemeanour === filter)
                                .map((md, index) =>
                                    <DisplayMisdemeanour key={index} misdemeanour={md} />
                                )
                    }
                </tbody>
            </table>
            <br />
        </>
    );
}

export default DisplayMisdemeanours;