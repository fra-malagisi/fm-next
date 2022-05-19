import { Input, Button } from 'components';
import { FireIcon, SearchIcon } from 'icons';
import { NextPage } from 'next';
import React from 'react';
import { useForm } from 'react-hook-form';

type SignUpFormType = {
  username: string;
  password: string;
};

const SignUp: NextPage<unknown> = () => {
  const { register } = useForm<SignUpFormType>();
  return (
    <section className='flex'>
      <div className=' flex h-screen w-4/6 flex-col'>
        <h2 className='mb-4 text-4xl font-bold'>Signup</h2>
        <ul>
          <li className='mb-4 flex h-10'>
            <SearchIcon />
            <span className='flex items-center'>Discover new movies</span>
          </li>
          <li className='mb-4 flex h-10'>
            <FireIcon />
            <span className='flex items-center'>Touch the power of the AI</span>
          </li>
        </ul>
      </div>
      <div className='flex w-1/3 justify-center'>
        <form className='flex w-1/2 flex-col items-center'>
          <div className='mb-4 w-full'>
            <div className='mb-4'>
              <Input label='Username' {...register('username')} />
            </div>
            <Input label='Password' type='password' {...register('password')} />
          </div>
          <Button label='Register' />
        </form>
      </div>
    </section>
  );
};

export default SignUp;
