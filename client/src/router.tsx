import { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import ConfessionForm from "./components/confession/confessionForm/confessionForm";
import Home from "./components/home/home";
import Misdemeanours from "./components/misdemeanours/misdemeanours";
import ErrorPage from "./components/error_page/errorPage";
import MainLayout from "./layouts/main_layout";
import { Misdemeanour } from './types/misdemeanours.types'

export type MisdemeanoursContextType = {
    misdemeanoursState: Array<Misdemeanour>;
    setMisdemeanoursState: React.Dispatch<React.SetStateAction<Misdemeanour[]>>;
}

export const MisdemeanoursContext = createContext<null | MisdemeanoursContextType>(null);

export const Router: React.FC = () => {
    const [misdemeanoursState, setMisdemeanoursState] = useState<Array<Misdemeanour>>([]);
    return (
        <MisdemeanoursContext.Provider value={{ misdemeanoursState, setMisdemeanoursState }}>

            <Routes>
                <Route path='/' element={<MainLayout />}>
                    <Route path='/' element={<Home />} />
                    <Route path='Confession' element={<ConfessionForm />} />
                    <Route path='Misdemeanours' element={<Misdemeanours />} />
                    <Route path='*' element={<ErrorPage msg={undefined} />} />
                </Route>
            </Routes>

        </MisdemeanoursContext.Provider>
    )
};