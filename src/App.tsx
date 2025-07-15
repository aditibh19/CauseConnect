import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { RouterProvider } from 'react-router-dom';

import { customTheme } from './theme';
import MontserratFont from './fonts/MontserratFont';
import router from './routes';

import './App.css';

function App() {
  return (
    <MantineProvider
      theme={customTheme}
      withGlobalStyles
      withNormalizeCSS
    >
      {/* Load custom font */}
      <MontserratFont />

      {/* Global notifications */}
      <Notifications position="top-right" zIndex={9999} />

      {/* Main router */}
      <RouterProvider router={router} />
    </MantineProvider>
  );
}

export default App;
