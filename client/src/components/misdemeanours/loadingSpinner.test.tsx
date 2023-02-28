import { render, screen } from "@testing-library/react";
import LoadingSpinner from "./loadingSpinner";

test('component renders', async () => {

    render(<LoadingSpinner/>);

    // check component is rendered
    expect(screen.getByText('Loading...')).toBeInTheDocument();
});