import { useState } from "react";
import ErrorField from "../errorField/errorField";
import { validateDetails } from "../validator";

export interface DetailsFieldProps {
  details: string;
  setDetails: (subject: string) => void;
}
 
const DetailsField: React.FC<DetailsFieldProps> = ({ details, setDetails }: DetailsFieldProps) => {
  const [errorMsg, setErrorMsg] = useState<string | undefined>('');

  return (
    <>
      <label htmlFor='detailsField'>Details </label>
      <textarea id='detailsField' name='detailsField' rows={10} cols={30} value={details} onChange={(e) => {
        setErrorMsg(validateDetails(e.target.value));
        setDetails(e.target.value);
      }} />
      <br />
      <ErrorField msg={errorMsg} />
    </>
  );
};

export default DetailsField;
