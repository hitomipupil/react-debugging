import { screen, render } from "@testing-library/react";
import { it, expect, describe } from "vitest";
import App from "./App";

describe("Testing App component", () => {
    it("Check if header exits", () => {
        render(<App />);

        const header = screen.getByText("Hello");
        expect(header).toBeInTheDocument();
    });
    it("Check if header exits", () => {
        render(<App />);

        const header = screen.getByText("Hello");
        expect(header).toHaveClass("title");
    });
});
