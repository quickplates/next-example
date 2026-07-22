import * as z from "zod";

export const IdentitySchemas = {
  User: z.object({
    id: z.coerce.string().nonempty(),
  }),
};
