import { useState } from "react";
import ErrorField from "../errorField/errorField";
import { validateSubject } from "../validator";
import '../confessionForm.css';

export interface SubjectFieldProps {
    subject: string;
    setSubject: (subject: string) => void;
}

const SubjectField: React.FC<SubjectFieldProps> = ({ subject, setSubject }: SubjectFieldProps) => {
    const [errorMsg, setErrorMsg] = useState<string | undefined>('');

    return (
        <>
            <label className="form__field" htmlFor='subjectField'>Subject </label>
            <input type='text' id='subjectField' name='subjectField' value={subject}
                className={errorMsg === undefined ? 'form__field form__field-valid' : 'form__field form__field-invalid'}
                onChange={(e) => {
                    setErrorMsg(validateSubject(e.target.value));
                    setSubject(e.target.value);
                }} />
            <br />
            <ErrorField msg={errorMsg} />
        </>
    );
};

export default SubjectField;
