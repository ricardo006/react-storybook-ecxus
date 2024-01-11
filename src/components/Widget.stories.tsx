import React from 'react'; // Adicione esta linha

import { Meta, StoryObj } from '@storybook/react'
import { Widget } from './Widget'

export default {
  title: 'Widget',
  component: Widget,
} as Meta

export const Default: StoryObj = {}