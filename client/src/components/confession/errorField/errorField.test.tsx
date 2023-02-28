
import ErrorField, { ErrorFieldProps } from "./errorField";
import { render, screen } from '@testing-library/react';

test('component renders and shows correct input', async () => {
    const props: ErrorFieldProps = {
        msg: 'error test value',
    };

    render(<ErrorField {...props} />);

    // check component is rendered
    expect(screen.getByText(props.msg !== undefined ? props.msg : '')).toBeInTheDocument();
});