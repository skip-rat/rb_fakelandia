
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { MisdemeanoursContext } from "../../../router";
import { JUST_TALK, Misdemeanour, MisdemeanourKind } from "../../../types/misdemeanours.types";
import ConfessionTypeField from "./confessionTypeField/confessionTypeField";
import DetailsField from "./detailsField/detailsField";
import SubjectField from "./subjectField/subjectField";
import { validateSubject, validateDetails } from "./validator";
import './confessionForm.css';

type serverData = {
    success: boolean, // true for success; false for an error
    justTalked: boolean; // true if this was just wanting to talk, false for a real confession. Not present if success is false.
    message: string; // a message
}

export const ConfessionForm: React.FC = () => {

    const [subject, setSubject] = useState('');
    const [confessionType, setConfessionType] = useState(JUST_TALK);
    const [details, setDetails] = useState('');

    const misdemeanourContext = useContext(MisdemeanoursContext);

    const navigate = useNavigate()

    const handleSubmit = async (e: React.FormEvent<HTMLInputElement>) => {

        e.preventDefault();

        const confessionData = {
            subject: subject,
            reason: confessionType,
            details: details
        }

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(confessionData)
        };

        try {
            const apiResponse = await fetch('http://localhost:8080/api/confess', requestOptions);

            const data: serverData = await apiResponse.json();

            if (data.success === false) {
                alert(data.message);
            }
            else if (data.justTalked === false) {
                const date = new Date();

                const md: Misdemeanour = {

                    citizenId: getRandomInt(100, 10000),
                    misdemeanour: confessionType as MisdemeanourKind,
                    date: date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear(),
                    punishmentIdeaImageUrl: 'https://picsum.photos/60/60?random=10',
                    confession: confessionData.details
                };

                misdemeanourContext?.setMisdemeanoursState([...misdemeanourContext.misdemeanoursState, md]);

                navigate('/misdemeanours');
            }
        } catch (e) {
            return console.error(e);
        }

    };

    const getRandomInt = (min: number, max: number): number => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const validateForm = (): boolean => {
        return validateSubject(subject) === undefined &&
            validateDetails(details) === undefined;
    }

    return (
        <>
            <form className="form">
                <section className="form__text">
                    <p>It's very difficult to catch people committing misdemeanours so we
                        appreciate it when citizens confess to us directly.</p>
                    <p>However, if you're just having a hard day and need to vent then you're
                        welcome to contact us here too. Up to you!
                    </p>
                </section>
                <section>
                    <br /><br />
                    <SubjectField subject={subject} setSubject={setSubject} />
                    <br /><br />
                    <ConfessionTypeField confessionType={confessionType} setConfessionType={setConfessionType} />
                    <br /><br />
                    <DetailsField details={details} setDetails={setDetails} />
                    <br /><br />
                    <input type='button' id='confess' name='confess' value='Confess' disabled={!validateForm()} onClick={handleSubmit} />
                    <br /><br />
                </section>
            </form>
        </>
    );
};

export default ConfessionForm;