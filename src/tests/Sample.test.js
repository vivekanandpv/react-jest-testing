import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import Sample from '../components/Sample';

//  npm i --save-dev @testing-library/jest-dom
//  npm i --save-dev @testing-library/react react-test-renderer
//  line 1 & 2

describe('Sample Component should', () => {
  it('render to the screen', () => {
    render(<Sample />);
    const h3Element = screen.getByTestId('h3-el');
    expect(h3Element).toBeInTheDocument();
    expect(h3Element.textContent).toBe('Hello there!');

    //    also possible
    expect(h3Element).toHaveTextContent('Hello there!');
  });
});
