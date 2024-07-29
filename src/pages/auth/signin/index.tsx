import { Button } from '@/components/ui/button';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';

export default function SignInPage() {
  const { loginWithRedirect } = useAuth0();
  return (
    <div className='relative h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0'>
      <div className='relative hidden h-full flex-col bg-white p-10 text-black dark:border-r lg:flex'>
        <div className='relative z-20 flex items-center text-lg font-medium'>
          <img src='/logo.png' alt='Conifr' width={200} height={65} />
        </div>
        <div className='relative z-20 mt-auto'>
          <div className='space-y-2 px-4'>
            <p className='text-4xl'>&ldquo;Helping businesses operate efficiently and sustainably&rdquo;</p>
            <footer className='text-lg'>
              Conifr&apos;s AI-powered sustainability analytics platform helps companies understand and address their
              environmental impacts while improving operational efficiency
            </footer>
          </div>
        </div>
      </div>
      <div className='flex h-full items-center p-4 lg:p-8'>
        <div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
          <Button className='ml-auto w-full' type='button' onClick={() => loginWithRedirect()}>
            Login To Continue
          </Button>
          <p className='px-8 text-center text-sm text-muted-foreground'>
            By clicking Login, you agree to our{' '}
            <Link to='/terms' className='underline underline-offset-4 hover:text-primary'>
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link to='/privacy' className='underline underline-offset-4 hover:text-primary'>
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
