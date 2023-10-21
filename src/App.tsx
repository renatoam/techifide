import { QueryClientProvider } from 'react-query';
import { RouterProvider } from 'react-router-dom';
import { queryClient } from './config/reactQuery';
import router from './router';
import { ServicesContextProvider } from './contexts/services';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ServicesContextProvider>
        <RouterProvider router={router} />
      </ServicesContextProvider>
    </QueryClientProvider>
  )
}

export default App
