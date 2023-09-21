module.exports = {
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.black.500"),
            fontSize: theme("fontSize.base")[0],

            h1: {
              fontSize: theme("fontSize.4xl")[0],
              lineHeight: theme("lineHeight.tight"),
              marginBottom: theme("margin.8"),
              color: theme("colors.black.500"),
            },
            h2: {
              fontSize: theme("fontSize.3xl")[0],
              lineHeight: theme("lineHeight.tight"),
              marginBottom: theme("margin.4"),
              color: theme("colors.black.500"),
            },
            h3: {
              fontSize: theme("fontSize.2xl")[0],
              lineHeight: theme("lineHeight.tight"),
              marginBottom: theme("margin.4"),
              color: theme("colors.black.500"),
            },
          },
        },

        sm: {
          css: {
            fontSize: theme("fontSize.base")[0],
            h1: {
              fontSize: theme("fontSize.5xl")[0],
              marginBottom: theme("margin.4"),
            },
            h2: {
              fontSize: theme("fontSize.4xl")[0],
              marginBottom: theme("margin.4"),
            },
            h3: {
              fontSize: theme("fontSize.2xl")[0],
              marginBottom: theme("margin.4"),
            },
          },
        },
        md: {
          css: {
            fontSize: theme("fontSize.base")[0],
            h1: {
              fontSize: theme("fontSize.7xl")[0],
              marginBottom: theme("margin.8"),
            },
            h2: {
              fontSize: theme("fontSize.5xl")[0],
              marginBottom: theme("margin.8"),
            },
          },
        },

        dark: {
          css: {
            color: theme("colors.whitegreen.500"),
            h1: {
              color: theme("colors.whitegreen.500"),
            },
            h2: {
              color: theme("colors.whitegreen.500"),
            },
            h3: {
              color: theme("colors.whitegreen.500"),
            },
            h4: {
              color: theme("colors.whitegreen.500"),
            },
            a: {
              color: theme("colors.orange.500"),
            },
          },
        },
      }),
    },
  },
};
