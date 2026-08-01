import "server-only";

import type { Sdk as ICanHazDadJokeSDK } from "../../common/apis/icanhazdadjoke/sdk";
import type { Config } from "../config/types";

export type APIs = {
  icanhazdadjoke: ICanHazDadJokeSDK;
};

export type State = {
  apis: APIs;
  config: Config;
};
