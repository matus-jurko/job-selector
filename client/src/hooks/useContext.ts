import React, { useContext as _useContext } from 'react';

/**
 * Returns the value of the given context.
 * @param context The given context.
 * @returns The context value.
 */
const useContext = <T>(context: React.Context<T | null>): T => {
  const ctx = _useContext(context);

  if (ctx === null) {
    throw new Error(`${context.displayName} provider not found!`);
  } else return ctx;
};

export default useContext;
