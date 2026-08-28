import type { Meta, StoryObj } from '@storybook/react-vite';
import { PlatformInfrastructureHero } from './PlatformInfrastructureHero';

const meta = {
  title: 'Animations/PlatformInfrastructureHero',
  component: PlatformInfrastructureHero,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PlatformInfrastructureHero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
        backgroundColor: '#111',
      }}
    >
      <PlatformInfrastructureHero />
    </div>
  ),
};
