import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { UserEvent } from "@testing-library/user-event/dist/types/setup/setup";

import TabButton from "./TabButton";

let user: UserEvent;

beforeEach(() => {
    onClickFn.mockClear();
    user = userEvent.setup();
});

const getButton = () => screen.getByRole("button");

const onClickFn = jest.fn();

test("should render TabButton", () => {
    render(<TabButton />);

    expect(getButton()).toBeInTheDocument();
});

test("should invoke 'onClick'", async () => {
    render(<TabButton onClick={onClickFn} />);

    await act(async () => await user.click(getButton()));

    expect(onClickFn).toBeCalledTimes(1);
});
