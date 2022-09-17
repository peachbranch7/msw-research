import type { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { TextInput } from '../../components/TextInput';

export default {
  title: 'TextInput',
  component: TextInput,
} as ComponentMeta<typeof TextInput>;

export const Default: ComponentStoryObj<typeof TextInput> = {
  args: {
    label: '名前',
    type: 'text',
  },
  argTypes: {
    type: {
      options: ['text', 'password', 'tel', 'email'],
      control: { type: 'radio' },
    },
  },
};
