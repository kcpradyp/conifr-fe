import { Button } from '@/components/ui/button';
import { SidebarProvider } from '@/hooks/useSidebar';
import { useRouter } from '@/routes/hooks';
import { Auth0Provider } from '@auth0/auth0-react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Suspense } from 'react';
import { ErrorBoundary, FallbackProps } from 'react-error-boundary';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import ThemeProvider from './theme';
import { AUTH0_CLIENT_ID, AUTH0_DOMAIN } from '@/constants/config';

export const queryClient = new QueryClient();

const ErrorFallback = ({ error }: FallbackProps) => {
  const router = useRouter();
  console.log('error', error);
  return (
    <div className='flex h-screen w-screen flex-col items-center  justify-center text-red-500' role='alert'>
      <h2 className='text-2xl font-semibold'>Ooops, something went wrong :( </h2>
      <pre className='text-2xl font-bold'>{error.message}</pre>
      <pre>{error.stack}</pre>
      <Button className='mt-4' onClick={() => router.back()}>
        Go back
      </Button>
    </div>
  );
};

export default function AppProvider({ children }: { children: React.ReactNode }) {
  const onRedirectCallback = (appState?: { returnTo?: string }) => {
    window.history.replaceState({}, document.title, appState?.returnTo || window.location.pathname);
  };
  return (
    <Auth0Provider
      domain={AUTH0_DOMAIN}
      clientId={AUTH0_CLIENT_ID}
      authorizationParams={{ redirect_uri: window.location.origin + '/dashboard' }}
      onRedirectCallback={onRedirectCallback}
    >
      <Suspense>
        <HelmetProvider>
          <BrowserRouter>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <QueryClientProvider client={queryClient}>
                <ReactQueryDevtools />
                <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
                  <SidebarProvider>{children}</SidebarProvider>
                </ThemeProvider>
              </QueryClientProvider>
            </ErrorBoundary>
          </BrowserRouter>
        </HelmetProvider>
      </Suspense>
    </Auth0Provider>
  );
}
