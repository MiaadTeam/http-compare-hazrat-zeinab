import { render } from '@testing-library/react';

import FrState from './fr-state';

describe('FrState', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FrState />);
    expect(baseElement).toBeTruthy();
  });
});
