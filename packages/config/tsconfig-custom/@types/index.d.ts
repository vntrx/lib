export interface RTKError extends Error {
  cause: {
    status: number;
  };
}