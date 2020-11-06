export const OneRemInPx = window.innerWidth < 375 ? 18.76 : 16;
const OneRemInPxMedia = 16;

// keep this utility in case it is needed in the future
export const getRem = (px) => `${px / OneRemInPx}rem`;
export const getRemMedia = (px) => `${px / OneRemInPxMedia}rem`;

export const SCREEN_SIZE_VALUES = {
  until: {
    sm: 374,
    md: 767,
    lg: 1024,
    xl: 1364,
  },
  from: {
    xs: 0,
    sm: 375,
    md: 768,
    lg: 1025,
    xl: 1365,
  },
};

// Not using transformation function, to preserve intellisense
export const SCREEN_SIZES = {
  until: {
    sm: `${SCREEN_SIZE_VALUES.until.sm}px`,
    md: `${SCREEN_SIZE_VALUES.until.md}px`,
    lg: `${SCREEN_SIZE_VALUES.until.lg}px`,
    xl: `${SCREEN_SIZE_VALUES.until.xl}px`,
  },
  from: {
    xs: `${SCREEN_SIZE_VALUES.from.xs}px`,
    sm: `${SCREEN_SIZE_VALUES.from.sm}px`,
    md: `${SCREEN_SIZE_VALUES.from.md}px`,
    lg: `${SCREEN_SIZE_VALUES.from.lg}px`,
    xl: `${SCREEN_SIZE_VALUES.from.xl}px`,
  },
};
