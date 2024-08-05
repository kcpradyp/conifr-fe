import AppProvider from './providers';
import AppRouter from './routes';
import { registerLicense } from '@syncfusion/ej2-base';

function App() {
  registerLicense('Ngo9BigBOggjHTQxAR8/V1NCaF1cWWhAYVdpR2Nbe05xdV9FYFZTQmYuP1ZhSXxXdk1jXH5fc3ZUQWFeVkI=');
  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  );
}

export default App;
