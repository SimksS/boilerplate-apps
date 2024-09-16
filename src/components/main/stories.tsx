import Main from '@/components/main'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Main',
  component: Main,
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Default: StoryObj = {
  args: {
    title: 'title basic',
    description: 'description basic'
  }
}
