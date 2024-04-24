"use server";

import { HelloWorldProps } from "./types";

export async function helloWorld({}: HelloWorldProps = {}) {
  return "Hello, World!";
}
