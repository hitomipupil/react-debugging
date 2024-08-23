import { render, screen } from "@testing-library/react";
import { expect, describe, it } from "vitest";

import Header from "./Header";

describe("Header component", () => {
    it("Testing if the header is in the DOM", () => {
        render(<Header title="Hello" />);

        const header = screen.getByRole("heading", { level: 1 });
        expect(header).toBeInTheDocument();
    });

    it("Testing props", () => {
        render(<Header title="Hello" />);

        const header = screen.getByRole("heading", { level: 1 });
        expect(header).toHaveTextContent("Hello");
    });
});
