import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import { Card } from './Card';
import { Button } from '@/components/buttons/Button';

const meta = {
  title: 'Components/Cards/Card',
  component: Card,
  tags: ['ai-generated'],
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: 'Card Title',
    description: 'This is a description of the card.',
    children: <p className="text-gray-600">This is the main content area of the card.</p>,
    footer: <Button variant="secondary">Action</Button>,
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByText('Card Title')).toBeVisible();
  },
};

export const WithFooter: Story = {
  args: {
    title: 'Project Setup',
    description: 'Deploy your new project in one-click.',
    children: <p className="text-sm text-gray-600">Ensure your configuration is correct before deploying.</p>,
    footer: <Button className="w-full">Deploy Now</Button>,
    className: 'max-w-md',
  },
};
