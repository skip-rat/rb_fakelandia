import ConfessionForm from "./confessionForm";
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { UserEvent } from "@testing-library/user-event/dist/types/setup/setup";
import { MISDEMEANOURS, WANT_TO_TALK } from "../../types/misdemeanours.types";

test('form renders', async () => {
    render(<ConfessionForm />);

    // check form is rendered by looking for some header text fragment
    expect(screen.getByText("very difficult to catch people committing misdemeanours", { exact: false })).toBeInTheDocument();
});

test('form accepts user input', async () => {
    const user = userEvent.setup();

    render(<ConfessionForm />);

    // test entering input into the text fields
    testTextFieldInput(screen.getByLabelText(/Subject/i), 'some text', user);

    testTextFieldInput(screen.getByRole('textbox', { name: 'Details' }), 'the quick brown fox', user);

    // test input into the confession type combobox by selecting each possible value
    const select: HTMLSelectElement = screen.getByRole('combobox');
    const confessionTypes = [WANT_TO_TALK, ...MISDEMEANOURS];
    confessionTypes.forEach((type, index) => {
        testComboboxInput(select, 'confessionType', type, index);
    });
});

async function testTextFieldInput(field: HTMLElement, value: string, user: UserEvent) {
    userEvent.clear(field);

    await user.type(field, value);
    await waitFor(() => {
        expect(field).toHaveValue(value);
    });
}

async function testComboboxInput(combobox: HTMLSelectElement, optionTestID: string, selectedValue: string, selectedIndex: number) {
    fireEvent.change(combobox, { target: { value: selectedValue } })
    let options: HTMLOptionElement[] = screen.getAllByTestId(optionTestID);
    options.forEach((option, index) => {
        if (index === selectedIndex) {
            expect(option.selected).toBeTruthy();
        } else {
            expect(option.selected).toBeFalsy();
        }
    });
}