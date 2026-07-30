import "client-only";

import type { ReadonlyDeep } from "type-fest";

export type NowState = {
  counter: number;
  timer: number;
  timestamp: number;
};

export type State = {
  now?: NowState;
};

export type ReadonlyState = ReadonlyDeep<State>;

export type StateSubscribeCallback = (state: State) => void;

export type StateUnsubscribe = () => void;

export type StateSubscribe = (
  callback: StateSubscribeCallback,
) => StateUnsubscribe;
