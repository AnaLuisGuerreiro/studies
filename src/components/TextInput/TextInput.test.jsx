import { render, screen } from "@testing-library/react";

import TextInput from "./TextInput";
import userEvent from "@testing-library/user-event";

describe("<TextInput/>", () => {
  it("should have a value of searchValue", () => {
    const fn = jest.fn();
    render(<TextInput handleChange={fn} searchValue={"test"} />);

    const input = screen.getByPlaceholderText(/search for a post/i);
    expect(input.value).toBe("test");
  });

  it("should call handleChange function on each key pressed", () => {
    const fn = jest.fn();
    render(<TextInput handleChange={fn} />);

    const input = screen.getByPlaceholderText(/search for a post/i);

    const value = "o valor";

    userEvent.type(input, value);

    expect(input.value).toBe(value);
    expect(fn).toHaveBeenCalledTimes(value.length);
  });

  it("should match snaptshot", () => {
    const fn = jest.fn();
    const { container } = render(<TextInput handleChange={fn} />);
    expect(container).toMatchSnapshot();
  });
});
