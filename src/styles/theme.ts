import { Theme, ThemeUIStyleObject} from "theme-ui"

type Variant = ThemeUIStyleObject;

type CustomVariantGroups = {
    variants: {
      signinRight: Variant;
      signinGrid: Variant;
      animate: Variant
    };
  };

const theme: Theme & CustomVariantGroups = {
    colors: {
        text: "#8F959B",
        background: "#FFFFFF",
        primary: "#00471A",
        success_100: "#9FE5B9",
        success_400: "#008932",
        success_500: "#006726",
        success_600: "#00471A",
        dark_300: "text",
        dark_600: "#343E49",
        dark_200: "#B1B5B9",
        dark_400: "#6F777F",
        input_border: "#D7DDE9",
        info_400: "#007FA6",
        error_400: "#D33E60",
        warning_300: "#E3774C",
        warning_500: "#88472E",
        primary_500: "#3748CF",
       
    },
    fonts: {
        body: "inter,sans-serif",
        heading: "inter,sans-serif",
        monospace: "Menlo, monospace",
    },
    fontSizes: [15, 29,45.8,18.75],
    space: [8, 9, 16, 24, 32, 36, 56, 80],
    radii: [4, 5],
    sizes: [574,629],
    fontWeights: {
        body: 400,
        heading: 500,
        bold: 700,
    },
    lineHeights: {
        body: "24px",
        heading: "39px",
        h1: "59.2px",
        h5: "30px"
    },
    // letterSpacings: {
    //     body: "normal",
    //     caps: "0.2em",
    // },

    //styles variant

    styles: {
        h1: {
            fontSize: 2,
            fontFamily: "heading",
            fontWeight: "heading",
            color: "dark_600",
            lineHeight: "h1",
        },
        h3: {
            fontSize: 1,
            fontFamily: "heading",
            fontWeight: "heading",
            color: "primary",
            lineHeight: "heading",
        },
        h5: {
            fontSize: 3,
            fontFamily: "heading",
            fontWeight: "heading",
            lineHeight: "h5",
        },
        h5_regular: {
            fontSize: 3,
            fontFamily: "heading",
            fontWeight: "body",
            lineHeight: "h5",
        },
        caption_medium: {
            fontSize: "9.6px",
            fontFamily: "heading",
            fontWeight: "heading",
            lineHeight: "15.36px",
        },
    },

    // variants

    buttons: {
        primary: {
            fontWeight: "heading",
            color: "background",
            bg: "primary",
            py: 0,
            px: 2,
            fontSize: 0,
            lineHeight: "body",
            cursor: "pointer",
            "&:hover": {
                bg: "success_400",
            },
            "&:focus": {
                bg: "success_500"
            },
          },
        googleLogin: {
            fontWeight: "body",
            color: "dark_600",
            bg: "background",
            border: "1px solid",
            borderColor: "#E4E9EF",
            borderRadius: 1,
            py: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
            cursor: "pointer",
            width: "100%",
            "&:hover": {
                bg: "transparent",
            },
            "&:focus": {
                bg: "transparent"
            },
          },
        none:{
            backgroundColor: "transparent",
            color: "inherit",
            padding: "0px",
            margin: "0px",
            border: "none",
            borderRadius: "0px",
            outline: "none",
            cursor: "pointer",
            lineHeight: "0",
            "&:hover": {
                bg: "transparent",
            },
            "&:focus": {
                bg: "transparent"
            },
        }
      },

      borders: {
        primary: "1px solid #E4E9EF",
      },

    images: {
        avatar: {
          width: 31,
          height: 31,
          borderRadius: "50%",
        },
      },
    
    variants: {
        signinRight:{
            padding:4,
            border: "1px solid",
            borderColor: "#E4E9EF",
            borderRadius:0,
            width: 0,
            height:1,
            gridColumnEnd:"3",
            flexDirection: "column"
        },
        signinGrid:{
            gridTemplateColumns: "1fr auto 1fr",
            margin: 7,
            fontFamily: "body",
        },

        animate: {
            transitionProperty: 'all',
            transitionTimingFunction: 'ease-out',
            transitionDuration: '300ms',
          },
    },

    forms: {
        input: {
            backgroundColor: "background",
            color: "text",
            border: "1px solid",
            borderColor: "input_border",
            borderRadius: "2px",
            padding: "3px",
            height: "42px",
            "&:focus": {
                outline: "none",
                borderColor: "dark_300",
            },
        },
        label: {
            fontSize: 0,
            fontWeight: "body",
            marginBottom: "4px",
        },
        button: {
            variant: "primary"
        },
      },

}
export default theme
