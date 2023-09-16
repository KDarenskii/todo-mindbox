import { render, screen } from "@testing-library/react";

import Todos from "./Todos";

test("should render Todos", () => {
    render(<Todos />);

    const title = screen.getByRole("heading", { name: /Todos/i });

    expect(title).toBeInTheDocument();
});
