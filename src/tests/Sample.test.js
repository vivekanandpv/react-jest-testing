import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import Sample from '../components/Sample';

//  This is a life cycle method of testing
afterEach(() => {
  cleanup(); //  cleanup will reset the harness
});

describe('Sample Component should', () => {
  it('render the title when showTitle is true', () => {
    const title = 'Welcome to Jest Testing';
    render(<Sample title={title} showTitle />);
    const h3Element = screen.getByTestId('h3-title');
    expect(h3Element).toHaveTextContent(title);
  });

  it('render the default text when showTitle is false', () => {
    const title = 'Welcome to Jest Testing';
    const defaultContent = 'Default content';
    render(<Sample title={title} showTitle={false} />);
    const h3Element = screen.getByTestId('h3-default');
    expect(h3Element).toHaveTextContent(defaultContent);
  });
});
