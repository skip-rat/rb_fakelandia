import { MISDEMEANOURS, WANT_TO_TALK } from "../../../../types/misdemeanours.types";

export interface ConfessionTypeFieldProps {
    confessionType : string;
    setConfessionType : (subject : string) => void;
}

const ConfessionTypeField: React.FC<ConfessionTypeFieldProps> = ({ confessionType, setConfessionType }: ConfessionTypeFieldProps) => {
    const confessionTypes = [WANT_TO_TALK, ...MISDEMEANOURS];      // add a 'Want to talk' option to the list of misdemeanours to choose from

    return (
        <>
            <label htmlFor='confessionTypeField'>Reason for contact </label>
            <select id='confessionTypeField' value={confessionType} name='confessionTypeField' onChange={(e) => {
                setConfessionType(e.target.value);
            }}>
                {confessionTypes.map((type, index) => <option data-testid='confessionType' key={index} value={type}>{type}</option>)}
            </select>
        </>
    );
};

export default ConfessionTypeField;