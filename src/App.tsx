import { Button } from '@/components/buttons/Button';
import { Card } from '@/components/cards/Card';
import { Badge } from '@/components/feedback/Badge';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-8">
      <div className="max-w-2xl w-full space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            PixelForge
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            A personal UI playground and component library. Run <code>npm run storybook</code> for the main visual environment.
          </p>
        </div>

        <Card title="Quick Preview" description="Rendered directly in App.tsx">
          <div className="flex flex-col gap-4">
            <div className="flex gap-4 items-center">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="danger">Danger</Button>
            </div>
            <div className="flex gap-4 items-center mt-4">
              <Badge variant="default">Default</Badge>
              <Badge variant="success">Success</Badge>
              <Badge variant="warning">Warning</Badge>
              <Badge variant="error">Error</Badge>
              <Badge variant="info">Info</Badge>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default App;
