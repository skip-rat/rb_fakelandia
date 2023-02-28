
import ConfessionTypeField, { ConfessionTypeFieldProps } from "./confessionTypeField";
import { render, screen } from '@testing-library/react';
import { WANT_TO_TALK } from "../../../types/misdemeanours.types";

test('component renders and shows correct input', async () => {
    const props: ConfessionTypeFieldProps = {
        confessionType: WANT_TO_TALK,
        setConfessionType: (value : string) => { }
    };

    render(<ConfessionTypeField {...props} />);

    // check component gets rendered
    // 'textarea' role is 'textbox'
    const field = screen.getByRole('combobox');
    expect(field).toBeInTheDocument();
});