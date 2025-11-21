import "server-only";
import * as z from "zod";

export const ConfigSchemas = {
  Config: z
    .object({
      debug: z.stringbool().default(true),
      server: z
        .object({
          host: z.coerce.string().default("0.0.0.0"),
          port: z.coerce.number().min(0).max(65535).default(3000),
        })
        .prefault({}),
    })
    .prefault({}),
};
