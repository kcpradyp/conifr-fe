import PageHead from '@/components/shared/page-head.jsx';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.js';
import { LogoutOptions, useAuth0 } from '@auth0/auth0-react';

const Dashboard: React.FC = () => {
  const { user, logout } = useAuth0();
  const handleLogout = () => {
    const options = {
      returnTo: window.location.origin,
    } as LogoutOptions;
    logout(options);
  };

  return (
    <>
      <PageHead title='Dashboard | App' />
      <div className='max-h-screen flex-1 space-y-4 overflow-y-auto p-4 pt-6 md:p-8'>
        <div className='flex items-center justify-between space-y-2'>
          <h2 className='text-3xl font-bold tracking-tight'>Hi {user?.nickname}, Welcome back 👋</h2>
          <Button variant='ghost' size='sm' type='button' onClick={() => handleLogout}>
            Logout
          </Button>
        </div>
        <Tabs defaultValue='overview' className='space-y-4'>
          <TabsList>
            <TabsTrigger value='overview'>Overview</TabsTrigger>
            <TabsTrigger value='analytics' disabled>
              Analytics
            </TabsTrigger>
          </TabsList>
          <TabsContent value='overview' className='space-y-4'>
            <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
              <Card>
                <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                  <CardTitle className='text-sm font-medium'>Card Title</CardTitle>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    className='h-4 w-4 text-muted-foreground'
                  >
                    <path d='M22 12h-4l-3 9L9 3l-3 9H2' />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className='text-2xl font-bold'>Test Content</div>
                  <p className='text-xs text-muted-foreground'>Lorem ipsum dolor sit amet.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                  <CardTitle className='text-sm font-medium'>Card Title</CardTitle>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    className='h-4 w-4 text-muted-foreground'
                  >
                    <path d='M22 12h-4l-3 9L9 3l-3 9H2' />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className='text-2xl font-bold'>Test Content</div>
                  <p className='text-xs text-muted-foreground'>Lorem ipsum dolor sit amet.</p>
                </CardContent>
              </Card>{' '}
              <Card>
                <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                  <CardTitle className='text-sm font-medium'>Card Title</CardTitle>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    className='h-4 w-4 text-muted-foreground'
                  >
                    <path d='M22 12h-4l-3 9L9 3l-3 9H2' />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className='text-2xl font-bold'>Test Content</div>
                  <p className='text-xs text-muted-foreground'>Lorem ipsum dolor sit amet.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                  <CardTitle className='text-sm font-medium'>Card Title</CardTitle>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    className='h-4 w-4 text-muted-foreground'
                  >
                    <path d='M22 12h-4l-3 9L9 3l-3 9H2' />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className='text-2xl font-bold'>Test Content</div>
                  <p className='text-xs text-muted-foreground'>Lorem ipsum dolor sit amet.</p>
                </CardContent>
              </Card>
            </div>
            <div className='grid grid-cols-1 gap-4'>
              <Card className='col-span-1'>
                <CardHeader>
                  <CardTitle>Some more card</CardTitle>
                </CardHeader>
                <CardContent>
                  <iframe
                    src='https://analytics.conifr.com.au/public/dashboard/dcf29768-77b1-4caa-a667-6a8924b7a04e'
                    width='100%'
                    height={800}
                    className='border-0'
                    aria-hidden='false'
                    tabIndex={0}
                  />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};
export default Dashboard;
