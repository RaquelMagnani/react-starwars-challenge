import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CharacterList  from './CharacterList';

describe('CharacterList',()=>{

    const mockCharacters = [{
        name: "R2-D2",
        url:"https://swapi.dev/api/people/3/"
    },
    {
        name: "Luke Skywalker",
        url:"https://swapi.dev/api/people/1/"
    },
    {
        name: "C-3PO",
        url:"https://swapi.dev/api/people/2/"
    },
    {
        name: "Darth Vader",
        url:"https://swapi.dev/api/people/4/"
    }]

  it('Should render all props when received from the parent', () => {
    render(<CharacterList characters={mockCharacters}/>, {wrapper: MemoryRouter});
    
    expect(screen.getAllByRole('listitem')).toHaveLength(4);
    
  });  
})
