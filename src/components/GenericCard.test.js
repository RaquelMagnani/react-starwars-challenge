import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import GenericCard  from './GenericCard';

describe('Generic Card',()=>{

  it('Should render all props when received from the parent', () => {
    render(<GenericCard name="New Hope" 
    resourceImage="films" 
    url="https://swapi.dev/api/films/1/"
    isBookmarked = {false}
    handleBookmark = {jest.fn()}
    />, {wrapper: MemoryRouter});
    
    expect(screen.getByText(/New Hope/i)).toBeInTheDocument();
    expect(screen.getByAltText(/poster of New Hope/i)).toBeInTheDocument();
    expect(screen.getByTestId('bookUnmarked')).toBeInTheDocument();
  });  
})
