
import SubjectField, { SubjectFieldProps } from "./subjectField";
import { render, screen } from '@testing-library/react';

test('component renders and shows correct input', async () => {
    const props: SubjectFieldProps = {
        subject: 'subject test value',
        setSubject: (value : string) => { }
    };

    render(<SubjectField {...props} />);

    // check component gets rendered
    const field = screen.getByLabelText(/Subject/i);
    expect(field).toBeInTheDocument();

    // check component shows value fed in via props
    expect(screen.getByDisplayValue(props.subject)).toBeInTheDocument();
});