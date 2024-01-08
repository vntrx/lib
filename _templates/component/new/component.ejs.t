---
to: packages/shared/ui/src/components/<%= h.changeCase.pascal(name) %>/<%= name %>.tsx
---
<% pascalizedName = h.changeCase.pascal(name) -%>
import type { ReactNode } from 'react'

import { Flex } from '@chakra-ui/react'

export interface <%= pascalizedName %>Props {
  children: ReactNode
}

export const <%= pascalizedName %> = ({ children }: <%= pascalizedName %>Props) => {
  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
      w="full"
    >
      {children}
    </Flex>
  )
}