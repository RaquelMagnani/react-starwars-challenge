import { render, screen } from '@testing-library/react';
import App from './App';

describe('Home Page',()=>{

  it('Should have a h1 title', () => {
    render(<App />);
    const title = screen.getByText(/star wars movies!/i);
    expect(title).toBeInTheDocument();
  });

  it('Should have a logo inside navbar', () => {
    render(<App />);
    const logo = screen.getByAltText(/star wars logo/i);
    expect(logo).toBeInTheDocument();
  });

  it('Should have a link wrapping image logo inside navbar', () => {
    render(<App />);
    const logo = screen.getAllByRole("link");
    expect(logo).toBeTruthy();
  });
})
