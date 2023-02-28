
import DetailsField, { DetailsFieldProps } from "./detailsField";
import { render, screen } from '@testing-library/react';

test('component renders and shows correct input', async () => {
    const props: DetailsFieldProps = {
        details: 'details test value',
        setDetails: (value : string) => { }
    };

    render(<DetailsField {...props} />);

    // check component gets rendered
    // 'textarea' role is 'textbox'
    const field = screen.getByRole('textbox');
    expect(field).toBeInTheDocument();

    // check component shows value fed in via props
    expect(screen.getByDisplayValue(props.details)).toBeInTheDocument();
});