import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const small = defineStyle((props) => {
  const { colorScheme: c } = props
  return {
    fontFamily: "Nexa",
    fontWeight: "400",
    fontSize: "16px",
    color: `${c}.700`
  }
})


export const Text = defineStyleConfig({
  variants: { small },
  defaultProps: {
    colorScheme: 'grey',
    variant: 'small'
  }
})