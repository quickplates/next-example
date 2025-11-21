import { orpcServerRootBase } from "../../../../../bases/root";

export const validate = orpcServerRootBase.test.validate.handler(
  async ({ input }) => ({ value: input.value }),
);
