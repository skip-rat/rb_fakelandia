import { ALL_MISDEMEANOURS, MISDEMEANOURS } from "../../types/misdemeanours.types";
import './filterField.css';

export interface FilterFieldProps {
    onChangeFilter: (filter: string) => void;
}

const FilterField: React.FC<FilterFieldProps> = ({ onChangeFilter }: FilterFieldProps) => {

    const filterValues = [ALL_MISDEMEANOURS, ...MISDEMEANOURS];

    return (
        <>
            <div className="combobox combobox--centered">
                <label htmlFor='filterMisdemeanours'>Filter </label>
                <select id='filterMisdemeanours' name='filterMisdemeanours' onChange={(e) => {
                    onChangeFilter(e.target.value);
                }}>
                    {filterValues.map((md, index) => <option key={index} value={md}>{md}</option>)}
                </select>
            </div>
        </>
    );
};

export default FilterField;