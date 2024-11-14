"use server";

import { helloWorld as internalHelloWorld } from "../../lib/hello-world";
import { HelloWorldInput, HelloWorldOutput } from "./types";

export async function helloWorld({}: HelloWorldInput = {}): Promise<HelloWorldOutput> {
  const { message } = await internalHelloWorld();
  return { message: message };
}
