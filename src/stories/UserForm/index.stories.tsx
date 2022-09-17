import type { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { useEffect, useState } from 'react';
import { UserForm } from '../../components/UserForm';

export default {
  title: 'UserForm',
  component: UserForm,
} as ComponentMeta<typeof UserForm>;

export const Default: ComponentStoryObj<typeof UserForm> = {};
