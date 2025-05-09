import {ErrorState} from '../types/types';

type SetFormErrors = React.Dispatch<React.SetStateAction<ErrorState>>;

export const validateForm = (
  email: string,
  password: string,
  setFormErrors: SetFormErrors,
): boolean => {
  const errors: ErrorState = {};
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  if (!email || !emailRegex.test(email)) {
    errors.emailError = 'Valid email is required';
  }
  if (!password || password.length < 8) {
    errors.passwordError = 'Password must be at least 8 characters long';
  }
  setFormErrors((prev: ErrorState) => ({...prev, ...errors}));
  return Object.keys(errors).length === 0;
};
