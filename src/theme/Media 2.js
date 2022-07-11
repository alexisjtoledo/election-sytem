const Breakpoints = {
    sm: 480,
    md: 768,
    lg: 1200,
};

export const device = {
    mobile: `(min-width: ${Breakpoints.sm}px)`,
    tablet: `(min-width: ${Breakpoints.md}px)`,
    laptop: `(min-width: ${Breakpoints.lg}px)`,
};
