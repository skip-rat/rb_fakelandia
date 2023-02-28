import { render, screen } from '@testing-library/react';
import FilterField, { FilterFieldProps } from "./filterField";

test('component renders and shows correct input', async () => {
    const props: FilterFieldProps = {
        onChangeFilter: (filter : string) => { }
    };

    render(<FilterField {...props}/>);

    const field = screen.getByRole('combobox');
    expect(field).toBeInTheDocument();
});