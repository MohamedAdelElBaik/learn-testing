import { render, screen } from "@testing-library/react";
import { Application } from "./Applications";

describe("Applications", () => {
  test("renders correctly", () => {
    render(<Application />);

    const nameElement = screen.getByRole("textbox", {
      name: "Name",
    });
    expect(nameElement).toBeInTheDocument();

    const bioElement = screen.getByRole("textbox", {
      name: "Bio",
    });
    expect(bioElement).toBeInTheDocument();
  });
});
