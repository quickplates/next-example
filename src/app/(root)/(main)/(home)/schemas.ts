import * as z from "zod";

export const Schemas = {
  Path: undefined as never,
  Query: z.object({
    foo: z.coerce.string().optional().catch(undefined),
  }),
};
