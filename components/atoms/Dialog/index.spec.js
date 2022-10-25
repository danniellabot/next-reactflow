import React from "react";
import { render } from "@testing-library/react";
import Dialog from "./index";

describe("Dialog component", () => {
    it("should render dialog component", () => {
        const { container } = render(<Dialog open={true}/>);
        expect(container).toBeTruthy();
    });
})