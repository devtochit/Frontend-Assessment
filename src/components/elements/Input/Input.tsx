import { useState } from 'react';
import type { InputHTMLAttributes } from 'react';

import { EyeIcon } from '@heroicons/react/24/outline';
import type { FieldValues, UseFormRegister, FieldErrors } from 'react-hook-form';
import tw from 'twin.macro';

import { Button } from '@/components/elements';
type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  id: string;
  label?: string;
  type?: string;
  register?: UseFormRegister<FieldValues | any>;
  errors?: FieldErrors<FieldValues> | any;
  width?: string;
};
export const Input = ({
  id,
  label,
  type = 'text',
  register,
  errors = {},
  width = '',
  ...rest
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={`flex flex-col ${width}`}>
      {label && <label>{label}</label>}
      <div className="mt-1 relative flex justify-center items-center">
        <input
          tw="block w-full rounded-full border-2 border-gray-300 bg-tertiary px-8 py-3 text-white placeholder-gray-300 shadow-sm focus:(border-cyan-200 ring-0)"
          aria-invalid={!!errors[id]?.message}
          css={[errors[id]?.message && tw`border-red-600 focus:border-red-500`]}
          id={id}
          type={type === 'password' && showPassword ? 'text' : type}
          {...(register && register(id))}
          {...rest}
        />
        {type === 'password' && (
          <Button
            tw="absolute right-3 bg-transparent p-0 shadow-none hover:bg-transparent"
            startIcon={<EyeIcon className="w-5 h-5" />}
            isIconButton={true}
            onMouseDown={() => setShowPassword(true)}
            onMouseUp={() => setShowPassword(false)}
          />
        )}
      </div>
      {errors[id] && errors[id]?.message && (
        <p className="px-5 mt-1 text-red-500">{errors[id]?.message}</p>
      )}
    </div>
  );
};
