---
to: packages/shared/ui/src/components/<%= h.changeCase.pascal(name) %>/<%= h.changeCase.pascal(name) %>.stories.tsx
---
<% pascalizedName = h.changeCase.pascal(name) -%>
import type { Meta, StoryObj } from '@storybook/react'

import { <%= pascalizedName %> } from './<%= pascalizedName %>'

const meta: Meta<typeof <%= pascalizedName %>> = {
  component: <%= pascalizedName %>,
}

export default meta;
type Story = StoryObj<typeof <%= pascalizedName %>>;

export const Default: Story = {
}
