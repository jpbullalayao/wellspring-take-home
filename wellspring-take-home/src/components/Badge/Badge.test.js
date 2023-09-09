import { render, screen } from "@testing-library/react";
import { Badge } from "./Badge";

test("renders badge", () => {
  render(<Badge label="Visit completed" />);
  const element = screen.getByText(/Visit completed/i);
  expect(element).toBeInTheDocument();
});
