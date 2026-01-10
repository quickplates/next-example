export type CreateUrlInput = {
  host: string;
  path?: null | string;
  port?: null | number;
  scheme: string;
};

export type CreateUrlOutput = string;
