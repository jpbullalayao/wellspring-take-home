import { render, screen } from "@testing-library/react";
import { PageTitle } from "./PageTitle";

test("renders page title", () => {
  render(<PageTitle title="Greetings, Meredith!" />);
  const linkElement = screen.getByText(/Greetings, Meredith!/i);
  expect(linkElement).toBeInTheDocument();
});
