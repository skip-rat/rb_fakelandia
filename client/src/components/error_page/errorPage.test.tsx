import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ErrorPage, { ErrorPageProps } from "./errorPage";

test('component renders and shows correct input', async () => {
    const props: ErrorPageProps = {
        msg: 'error page test value',
    };

    render(
        <BrowserRouter>
            <ErrorPage {...props} />
        </BrowserRouter>
    );

    // check component is rendered
    expect(screen.getByText(props.msg !== undefined ? props.msg : '')).toBeInTheDocument();
});