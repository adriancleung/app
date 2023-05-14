import { ThemeType } from 'grommet';

export const APP_THEME: ThemeType = {
  global: {
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
    focus: {
      border: {
        color: 'transparent',
      },
    },
  },
  accordion: {
    hover: {
      heading: {
        color: { dark: 'white', light: 'dark-3' },
        // level: 2,
      },
    },
    icons: {
      color: 'white',
    },
    border: {
      color: 'transparent',
    },
    panel: {
      // hover: {
      //   heading: {
      //     color: { dark: 'white', light: 'dark-3' },
      //     level: 2,
      //   },
      // },
      border: {
        color: 'transparent',
      },
    },
  },
  anchor: {
    color: 'white',
    fontWeight: 700,
  },
  button: {
    default: {
      border: {
        color: 'white',
      },
      color: 'white',
    },
  },
};
