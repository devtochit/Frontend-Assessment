import { describe, expect, it } from 'vitest';
import '@testing-library/jest-dom/extend-expect';

import { render, screen } from '@/test/test-utils';
import { themeColors } from '~/tailwind.config.cjs';

import { Button, variants } from './Button';

describe('Button component', () => {
  it('should be displayed on the ui', () => {
    // arrange
    const variant = 'primary';
    const size = 'lg';

    // act
    render(
      <Button variant={variant} size={size}>
        Primary
      </Button>
    );

    // assert
    expect(screen.getByText('Primary')).toBeInTheDocument();
  });

  it('should display correct color based on variant', () => {
    for (const variantKey in variants) {
      // arrange
      const variant = variantKey as keyof typeof variants;

      // act
      render(<Button variant={variant}>Primary</Button>);
      const buttonElement = screen.getByTestId(`button-${variantKey}`);

      // assert
      if (variantKey === 'outline') {
        expect(buttonElement).toHaveStyle({
          'border-color': themeColors[variantKey]?.DEFAULT,
        });
      } else {
        expect(buttonElement).toHaveStyle({
          'background-color': themeColors[variantKey]?.DEFAULT,
        });
      }
    }
  });

  it('should display spinner icon when loading', () => {
    // arrange
    const isLoading = true;

    // act
    render(<Button isLoading={isLoading}>Primary</Button>);

    // assert
    const spinnerElement = screen.getByTestId('loading-spinner');

    expect(spinnerElement).toBeInTheDocument();
  });

  it('should hide spinner icon when not loading', () => {
    // act
    render(<Button>Primary</Button>);

    // assert
    const spinnerElement = screen.queryByTestId('loading-spinner');

    expect(spinnerElement).not.toBeInTheDocument();
  });
});
