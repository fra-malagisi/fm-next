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
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<SignUpFormType>({ mode: 'onChange' });

  const onSubmit = data => {
    alert(JSON.stringify(data));
  };

  return (
    <section className='mt-4 flex'>
      <div className=' flex h-screen w-4/6 flex-col '>
        <h2 className='mb-4 text-4xl font-bold'>Signup</h2>
        <ul className='mt-8'>
          <li className='mb-4 flex h-10'>
            <SearchIcon />
            <span className='ml-4 flex items-center bg-gradient-to-r from-skin-primary to-skin-secondary bg-clip-text text-4xl font-extrabold text-transparent'>
              Discover new movies
            </span>
          </li>
          <li className='mb-4 flex h-10'>
            <FireIcon />
            <span className='ml-4 flex items-center bg-gradient-to-r from-skin-primary to-skin-secondary bg-clip-text text-4xl font-extrabold text-transparent'>
              Touch the power of the AI
            </span>
          </li>
        </ul>
      </div>
      <div className='flex w-1/3 justify-center pt-12'>
        <form className='flex w-1/2 flex-col items-center' onSubmit={handleSubmit(onSubmit)}>
          <div className='mb-4 w-full'>
            <div className='mb-4'>
              <Input
                label='Username'
                error={errors.username}
                {...register('username', {
                  required: 'username required',
                  minLength: {
                    value: 3,
                    message: 'min 3',
                  },
                })}
              />
            </div>
            <Input
              label='Password'
              type='password'
              {...register('password', {
                required: true,
              })}
            />
          </div>
          <Button label='Sign Up' />
        </form>
      </div>
    </section>
  );
};

export default SignUp;
