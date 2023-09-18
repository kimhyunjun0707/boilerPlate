const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');
const plugin = require('tailwindcss/plugin');
const colors = require('tailwindcss/colors');


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    join(__dirname, '../../../node_modules/@team-lepisode/components', '**/*.{js,mjs,ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        primary: generateColors('#4C1D95'),
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents, addBase, theme }) {
      addComponents({
        '.font-content': {
          fontSize: theme('fontSize.base'),
          fontWeight: theme('fontWeight.medium'),
          letterSpacing: '-0.6px',
        },
        '.font-content-title': {
          fontSize: theme('fontSize.base'),
          fontWeight: theme('fontWeight.semibold'),
          letterSpacing: '-0.6px',
        },
        '.font-content-small': {
          fontSize: theme('fontSize.xs'),
          fontWeight: theme('fontWeight.medium'),
          letterSpacing: '-0.6px',
        },
        '.font-h6': {
          fontSize: theme('fontSize.base'),
          fontWeight: theme('fontWeight.semibold'),
          letterSpacing: '-0.8px',
        },
        '.font-h5': {
          fontSize: theme('fontSize.xl'),
          fontWeight: theme('fontWeight.semibold'),
          letterSpacing: '-0.8px',
        },
        '.font-h4': {
          fontSize: theme('fontSize.2xl'),
          fontWeight: theme('fontWeight.bold'),
          letterSpacing: '-1px',
        },
        '.font-h3': {
          fontSize: '28px',
          fontWeight: theme('fontWeight.bold'),
          letterSpacing: '-1.1px',
        },
        '.font-h2': {
          fontSize: '32px',
          fontWeight: theme('fontWeight.bold'),
          letterSpacing: '-1.2px',
        },
        '.font-h1': {
          fontSize: '40px',
          fontWeight: theme('fontWeight.extrabold'),
          letterSpacing: '-1.6px',
        },
      }),
        addBase({
          'p': {
            fontSize: theme('fontSize.base'),
            fontWeight: theme('fontWeight.medium'),
            letterSpacing: '-0.6px',
          },
          'h6': {
            fontSize: theme('fontSize.base'),
            fontWeight: theme('fontWeight.semibold'),
            letterSpacing: '-0.8px',
          },
          'h5': {
            fontSize: theme('fontSize.xl'),
            fontWeight: theme('fontWeight.semibold'),
            letterSpacing: '-0.8px',
          },
          'h4': {
            fontSize: theme('fontSize.2xl'),
            fontWeight: theme('fontWeight.bold'),
            letterSpacing: '-1px',
          },
          'h3': {
            fontSize: '28px',
            fontWeight: theme('fontWeight.bold'),
            letterSpacing: '-1.1px',
          },
          'h2': {
            fontSize: '32px',
            fontWeight: theme('fontWeight.bold'),
            letterSpacing: '-1.2px',
          },
          'h1': {
            fontSize: '40px',
            fontWeight: theme('fontWeight.extrabold'),
            letterSpacing: '-1.6px',
          },
        })
    })
  ],
};
function generateColors(color) {
  const { toneMap } = require('@nextcss/color-tools');
  return {
    DEFAULT: color,
    ...toneMap(color),
  };
}
