function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      textColor: {
        skin: {
          base: 'var(--color-text-base)',
          muted: 'var(--color-text-muted)',
          inverted: 'var(--color-text-inverted)',
        },
      },
      backgroundColor: {
        skin: {
          fill: withOpacity('--color-fill'),
          inverted: 'var(--color-inverted)',
          'button-accent': 'var(--color-button-accent)',
          'button-accent-hover': 'var(--color-button-accent-hover)',
          'button-muted': 'var(--color-button-muted)',
        },
      },
      gradientColorStops: {
        skin: {
          hue: 'var(--color-fill)',
        },
      },
      ringColor: {
        skin: {
          base: 'var(--color-focus-ring)',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms')({ strategy: 'class' }),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
