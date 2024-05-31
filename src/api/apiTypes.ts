export type ApiError = {
  data: {
    error_type: string;
    error?: string;
    errors?: {
      [key: string]: any;
    };
  };
  status: number;
};
