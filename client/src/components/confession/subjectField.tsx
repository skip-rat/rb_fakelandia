import { useState } from "react";
import ErrorField from "./errorField";
import { validateSubject } from "./validator";

export interface SubjectFieldProps {
  subject: string;
  setSubject: (subject: string) => void;
}

const SubjectField: React.FC<SubjectFieldProps> = ({ subject, setSubject }: SubjectFieldProps) => {
  const [errorMsg, setErrorMsg] = useState<string | undefined>('');

  return (
    <>
      <label htmlFor='subjectField'>Subject </label>
      <input type='text' id='subjectField' name='subjectField' value={subject} onChange={(e) => {
        setErrorMsg(validateSubject(e.target.value));
        setSubject(e.target.value);
      }} />
      <br />
      <ErrorField msg={errorMsg} />
    </>
  );
};

export default SubjectField;
