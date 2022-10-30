import { render, screen } from "@testing-library/react";
import CharCard from "./CharCard";

test("renders", () => {
  render(<CharCard />);
    const linkElement = screen.getByText();
  expect(linkElement).toBeInTheDocument();
});
