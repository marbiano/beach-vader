import { createStitches } from '@stitches/react';

export const {
  styled,
  css,
  globalCss,
  getCssText,
  theme,
  createTheme,
  config,
  keyframes,
} = createStitches({
  theme: {
    colors: {
      black: 'hsl(18 5% 5%)',
      black00: 'hsl(18 5% 5% / 0)',
      black50: 'hsl(18 5% 5%, 0.5)',
      white: 'hsl(0 0% 100%)',
      white00: 'hsl(0 0% 100% / 0)',
      white03: 'hsl(0 0% 100% / 0.03)',
      white10: 'hsl(0 0% 100% / 0.1)',
      white20: 'hsl(0 0% 100% / 0.2)',
      white40: 'hsl(0 0% 100% / 0.4)',
      white50: 'hsl(0 0% 100% / 0.5)',
      white60: 'hsl(0 0% 100% / 0.6)',
      white70: 'hsl(0 0% 100% / 0.7)',
      white80: 'hsl(0 0% 100% / 0.8)',
      white90: 'hsl(0 0% 100% / 0.9)',
      orange: 'hsl(356 75% 38%)',
      orange05: 'hsl(356 75% 38% / 0.05)',
      orange15: 'hsl(356 75% 38% / 0.15)',
      orange50: 'hsl(356 75% 38% / 0.50)',
      orange75: 'hsl(356 75% 38% / 0.75)',
      lightOrange: 'hsl(356 83% 53%)',
      lightOrange15: 'hsl(356 83% 53% / 0.15)',
      lightOrange00: 'hsl(356 83% 53% / 0)',
    },
    fonts: {
      sans: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
    },
  },
});
