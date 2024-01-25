import { render, screen } from "@testing-library/react";

import MusicUploadForm from "./MusicUploadForm";

test("renders learn react link", () => {
  render(<MusicUploadForm />);
  const linkElement = screen.getByText(/upload music/i);
  expect(linkElement).toBeInTheDocument();
});
