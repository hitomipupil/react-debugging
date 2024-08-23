import { fireEvent, render, screen } from "@testing-library/react";
import { expect, describe, it, vi } from "vitest";

import Input from "./Input";

describe("Input component", () => {
    it("render input text and button", () => {
        render(<Input clickHandler={() => {}} />);

        const input = screen.getByRole("textbox");
        const button = screen.getByRole("button");
        expect(input).toBeInTheDocument();
        expect(button).toBeInTheDocument();
    });

    it("handle click is called with the input value", () => {
        const clickHandler = vi.fn();
        render(<Input clickHandler={clickHandler} />);
        const input = screen.getByRole("textbox");
        const button = screen.getByRole("button");

        fireEvent.change(input, { target: { value: "Hello" } });
        fireEvent.click(button);

        expect(clickHandler).toHaveBeenCalledWith("Hello");
    });
});
