import { render, screen } from "@testing-library/react";
import CharCard from "./CharCard";

test("renders", () => {


  render(<CharCard/>);
  screen.debug()
});
