import { tableAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(tableAnatomy.keys);

const baseStyle = definePartsStyle({
  caption: {
    borderBottomWidth: "2px",
    borderStyle: "solid",
    borderColor: "#F4F4F4",
    borderTopRightRadius: "0.5rem",
    borderTopLeftRadius: "0.5rem",

    textAlign: "left",
    fontWeight: 800,
    color: "#191919",
    backgroundColor: "white",
  },
  thead: {
    borderBottomWidth: "2px",
    borderStyle: "solid",
    borderColor: "#F4F4F4",
  },
  tr: {
    borderBottomWidth: "2px",
    borderStyle: "solid",
    borderColor: "#F4F4F4",

    _last: {
      borderBottom: "none",
    },
  },
  th: {
    textTransform: "none",
    fontWeight: 800,
    color: "#191919",
    backgroundColor: "white",
  },
  td: {
    fontWeight: 400,
    color: "black",
    backgroundColor: "white",
  },
});

const sizes = {
  md: definePartsStyle({
    caption: {
      padding: "6",
      fontSize: "xl",
    },
    th: {
      paddingY: "4",
      paddingX: "6",
      fontSize: "lg",
    },
    td: {
      paddingY: "4",
      paddingX: "6",
      fontSize: "lg",
    },
  }),
};

export const Table = defineMultiStyleConfig({
  baseStyle,
  sizes,
  defaultProps: {
    variant: "unstyled",
  },
});
