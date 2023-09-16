import { render, screen } from "@testing-library/react";

import Alert, { ALERT } from "./Alert";

const mockedErrorMessage = "test_message";

test("should render Alert", () => {
    render(<Alert type={ALERT.SUCCESS}>{mockedErrorMessage}</Alert>);

    const message = screen.getByText(mockedErrorMessage);

    expect(message).toBeInTheDocument();
});
