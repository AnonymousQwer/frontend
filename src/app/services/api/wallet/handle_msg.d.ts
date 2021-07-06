/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type HandleMsg =
  | {
      poll_vote: {
        amount: Uint128;
        poll_id: number;
        vote: VoteOption;
        [k: string]: unknown;
      };
      [k: string]: unknown;
    }
  | {
      receive: Cw20ReceiveMsg;
      [k: string]: unknown;
    }
  | {
      stake: {
        amount: Uint128;
        [k: string]: unknown;
      };
      [k: string]: unknown;
    }
  | {
      unstake: {
        amount: Uint128;
        [k: string]: unknown;
      };
      [k: string]: unknown;
    }
  | {
      update_config: {
        owner?: HumanAddr | null;
        [k: string]: unknown;
      };
      [k: string]: unknown;
    }
  | {
      upsert_share: {
        address: HumanAddr;
        lock_amount?: Uint128 | null;
        lock_end?: number | null;
        lock_start?: number | null;
        weight: number;
        [k: string]: unknown;
      };
      [k: string]: unknown;
    }
  | {
      withdraw: {
        amount?: Uint128 | null;
        [k: string]: unknown;
      };
      [k: string]: unknown;
    };
export type Uint128 = string;
export type VoteOption = "yes" | "no";
/**
 * Binary is a wrapper around Vec<u8> to add base64 de/serialization with serde. It also adds some helper methods to help encode inline.
 *
 * This is only needed as serde-json-{core,wasm} has a horrible encoding for Vec<u8>
 */
export type Binary = string;
export type HumanAddr = string;

/**
 * Cw20ReceiveMsg should be de/serialized under `Receive()` variant in a HandleMsg
 */
export interface Cw20ReceiveMsg {
  amount: Uint128;
  msg?: Binary | null;
  sender: HumanAddr;
  [k: string]: unknown;
}