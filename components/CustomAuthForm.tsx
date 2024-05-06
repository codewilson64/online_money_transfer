import React from 'react'
import { FormControl, FormField, FormLabel, FormMessage } from './ui/form'
import { Input } from './ui/input'

import { Control, FieldPath } from 'react-hook-form'
import { z } from "zod"
import { authFormSchema } from '@/lib/utils'

const formSchema = authFormSchema('sign-up');

interface CustomAuthForm {
    control: Control<z.infer<typeof formSchema>>,
    name: FieldPath<z.infer<typeof formSchema>>,
    label: string,
    placeholder: string
    type: string
}

const CustomAuthForm = ({control, name, label, placeholder, type}: CustomAuthForm) => {
  return (
    <FormField
        control={control}
        name={name}
        render={({ field }) => (
            <div className='form-item'>
                <FormLabel className='form-label'>
                    {label}
                </FormLabel>
                <div className='w-full flex flex-col'>
                    <FormControl>
                    <Input 
                        placeholder={placeholder} 
                        className='input-class'
                        {...field}
                        type={type}
                    />
                    </FormControl>
                    <FormMessage className='form-message mt-2'/>
                </div>
            </div>
        )}
    />
  )
}

export default CustomAuthForm