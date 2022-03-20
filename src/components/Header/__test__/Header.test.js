import { render, screen } from '@testing-library/react';
import Header from '../Header';

it("should render same text as passed into title prop", () => {
  render(<Header title="My Header" />);
  const headingElement = screen.getByText(/My Header/i);
  expect(headingElement).toBeInTheDocument();
});

it("should render heading element", () => {
    render(<Header title="My Header" />);
    const headingElement = screen.getByRole("heading", { name: "My Header" });
    expect(headingElement).toBeInTheDocument();
});

// GetAllBy

it("should render heading elements", () => {
    render(<Header title="My Header" />);
    const headingElements = screen.getAllByRole("heading");
    expect(headingElements.length).toBe(1);
});

// Find By

it("should render same text as passed into title prop findBy", async () => {
    render(<Header title="My Header" />);
    const headingElement = await screen.findByText(/My Header/i);
    expect(headingElement).toBeInTheDocument();
});

// Query By

it("should not find the dogs text queryBy", async () => {
    render(<Header title="My Header" />);
    const headingElement = screen.queryByText(/dogs/i);
    expect(headingElement).not.toBeInTheDocument();
});
