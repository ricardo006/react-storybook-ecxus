import React from 'react'; // Adicione esta linha

import { Popover } from '@headlessui/react'
import { Meta, StoryObj } from '@storybook/react'
import { FeedbackSuccessStep } from './FeedbackSuccessStep'

export default {
  title: 'Widget UI/FeedbackSuccessStep',
  component: FeedbackSuccessStep,
  decorators: [
    (Story) => {
      return (
        <Popover>
          <Popover.Panel static>
            <div className="bg-zinc-900 px-4 pt-4 relative rounded-lg flex flex-col items-center w-96">
              {Story()}
            </div>
          </Popover.Panel>
        </Popover>
      )
    }
  ],
} as Meta

export const Default: StoryObj = {}