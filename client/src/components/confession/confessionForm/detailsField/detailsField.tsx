import { useState } from "react";
import ErrorField from "../errorField/errorField";
import { validateDetails } from "../validator";
import '../confessionForm.css';

export interface DetailsFieldProps {
    details: string;
    setDetails: (subject: string) => void;
}

const DetailsField: React.FC<DetailsFieldProps> = ({ details, setDetails }: DetailsFieldProps) => {
    const [errorMsg, setErrorMsg] = useState<string | undefined>('');

    return (
        <>
            <label className="form__field" htmlFor='detailsField'>Details </label>
            <textarea id='detailsField' name='detailsField' rows={10} cols={30} value={details}
                className={errorMsg === undefined ? 'form__field-textarea form__field-valid' : 'form__field-textarea form__field-invalid'}
                onChange={(e) => {
                    setErrorMsg(validateDetails(e.target.value));
                    setDetails(e.target.value);
                }} />
            <br />
            <ErrorField msg={errorMsg} />
        </>
    );
};

export default DetailsField;
