import { useState, useEffect } from 'react';

import type { ApiError } from '@/api/apiTypes';

type useApiErrorProps = {
  error: ApiError | null;
  errorCallback?: () => void;
};

export const useApiError = ({ error, errorCallback }: useApiErrorProps) => {
  const [apiError, setApiError] = useState<string | null>(null);

  useEffect(() => {
    if (!error) return;

    setApiError(null);

    const { data } = (error as ApiError) ?? {};
    let errorMessage = null;
    if (data?.error) {
      let parsedError;
      try {
        parsedError = JSON.parse(data.error);
      } catch {
        parsedError = data.error;
      }
      errorMessage = parsedError?.message ?? parsedError;
    }

    if (data?.errors) {
      const [firstError] = Object.values(data.errors);
      errorMessage = Array.isArray(firstError) ? firstError[0] : firstError;
    }

    setApiError(errorMessage ?? 'Something went wrong!');
    errorCallback && errorCallback();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);

  return {
    apiError,
  };
};
