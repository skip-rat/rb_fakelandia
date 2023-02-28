import { useState } from "react";
import { WANT_TO_TALK } from "../../types/misdemeanours.types";
import ConfessionTypeField from "./confessionTypeField";
import DetailsField from "./detailsField";
import SubjectField from "./subjectField";
import { validateSubject, validateDetails } from "./validator";

const ConfessionForm: React.FC = () => {

    const [subject, setSubject] = useState('');
    const [confessionType, setConfessionType] = useState(WANT_TO_TALK);
    const [details, setDetails] = useState('');

    const handleSubmit = () => {
        console.log('form submit:');
        console.log('subject: ' + subject);
        console.log('confessionType: ' + confessionType);
        console.log('details: ' + details);
    };

    const validateForm = () : boolean => {
        return validateSubject(subject) === undefined &&
            validateDetails(details) === undefined;
    }

    return (
        <>
            <form>            
                <p>It's very difficult to catch people committing misdemeanours so we
                    appreciate it whrn citizens confess to us directly.</p>
                <p>However, if you're just having a hard day and need to vent then you're
                    welcome to contact us here too. Up to you!
                </p>               
                <br /><br />
                <SubjectField subject={subject} setSubject={setSubject} />
                <br /><br />
                <ConfessionTypeField confessionType={confessionType} setConfessionType={setConfessionType} />
                <br /><br />
                <DetailsField details={details} setDetails={setDetails} />
                <br /><br />
                <input type='button' id='submit' name='submit' value='Submit' disabled={!validateForm()} onClick={handleSubmit} />
                <br /><br />
            </form>
        </>
    );
};

export default ConfessionForm;