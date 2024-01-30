/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../../../../common";

export declare namespace IVault {
  export type BatchSwapStepStruct = {
    poolId: BytesLike;
    assetInIndex: BigNumberish;
    assetOutIndex: BigNumberish;
    amount: BigNumberish;
    userData: BytesLike;
  };

  export type BatchSwapStepStructOutput = [
    poolId: string,
    assetInIndex: bigint,
    assetOutIndex: bigint,
    amount: bigint,
    userData: string
  ] & {
    poolId: string;
    assetInIndex: bigint;
    assetOutIndex: bigint;
    amount: bigint;
    userData: string;
  };

  export type FundManagementStruct = {
    sender: AddressLike;
    fromInternalBalance: boolean;
    recipient: AddressLike;
    toInternalBalance: boolean;
  };

  export type FundManagementStructOutput = [
    sender: string,
    fromInternalBalance: boolean,
    recipient: string,
    toInternalBalance: boolean
  ] & {
    sender: string;
    fromInternalBalance: boolean;
    recipient: string;
    toInternalBalance: boolean;
  };

  export type ExitPoolRequestStruct = {
    assets: AddressLike[];
    minAmountsOut: BigNumberish[];
    userData: BytesLike;
    toInternalBalance: boolean;
  };

  export type ExitPoolRequestStructOutput = [
    assets: string[],
    minAmountsOut: bigint[],
    userData: string,
    toInternalBalance: boolean
  ] & {
    assets: string[];
    minAmountsOut: bigint[];
    userData: string;
    toInternalBalance: boolean;
  };

  export type JoinPoolRequestStruct = {
    assets: AddressLike[];
    maxAmountsIn: BigNumberish[];
    userData: BytesLike;
    fromInternalBalance: boolean;
  };

  export type JoinPoolRequestStructOutput = [
    assets: string[],
    maxAmountsIn: bigint[],
    userData: string,
    fromInternalBalance: boolean
  ] & {
    assets: string[];
    maxAmountsIn: bigint[];
    userData: string;
    fromInternalBalance: boolean;
  };

  export type PoolBalanceOpStruct = {
    kind: BigNumberish;
    poolId: BytesLike;
    token: AddressLike;
    amount: BigNumberish;
  };

  export type PoolBalanceOpStructOutput = [
    kind: bigint,
    poolId: string,
    token: string,
    amount: bigint
  ] & { kind: bigint; poolId: string; token: string; amount: bigint };

  export type UserBalanceOpStruct = {
    kind: BigNumberish;
    asset: AddressLike;
    amount: BigNumberish;
    sender: AddressLike;
    recipient: AddressLike;
  };

  export type UserBalanceOpStructOutput = [
    kind: bigint,
    asset: string,
    amount: bigint,
    sender: string,
    recipient: string
  ] & {
    kind: bigint;
    asset: string;
    amount: bigint;
    sender: string;
    recipient: string;
  };

  export type SingleSwapStruct = {
    poolId: BytesLike;
    kind: BigNumberish;
    assetIn: AddressLike;
    assetOut: AddressLike;
    amount: BigNumberish;
    userData: BytesLike;
  };

  export type SingleSwapStructOutput = [
    poolId: string,
    kind: bigint,
    assetIn: string,
    assetOut: string,
    amount: bigint,
    userData: string
  ] & {
    poolId: string;
    kind: bigint;
    assetIn: string;
    assetOut: string;
    amount: bigint;
    userData: string;
  };
}

export interface IVaultInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "WETH"
      | "batchSwap"
      | "deregisterTokens"
      | "exitPool"
      | "flashLoan"
      | "getActionId"
      | "getAuthorizer"
      | "getDomainSeparator"
      | "getInternalBalance"
      | "getNextNonce"
      | "getPausedState"
      | "getPool"
      | "getPoolTokenInfo"
      | "getPoolTokens"
      | "getProtocolFeesCollector"
      | "hasApprovedRelayer"
      | "joinPool"
      | "managePoolBalance"
      | "manageUserBalance"
      | "queryBatchSwap"
      | "registerPool"
      | "registerTokens"
      | "setAuthorizer"
      | "setPaused"
      | "setRelayerApproval"
      | "swap"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "AuthorizerChanged"
      | "ExternalBalanceTransfer"
      | "FlashLoan"
      | "InternalBalanceChanged"
      | "PausedStateChanged"
      | "PoolBalanceChanged"
      | "PoolBalanceManaged"
      | "PoolRegistered"
      | "RelayerApprovalChanged"
      | "Swap"
      | "TokensDeregistered"
      | "TokensRegistered"
  ): EventFragment;

  encodeFunctionData(functionFragment: "WETH", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "batchSwap",
    values: [
      BigNumberish,
      IVault.BatchSwapStepStruct[],
      AddressLike[],
      IVault.FundManagementStruct,
      BigNumberish[],
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "deregisterTokens",
    values: [BytesLike, AddressLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "exitPool",
    values: [BytesLike, AddressLike, AddressLike, IVault.ExitPoolRequestStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "flashLoan",
    values: [AddressLike, AddressLike[], BigNumberish[], BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getActionId",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getAuthorizer",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getDomainSeparator",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getInternalBalance",
    values: [AddressLike, AddressLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getNextNonce",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getPausedState",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "getPool", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "getPoolTokenInfo",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getPoolTokens",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getProtocolFeesCollector",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "hasApprovedRelayer",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "joinPool",
    values: [BytesLike, AddressLike, AddressLike, IVault.JoinPoolRequestStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "managePoolBalance",
    values: [IVault.PoolBalanceOpStruct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "manageUserBalance",
    values: [IVault.UserBalanceOpStruct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "queryBatchSwap",
    values: [
      BigNumberish,
      IVault.BatchSwapStepStruct[],
      AddressLike[],
      IVault.FundManagementStruct
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "registerPool",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "registerTokens",
    values: [BytesLike, AddressLike[], AddressLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "setAuthorizer",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "setPaused", values: [boolean]): string;
  encodeFunctionData(
    functionFragment: "setRelayerApproval",
    values: [AddressLike, AddressLike, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "swap",
    values: [
      IVault.SingleSwapStruct,
      IVault.FundManagementStruct,
      BigNumberish,
      BigNumberish
    ]
  ): string;

  decodeFunctionResult(functionFragment: "WETH", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "batchSwap", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "deregisterTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "exitPool", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "flashLoan", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getActionId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAuthorizer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getDomainSeparator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getInternalBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getNextNonce",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPausedState",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getPool", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getPoolTokenInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPoolTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getProtocolFeesCollector",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "hasApprovedRelayer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "joinPool", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "managePoolBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "manageUserBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "queryBatchSwap",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "registerPool",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "registerTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setAuthorizer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setPaused", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setRelayerApproval",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "swap", data: BytesLike): Result;
}

export namespace AuthorizerChangedEvent {
  export type InputTuple = [newAuthorizer: AddressLike];
  export type OutputTuple = [newAuthorizer: string];
  export interface OutputObject {
    newAuthorizer: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ExternalBalanceTransferEvent {
  export type InputTuple = [
    token: AddressLike,
    sender: AddressLike,
    recipient: AddressLike,
    amount: BigNumberish
  ];
  export type OutputTuple = [
    token: string,
    sender: string,
    recipient: string,
    amount: bigint
  ];
  export interface OutputObject {
    token: string;
    sender: string;
    recipient: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace FlashLoanEvent {
  export type InputTuple = [
    recipient: AddressLike,
    token: AddressLike,
    amount: BigNumberish,
    feeAmount: BigNumberish
  ];
  export type OutputTuple = [
    recipient: string,
    token: string,
    amount: bigint,
    feeAmount: bigint
  ];
  export interface OutputObject {
    recipient: string;
    token: string;
    amount: bigint;
    feeAmount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace InternalBalanceChangedEvent {
  export type InputTuple = [
    user: AddressLike,
    token: AddressLike,
    delta: BigNumberish
  ];
  export type OutputTuple = [user: string, token: string, delta: bigint];
  export interface OutputObject {
    user: string;
    token: string;
    delta: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace PausedStateChangedEvent {
  export type InputTuple = [paused: boolean];
  export type OutputTuple = [paused: boolean];
  export interface OutputObject {
    paused: boolean;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace PoolBalanceChangedEvent {
  export type InputTuple = [
    poolId: BytesLike,
    liquidityProvider: AddressLike,
    tokens: AddressLike[],
    deltas: BigNumberish[],
    protocolFeeAmounts: BigNumberish[]
  ];
  export type OutputTuple = [
    poolId: string,
    liquidityProvider: string,
    tokens: string[],
    deltas: bigint[],
    protocolFeeAmounts: bigint[]
  ];
  export interface OutputObject {
    poolId: string;
    liquidityProvider: string;
    tokens: string[];
    deltas: bigint[];
    protocolFeeAmounts: bigint[];
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace PoolBalanceManagedEvent {
  export type InputTuple = [
    poolId: BytesLike,
    assetManager: AddressLike,
    token: AddressLike,
    cashDelta: BigNumberish,
    managedDelta: BigNumberish
  ];
  export type OutputTuple = [
    poolId: string,
    assetManager: string,
    token: string,
    cashDelta: bigint,
    managedDelta: bigint
  ];
  export interface OutputObject {
    poolId: string;
    assetManager: string;
    token: string;
    cashDelta: bigint;
    managedDelta: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace PoolRegisteredEvent {
  export type InputTuple = [
    poolId: BytesLike,
    poolAddress: AddressLike,
    specialization: BigNumberish
  ];
  export type OutputTuple = [
    poolId: string,
    poolAddress: string,
    specialization: bigint
  ];
  export interface OutputObject {
    poolId: string;
    poolAddress: string;
    specialization: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RelayerApprovalChangedEvent {
  export type InputTuple = [
    relayer: AddressLike,
    sender: AddressLike,
    approved: boolean
  ];
  export type OutputTuple = [
    relayer: string,
    sender: string,
    approved: boolean
  ];
  export interface OutputObject {
    relayer: string;
    sender: string;
    approved: boolean;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace SwapEvent {
  export type InputTuple = [
    poolId: BytesLike,
    tokenIn: AddressLike,
    tokenOut: AddressLike,
    amountIn: BigNumberish,
    amountOut: BigNumberish
  ];
  export type OutputTuple = [
    poolId: string,
    tokenIn: string,
    tokenOut: string,
    amountIn: bigint,
    amountOut: bigint
  ];
  export interface OutputObject {
    poolId: string;
    tokenIn: string;
    tokenOut: string;
    amountIn: bigint;
    amountOut: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace TokensDeregisteredEvent {
  export type InputTuple = [poolId: BytesLike, tokens: AddressLike[]];
  export type OutputTuple = [poolId: string, tokens: string[]];
  export interface OutputObject {
    poolId: string;
    tokens: string[];
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace TokensRegisteredEvent {
  export type InputTuple = [
    poolId: BytesLike,
    tokens: AddressLike[],
    assetManagers: AddressLike[]
  ];
  export type OutputTuple = [
    poolId: string,
    tokens: string[],
    assetManagers: string[]
  ];
  export interface OutputObject {
    poolId: string;
    tokens: string[];
    assetManagers: string[];
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface IVault extends BaseContract {
  connect(runner?: ContractRunner | null): IVault;
  waitForDeployment(): Promise<this>;

  interface: IVaultInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  WETH: TypedContractMethod<[], [string], "view">;

  batchSwap: TypedContractMethod<
    [
      kind: BigNumberish,
      swaps: IVault.BatchSwapStepStruct[],
      assets: AddressLike[],
      funds: IVault.FundManagementStruct,
      limits: BigNumberish[],
      deadline: BigNumberish
    ],
    [bigint[]],
    "payable"
  >;

  deregisterTokens: TypedContractMethod<
    [poolId: BytesLike, tokens: AddressLike[]],
    [void],
    "nonpayable"
  >;

  exitPool: TypedContractMethod<
    [
      poolId: BytesLike,
      sender: AddressLike,
      recipient: AddressLike,
      request: IVault.ExitPoolRequestStruct
    ],
    [void],
    "nonpayable"
  >;

  flashLoan: TypedContractMethod<
    [
      recipient: AddressLike,
      tokens: AddressLike[],
      amounts: BigNumberish[],
      userData: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  getActionId: TypedContractMethod<[selector: BytesLike], [string], "view">;

  getAuthorizer: TypedContractMethod<[], [string], "view">;

  getDomainSeparator: TypedContractMethod<[], [string], "view">;

  getInternalBalance: TypedContractMethod<
    [user: AddressLike, tokens: AddressLike[]],
    [bigint[]],
    "view"
  >;

  getNextNonce: TypedContractMethod<[user: AddressLike], [bigint], "view">;

  getPausedState: TypedContractMethod<
    [],
    [
      [boolean, bigint, bigint] & {
        paused: boolean;
        pauseWindowEndTime: bigint;
        bufferPeriodEndTime: bigint;
      }
    ],
    "view"
  >;

  getPool: TypedContractMethod<[poolId: BytesLike], [[string, bigint]], "view">;

  getPoolTokenInfo: TypedContractMethod<
    [poolId: BytesLike, token: AddressLike],
    [
      [bigint, bigint, bigint, string] & {
        cash: bigint;
        managed: bigint;
        lastChangeBlock: bigint;
        assetManager: string;
      }
    ],
    "view"
  >;

  getPoolTokens: TypedContractMethod<
    [poolId: BytesLike],
    [
      [string[], bigint[], bigint] & {
        tokens: string[];
        balances: bigint[];
        lastChangeBlock: bigint;
      }
    ],
    "view"
  >;

  getProtocolFeesCollector: TypedContractMethod<[], [string], "view">;

  hasApprovedRelayer: TypedContractMethod<
    [user: AddressLike, relayer: AddressLike],
    [boolean],
    "view"
  >;

  joinPool: TypedContractMethod<
    [
      poolId: BytesLike,
      sender: AddressLike,
      recipient: AddressLike,
      request: IVault.JoinPoolRequestStruct
    ],
    [void],
    "payable"
  >;

  managePoolBalance: TypedContractMethod<
    [ops: IVault.PoolBalanceOpStruct[]],
    [void],
    "nonpayable"
  >;

  manageUserBalance: TypedContractMethod<
    [ops: IVault.UserBalanceOpStruct[]],
    [void],
    "payable"
  >;

  queryBatchSwap: TypedContractMethod<
    [
      kind: BigNumberish,
      swaps: IVault.BatchSwapStepStruct[],
      assets: AddressLike[],
      funds: IVault.FundManagementStruct
    ],
    [bigint[]],
    "nonpayable"
  >;

  registerPool: TypedContractMethod<
    [specialization: BigNumberish],
    [string],
    "nonpayable"
  >;

  registerTokens: TypedContractMethod<
    [poolId: BytesLike, tokens: AddressLike[], assetManagers: AddressLike[]],
    [void],
    "nonpayable"
  >;

  setAuthorizer: TypedContractMethod<
    [newAuthorizer: AddressLike],
    [void],
    "nonpayable"
  >;

  setPaused: TypedContractMethod<[paused: boolean], [void], "nonpayable">;

  setRelayerApproval: TypedContractMethod<
    [sender: AddressLike, relayer: AddressLike, approved: boolean],
    [void],
    "nonpayable"
  >;

  swap: TypedContractMethod<
    [
      singleSwap: IVault.SingleSwapStruct,
      funds: IVault.FundManagementStruct,
      limit: BigNumberish,
      deadline: BigNumberish
    ],
    [bigint],
    "payable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "WETH"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "batchSwap"
  ): TypedContractMethod<
    [
      kind: BigNumberish,
      swaps: IVault.BatchSwapStepStruct[],
      assets: AddressLike[],
      funds: IVault.FundManagementStruct,
      limits: BigNumberish[],
      deadline: BigNumberish
    ],
    [bigint[]],
    "payable"
  >;
  getFunction(
    nameOrSignature: "deregisterTokens"
  ): TypedContractMethod<
    [poolId: BytesLike, tokens: AddressLike[]],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "exitPool"
  ): TypedContractMethod<
    [
      poolId: BytesLike,
      sender: AddressLike,
      recipient: AddressLike,
      request: IVault.ExitPoolRequestStruct
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "flashLoan"
  ): TypedContractMethod<
    [
      recipient: AddressLike,
      tokens: AddressLike[],
      amounts: BigNumberish[],
      userData: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "getActionId"
  ): TypedContractMethod<[selector: BytesLike], [string], "view">;
  getFunction(
    nameOrSignature: "getAuthorizer"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "getDomainSeparator"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "getInternalBalance"
  ): TypedContractMethod<
    [user: AddressLike, tokens: AddressLike[]],
    [bigint[]],
    "view"
  >;
  getFunction(
    nameOrSignature: "getNextNonce"
  ): TypedContractMethod<[user: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "getPausedState"
  ): TypedContractMethod<
    [],
    [
      [boolean, bigint, bigint] & {
        paused: boolean;
        pauseWindowEndTime: bigint;
        bufferPeriodEndTime: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "getPool"
  ): TypedContractMethod<[poolId: BytesLike], [[string, bigint]], "view">;
  getFunction(
    nameOrSignature: "getPoolTokenInfo"
  ): TypedContractMethod<
    [poolId: BytesLike, token: AddressLike],
    [
      [bigint, bigint, bigint, string] & {
        cash: bigint;
        managed: bigint;
        lastChangeBlock: bigint;
        assetManager: string;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "getPoolTokens"
  ): TypedContractMethod<
    [poolId: BytesLike],
    [
      [string[], bigint[], bigint] & {
        tokens: string[];
        balances: bigint[];
        lastChangeBlock: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "getProtocolFeesCollector"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "hasApprovedRelayer"
  ): TypedContractMethod<
    [user: AddressLike, relayer: AddressLike],
    [boolean],
    "view"
  >;
  getFunction(
    nameOrSignature: "joinPool"
  ): TypedContractMethod<
    [
      poolId: BytesLike,
      sender: AddressLike,
      recipient: AddressLike,
      request: IVault.JoinPoolRequestStruct
    ],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "managePoolBalance"
  ): TypedContractMethod<
    [ops: IVault.PoolBalanceOpStruct[]],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "manageUserBalance"
  ): TypedContractMethod<
    [ops: IVault.UserBalanceOpStruct[]],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "queryBatchSwap"
  ): TypedContractMethod<
    [
      kind: BigNumberish,
      swaps: IVault.BatchSwapStepStruct[],
      assets: AddressLike[],
      funds: IVault.FundManagementStruct
    ],
    [bigint[]],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "registerPool"
  ): TypedContractMethod<
    [specialization: BigNumberish],
    [string],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "registerTokens"
  ): TypedContractMethod<
    [poolId: BytesLike, tokens: AddressLike[], assetManagers: AddressLike[]],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setAuthorizer"
  ): TypedContractMethod<[newAuthorizer: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setPaused"
  ): TypedContractMethod<[paused: boolean], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setRelayerApproval"
  ): TypedContractMethod<
    [sender: AddressLike, relayer: AddressLike, approved: boolean],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "swap"
  ): TypedContractMethod<
    [
      singleSwap: IVault.SingleSwapStruct,
      funds: IVault.FundManagementStruct,
      limit: BigNumberish,
      deadline: BigNumberish
    ],
    [bigint],
    "payable"
  >;

  getEvent(
    key: "AuthorizerChanged"
  ): TypedContractEvent<
    AuthorizerChangedEvent.InputTuple,
    AuthorizerChangedEvent.OutputTuple,
    AuthorizerChangedEvent.OutputObject
  >;
  getEvent(
    key: "ExternalBalanceTransfer"
  ): TypedContractEvent<
    ExternalBalanceTransferEvent.InputTuple,
    ExternalBalanceTransferEvent.OutputTuple,
    ExternalBalanceTransferEvent.OutputObject
  >;
  getEvent(
    key: "FlashLoan"
  ): TypedContractEvent<
    FlashLoanEvent.InputTuple,
    FlashLoanEvent.OutputTuple,
    FlashLoanEvent.OutputObject
  >;
  getEvent(
    key: "InternalBalanceChanged"
  ): TypedContractEvent<
    InternalBalanceChangedEvent.InputTuple,
    InternalBalanceChangedEvent.OutputTuple,
    InternalBalanceChangedEvent.OutputObject
  >;
  getEvent(
    key: "PausedStateChanged"
  ): TypedContractEvent<
    PausedStateChangedEvent.InputTuple,
    PausedStateChangedEvent.OutputTuple,
    PausedStateChangedEvent.OutputObject
  >;
  getEvent(
    key: "PoolBalanceChanged"
  ): TypedContractEvent<
    PoolBalanceChangedEvent.InputTuple,
    PoolBalanceChangedEvent.OutputTuple,
    PoolBalanceChangedEvent.OutputObject
  >;
  getEvent(
    key: "PoolBalanceManaged"
  ): TypedContractEvent<
    PoolBalanceManagedEvent.InputTuple,
    PoolBalanceManagedEvent.OutputTuple,
    PoolBalanceManagedEvent.OutputObject
  >;
  getEvent(
    key: "PoolRegistered"
  ): TypedContractEvent<
    PoolRegisteredEvent.InputTuple,
    PoolRegisteredEvent.OutputTuple,
    PoolRegisteredEvent.OutputObject
  >;
  getEvent(
    key: "RelayerApprovalChanged"
  ): TypedContractEvent<
    RelayerApprovalChangedEvent.InputTuple,
    RelayerApprovalChangedEvent.OutputTuple,
    RelayerApprovalChangedEvent.OutputObject
  >;
  getEvent(
    key: "Swap"
  ): TypedContractEvent<
    SwapEvent.InputTuple,
    SwapEvent.OutputTuple,
    SwapEvent.OutputObject
  >;
  getEvent(
    key: "TokensDeregistered"
  ): TypedContractEvent<
    TokensDeregisteredEvent.InputTuple,
    TokensDeregisteredEvent.OutputTuple,
    TokensDeregisteredEvent.OutputObject
  >;
  getEvent(
    key: "TokensRegistered"
  ): TypedContractEvent<
    TokensRegisteredEvent.InputTuple,
    TokensRegisteredEvent.OutputTuple,
    TokensRegisteredEvent.OutputObject
  >;

  filters: {
    "AuthorizerChanged(address)": TypedContractEvent<
      AuthorizerChangedEvent.InputTuple,
      AuthorizerChangedEvent.OutputTuple,
      AuthorizerChangedEvent.OutputObject
    >;
    AuthorizerChanged: TypedContractEvent<
      AuthorizerChangedEvent.InputTuple,
      AuthorizerChangedEvent.OutputTuple,
      AuthorizerChangedEvent.OutputObject
    >;

    "ExternalBalanceTransfer(address,address,address,uint256)": TypedContractEvent<
      ExternalBalanceTransferEvent.InputTuple,
      ExternalBalanceTransferEvent.OutputTuple,
      ExternalBalanceTransferEvent.OutputObject
    >;
    ExternalBalanceTransfer: TypedContractEvent<
      ExternalBalanceTransferEvent.InputTuple,
      ExternalBalanceTransferEvent.OutputTuple,
      ExternalBalanceTransferEvent.OutputObject
    >;

    "FlashLoan(address,address,uint256,uint256)": TypedContractEvent<
      FlashLoanEvent.InputTuple,
      FlashLoanEvent.OutputTuple,
      FlashLoanEvent.OutputObject
    >;
    FlashLoan: TypedContractEvent<
      FlashLoanEvent.InputTuple,
      FlashLoanEvent.OutputTuple,
      FlashLoanEvent.OutputObject
    >;

    "InternalBalanceChanged(address,address,int256)": TypedContractEvent<
      InternalBalanceChangedEvent.InputTuple,
      InternalBalanceChangedEvent.OutputTuple,
      InternalBalanceChangedEvent.OutputObject
    >;
    InternalBalanceChanged: TypedContractEvent<
      InternalBalanceChangedEvent.InputTuple,
      InternalBalanceChangedEvent.OutputTuple,
      InternalBalanceChangedEvent.OutputObject
    >;

    "PausedStateChanged(bool)": TypedContractEvent<
      PausedStateChangedEvent.InputTuple,
      PausedStateChangedEvent.OutputTuple,
      PausedStateChangedEvent.OutputObject
    >;
    PausedStateChanged: TypedContractEvent<
      PausedStateChangedEvent.InputTuple,
      PausedStateChangedEvent.OutputTuple,
      PausedStateChangedEvent.OutputObject
    >;

    "PoolBalanceChanged(bytes32,address,address[],int256[],uint256[])": TypedContractEvent<
      PoolBalanceChangedEvent.InputTuple,
      PoolBalanceChangedEvent.OutputTuple,
      PoolBalanceChangedEvent.OutputObject
    >;
    PoolBalanceChanged: TypedContractEvent<
      PoolBalanceChangedEvent.InputTuple,
      PoolBalanceChangedEvent.OutputTuple,
      PoolBalanceChangedEvent.OutputObject
    >;

    "PoolBalanceManaged(bytes32,address,address,int256,int256)": TypedContractEvent<
      PoolBalanceManagedEvent.InputTuple,
      PoolBalanceManagedEvent.OutputTuple,
      PoolBalanceManagedEvent.OutputObject
    >;
    PoolBalanceManaged: TypedContractEvent<
      PoolBalanceManagedEvent.InputTuple,
      PoolBalanceManagedEvent.OutputTuple,
      PoolBalanceManagedEvent.OutputObject
    >;

    "PoolRegistered(bytes32,address,uint8)": TypedContractEvent<
      PoolRegisteredEvent.InputTuple,
      PoolRegisteredEvent.OutputTuple,
      PoolRegisteredEvent.OutputObject
    >;
    PoolRegistered: TypedContractEvent<
      PoolRegisteredEvent.InputTuple,
      PoolRegisteredEvent.OutputTuple,
      PoolRegisteredEvent.OutputObject
    >;

    "RelayerApprovalChanged(address,address,bool)": TypedContractEvent<
      RelayerApprovalChangedEvent.InputTuple,
      RelayerApprovalChangedEvent.OutputTuple,
      RelayerApprovalChangedEvent.OutputObject
    >;
    RelayerApprovalChanged: TypedContractEvent<
      RelayerApprovalChangedEvent.InputTuple,
      RelayerApprovalChangedEvent.OutputTuple,
      RelayerApprovalChangedEvent.OutputObject
    >;

    "Swap(bytes32,address,address,uint256,uint256)": TypedContractEvent<
      SwapEvent.InputTuple,
      SwapEvent.OutputTuple,
      SwapEvent.OutputObject
    >;
    Swap: TypedContractEvent<
      SwapEvent.InputTuple,
      SwapEvent.OutputTuple,
      SwapEvent.OutputObject
    >;

    "TokensDeregistered(bytes32,address[])": TypedContractEvent<
      TokensDeregisteredEvent.InputTuple,
      TokensDeregisteredEvent.OutputTuple,
      TokensDeregisteredEvent.OutputObject
    >;
    TokensDeregistered: TypedContractEvent<
      TokensDeregisteredEvent.InputTuple,
      TokensDeregisteredEvent.OutputTuple,
      TokensDeregisteredEvent.OutputObject
    >;

    "TokensRegistered(bytes32,address[],address[])": TypedContractEvent<
      TokensRegisteredEvent.InputTuple,
      TokensRegisteredEvent.OutputTuple,
      TokensRegisteredEvent.OutputObject
    >;
    TokensRegistered: TypedContractEvent<
      TokensRegisteredEvent.InputTuple,
      TokensRegisteredEvent.OutputTuple,
      TokensRegisteredEvent.OutputObject
    >;
  };
}
