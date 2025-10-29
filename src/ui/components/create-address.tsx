'use client';

import { createAddress, State } from '@/features/addresses/lib/actions';
import {
  DietaryRestriction,
  dietaryRestrictions,
  FormValues,
} from '@/lib/definitions';
import { Activity, useActionState, useState } from 'react';
import {
  FieldSet,
  FieldLegend,
  FieldDescription,
  FieldGroup,
  Field,
  FieldLabel,
  FieldError,
} from '../field';
import { Input } from '../input';
import { Checkbox } from '../checkbox';
import { Button } from '../button';

export default function Form() {
  const initialState: State = { message: null, errors: {} };
  const [state, formAction, isPending] = useActionState(
    createAddress,
    initialState,
  );

  const initialValues: FormValues = {
    firstName: '',
    lastName: '',
    city: '',
    address: '',
    dietaryRestrictions: [],
  };
  const [values, setValues] = useState<FormValues>(initialValues);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prev) => {
      if (state.errors && name in state.errors) {
        const newErrors = { ...state.errors };
        delete newErrors[name as keyof typeof newErrors];
        state.errors = newErrors;
      }
      return { ...prev, [name]: value };
    });
  };

  const handleCheckboxToggle = (restriction: DietaryRestriction) => {
    setValues((prev) => {
      if (state.errors && 'dietaryRestrictions' in state.errors) {
        const newErrors = { ...state.errors };
        delete newErrors['dietaryRestrictions' as keyof typeof newErrors];
        state.errors = newErrors;
      }
      return {
        ...prev,
        dietaryRestrictions: prev.dietaryRestrictions.includes(restriction)
          ? prev.dietaryRestrictions.filter((r) => r !== restriction)
          : [...prev.dietaryRestrictions, restriction],
      };
    });
  };

  return (
    <form
      action={formAction}
      className='space-y-8 tracking-wide'
    >
      <FieldSet>
        <FieldLegend>Név Adatok</FieldLegend>
        <FieldDescription>
          A cím felvételéhez kérjük, add meg a nevedet.
        </FieldDescription>
        <FieldGroup className='grid grid-cols-2 gap-4'>
          <Field data-invalid={!!state.errors?.lastName}>
            <FieldLabel htmlFor='lastName'>Vezetéknév</FieldLabel>
            <Input
              id='lastName'
              name='lastName'
              type='text'
              placeholder='János'
              value={values.lastName}
              onChange={handleInputChange}
              aria-invalid={!!state.errors?.lastName}
              autoComplete='family-name'
            />
            <Activity mode={state.errors?.lastName ? 'visible' : 'hidden'}>
              {state.errors!.lastName?.map((error: string) => (
                <FieldError key={error}>{error}</FieldError>
              ))}
            </Activity>
          </Field>
          <Field data-invalid={!!state.errors?.firstName}>
            <FieldLabel htmlFor='firstName'>Keresztnév</FieldLabel>
            <Input
              id='firstName'
              name='firstName'
              type='text'
              placeholder='János'
              value={values.firstName}
              onChange={handleInputChange}
              aria-invalid={!!state.errors?.firstName}
              autoComplete='given-name'
            />
            <Activity mode={state.errors?.firstName ? 'visible' : 'hidden'}>
              {state.errors!.firstName?.map((error: string) => (
                <FieldError key={error}>{error}</FieldError>
              ))}
            </Activity>
          </Field>
        </FieldGroup>
      </FieldSet>
      <FieldSet>
        <FieldLegend>Cím Adatok</FieldLegend>
        <FieldDescription>
          A cím felvételéhez kérjük, add meg a címed adatait. Ezeket az adatokat
          mások is láthatják.
        </FieldDescription>
        <FieldGroup>
          <Field data-invalid={!!state.errors?.city}>
            <FieldLabel htmlFor='city'>Város</FieldLabel>
            <Input
              id='city'
              name='city'
              type='text'
              placeholder='Budapest'
              value={values.city}
              onChange={handleInputChange}
              aria-invalid={!!state.errors?.city}
              autoComplete='address-level2'
            />
            <Activity mode={state.errors?.city ? 'visible' : 'hidden'}>
              {state.errors!.city?.map((error: string) => (
                <FieldError key={error}>{error}</FieldError>
              ))}
            </Activity>
          </Field>
          <Field data-invalid={!!state.errors?.address}>
            <FieldLabel htmlFor='address'>Cím</FieldLabel>
            <Input
              id='address'
              name='address'
              type='text'
              placeholder='Fő utca 1.'
              value={values.address}
              onChange={handleInputChange}
              aria-invalid={!!state.errors?.address}
              autoComplete='street-address'
            />
            <Activity mode={state.errors?.address ? 'visible' : 'hidden'}>
              {state.errors!.address?.map((error: string) => (
                <FieldError key={error}>{error}</FieldError>
              ))}
            </Activity>
          </Field>
        </FieldGroup>
      </FieldSet>
      <FieldSet>
        <FieldLegend variant='label'>
          Milyen érzékenységekre tudsz odafigyelni?
        </FieldLegend>
        <FieldDescription>
          Válaszd ki azokat az érzékenységeket, amelyekre tudsz alternatívát
          nyújtani.
        </FieldDescription>
        <FieldGroup className='gap-3'>
          {dietaryRestrictions.map((restriction) => (
            <Field
              orientation='horizontal'
              key={restriction}
              data-invalid={!!state.errors?.dietaryRestrictions}
            >
              <Checkbox
                id={`dietary-restriction-${restriction}`}
                name='dietaryRestrictions'
                value={restriction}
                defaultChecked={values.dietaryRestrictions.includes(
                  restriction,
                )}
                checked={values.dietaryRestrictions.includes(restriction)}
                onClick={handleCheckboxToggle.bind(null, restriction)}
                aria-invalid={!!state.errors?.dietaryRestrictions}
              />
              <FieldLabel
                htmlFor={`dietary-restriction-${restriction}`}
                className='font-normal'
              >
                {restriction.charAt(0).toUpperCase() + restriction.slice(1)}
              </FieldLabel>
            </Field>
          ))}
          <Activity
            mode={state.errors?.dietaryRestrictions ? 'visible' : 'hidden'}
          >
            {state.errors!.dietaryRestrictions?.map((error: string) => (
              <FieldError key={error}>{error}</FieldError>
            ))}
          </Activity>
        </FieldGroup>
      </FieldSet>
      <Field>
        <Button
          type='submit'
          disabled={isPending}
        >
          Cím hozzáadása
        </Button>
      </Field>
    </form>
  );
}
