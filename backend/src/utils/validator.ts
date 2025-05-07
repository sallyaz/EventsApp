export const validateId = (id: string): boolean => typeof id === 'string' && id.trim() !== '';

export const validateRSVP = (name: unknown, guests: unknown): boolean => {
  return typeof name === 'string' && name.trim() !== '' && typeof guests === 'number';
};