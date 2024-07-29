import DashboardPage from '@/pages/dashboard';
import NotFound from '@/pages/notFound';
import { Suspense, lazy } from 'react';
import { Navigate, Outlet, useRoutes } from 'react-router-dom';
import ProtectedRoute from './protectedRoute';

const DashboardLayout = lazy(() => import('@/components/layouts/dashboardLayout'));
const SignInPage = lazy(() => import('@/pages/auth/signin'));

// ----------------------------------------------------------------------

export default function AppRouter() {
  const dashboardRoutes = [
    {
      path: '/dashboard',
      element: (
        <ProtectedRoute>
          <DashboardLayout>
            <Suspense>
              <Outlet />
            </Suspense>
          </DashboardLayout>
        </ProtectedRoute>
      ),
      children: [
        {
          element: <DashboardPage />,
          index: true,
        },
        {
          path: 'files',
          element: <h1>File Manager</h1>,
        },
      ],
    },
  ];

  const publicRoutes = [
    {
      path: '/',
      element: <SignInPage />,
      index: true,
    },
    {
      path: '/404',
      element: <NotFound />,
    },
    {
      path: '*',
      element: <Navigate to='/404' replace />,
    },
  ];

  const routes = useRoutes([...dashboardRoutes, ...publicRoutes]);

  return routes;
}
