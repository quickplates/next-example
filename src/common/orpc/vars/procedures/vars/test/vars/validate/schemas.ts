import * as z from "zod";

export const Schemas = {
  Input: z.object({
    value: z.string().pipe(z.literal("test")),
  }),
  Output: z.object({
    value: z.literal("test"),
  }),
};
