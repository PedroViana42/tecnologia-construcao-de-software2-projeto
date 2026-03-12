
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Cinema
 * 
 */
export type Cinema = $Result.DefaultSelection<Prisma.$CinemaPayload>
/**
 * Model Sala
 * 
 */
export type Sala = $Result.DefaultSelection<Prisma.$SalaPayload>
/**
 * Model Filme
 * 
 */
export type Filme = $Result.DefaultSelection<Prisma.$FilmePayload>
/**
 * Model Sessao
 * 
 */
export type Sessao = $Result.DefaultSelection<Prisma.$SessaoPayload>
/**
 * Model Ingresso
 * 
 */
export type Ingresso = $Result.DefaultSelection<Prisma.$IngressoPayload>
/**
 * Model LancheCombo
 * 
 */
export type LancheCombo = $Result.DefaultSelection<Prisma.$LancheComboPayload>
/**
 * Model Pedido
 * 
 */
export type Pedido = $Result.DefaultSelection<Prisma.$PedidoPayload>
/**
 * Model PedidoIngresso
 * 
 */
export type PedidoIngresso = $Result.DefaultSelection<Prisma.$PedidoIngressoPayload>
/**
 * Model PedidoLancheCombo
 * 
 */
export type PedidoLancheCombo = $Result.DefaultSelection<Prisma.$PedidoLancheComboPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Cinemas
 * const cinemas = await prisma.cinema.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Cinemas
   * const cinemas = await prisma.cinema.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.cinema`: Exposes CRUD operations for the **Cinema** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cinemas
    * const cinemas = await prisma.cinema.findMany()
    * ```
    */
  get cinema(): Prisma.CinemaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sala`: Exposes CRUD operations for the **Sala** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Salas
    * const salas = await prisma.sala.findMany()
    * ```
    */
  get sala(): Prisma.SalaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.filme`: Exposes CRUD operations for the **Filme** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Filmes
    * const filmes = await prisma.filme.findMany()
    * ```
    */
  get filme(): Prisma.FilmeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sessao`: Exposes CRUD operations for the **Sessao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessaos
    * const sessaos = await prisma.sessao.findMany()
    * ```
    */
  get sessao(): Prisma.SessaoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ingresso`: Exposes CRUD operations for the **Ingresso** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ingressos
    * const ingressos = await prisma.ingresso.findMany()
    * ```
    */
  get ingresso(): Prisma.IngressoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lancheCombo`: Exposes CRUD operations for the **LancheCombo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LancheCombos
    * const lancheCombos = await prisma.lancheCombo.findMany()
    * ```
    */
  get lancheCombo(): Prisma.LancheComboDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pedido`: Exposes CRUD operations for the **Pedido** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pedidos
    * const pedidos = await prisma.pedido.findMany()
    * ```
    */
  get pedido(): Prisma.PedidoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pedidoIngresso`: Exposes CRUD operations for the **PedidoIngresso** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PedidoIngressos
    * const pedidoIngressos = await prisma.pedidoIngresso.findMany()
    * ```
    */
  get pedidoIngresso(): Prisma.PedidoIngressoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pedidoLancheCombo`: Exposes CRUD operations for the **PedidoLancheCombo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PedidoLancheCombos
    * const pedidoLancheCombos = await prisma.pedidoLancheCombo.findMany()
    * ```
    */
  get pedidoLancheCombo(): Prisma.PedidoLancheComboDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.4.1
   * Query Engine version: 55ae170b1ced7fc6ed07a15f110549408c501bb3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Cinema: 'Cinema',
    Sala: 'Sala',
    Filme: 'Filme',
    Sessao: 'Sessao',
    Ingresso: 'Ingresso',
    LancheCombo: 'LancheCombo',
    Pedido: 'Pedido',
    PedidoIngresso: 'PedidoIngresso',
    PedidoLancheCombo: 'PedidoLancheCombo'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "cinema" | "sala" | "filme" | "sessao" | "ingresso" | "lancheCombo" | "pedido" | "pedidoIngresso" | "pedidoLancheCombo"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Cinema: {
        payload: Prisma.$CinemaPayload<ExtArgs>
        fields: Prisma.CinemaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CinemaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CinemaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CinemaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CinemaPayload>
          }
          findFirst: {
            args: Prisma.CinemaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CinemaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CinemaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CinemaPayload>
          }
          findMany: {
            args: Prisma.CinemaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CinemaPayload>[]
          }
          create: {
            args: Prisma.CinemaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CinemaPayload>
          }
          createMany: {
            args: Prisma.CinemaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CinemaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CinemaPayload>[]
          }
          delete: {
            args: Prisma.CinemaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CinemaPayload>
          }
          update: {
            args: Prisma.CinemaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CinemaPayload>
          }
          deleteMany: {
            args: Prisma.CinemaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CinemaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CinemaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CinemaPayload>[]
          }
          upsert: {
            args: Prisma.CinemaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CinemaPayload>
          }
          aggregate: {
            args: Prisma.CinemaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCinema>
          }
          groupBy: {
            args: Prisma.CinemaGroupByArgs<ExtArgs>
            result: $Utils.Optional<CinemaGroupByOutputType>[]
          }
          count: {
            args: Prisma.CinemaCountArgs<ExtArgs>
            result: $Utils.Optional<CinemaCountAggregateOutputType> | number
          }
        }
      }
      Sala: {
        payload: Prisma.$SalaPayload<ExtArgs>
        fields: Prisma.SalaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SalaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SalaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaPayload>
          }
          findFirst: {
            args: Prisma.SalaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SalaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaPayload>
          }
          findMany: {
            args: Prisma.SalaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaPayload>[]
          }
          create: {
            args: Prisma.SalaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaPayload>
          }
          createMany: {
            args: Prisma.SalaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SalaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaPayload>[]
          }
          delete: {
            args: Prisma.SalaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaPayload>
          }
          update: {
            args: Prisma.SalaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaPayload>
          }
          deleteMany: {
            args: Prisma.SalaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SalaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SalaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaPayload>[]
          }
          upsert: {
            args: Prisma.SalaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaPayload>
          }
          aggregate: {
            args: Prisma.SalaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSala>
          }
          groupBy: {
            args: Prisma.SalaGroupByArgs<ExtArgs>
            result: $Utils.Optional<SalaGroupByOutputType>[]
          }
          count: {
            args: Prisma.SalaCountArgs<ExtArgs>
            result: $Utils.Optional<SalaCountAggregateOutputType> | number
          }
        }
      }
      Filme: {
        payload: Prisma.$FilmePayload<ExtArgs>
        fields: Prisma.FilmeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FilmeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilmePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FilmeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilmePayload>
          }
          findFirst: {
            args: Prisma.FilmeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilmePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FilmeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilmePayload>
          }
          findMany: {
            args: Prisma.FilmeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilmePayload>[]
          }
          create: {
            args: Prisma.FilmeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilmePayload>
          }
          createMany: {
            args: Prisma.FilmeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FilmeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilmePayload>[]
          }
          delete: {
            args: Prisma.FilmeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilmePayload>
          }
          update: {
            args: Prisma.FilmeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilmePayload>
          }
          deleteMany: {
            args: Prisma.FilmeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FilmeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FilmeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilmePayload>[]
          }
          upsert: {
            args: Prisma.FilmeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilmePayload>
          }
          aggregate: {
            args: Prisma.FilmeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFilme>
          }
          groupBy: {
            args: Prisma.FilmeGroupByArgs<ExtArgs>
            result: $Utils.Optional<FilmeGroupByOutputType>[]
          }
          count: {
            args: Prisma.FilmeCountArgs<ExtArgs>
            result: $Utils.Optional<FilmeCountAggregateOutputType> | number
          }
        }
      }
      Sessao: {
        payload: Prisma.$SessaoPayload<ExtArgs>
        fields: Prisma.SessaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessaoPayload>
          }
          findFirst: {
            args: Prisma.SessaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessaoPayload>
          }
          findMany: {
            args: Prisma.SessaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessaoPayload>[]
          }
          create: {
            args: Prisma.SessaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessaoPayload>
          }
          createMany: {
            args: Prisma.SessaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessaoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessaoPayload>[]
          }
          delete: {
            args: Prisma.SessaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessaoPayload>
          }
          update: {
            args: Prisma.SessaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessaoPayload>
          }
          deleteMany: {
            args: Prisma.SessaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessaoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessaoPayload>[]
          }
          upsert: {
            args: Prisma.SessaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessaoPayload>
          }
          aggregate: {
            args: Prisma.SessaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSessao>
          }
          groupBy: {
            args: Prisma.SessaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessaoCountArgs<ExtArgs>
            result: $Utils.Optional<SessaoCountAggregateOutputType> | number
          }
        }
      }
      Ingresso: {
        payload: Prisma.$IngressoPayload<ExtArgs>
        fields: Prisma.IngressoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IngressoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngressoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IngressoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngressoPayload>
          }
          findFirst: {
            args: Prisma.IngressoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngressoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IngressoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngressoPayload>
          }
          findMany: {
            args: Prisma.IngressoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngressoPayload>[]
          }
          create: {
            args: Prisma.IngressoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngressoPayload>
          }
          createMany: {
            args: Prisma.IngressoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IngressoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngressoPayload>[]
          }
          delete: {
            args: Prisma.IngressoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngressoPayload>
          }
          update: {
            args: Prisma.IngressoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngressoPayload>
          }
          deleteMany: {
            args: Prisma.IngressoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IngressoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IngressoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngressoPayload>[]
          }
          upsert: {
            args: Prisma.IngressoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngressoPayload>
          }
          aggregate: {
            args: Prisma.IngressoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIngresso>
          }
          groupBy: {
            args: Prisma.IngressoGroupByArgs<ExtArgs>
            result: $Utils.Optional<IngressoGroupByOutputType>[]
          }
          count: {
            args: Prisma.IngressoCountArgs<ExtArgs>
            result: $Utils.Optional<IngressoCountAggregateOutputType> | number
          }
        }
      }
      LancheCombo: {
        payload: Prisma.$LancheComboPayload<ExtArgs>
        fields: Prisma.LancheComboFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LancheComboFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LancheComboPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LancheComboFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LancheComboPayload>
          }
          findFirst: {
            args: Prisma.LancheComboFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LancheComboPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LancheComboFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LancheComboPayload>
          }
          findMany: {
            args: Prisma.LancheComboFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LancheComboPayload>[]
          }
          create: {
            args: Prisma.LancheComboCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LancheComboPayload>
          }
          createMany: {
            args: Prisma.LancheComboCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LancheComboCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LancheComboPayload>[]
          }
          delete: {
            args: Prisma.LancheComboDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LancheComboPayload>
          }
          update: {
            args: Prisma.LancheComboUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LancheComboPayload>
          }
          deleteMany: {
            args: Prisma.LancheComboDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LancheComboUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LancheComboUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LancheComboPayload>[]
          }
          upsert: {
            args: Prisma.LancheComboUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LancheComboPayload>
          }
          aggregate: {
            args: Prisma.LancheComboAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLancheCombo>
          }
          groupBy: {
            args: Prisma.LancheComboGroupByArgs<ExtArgs>
            result: $Utils.Optional<LancheComboGroupByOutputType>[]
          }
          count: {
            args: Prisma.LancheComboCountArgs<ExtArgs>
            result: $Utils.Optional<LancheComboCountAggregateOutputType> | number
          }
        }
      }
      Pedido: {
        payload: Prisma.$PedidoPayload<ExtArgs>
        fields: Prisma.PedidoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PedidoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PedidoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          findFirst: {
            args: Prisma.PedidoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PedidoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          findMany: {
            args: Prisma.PedidoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>[]
          }
          create: {
            args: Prisma.PedidoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          createMany: {
            args: Prisma.PedidoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PedidoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>[]
          }
          delete: {
            args: Prisma.PedidoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          update: {
            args: Prisma.PedidoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          deleteMany: {
            args: Prisma.PedidoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PedidoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PedidoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>[]
          }
          upsert: {
            args: Prisma.PedidoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoPayload>
          }
          aggregate: {
            args: Prisma.PedidoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePedido>
          }
          groupBy: {
            args: Prisma.PedidoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PedidoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PedidoCountArgs<ExtArgs>
            result: $Utils.Optional<PedidoCountAggregateOutputType> | number
          }
        }
      }
      PedidoIngresso: {
        payload: Prisma.$PedidoIngressoPayload<ExtArgs>
        fields: Prisma.PedidoIngressoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PedidoIngressoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoIngressoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PedidoIngressoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoIngressoPayload>
          }
          findFirst: {
            args: Prisma.PedidoIngressoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoIngressoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PedidoIngressoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoIngressoPayload>
          }
          findMany: {
            args: Prisma.PedidoIngressoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoIngressoPayload>[]
          }
          create: {
            args: Prisma.PedidoIngressoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoIngressoPayload>
          }
          createMany: {
            args: Prisma.PedidoIngressoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PedidoIngressoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoIngressoPayload>[]
          }
          delete: {
            args: Prisma.PedidoIngressoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoIngressoPayload>
          }
          update: {
            args: Prisma.PedidoIngressoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoIngressoPayload>
          }
          deleteMany: {
            args: Prisma.PedidoIngressoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PedidoIngressoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PedidoIngressoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoIngressoPayload>[]
          }
          upsert: {
            args: Prisma.PedidoIngressoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoIngressoPayload>
          }
          aggregate: {
            args: Prisma.PedidoIngressoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePedidoIngresso>
          }
          groupBy: {
            args: Prisma.PedidoIngressoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PedidoIngressoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PedidoIngressoCountArgs<ExtArgs>
            result: $Utils.Optional<PedidoIngressoCountAggregateOutputType> | number
          }
        }
      }
      PedidoLancheCombo: {
        payload: Prisma.$PedidoLancheComboPayload<ExtArgs>
        fields: Prisma.PedidoLancheComboFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PedidoLancheComboFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoLancheComboPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PedidoLancheComboFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoLancheComboPayload>
          }
          findFirst: {
            args: Prisma.PedidoLancheComboFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoLancheComboPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PedidoLancheComboFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoLancheComboPayload>
          }
          findMany: {
            args: Prisma.PedidoLancheComboFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoLancheComboPayload>[]
          }
          create: {
            args: Prisma.PedidoLancheComboCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoLancheComboPayload>
          }
          createMany: {
            args: Prisma.PedidoLancheComboCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PedidoLancheComboCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoLancheComboPayload>[]
          }
          delete: {
            args: Prisma.PedidoLancheComboDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoLancheComboPayload>
          }
          update: {
            args: Prisma.PedidoLancheComboUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoLancheComboPayload>
          }
          deleteMany: {
            args: Prisma.PedidoLancheComboDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PedidoLancheComboUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PedidoLancheComboUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoLancheComboPayload>[]
          }
          upsert: {
            args: Prisma.PedidoLancheComboUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PedidoLancheComboPayload>
          }
          aggregate: {
            args: Prisma.PedidoLancheComboAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePedidoLancheCombo>
          }
          groupBy: {
            args: Prisma.PedidoLancheComboGroupByArgs<ExtArgs>
            result: $Utils.Optional<PedidoLancheComboGroupByOutputType>[]
          }
          count: {
            args: Prisma.PedidoLancheComboCountArgs<ExtArgs>
            result: $Utils.Optional<PedidoLancheComboCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    cinema?: CinemaOmit
    sala?: SalaOmit
    filme?: FilmeOmit
    sessao?: SessaoOmit
    ingresso?: IngressoOmit
    lancheCombo?: LancheComboOmit
    pedido?: PedidoOmit
    pedidoIngresso?: PedidoIngressoOmit
    pedidoLancheCombo?: PedidoLancheComboOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CinemaCountOutputType
   */

  export type CinemaCountOutputType = {
    salas: number
    sessoes: number
  }

  export type CinemaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    salas?: boolean | CinemaCountOutputTypeCountSalasArgs
    sessoes?: boolean | CinemaCountOutputTypeCountSessoesArgs
  }

  // Custom InputTypes
  /**
   * CinemaCountOutputType without action
   */
  export type CinemaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CinemaCountOutputType
     */
    select?: CinemaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CinemaCountOutputType without action
   */
  export type CinemaCountOutputTypeCountSalasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SalaWhereInput
  }

  /**
   * CinemaCountOutputType without action
   */
  export type CinemaCountOutputTypeCountSessoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessaoWhereInput
  }


  /**
   * Count Type SalaCountOutputType
   */

  export type SalaCountOutputType = {
    sessoes: number
  }

  export type SalaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessoes?: boolean | SalaCountOutputTypeCountSessoesArgs
  }

  // Custom InputTypes
  /**
   * SalaCountOutputType without action
   */
  export type SalaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalaCountOutputType
     */
    select?: SalaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SalaCountOutputType without action
   */
  export type SalaCountOutputTypeCountSessoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessaoWhereInput
  }


  /**
   * Count Type FilmeCountOutputType
   */

  export type FilmeCountOutputType = {
    sessoes: number
  }

  export type FilmeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessoes?: boolean | FilmeCountOutputTypeCountSessoesArgs
  }

  // Custom InputTypes
  /**
   * FilmeCountOutputType without action
   */
  export type FilmeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FilmeCountOutputType
     */
    select?: FilmeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FilmeCountOutputType without action
   */
  export type FilmeCountOutputTypeCountSessoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessaoWhereInput
  }


  /**
   * Count Type SessaoCountOutputType
   */

  export type SessaoCountOutputType = {
    ingressos: number
  }

  export type SessaoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ingressos?: boolean | SessaoCountOutputTypeCountIngressosArgs
  }

  // Custom InputTypes
  /**
   * SessaoCountOutputType without action
   */
  export type SessaoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessaoCountOutputType
     */
    select?: SessaoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SessaoCountOutputType without action
   */
  export type SessaoCountOutputTypeCountIngressosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IngressoWhereInput
  }


  /**
   * Count Type IngressoCountOutputType
   */

  export type IngressoCountOutputType = {
    pedidos: number
  }

  export type IngressoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedidos?: boolean | IngressoCountOutputTypeCountPedidosArgs
  }

  // Custom InputTypes
  /**
   * IngressoCountOutputType without action
   */
  export type IngressoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngressoCountOutputType
     */
    select?: IngressoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * IngressoCountOutputType without action
   */
  export type IngressoCountOutputTypeCountPedidosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PedidoIngressoWhereInput
  }


  /**
   * Count Type LancheComboCountOutputType
   */

  export type LancheComboCountOutputType = {
    pedidos: number
  }

  export type LancheComboCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedidos?: boolean | LancheComboCountOutputTypeCountPedidosArgs
  }

  // Custom InputTypes
  /**
   * LancheComboCountOutputType without action
   */
  export type LancheComboCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LancheComboCountOutputType
     */
    select?: LancheComboCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LancheComboCountOutputType without action
   */
  export type LancheComboCountOutputTypeCountPedidosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PedidoLancheComboWhereInput
  }


  /**
   * Count Type PedidoCountOutputType
   */

  export type PedidoCountOutputType = {
    ingressos: number
    lancheCombos: number
  }

  export type PedidoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ingressos?: boolean | PedidoCountOutputTypeCountIngressosArgs
    lancheCombos?: boolean | PedidoCountOutputTypeCountLancheCombosArgs
  }

  // Custom InputTypes
  /**
   * PedidoCountOutputType without action
   */
  export type PedidoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoCountOutputType
     */
    select?: PedidoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PedidoCountOutputType without action
   */
  export type PedidoCountOutputTypeCountIngressosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PedidoIngressoWhereInput
  }

  /**
   * PedidoCountOutputType without action
   */
  export type PedidoCountOutputTypeCountLancheCombosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PedidoLancheComboWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Cinema
   */

  export type AggregateCinema = {
    _count: CinemaCountAggregateOutputType | null
    _avg: CinemaAvgAggregateOutputType | null
    _sum: CinemaSumAggregateOutputType | null
    _min: CinemaMinAggregateOutputType | null
    _max: CinemaMaxAggregateOutputType | null
  }

  export type CinemaAvgAggregateOutputType = {
    id: number | null
  }

  export type CinemaSumAggregateOutputType = {
    id: number | null
  }

  export type CinemaMinAggregateOutputType = {
    id: number | null
    nome: string | null
    localizacao: string | null
  }

  export type CinemaMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    localizacao: string | null
  }

  export type CinemaCountAggregateOutputType = {
    id: number
    nome: number
    localizacao: number
    _all: number
  }


  export type CinemaAvgAggregateInputType = {
    id?: true
  }

  export type CinemaSumAggregateInputType = {
    id?: true
  }

  export type CinemaMinAggregateInputType = {
    id?: true
    nome?: true
    localizacao?: true
  }

  export type CinemaMaxAggregateInputType = {
    id?: true
    nome?: true
    localizacao?: true
  }

  export type CinemaCountAggregateInputType = {
    id?: true
    nome?: true
    localizacao?: true
    _all?: true
  }

  export type CinemaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cinema to aggregate.
     */
    where?: CinemaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cinemas to fetch.
     */
    orderBy?: CinemaOrderByWithRelationInput | CinemaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CinemaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cinemas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cinemas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cinemas
    **/
    _count?: true | CinemaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CinemaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CinemaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CinemaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CinemaMaxAggregateInputType
  }

  export type GetCinemaAggregateType<T extends CinemaAggregateArgs> = {
        [P in keyof T & keyof AggregateCinema]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCinema[P]>
      : GetScalarType<T[P], AggregateCinema[P]>
  }




  export type CinemaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CinemaWhereInput
    orderBy?: CinemaOrderByWithAggregationInput | CinemaOrderByWithAggregationInput[]
    by: CinemaScalarFieldEnum[] | CinemaScalarFieldEnum
    having?: CinemaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CinemaCountAggregateInputType | true
    _avg?: CinemaAvgAggregateInputType
    _sum?: CinemaSumAggregateInputType
    _min?: CinemaMinAggregateInputType
    _max?: CinemaMaxAggregateInputType
  }

  export type CinemaGroupByOutputType = {
    id: number
    nome: string
    localizacao: string
    _count: CinemaCountAggregateOutputType | null
    _avg: CinemaAvgAggregateOutputType | null
    _sum: CinemaSumAggregateOutputType | null
    _min: CinemaMinAggregateOutputType | null
    _max: CinemaMaxAggregateOutputType | null
  }

  type GetCinemaGroupByPayload<T extends CinemaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CinemaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CinemaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CinemaGroupByOutputType[P]>
            : GetScalarType<T[P], CinemaGroupByOutputType[P]>
        }
      >
    >


  export type CinemaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    localizacao?: boolean
    salas?: boolean | Cinema$salasArgs<ExtArgs>
    sessoes?: boolean | Cinema$sessoesArgs<ExtArgs>
    _count?: boolean | CinemaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cinema"]>

  export type CinemaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    localizacao?: boolean
  }, ExtArgs["result"]["cinema"]>

  export type CinemaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    localizacao?: boolean
  }, ExtArgs["result"]["cinema"]>

  export type CinemaSelectScalar = {
    id?: boolean
    nome?: boolean
    localizacao?: boolean
  }

  export type CinemaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "localizacao", ExtArgs["result"]["cinema"]>
  export type CinemaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    salas?: boolean | Cinema$salasArgs<ExtArgs>
    sessoes?: boolean | Cinema$sessoesArgs<ExtArgs>
    _count?: boolean | CinemaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CinemaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CinemaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CinemaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cinema"
    objects: {
      salas: Prisma.$SalaPayload<ExtArgs>[]
      sessoes: Prisma.$SessaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      localizacao: string
    }, ExtArgs["result"]["cinema"]>
    composites: {}
  }

  type CinemaGetPayload<S extends boolean | null | undefined | CinemaDefaultArgs> = $Result.GetResult<Prisma.$CinemaPayload, S>

  type CinemaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CinemaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CinemaCountAggregateInputType | true
    }

  export interface CinemaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cinema'], meta: { name: 'Cinema' } }
    /**
     * Find zero or one Cinema that matches the filter.
     * @param {CinemaFindUniqueArgs} args - Arguments to find a Cinema
     * @example
     * // Get one Cinema
     * const cinema = await prisma.cinema.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CinemaFindUniqueArgs>(args: SelectSubset<T, CinemaFindUniqueArgs<ExtArgs>>): Prisma__CinemaClient<$Result.GetResult<Prisma.$CinemaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cinema that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CinemaFindUniqueOrThrowArgs} args - Arguments to find a Cinema
     * @example
     * // Get one Cinema
     * const cinema = await prisma.cinema.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CinemaFindUniqueOrThrowArgs>(args: SelectSubset<T, CinemaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CinemaClient<$Result.GetResult<Prisma.$CinemaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cinema that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CinemaFindFirstArgs} args - Arguments to find a Cinema
     * @example
     * // Get one Cinema
     * const cinema = await prisma.cinema.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CinemaFindFirstArgs>(args?: SelectSubset<T, CinemaFindFirstArgs<ExtArgs>>): Prisma__CinemaClient<$Result.GetResult<Prisma.$CinemaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cinema that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CinemaFindFirstOrThrowArgs} args - Arguments to find a Cinema
     * @example
     * // Get one Cinema
     * const cinema = await prisma.cinema.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CinemaFindFirstOrThrowArgs>(args?: SelectSubset<T, CinemaFindFirstOrThrowArgs<ExtArgs>>): Prisma__CinemaClient<$Result.GetResult<Prisma.$CinemaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cinemas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CinemaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cinemas
     * const cinemas = await prisma.cinema.findMany()
     * 
     * // Get first 10 Cinemas
     * const cinemas = await prisma.cinema.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cinemaWithIdOnly = await prisma.cinema.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CinemaFindManyArgs>(args?: SelectSubset<T, CinemaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CinemaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cinema.
     * @param {CinemaCreateArgs} args - Arguments to create a Cinema.
     * @example
     * // Create one Cinema
     * const Cinema = await prisma.cinema.create({
     *   data: {
     *     // ... data to create a Cinema
     *   }
     * })
     * 
     */
    create<T extends CinemaCreateArgs>(args: SelectSubset<T, CinemaCreateArgs<ExtArgs>>): Prisma__CinemaClient<$Result.GetResult<Prisma.$CinemaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cinemas.
     * @param {CinemaCreateManyArgs} args - Arguments to create many Cinemas.
     * @example
     * // Create many Cinemas
     * const cinema = await prisma.cinema.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CinemaCreateManyArgs>(args?: SelectSubset<T, CinemaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cinemas and returns the data saved in the database.
     * @param {CinemaCreateManyAndReturnArgs} args - Arguments to create many Cinemas.
     * @example
     * // Create many Cinemas
     * const cinema = await prisma.cinema.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cinemas and only return the `id`
     * const cinemaWithIdOnly = await prisma.cinema.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CinemaCreateManyAndReturnArgs>(args?: SelectSubset<T, CinemaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CinemaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cinema.
     * @param {CinemaDeleteArgs} args - Arguments to delete one Cinema.
     * @example
     * // Delete one Cinema
     * const Cinema = await prisma.cinema.delete({
     *   where: {
     *     // ... filter to delete one Cinema
     *   }
     * })
     * 
     */
    delete<T extends CinemaDeleteArgs>(args: SelectSubset<T, CinemaDeleteArgs<ExtArgs>>): Prisma__CinemaClient<$Result.GetResult<Prisma.$CinemaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cinema.
     * @param {CinemaUpdateArgs} args - Arguments to update one Cinema.
     * @example
     * // Update one Cinema
     * const cinema = await prisma.cinema.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CinemaUpdateArgs>(args: SelectSubset<T, CinemaUpdateArgs<ExtArgs>>): Prisma__CinemaClient<$Result.GetResult<Prisma.$CinemaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cinemas.
     * @param {CinemaDeleteManyArgs} args - Arguments to filter Cinemas to delete.
     * @example
     * // Delete a few Cinemas
     * const { count } = await prisma.cinema.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CinemaDeleteManyArgs>(args?: SelectSubset<T, CinemaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cinemas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CinemaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cinemas
     * const cinema = await prisma.cinema.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CinemaUpdateManyArgs>(args: SelectSubset<T, CinemaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cinemas and returns the data updated in the database.
     * @param {CinemaUpdateManyAndReturnArgs} args - Arguments to update many Cinemas.
     * @example
     * // Update many Cinemas
     * const cinema = await prisma.cinema.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cinemas and only return the `id`
     * const cinemaWithIdOnly = await prisma.cinema.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CinemaUpdateManyAndReturnArgs>(args: SelectSubset<T, CinemaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CinemaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cinema.
     * @param {CinemaUpsertArgs} args - Arguments to update or create a Cinema.
     * @example
     * // Update or create a Cinema
     * const cinema = await prisma.cinema.upsert({
     *   create: {
     *     // ... data to create a Cinema
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cinema we want to update
     *   }
     * })
     */
    upsert<T extends CinemaUpsertArgs>(args: SelectSubset<T, CinemaUpsertArgs<ExtArgs>>): Prisma__CinemaClient<$Result.GetResult<Prisma.$CinemaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cinemas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CinemaCountArgs} args - Arguments to filter Cinemas to count.
     * @example
     * // Count the number of Cinemas
     * const count = await prisma.cinema.count({
     *   where: {
     *     // ... the filter for the Cinemas we want to count
     *   }
     * })
    **/
    count<T extends CinemaCountArgs>(
      args?: Subset<T, CinemaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CinemaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cinema.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CinemaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CinemaAggregateArgs>(args: Subset<T, CinemaAggregateArgs>): Prisma.PrismaPromise<GetCinemaAggregateType<T>>

    /**
     * Group by Cinema.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CinemaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CinemaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CinemaGroupByArgs['orderBy'] }
        : { orderBy?: CinemaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CinemaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCinemaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cinema model
   */
  readonly fields: CinemaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cinema.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CinemaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    salas<T extends Cinema$salasArgs<ExtArgs> = {}>(args?: Subset<T, Cinema$salasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessoes<T extends Cinema$sessoesArgs<ExtArgs> = {}>(args?: Subset<T, Cinema$sessoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Cinema model
   */
  interface CinemaFieldRefs {
    readonly id: FieldRef<"Cinema", 'Int'>
    readonly nome: FieldRef<"Cinema", 'String'>
    readonly localizacao: FieldRef<"Cinema", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Cinema findUnique
   */
  export type CinemaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cinema
     */
    select?: CinemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cinema
     */
    omit?: CinemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CinemaInclude<ExtArgs> | null
    /**
     * Filter, which Cinema to fetch.
     */
    where: CinemaWhereUniqueInput
  }

  /**
   * Cinema findUniqueOrThrow
   */
  export type CinemaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cinema
     */
    select?: CinemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cinema
     */
    omit?: CinemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CinemaInclude<ExtArgs> | null
    /**
     * Filter, which Cinema to fetch.
     */
    where: CinemaWhereUniqueInput
  }

  /**
   * Cinema findFirst
   */
  export type CinemaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cinema
     */
    select?: CinemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cinema
     */
    omit?: CinemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CinemaInclude<ExtArgs> | null
    /**
     * Filter, which Cinema to fetch.
     */
    where?: CinemaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cinemas to fetch.
     */
    orderBy?: CinemaOrderByWithRelationInput | CinemaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cinemas.
     */
    cursor?: CinemaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cinemas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cinemas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cinemas.
     */
    distinct?: CinemaScalarFieldEnum | CinemaScalarFieldEnum[]
  }

  /**
   * Cinema findFirstOrThrow
   */
  export type CinemaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cinema
     */
    select?: CinemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cinema
     */
    omit?: CinemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CinemaInclude<ExtArgs> | null
    /**
     * Filter, which Cinema to fetch.
     */
    where?: CinemaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cinemas to fetch.
     */
    orderBy?: CinemaOrderByWithRelationInput | CinemaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cinemas.
     */
    cursor?: CinemaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cinemas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cinemas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cinemas.
     */
    distinct?: CinemaScalarFieldEnum | CinemaScalarFieldEnum[]
  }

  /**
   * Cinema findMany
   */
  export type CinemaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cinema
     */
    select?: CinemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cinema
     */
    omit?: CinemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CinemaInclude<ExtArgs> | null
    /**
     * Filter, which Cinemas to fetch.
     */
    where?: CinemaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cinemas to fetch.
     */
    orderBy?: CinemaOrderByWithRelationInput | CinemaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cinemas.
     */
    cursor?: CinemaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cinemas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cinemas.
     */
    skip?: number
    distinct?: CinemaScalarFieldEnum | CinemaScalarFieldEnum[]
  }

  /**
   * Cinema create
   */
  export type CinemaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cinema
     */
    select?: CinemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cinema
     */
    omit?: CinemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CinemaInclude<ExtArgs> | null
    /**
     * The data needed to create a Cinema.
     */
    data: XOR<CinemaCreateInput, CinemaUncheckedCreateInput>
  }

  /**
   * Cinema createMany
   */
  export type CinemaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cinemas.
     */
    data: CinemaCreateManyInput | CinemaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cinema createManyAndReturn
   */
  export type CinemaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cinema
     */
    select?: CinemaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cinema
     */
    omit?: CinemaOmit<ExtArgs> | null
    /**
     * The data used to create many Cinemas.
     */
    data: CinemaCreateManyInput | CinemaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cinema update
   */
  export type CinemaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cinema
     */
    select?: CinemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cinema
     */
    omit?: CinemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CinemaInclude<ExtArgs> | null
    /**
     * The data needed to update a Cinema.
     */
    data: XOR<CinemaUpdateInput, CinemaUncheckedUpdateInput>
    /**
     * Choose, which Cinema to update.
     */
    where: CinemaWhereUniqueInput
  }

  /**
   * Cinema updateMany
   */
  export type CinemaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cinemas.
     */
    data: XOR<CinemaUpdateManyMutationInput, CinemaUncheckedUpdateManyInput>
    /**
     * Filter which Cinemas to update
     */
    where?: CinemaWhereInput
    /**
     * Limit how many Cinemas to update.
     */
    limit?: number
  }

  /**
   * Cinema updateManyAndReturn
   */
  export type CinemaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cinema
     */
    select?: CinemaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cinema
     */
    omit?: CinemaOmit<ExtArgs> | null
    /**
     * The data used to update Cinemas.
     */
    data: XOR<CinemaUpdateManyMutationInput, CinemaUncheckedUpdateManyInput>
    /**
     * Filter which Cinemas to update
     */
    where?: CinemaWhereInput
    /**
     * Limit how many Cinemas to update.
     */
    limit?: number
  }

  /**
   * Cinema upsert
   */
  export type CinemaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cinema
     */
    select?: CinemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cinema
     */
    omit?: CinemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CinemaInclude<ExtArgs> | null
    /**
     * The filter to search for the Cinema to update in case it exists.
     */
    where: CinemaWhereUniqueInput
    /**
     * In case the Cinema found by the `where` argument doesn't exist, create a new Cinema with this data.
     */
    create: XOR<CinemaCreateInput, CinemaUncheckedCreateInput>
    /**
     * In case the Cinema was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CinemaUpdateInput, CinemaUncheckedUpdateInput>
  }

  /**
   * Cinema delete
   */
  export type CinemaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cinema
     */
    select?: CinemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cinema
     */
    omit?: CinemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CinemaInclude<ExtArgs> | null
    /**
     * Filter which Cinema to delete.
     */
    where: CinemaWhereUniqueInput
  }

  /**
   * Cinema deleteMany
   */
  export type CinemaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cinemas to delete
     */
    where?: CinemaWhereInput
    /**
     * Limit how many Cinemas to delete.
     */
    limit?: number
  }

  /**
   * Cinema.salas
   */
  export type Cinema$salasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sala
     */
    select?: SalaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sala
     */
    omit?: SalaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaInclude<ExtArgs> | null
    where?: SalaWhereInput
    orderBy?: SalaOrderByWithRelationInput | SalaOrderByWithRelationInput[]
    cursor?: SalaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SalaScalarFieldEnum | SalaScalarFieldEnum[]
  }

  /**
   * Cinema.sessoes
   */
  export type Cinema$sessoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessao
     */
    select?: SessaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessao
     */
    omit?: SessaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessaoInclude<ExtArgs> | null
    where?: SessaoWhereInput
    orderBy?: SessaoOrderByWithRelationInput | SessaoOrderByWithRelationInput[]
    cursor?: SessaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessaoScalarFieldEnum | SessaoScalarFieldEnum[]
  }

  /**
   * Cinema without action
   */
  export type CinemaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cinema
     */
    select?: CinemaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cinema
     */
    omit?: CinemaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CinemaInclude<ExtArgs> | null
  }


  /**
   * Model Sala
   */

  export type AggregateSala = {
    _count: SalaCountAggregateOutputType | null
    _avg: SalaAvgAggregateOutputType | null
    _sum: SalaSumAggregateOutputType | null
    _min: SalaMinAggregateOutputType | null
    _max: SalaMaxAggregateOutputType | null
  }

  export type SalaAvgAggregateOutputType = {
    id: number | null
    numero: number | null
    capacidade: number | null
    cinemaId: number | null
  }

  export type SalaSumAggregateOutputType = {
    id: number | null
    numero: number | null
    capacidade: number | null
    cinemaId: number | null
  }

  export type SalaMinAggregateOutputType = {
    id: number | null
    numero: number | null
    capacidade: number | null
    cinemaId: number | null
  }

  export type SalaMaxAggregateOutputType = {
    id: number | null
    numero: number | null
    capacidade: number | null
    cinemaId: number | null
  }

  export type SalaCountAggregateOutputType = {
    id: number
    numero: number
    capacidade: number
    cinemaId: number
    _all: number
  }


  export type SalaAvgAggregateInputType = {
    id?: true
    numero?: true
    capacidade?: true
    cinemaId?: true
  }

  export type SalaSumAggregateInputType = {
    id?: true
    numero?: true
    capacidade?: true
    cinemaId?: true
  }

  export type SalaMinAggregateInputType = {
    id?: true
    numero?: true
    capacidade?: true
    cinemaId?: true
  }

  export type SalaMaxAggregateInputType = {
    id?: true
    numero?: true
    capacidade?: true
    cinemaId?: true
  }

  export type SalaCountAggregateInputType = {
    id?: true
    numero?: true
    capacidade?: true
    cinemaId?: true
    _all?: true
  }

  export type SalaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sala to aggregate.
     */
    where?: SalaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Salas to fetch.
     */
    orderBy?: SalaOrderByWithRelationInput | SalaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SalaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Salas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Salas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Salas
    **/
    _count?: true | SalaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SalaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SalaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SalaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SalaMaxAggregateInputType
  }

  export type GetSalaAggregateType<T extends SalaAggregateArgs> = {
        [P in keyof T & keyof AggregateSala]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSala[P]>
      : GetScalarType<T[P], AggregateSala[P]>
  }




  export type SalaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SalaWhereInput
    orderBy?: SalaOrderByWithAggregationInput | SalaOrderByWithAggregationInput[]
    by: SalaScalarFieldEnum[] | SalaScalarFieldEnum
    having?: SalaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SalaCountAggregateInputType | true
    _avg?: SalaAvgAggregateInputType
    _sum?: SalaSumAggregateInputType
    _min?: SalaMinAggregateInputType
    _max?: SalaMaxAggregateInputType
  }

  export type SalaGroupByOutputType = {
    id: number
    numero: number
    capacidade: number
    cinemaId: number
    _count: SalaCountAggregateOutputType | null
    _avg: SalaAvgAggregateOutputType | null
    _sum: SalaSumAggregateOutputType | null
    _min: SalaMinAggregateOutputType | null
    _max: SalaMaxAggregateOutputType | null
  }

  type GetSalaGroupByPayload<T extends SalaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SalaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SalaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SalaGroupByOutputType[P]>
            : GetScalarType<T[P], SalaGroupByOutputType[P]>
        }
      >
    >


  export type SalaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numero?: boolean
    capacidade?: boolean
    cinemaId?: boolean
    cinema?: boolean | CinemaDefaultArgs<ExtArgs>
    sessoes?: boolean | Sala$sessoesArgs<ExtArgs>
    _count?: boolean | SalaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sala"]>

  export type SalaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numero?: boolean
    capacidade?: boolean
    cinemaId?: boolean
    cinema?: boolean | CinemaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sala"]>

  export type SalaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numero?: boolean
    capacidade?: boolean
    cinemaId?: boolean
    cinema?: boolean | CinemaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sala"]>

  export type SalaSelectScalar = {
    id?: boolean
    numero?: boolean
    capacidade?: boolean
    cinemaId?: boolean
  }

  export type SalaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "numero" | "capacidade" | "cinemaId", ExtArgs["result"]["sala"]>
  export type SalaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cinema?: boolean | CinemaDefaultArgs<ExtArgs>
    sessoes?: boolean | Sala$sessoesArgs<ExtArgs>
    _count?: boolean | SalaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SalaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cinema?: boolean | CinemaDefaultArgs<ExtArgs>
  }
  export type SalaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cinema?: boolean | CinemaDefaultArgs<ExtArgs>
  }

  export type $SalaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sala"
    objects: {
      cinema: Prisma.$CinemaPayload<ExtArgs>
      sessoes: Prisma.$SessaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      numero: number
      capacidade: number
      cinemaId: number
    }, ExtArgs["result"]["sala"]>
    composites: {}
  }

  type SalaGetPayload<S extends boolean | null | undefined | SalaDefaultArgs> = $Result.GetResult<Prisma.$SalaPayload, S>

  type SalaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SalaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SalaCountAggregateInputType | true
    }

  export interface SalaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sala'], meta: { name: 'Sala' } }
    /**
     * Find zero or one Sala that matches the filter.
     * @param {SalaFindUniqueArgs} args - Arguments to find a Sala
     * @example
     * // Get one Sala
     * const sala = await prisma.sala.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SalaFindUniqueArgs>(args: SelectSubset<T, SalaFindUniqueArgs<ExtArgs>>): Prisma__SalaClient<$Result.GetResult<Prisma.$SalaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sala that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SalaFindUniqueOrThrowArgs} args - Arguments to find a Sala
     * @example
     * // Get one Sala
     * const sala = await prisma.sala.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SalaFindUniqueOrThrowArgs>(args: SelectSubset<T, SalaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SalaClient<$Result.GetResult<Prisma.$SalaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sala that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaFindFirstArgs} args - Arguments to find a Sala
     * @example
     * // Get one Sala
     * const sala = await prisma.sala.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SalaFindFirstArgs>(args?: SelectSubset<T, SalaFindFirstArgs<ExtArgs>>): Prisma__SalaClient<$Result.GetResult<Prisma.$SalaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sala that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaFindFirstOrThrowArgs} args - Arguments to find a Sala
     * @example
     * // Get one Sala
     * const sala = await prisma.sala.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SalaFindFirstOrThrowArgs>(args?: SelectSubset<T, SalaFindFirstOrThrowArgs<ExtArgs>>): Prisma__SalaClient<$Result.GetResult<Prisma.$SalaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Salas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Salas
     * const salas = await prisma.sala.findMany()
     * 
     * // Get first 10 Salas
     * const salas = await prisma.sala.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const salaWithIdOnly = await prisma.sala.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SalaFindManyArgs>(args?: SelectSubset<T, SalaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sala.
     * @param {SalaCreateArgs} args - Arguments to create a Sala.
     * @example
     * // Create one Sala
     * const Sala = await prisma.sala.create({
     *   data: {
     *     // ... data to create a Sala
     *   }
     * })
     * 
     */
    create<T extends SalaCreateArgs>(args: SelectSubset<T, SalaCreateArgs<ExtArgs>>): Prisma__SalaClient<$Result.GetResult<Prisma.$SalaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Salas.
     * @param {SalaCreateManyArgs} args - Arguments to create many Salas.
     * @example
     * // Create many Salas
     * const sala = await prisma.sala.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SalaCreateManyArgs>(args?: SelectSubset<T, SalaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Salas and returns the data saved in the database.
     * @param {SalaCreateManyAndReturnArgs} args - Arguments to create many Salas.
     * @example
     * // Create many Salas
     * const sala = await prisma.sala.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Salas and only return the `id`
     * const salaWithIdOnly = await prisma.sala.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SalaCreateManyAndReturnArgs>(args?: SelectSubset<T, SalaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sala.
     * @param {SalaDeleteArgs} args - Arguments to delete one Sala.
     * @example
     * // Delete one Sala
     * const Sala = await prisma.sala.delete({
     *   where: {
     *     // ... filter to delete one Sala
     *   }
     * })
     * 
     */
    delete<T extends SalaDeleteArgs>(args: SelectSubset<T, SalaDeleteArgs<ExtArgs>>): Prisma__SalaClient<$Result.GetResult<Prisma.$SalaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sala.
     * @param {SalaUpdateArgs} args - Arguments to update one Sala.
     * @example
     * // Update one Sala
     * const sala = await prisma.sala.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SalaUpdateArgs>(args: SelectSubset<T, SalaUpdateArgs<ExtArgs>>): Prisma__SalaClient<$Result.GetResult<Prisma.$SalaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Salas.
     * @param {SalaDeleteManyArgs} args - Arguments to filter Salas to delete.
     * @example
     * // Delete a few Salas
     * const { count } = await prisma.sala.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SalaDeleteManyArgs>(args?: SelectSubset<T, SalaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Salas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Salas
     * const sala = await prisma.sala.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SalaUpdateManyArgs>(args: SelectSubset<T, SalaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Salas and returns the data updated in the database.
     * @param {SalaUpdateManyAndReturnArgs} args - Arguments to update many Salas.
     * @example
     * // Update many Salas
     * const sala = await prisma.sala.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Salas and only return the `id`
     * const salaWithIdOnly = await prisma.sala.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SalaUpdateManyAndReturnArgs>(args: SelectSubset<T, SalaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sala.
     * @param {SalaUpsertArgs} args - Arguments to update or create a Sala.
     * @example
     * // Update or create a Sala
     * const sala = await prisma.sala.upsert({
     *   create: {
     *     // ... data to create a Sala
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sala we want to update
     *   }
     * })
     */
    upsert<T extends SalaUpsertArgs>(args: SelectSubset<T, SalaUpsertArgs<ExtArgs>>): Prisma__SalaClient<$Result.GetResult<Prisma.$SalaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Salas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaCountArgs} args - Arguments to filter Salas to count.
     * @example
     * // Count the number of Salas
     * const count = await prisma.sala.count({
     *   where: {
     *     // ... the filter for the Salas we want to count
     *   }
     * })
    **/
    count<T extends SalaCountArgs>(
      args?: Subset<T, SalaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SalaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sala.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SalaAggregateArgs>(args: Subset<T, SalaAggregateArgs>): Prisma.PrismaPromise<GetSalaAggregateType<T>>

    /**
     * Group by Sala.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SalaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SalaGroupByArgs['orderBy'] }
        : { orderBy?: SalaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SalaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSalaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sala model
   */
  readonly fields: SalaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sala.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SalaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cinema<T extends CinemaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CinemaDefaultArgs<ExtArgs>>): Prisma__CinemaClient<$Result.GetResult<Prisma.$CinemaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sessoes<T extends Sala$sessoesArgs<ExtArgs> = {}>(args?: Subset<T, Sala$sessoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Sala model
   */
  interface SalaFieldRefs {
    readonly id: FieldRef<"Sala", 'Int'>
    readonly numero: FieldRef<"Sala", 'Int'>
    readonly capacidade: FieldRef<"Sala", 'Int'>
    readonly cinemaId: FieldRef<"Sala", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Sala findUnique
   */
  export type SalaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sala
     */
    select?: SalaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sala
     */
    omit?: SalaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaInclude<ExtArgs> | null
    /**
     * Filter, which Sala to fetch.
     */
    where: SalaWhereUniqueInput
  }

  /**
   * Sala findUniqueOrThrow
   */
  export type SalaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sala
     */
    select?: SalaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sala
     */
    omit?: SalaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaInclude<ExtArgs> | null
    /**
     * Filter, which Sala to fetch.
     */
    where: SalaWhereUniqueInput
  }

  /**
   * Sala findFirst
   */
  export type SalaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sala
     */
    select?: SalaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sala
     */
    omit?: SalaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaInclude<ExtArgs> | null
    /**
     * Filter, which Sala to fetch.
     */
    where?: SalaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Salas to fetch.
     */
    orderBy?: SalaOrderByWithRelationInput | SalaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Salas.
     */
    cursor?: SalaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Salas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Salas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Salas.
     */
    distinct?: SalaScalarFieldEnum | SalaScalarFieldEnum[]
  }

  /**
   * Sala findFirstOrThrow
   */
  export type SalaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sala
     */
    select?: SalaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sala
     */
    omit?: SalaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaInclude<ExtArgs> | null
    /**
     * Filter, which Sala to fetch.
     */
    where?: SalaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Salas to fetch.
     */
    orderBy?: SalaOrderByWithRelationInput | SalaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Salas.
     */
    cursor?: SalaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Salas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Salas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Salas.
     */
    distinct?: SalaScalarFieldEnum | SalaScalarFieldEnum[]
  }

  /**
   * Sala findMany
   */
  export type SalaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sala
     */
    select?: SalaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sala
     */
    omit?: SalaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaInclude<ExtArgs> | null
    /**
     * Filter, which Salas to fetch.
     */
    where?: SalaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Salas to fetch.
     */
    orderBy?: SalaOrderByWithRelationInput | SalaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Salas.
     */
    cursor?: SalaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Salas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Salas.
     */
    skip?: number
    distinct?: SalaScalarFieldEnum | SalaScalarFieldEnum[]
  }

  /**
   * Sala create
   */
  export type SalaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sala
     */
    select?: SalaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sala
     */
    omit?: SalaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaInclude<ExtArgs> | null
    /**
     * The data needed to create a Sala.
     */
    data: XOR<SalaCreateInput, SalaUncheckedCreateInput>
  }

  /**
   * Sala createMany
   */
  export type SalaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Salas.
     */
    data: SalaCreateManyInput | SalaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sala createManyAndReturn
   */
  export type SalaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sala
     */
    select?: SalaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sala
     */
    omit?: SalaOmit<ExtArgs> | null
    /**
     * The data used to create many Salas.
     */
    data: SalaCreateManyInput | SalaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sala update
   */
  export type SalaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sala
     */
    select?: SalaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sala
     */
    omit?: SalaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaInclude<ExtArgs> | null
    /**
     * The data needed to update a Sala.
     */
    data: XOR<SalaUpdateInput, SalaUncheckedUpdateInput>
    /**
     * Choose, which Sala to update.
     */
    where: SalaWhereUniqueInput
  }

  /**
   * Sala updateMany
   */
  export type SalaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Salas.
     */
    data: XOR<SalaUpdateManyMutationInput, SalaUncheckedUpdateManyInput>
    /**
     * Filter which Salas to update
     */
    where?: SalaWhereInput
    /**
     * Limit how many Salas to update.
     */
    limit?: number
  }

  /**
   * Sala updateManyAndReturn
   */
  export type SalaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sala
     */
    select?: SalaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sala
     */
    omit?: SalaOmit<ExtArgs> | null
    /**
     * The data used to update Salas.
     */
    data: XOR<SalaUpdateManyMutationInput, SalaUncheckedUpdateManyInput>
    /**
     * Filter which Salas to update
     */
    where?: SalaWhereInput
    /**
     * Limit how many Salas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sala upsert
   */
  export type SalaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sala
     */
    select?: SalaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sala
     */
    omit?: SalaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaInclude<ExtArgs> | null
    /**
     * The filter to search for the Sala to update in case it exists.
     */
    where: SalaWhereUniqueInput
    /**
     * In case the Sala found by the `where` argument doesn't exist, create a new Sala with this data.
     */
    create: XOR<SalaCreateInput, SalaUncheckedCreateInput>
    /**
     * In case the Sala was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SalaUpdateInput, SalaUncheckedUpdateInput>
  }

  /**
   * Sala delete
   */
  export type SalaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sala
     */
    select?: SalaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sala
     */
    omit?: SalaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaInclude<ExtArgs> | null
    /**
     * Filter which Sala to delete.
     */
    where: SalaWhereUniqueInput
  }

  /**
   * Sala deleteMany
   */
  export type SalaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Salas to delete
     */
    where?: SalaWhereInput
    /**
     * Limit how many Salas to delete.
     */
    limit?: number
  }

  /**
   * Sala.sessoes
   */
  export type Sala$sessoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessao
     */
    select?: SessaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessao
     */
    omit?: SessaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessaoInclude<ExtArgs> | null
    where?: SessaoWhereInput
    orderBy?: SessaoOrderByWithRelationInput | SessaoOrderByWithRelationInput[]
    cursor?: SessaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessaoScalarFieldEnum | SessaoScalarFieldEnum[]
  }

  /**
   * Sala without action
   */
  export type SalaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sala
     */
    select?: SalaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sala
     */
    omit?: SalaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaInclude<ExtArgs> | null
  }


  /**
   * Model Filme
   */

  export type AggregateFilme = {
    _count: FilmeCountAggregateOutputType | null
    _avg: FilmeAvgAggregateOutputType | null
    _sum: FilmeSumAggregateOutputType | null
    _min: FilmeMinAggregateOutputType | null
    _max: FilmeMaxAggregateOutputType | null
  }

  export type FilmeAvgAggregateOutputType = {
    id: number | null
    duracao: number | null
  }

  export type FilmeSumAggregateOutputType = {
    id: number | null
    duracao: number | null
  }

  export type FilmeMinAggregateOutputType = {
    id: number | null
    titulo: string | null
    genero: string | null
    duracao: number | null
    dataLancamento: Date | null
  }

  export type FilmeMaxAggregateOutputType = {
    id: number | null
    titulo: string | null
    genero: string | null
    duracao: number | null
    dataLancamento: Date | null
  }

  export type FilmeCountAggregateOutputType = {
    id: number
    titulo: number
    genero: number
    duracao: number
    dataLancamento: number
    _all: number
  }


  export type FilmeAvgAggregateInputType = {
    id?: true
    duracao?: true
  }

  export type FilmeSumAggregateInputType = {
    id?: true
    duracao?: true
  }

  export type FilmeMinAggregateInputType = {
    id?: true
    titulo?: true
    genero?: true
    duracao?: true
    dataLancamento?: true
  }

  export type FilmeMaxAggregateInputType = {
    id?: true
    titulo?: true
    genero?: true
    duracao?: true
    dataLancamento?: true
  }

  export type FilmeCountAggregateInputType = {
    id?: true
    titulo?: true
    genero?: true
    duracao?: true
    dataLancamento?: true
    _all?: true
  }

  export type FilmeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Filme to aggregate.
     */
    where?: FilmeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Filmes to fetch.
     */
    orderBy?: FilmeOrderByWithRelationInput | FilmeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FilmeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Filmes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Filmes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Filmes
    **/
    _count?: true | FilmeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FilmeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FilmeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FilmeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FilmeMaxAggregateInputType
  }

  export type GetFilmeAggregateType<T extends FilmeAggregateArgs> = {
        [P in keyof T & keyof AggregateFilme]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFilme[P]>
      : GetScalarType<T[P], AggregateFilme[P]>
  }




  export type FilmeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FilmeWhereInput
    orderBy?: FilmeOrderByWithAggregationInput | FilmeOrderByWithAggregationInput[]
    by: FilmeScalarFieldEnum[] | FilmeScalarFieldEnum
    having?: FilmeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FilmeCountAggregateInputType | true
    _avg?: FilmeAvgAggregateInputType
    _sum?: FilmeSumAggregateInputType
    _min?: FilmeMinAggregateInputType
    _max?: FilmeMaxAggregateInputType
  }

  export type FilmeGroupByOutputType = {
    id: number
    titulo: string
    genero: string
    duracao: number
    dataLancamento: Date
    _count: FilmeCountAggregateOutputType | null
    _avg: FilmeAvgAggregateOutputType | null
    _sum: FilmeSumAggregateOutputType | null
    _min: FilmeMinAggregateOutputType | null
    _max: FilmeMaxAggregateOutputType | null
  }

  type GetFilmeGroupByPayload<T extends FilmeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FilmeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FilmeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FilmeGroupByOutputType[P]>
            : GetScalarType<T[P], FilmeGroupByOutputType[P]>
        }
      >
    >


  export type FilmeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    genero?: boolean
    duracao?: boolean
    dataLancamento?: boolean
    sessoes?: boolean | Filme$sessoesArgs<ExtArgs>
    _count?: boolean | FilmeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["filme"]>

  export type FilmeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    genero?: boolean
    duracao?: boolean
    dataLancamento?: boolean
  }, ExtArgs["result"]["filme"]>

  export type FilmeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    titulo?: boolean
    genero?: boolean
    duracao?: boolean
    dataLancamento?: boolean
  }, ExtArgs["result"]["filme"]>

  export type FilmeSelectScalar = {
    id?: boolean
    titulo?: boolean
    genero?: boolean
    duracao?: boolean
    dataLancamento?: boolean
  }

  export type FilmeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "titulo" | "genero" | "duracao" | "dataLancamento", ExtArgs["result"]["filme"]>
  export type FilmeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessoes?: boolean | Filme$sessoesArgs<ExtArgs>
    _count?: boolean | FilmeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FilmeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type FilmeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FilmePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Filme"
    objects: {
      sessoes: Prisma.$SessaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      titulo: string
      genero: string
      duracao: number
      dataLancamento: Date
    }, ExtArgs["result"]["filme"]>
    composites: {}
  }

  type FilmeGetPayload<S extends boolean | null | undefined | FilmeDefaultArgs> = $Result.GetResult<Prisma.$FilmePayload, S>

  type FilmeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FilmeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FilmeCountAggregateInputType | true
    }

  export interface FilmeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Filme'], meta: { name: 'Filme' } }
    /**
     * Find zero or one Filme that matches the filter.
     * @param {FilmeFindUniqueArgs} args - Arguments to find a Filme
     * @example
     * // Get one Filme
     * const filme = await prisma.filme.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FilmeFindUniqueArgs>(args: SelectSubset<T, FilmeFindUniqueArgs<ExtArgs>>): Prisma__FilmeClient<$Result.GetResult<Prisma.$FilmePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Filme that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FilmeFindUniqueOrThrowArgs} args - Arguments to find a Filme
     * @example
     * // Get one Filme
     * const filme = await prisma.filme.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FilmeFindUniqueOrThrowArgs>(args: SelectSubset<T, FilmeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FilmeClient<$Result.GetResult<Prisma.$FilmePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Filme that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilmeFindFirstArgs} args - Arguments to find a Filme
     * @example
     * // Get one Filme
     * const filme = await prisma.filme.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FilmeFindFirstArgs>(args?: SelectSubset<T, FilmeFindFirstArgs<ExtArgs>>): Prisma__FilmeClient<$Result.GetResult<Prisma.$FilmePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Filme that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilmeFindFirstOrThrowArgs} args - Arguments to find a Filme
     * @example
     * // Get one Filme
     * const filme = await prisma.filme.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FilmeFindFirstOrThrowArgs>(args?: SelectSubset<T, FilmeFindFirstOrThrowArgs<ExtArgs>>): Prisma__FilmeClient<$Result.GetResult<Prisma.$FilmePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Filmes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilmeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Filmes
     * const filmes = await prisma.filme.findMany()
     * 
     * // Get first 10 Filmes
     * const filmes = await prisma.filme.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const filmeWithIdOnly = await prisma.filme.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FilmeFindManyArgs>(args?: SelectSubset<T, FilmeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilmePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Filme.
     * @param {FilmeCreateArgs} args - Arguments to create a Filme.
     * @example
     * // Create one Filme
     * const Filme = await prisma.filme.create({
     *   data: {
     *     // ... data to create a Filme
     *   }
     * })
     * 
     */
    create<T extends FilmeCreateArgs>(args: SelectSubset<T, FilmeCreateArgs<ExtArgs>>): Prisma__FilmeClient<$Result.GetResult<Prisma.$FilmePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Filmes.
     * @param {FilmeCreateManyArgs} args - Arguments to create many Filmes.
     * @example
     * // Create many Filmes
     * const filme = await prisma.filme.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FilmeCreateManyArgs>(args?: SelectSubset<T, FilmeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Filmes and returns the data saved in the database.
     * @param {FilmeCreateManyAndReturnArgs} args - Arguments to create many Filmes.
     * @example
     * // Create many Filmes
     * const filme = await prisma.filme.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Filmes and only return the `id`
     * const filmeWithIdOnly = await prisma.filme.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FilmeCreateManyAndReturnArgs>(args?: SelectSubset<T, FilmeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilmePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Filme.
     * @param {FilmeDeleteArgs} args - Arguments to delete one Filme.
     * @example
     * // Delete one Filme
     * const Filme = await prisma.filme.delete({
     *   where: {
     *     // ... filter to delete one Filme
     *   }
     * })
     * 
     */
    delete<T extends FilmeDeleteArgs>(args: SelectSubset<T, FilmeDeleteArgs<ExtArgs>>): Prisma__FilmeClient<$Result.GetResult<Prisma.$FilmePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Filme.
     * @param {FilmeUpdateArgs} args - Arguments to update one Filme.
     * @example
     * // Update one Filme
     * const filme = await prisma.filme.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FilmeUpdateArgs>(args: SelectSubset<T, FilmeUpdateArgs<ExtArgs>>): Prisma__FilmeClient<$Result.GetResult<Prisma.$FilmePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Filmes.
     * @param {FilmeDeleteManyArgs} args - Arguments to filter Filmes to delete.
     * @example
     * // Delete a few Filmes
     * const { count } = await prisma.filme.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FilmeDeleteManyArgs>(args?: SelectSubset<T, FilmeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Filmes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilmeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Filmes
     * const filme = await prisma.filme.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FilmeUpdateManyArgs>(args: SelectSubset<T, FilmeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Filmes and returns the data updated in the database.
     * @param {FilmeUpdateManyAndReturnArgs} args - Arguments to update many Filmes.
     * @example
     * // Update many Filmes
     * const filme = await prisma.filme.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Filmes and only return the `id`
     * const filmeWithIdOnly = await prisma.filme.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FilmeUpdateManyAndReturnArgs>(args: SelectSubset<T, FilmeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilmePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Filme.
     * @param {FilmeUpsertArgs} args - Arguments to update or create a Filme.
     * @example
     * // Update or create a Filme
     * const filme = await prisma.filme.upsert({
     *   create: {
     *     // ... data to create a Filme
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Filme we want to update
     *   }
     * })
     */
    upsert<T extends FilmeUpsertArgs>(args: SelectSubset<T, FilmeUpsertArgs<ExtArgs>>): Prisma__FilmeClient<$Result.GetResult<Prisma.$FilmePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Filmes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilmeCountArgs} args - Arguments to filter Filmes to count.
     * @example
     * // Count the number of Filmes
     * const count = await prisma.filme.count({
     *   where: {
     *     // ... the filter for the Filmes we want to count
     *   }
     * })
    **/
    count<T extends FilmeCountArgs>(
      args?: Subset<T, FilmeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FilmeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Filme.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilmeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FilmeAggregateArgs>(args: Subset<T, FilmeAggregateArgs>): Prisma.PrismaPromise<GetFilmeAggregateType<T>>

    /**
     * Group by Filme.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilmeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FilmeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FilmeGroupByArgs['orderBy'] }
        : { orderBy?: FilmeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FilmeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFilmeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Filme model
   */
  readonly fields: FilmeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Filme.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FilmeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sessoes<T extends Filme$sessoesArgs<ExtArgs> = {}>(args?: Subset<T, Filme$sessoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Filme model
   */
  interface FilmeFieldRefs {
    readonly id: FieldRef<"Filme", 'Int'>
    readonly titulo: FieldRef<"Filme", 'String'>
    readonly genero: FieldRef<"Filme", 'String'>
    readonly duracao: FieldRef<"Filme", 'Int'>
    readonly dataLancamento: FieldRef<"Filme", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Filme findUnique
   */
  export type FilmeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Filme
     */
    select?: FilmeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Filme
     */
    omit?: FilmeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilmeInclude<ExtArgs> | null
    /**
     * Filter, which Filme to fetch.
     */
    where: FilmeWhereUniqueInput
  }

  /**
   * Filme findUniqueOrThrow
   */
  export type FilmeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Filme
     */
    select?: FilmeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Filme
     */
    omit?: FilmeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilmeInclude<ExtArgs> | null
    /**
     * Filter, which Filme to fetch.
     */
    where: FilmeWhereUniqueInput
  }

  /**
   * Filme findFirst
   */
  export type FilmeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Filme
     */
    select?: FilmeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Filme
     */
    omit?: FilmeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilmeInclude<ExtArgs> | null
    /**
     * Filter, which Filme to fetch.
     */
    where?: FilmeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Filmes to fetch.
     */
    orderBy?: FilmeOrderByWithRelationInput | FilmeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Filmes.
     */
    cursor?: FilmeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Filmes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Filmes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Filmes.
     */
    distinct?: FilmeScalarFieldEnum | FilmeScalarFieldEnum[]
  }

  /**
   * Filme findFirstOrThrow
   */
  export type FilmeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Filme
     */
    select?: FilmeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Filme
     */
    omit?: FilmeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilmeInclude<ExtArgs> | null
    /**
     * Filter, which Filme to fetch.
     */
    where?: FilmeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Filmes to fetch.
     */
    orderBy?: FilmeOrderByWithRelationInput | FilmeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Filmes.
     */
    cursor?: FilmeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Filmes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Filmes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Filmes.
     */
    distinct?: FilmeScalarFieldEnum | FilmeScalarFieldEnum[]
  }

  /**
   * Filme findMany
   */
  export type FilmeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Filme
     */
    select?: FilmeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Filme
     */
    omit?: FilmeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilmeInclude<ExtArgs> | null
    /**
     * Filter, which Filmes to fetch.
     */
    where?: FilmeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Filmes to fetch.
     */
    orderBy?: FilmeOrderByWithRelationInput | FilmeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Filmes.
     */
    cursor?: FilmeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Filmes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Filmes.
     */
    skip?: number
    distinct?: FilmeScalarFieldEnum | FilmeScalarFieldEnum[]
  }

  /**
   * Filme create
   */
  export type FilmeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Filme
     */
    select?: FilmeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Filme
     */
    omit?: FilmeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilmeInclude<ExtArgs> | null
    /**
     * The data needed to create a Filme.
     */
    data: XOR<FilmeCreateInput, FilmeUncheckedCreateInput>
  }

  /**
   * Filme createMany
   */
  export type FilmeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Filmes.
     */
    data: FilmeCreateManyInput | FilmeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Filme createManyAndReturn
   */
  export type FilmeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Filme
     */
    select?: FilmeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Filme
     */
    omit?: FilmeOmit<ExtArgs> | null
    /**
     * The data used to create many Filmes.
     */
    data: FilmeCreateManyInput | FilmeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Filme update
   */
  export type FilmeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Filme
     */
    select?: FilmeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Filme
     */
    omit?: FilmeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilmeInclude<ExtArgs> | null
    /**
     * The data needed to update a Filme.
     */
    data: XOR<FilmeUpdateInput, FilmeUncheckedUpdateInput>
    /**
     * Choose, which Filme to update.
     */
    where: FilmeWhereUniqueInput
  }

  /**
   * Filme updateMany
   */
  export type FilmeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Filmes.
     */
    data: XOR<FilmeUpdateManyMutationInput, FilmeUncheckedUpdateManyInput>
    /**
     * Filter which Filmes to update
     */
    where?: FilmeWhereInput
    /**
     * Limit how many Filmes to update.
     */
    limit?: number
  }

  /**
   * Filme updateManyAndReturn
   */
  export type FilmeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Filme
     */
    select?: FilmeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Filme
     */
    omit?: FilmeOmit<ExtArgs> | null
    /**
     * The data used to update Filmes.
     */
    data: XOR<FilmeUpdateManyMutationInput, FilmeUncheckedUpdateManyInput>
    /**
     * Filter which Filmes to update
     */
    where?: FilmeWhereInput
    /**
     * Limit how many Filmes to update.
     */
    limit?: number
  }

  /**
   * Filme upsert
   */
  export type FilmeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Filme
     */
    select?: FilmeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Filme
     */
    omit?: FilmeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilmeInclude<ExtArgs> | null
    /**
     * The filter to search for the Filme to update in case it exists.
     */
    where: FilmeWhereUniqueInput
    /**
     * In case the Filme found by the `where` argument doesn't exist, create a new Filme with this data.
     */
    create: XOR<FilmeCreateInput, FilmeUncheckedCreateInput>
    /**
     * In case the Filme was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FilmeUpdateInput, FilmeUncheckedUpdateInput>
  }

  /**
   * Filme delete
   */
  export type FilmeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Filme
     */
    select?: FilmeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Filme
     */
    omit?: FilmeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilmeInclude<ExtArgs> | null
    /**
     * Filter which Filme to delete.
     */
    where: FilmeWhereUniqueInput
  }

  /**
   * Filme deleteMany
   */
  export type FilmeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Filmes to delete
     */
    where?: FilmeWhereInput
    /**
     * Limit how many Filmes to delete.
     */
    limit?: number
  }

  /**
   * Filme.sessoes
   */
  export type Filme$sessoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessao
     */
    select?: SessaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessao
     */
    omit?: SessaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessaoInclude<ExtArgs> | null
    where?: SessaoWhereInput
    orderBy?: SessaoOrderByWithRelationInput | SessaoOrderByWithRelationInput[]
    cursor?: SessaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessaoScalarFieldEnum | SessaoScalarFieldEnum[]
  }

  /**
   * Filme without action
   */
  export type FilmeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Filme
     */
    select?: FilmeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Filme
     */
    omit?: FilmeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilmeInclude<ExtArgs> | null
  }


  /**
   * Model Sessao
   */

  export type AggregateSessao = {
    _count: SessaoCountAggregateOutputType | null
    _avg: SessaoAvgAggregateOutputType | null
    _sum: SessaoSumAggregateOutputType | null
    _min: SessaoMinAggregateOutputType | null
    _max: SessaoMaxAggregateOutputType | null
  }

  export type SessaoAvgAggregateOutputType = {
    id: number | null
    salaId: number | null
    filmeId: number | null
    cinemaId: number | null
  }

  export type SessaoSumAggregateOutputType = {
    id: number | null
    salaId: number | null
    filmeId: number | null
    cinemaId: number | null
  }

  export type SessaoMinAggregateOutputType = {
    id: number | null
    horario: Date | null
    salaId: number | null
    filmeId: number | null
    cinemaId: number | null
  }

  export type SessaoMaxAggregateOutputType = {
    id: number | null
    horario: Date | null
    salaId: number | null
    filmeId: number | null
    cinemaId: number | null
  }

  export type SessaoCountAggregateOutputType = {
    id: number
    horario: number
    salaId: number
    filmeId: number
    cinemaId: number
    _all: number
  }


  export type SessaoAvgAggregateInputType = {
    id?: true
    salaId?: true
    filmeId?: true
    cinemaId?: true
  }

  export type SessaoSumAggregateInputType = {
    id?: true
    salaId?: true
    filmeId?: true
    cinemaId?: true
  }

  export type SessaoMinAggregateInputType = {
    id?: true
    horario?: true
    salaId?: true
    filmeId?: true
    cinemaId?: true
  }

  export type SessaoMaxAggregateInputType = {
    id?: true
    horario?: true
    salaId?: true
    filmeId?: true
    cinemaId?: true
  }

  export type SessaoCountAggregateInputType = {
    id?: true
    horario?: true
    salaId?: true
    filmeId?: true
    cinemaId?: true
    _all?: true
  }

  export type SessaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessao to aggregate.
     */
    where?: SessaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessaos to fetch.
     */
    orderBy?: SessaoOrderByWithRelationInput | SessaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessaos
    **/
    _count?: true | SessaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SessaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SessaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessaoMaxAggregateInputType
  }

  export type GetSessaoAggregateType<T extends SessaoAggregateArgs> = {
        [P in keyof T & keyof AggregateSessao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSessao[P]>
      : GetScalarType<T[P], AggregateSessao[P]>
  }




  export type SessaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessaoWhereInput
    orderBy?: SessaoOrderByWithAggregationInput | SessaoOrderByWithAggregationInput[]
    by: SessaoScalarFieldEnum[] | SessaoScalarFieldEnum
    having?: SessaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessaoCountAggregateInputType | true
    _avg?: SessaoAvgAggregateInputType
    _sum?: SessaoSumAggregateInputType
    _min?: SessaoMinAggregateInputType
    _max?: SessaoMaxAggregateInputType
  }

  export type SessaoGroupByOutputType = {
    id: number
    horario: Date
    salaId: number
    filmeId: number
    cinemaId: number
    _count: SessaoCountAggregateOutputType | null
    _avg: SessaoAvgAggregateOutputType | null
    _sum: SessaoSumAggregateOutputType | null
    _min: SessaoMinAggregateOutputType | null
    _max: SessaoMaxAggregateOutputType | null
  }

  type GetSessaoGroupByPayload<T extends SessaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessaoGroupByOutputType[P]>
            : GetScalarType<T[P], SessaoGroupByOutputType[P]>
        }
      >
    >


  export type SessaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    horario?: boolean
    salaId?: boolean
    filmeId?: boolean
    cinemaId?: boolean
    sala?: boolean | SalaDefaultArgs<ExtArgs>
    filme?: boolean | FilmeDefaultArgs<ExtArgs>
    cinema?: boolean | CinemaDefaultArgs<ExtArgs>
    ingressos?: boolean | Sessao$ingressosArgs<ExtArgs>
    _count?: boolean | SessaoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sessao"]>

  export type SessaoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    horario?: boolean
    salaId?: boolean
    filmeId?: boolean
    cinemaId?: boolean
    sala?: boolean | SalaDefaultArgs<ExtArgs>
    filme?: boolean | FilmeDefaultArgs<ExtArgs>
    cinema?: boolean | CinemaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sessao"]>

  export type SessaoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    horario?: boolean
    salaId?: boolean
    filmeId?: boolean
    cinemaId?: boolean
    sala?: boolean | SalaDefaultArgs<ExtArgs>
    filme?: boolean | FilmeDefaultArgs<ExtArgs>
    cinema?: boolean | CinemaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sessao"]>

  export type SessaoSelectScalar = {
    id?: boolean
    horario?: boolean
    salaId?: boolean
    filmeId?: boolean
    cinemaId?: boolean
  }

  export type SessaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "horario" | "salaId" | "filmeId" | "cinemaId", ExtArgs["result"]["sessao"]>
  export type SessaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sala?: boolean | SalaDefaultArgs<ExtArgs>
    filme?: boolean | FilmeDefaultArgs<ExtArgs>
    cinema?: boolean | CinemaDefaultArgs<ExtArgs>
    ingressos?: boolean | Sessao$ingressosArgs<ExtArgs>
    _count?: boolean | SessaoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SessaoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sala?: boolean | SalaDefaultArgs<ExtArgs>
    filme?: boolean | FilmeDefaultArgs<ExtArgs>
    cinema?: boolean | CinemaDefaultArgs<ExtArgs>
  }
  export type SessaoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sala?: boolean | SalaDefaultArgs<ExtArgs>
    filme?: boolean | FilmeDefaultArgs<ExtArgs>
    cinema?: boolean | CinemaDefaultArgs<ExtArgs>
  }

  export type $SessaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sessao"
    objects: {
      sala: Prisma.$SalaPayload<ExtArgs>
      filme: Prisma.$FilmePayload<ExtArgs>
      cinema: Prisma.$CinemaPayload<ExtArgs>
      ingressos: Prisma.$IngressoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      horario: Date
      salaId: number
      filmeId: number
      cinemaId: number
    }, ExtArgs["result"]["sessao"]>
    composites: {}
  }

  type SessaoGetPayload<S extends boolean | null | undefined | SessaoDefaultArgs> = $Result.GetResult<Prisma.$SessaoPayload, S>

  type SessaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessaoCountAggregateInputType | true
    }

  export interface SessaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sessao'], meta: { name: 'Sessao' } }
    /**
     * Find zero or one Sessao that matches the filter.
     * @param {SessaoFindUniqueArgs} args - Arguments to find a Sessao
     * @example
     * // Get one Sessao
     * const sessao = await prisma.sessao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessaoFindUniqueArgs>(args: SelectSubset<T, SessaoFindUniqueArgs<ExtArgs>>): Prisma__SessaoClient<$Result.GetResult<Prisma.$SessaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sessao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessaoFindUniqueOrThrowArgs} args - Arguments to find a Sessao
     * @example
     * // Get one Sessao
     * const sessao = await prisma.sessao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessaoFindUniqueOrThrowArgs>(args: SelectSubset<T, SessaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessaoClient<$Result.GetResult<Prisma.$SessaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sessao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessaoFindFirstArgs} args - Arguments to find a Sessao
     * @example
     * // Get one Sessao
     * const sessao = await prisma.sessao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessaoFindFirstArgs>(args?: SelectSubset<T, SessaoFindFirstArgs<ExtArgs>>): Prisma__SessaoClient<$Result.GetResult<Prisma.$SessaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sessao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessaoFindFirstOrThrowArgs} args - Arguments to find a Sessao
     * @example
     * // Get one Sessao
     * const sessao = await prisma.sessao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessaoFindFirstOrThrowArgs>(args?: SelectSubset<T, SessaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessaoClient<$Result.GetResult<Prisma.$SessaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessaos
     * const sessaos = await prisma.sessao.findMany()
     * 
     * // Get first 10 Sessaos
     * const sessaos = await prisma.sessao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessaoWithIdOnly = await prisma.sessao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessaoFindManyArgs>(args?: SelectSubset<T, SessaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sessao.
     * @param {SessaoCreateArgs} args - Arguments to create a Sessao.
     * @example
     * // Create one Sessao
     * const Sessao = await prisma.sessao.create({
     *   data: {
     *     // ... data to create a Sessao
     *   }
     * })
     * 
     */
    create<T extends SessaoCreateArgs>(args: SelectSubset<T, SessaoCreateArgs<ExtArgs>>): Prisma__SessaoClient<$Result.GetResult<Prisma.$SessaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessaos.
     * @param {SessaoCreateManyArgs} args - Arguments to create many Sessaos.
     * @example
     * // Create many Sessaos
     * const sessao = await prisma.sessao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessaoCreateManyArgs>(args?: SelectSubset<T, SessaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessaos and returns the data saved in the database.
     * @param {SessaoCreateManyAndReturnArgs} args - Arguments to create many Sessaos.
     * @example
     * // Create many Sessaos
     * const sessao = await prisma.sessao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessaos and only return the `id`
     * const sessaoWithIdOnly = await prisma.sessao.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessaoCreateManyAndReturnArgs>(args?: SelectSubset<T, SessaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessaoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sessao.
     * @param {SessaoDeleteArgs} args - Arguments to delete one Sessao.
     * @example
     * // Delete one Sessao
     * const Sessao = await prisma.sessao.delete({
     *   where: {
     *     // ... filter to delete one Sessao
     *   }
     * })
     * 
     */
    delete<T extends SessaoDeleteArgs>(args: SelectSubset<T, SessaoDeleteArgs<ExtArgs>>): Prisma__SessaoClient<$Result.GetResult<Prisma.$SessaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sessao.
     * @param {SessaoUpdateArgs} args - Arguments to update one Sessao.
     * @example
     * // Update one Sessao
     * const sessao = await prisma.sessao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessaoUpdateArgs>(args: SelectSubset<T, SessaoUpdateArgs<ExtArgs>>): Prisma__SessaoClient<$Result.GetResult<Prisma.$SessaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessaos.
     * @param {SessaoDeleteManyArgs} args - Arguments to filter Sessaos to delete.
     * @example
     * // Delete a few Sessaos
     * const { count } = await prisma.sessao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessaoDeleteManyArgs>(args?: SelectSubset<T, SessaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessaos
     * const sessao = await prisma.sessao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessaoUpdateManyArgs>(args: SelectSubset<T, SessaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessaos and returns the data updated in the database.
     * @param {SessaoUpdateManyAndReturnArgs} args - Arguments to update many Sessaos.
     * @example
     * // Update many Sessaos
     * const sessao = await prisma.sessao.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessaos and only return the `id`
     * const sessaoWithIdOnly = await prisma.sessao.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessaoUpdateManyAndReturnArgs>(args: SelectSubset<T, SessaoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessaoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sessao.
     * @param {SessaoUpsertArgs} args - Arguments to update or create a Sessao.
     * @example
     * // Update or create a Sessao
     * const sessao = await prisma.sessao.upsert({
     *   create: {
     *     // ... data to create a Sessao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sessao we want to update
     *   }
     * })
     */
    upsert<T extends SessaoUpsertArgs>(args: SelectSubset<T, SessaoUpsertArgs<ExtArgs>>): Prisma__SessaoClient<$Result.GetResult<Prisma.$SessaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessaoCountArgs} args - Arguments to filter Sessaos to count.
     * @example
     * // Count the number of Sessaos
     * const count = await prisma.sessao.count({
     *   where: {
     *     // ... the filter for the Sessaos we want to count
     *   }
     * })
    **/
    count<T extends SessaoCountArgs>(
      args?: Subset<T, SessaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sessao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessaoAggregateArgs>(args: Subset<T, SessaoAggregateArgs>): Prisma.PrismaPromise<GetSessaoAggregateType<T>>

    /**
     * Group by Sessao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessaoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessaoGroupByArgs['orderBy'] }
        : { orderBy?: SessaoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sessao model
   */
  readonly fields: SessaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sessao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sala<T extends SalaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SalaDefaultArgs<ExtArgs>>): Prisma__SalaClient<$Result.GetResult<Prisma.$SalaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    filme<T extends FilmeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FilmeDefaultArgs<ExtArgs>>): Prisma__FilmeClient<$Result.GetResult<Prisma.$FilmePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    cinema<T extends CinemaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CinemaDefaultArgs<ExtArgs>>): Prisma__CinemaClient<$Result.GetResult<Prisma.$CinemaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ingressos<T extends Sessao$ingressosArgs<ExtArgs> = {}>(args?: Subset<T, Sessao$ingressosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngressoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Sessao model
   */
  interface SessaoFieldRefs {
    readonly id: FieldRef<"Sessao", 'Int'>
    readonly horario: FieldRef<"Sessao", 'DateTime'>
    readonly salaId: FieldRef<"Sessao", 'Int'>
    readonly filmeId: FieldRef<"Sessao", 'Int'>
    readonly cinemaId: FieldRef<"Sessao", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Sessao findUnique
   */
  export type SessaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessao
     */
    select?: SessaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessao
     */
    omit?: SessaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessaoInclude<ExtArgs> | null
    /**
     * Filter, which Sessao to fetch.
     */
    where: SessaoWhereUniqueInput
  }

  /**
   * Sessao findUniqueOrThrow
   */
  export type SessaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessao
     */
    select?: SessaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessao
     */
    omit?: SessaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessaoInclude<ExtArgs> | null
    /**
     * Filter, which Sessao to fetch.
     */
    where: SessaoWhereUniqueInput
  }

  /**
   * Sessao findFirst
   */
  export type SessaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessao
     */
    select?: SessaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessao
     */
    omit?: SessaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessaoInclude<ExtArgs> | null
    /**
     * Filter, which Sessao to fetch.
     */
    where?: SessaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessaos to fetch.
     */
    orderBy?: SessaoOrderByWithRelationInput | SessaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessaos.
     */
    cursor?: SessaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessaos.
     */
    distinct?: SessaoScalarFieldEnum | SessaoScalarFieldEnum[]
  }

  /**
   * Sessao findFirstOrThrow
   */
  export type SessaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessao
     */
    select?: SessaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessao
     */
    omit?: SessaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessaoInclude<ExtArgs> | null
    /**
     * Filter, which Sessao to fetch.
     */
    where?: SessaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessaos to fetch.
     */
    orderBy?: SessaoOrderByWithRelationInput | SessaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessaos.
     */
    cursor?: SessaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessaos.
     */
    distinct?: SessaoScalarFieldEnum | SessaoScalarFieldEnum[]
  }

  /**
   * Sessao findMany
   */
  export type SessaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessao
     */
    select?: SessaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessao
     */
    omit?: SessaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessaoInclude<ExtArgs> | null
    /**
     * Filter, which Sessaos to fetch.
     */
    where?: SessaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessaos to fetch.
     */
    orderBy?: SessaoOrderByWithRelationInput | SessaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessaos.
     */
    cursor?: SessaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessaos.
     */
    skip?: number
    distinct?: SessaoScalarFieldEnum | SessaoScalarFieldEnum[]
  }

  /**
   * Sessao create
   */
  export type SessaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessao
     */
    select?: SessaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessao
     */
    omit?: SessaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessaoInclude<ExtArgs> | null
    /**
     * The data needed to create a Sessao.
     */
    data: XOR<SessaoCreateInput, SessaoUncheckedCreateInput>
  }

  /**
   * Sessao createMany
   */
  export type SessaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessaos.
     */
    data: SessaoCreateManyInput | SessaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sessao createManyAndReturn
   */
  export type SessaoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessao
     */
    select?: SessaoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sessao
     */
    omit?: SessaoOmit<ExtArgs> | null
    /**
     * The data used to create many Sessaos.
     */
    data: SessaoCreateManyInput | SessaoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessaoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sessao update
   */
  export type SessaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessao
     */
    select?: SessaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessao
     */
    omit?: SessaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessaoInclude<ExtArgs> | null
    /**
     * The data needed to update a Sessao.
     */
    data: XOR<SessaoUpdateInput, SessaoUncheckedUpdateInput>
    /**
     * Choose, which Sessao to update.
     */
    where: SessaoWhereUniqueInput
  }

  /**
   * Sessao updateMany
   */
  export type SessaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessaos.
     */
    data: XOR<SessaoUpdateManyMutationInput, SessaoUncheckedUpdateManyInput>
    /**
     * Filter which Sessaos to update
     */
    where?: SessaoWhereInput
    /**
     * Limit how many Sessaos to update.
     */
    limit?: number
  }

  /**
   * Sessao updateManyAndReturn
   */
  export type SessaoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessao
     */
    select?: SessaoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sessao
     */
    omit?: SessaoOmit<ExtArgs> | null
    /**
     * The data used to update Sessaos.
     */
    data: XOR<SessaoUpdateManyMutationInput, SessaoUncheckedUpdateManyInput>
    /**
     * Filter which Sessaos to update
     */
    where?: SessaoWhereInput
    /**
     * Limit how many Sessaos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessaoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sessao upsert
   */
  export type SessaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessao
     */
    select?: SessaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessao
     */
    omit?: SessaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessaoInclude<ExtArgs> | null
    /**
     * The filter to search for the Sessao to update in case it exists.
     */
    where: SessaoWhereUniqueInput
    /**
     * In case the Sessao found by the `where` argument doesn't exist, create a new Sessao with this data.
     */
    create: XOR<SessaoCreateInput, SessaoUncheckedCreateInput>
    /**
     * In case the Sessao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessaoUpdateInput, SessaoUncheckedUpdateInput>
  }

  /**
   * Sessao delete
   */
  export type SessaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessao
     */
    select?: SessaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessao
     */
    omit?: SessaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessaoInclude<ExtArgs> | null
    /**
     * Filter which Sessao to delete.
     */
    where: SessaoWhereUniqueInput
  }

  /**
   * Sessao deleteMany
   */
  export type SessaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessaos to delete
     */
    where?: SessaoWhereInput
    /**
     * Limit how many Sessaos to delete.
     */
    limit?: number
  }

  /**
   * Sessao.ingressos
   */
  export type Sessao$ingressosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingresso
     */
    select?: IngressoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingresso
     */
    omit?: IngressoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngressoInclude<ExtArgs> | null
    where?: IngressoWhereInput
    orderBy?: IngressoOrderByWithRelationInput | IngressoOrderByWithRelationInput[]
    cursor?: IngressoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IngressoScalarFieldEnum | IngressoScalarFieldEnum[]
  }

  /**
   * Sessao without action
   */
  export type SessaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessao
     */
    select?: SessaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessao
     */
    omit?: SessaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessaoInclude<ExtArgs> | null
  }


  /**
   * Model Ingresso
   */

  export type AggregateIngresso = {
    _count: IngressoCountAggregateOutputType | null
    _avg: IngressoAvgAggregateOutputType | null
    _sum: IngressoSumAggregateOutputType | null
    _min: IngressoMinAggregateOutputType | null
    _max: IngressoMaxAggregateOutputType | null
  }

  export type IngressoAvgAggregateOutputType = {
    id: number | null
    preco: number | null
    sessaoId: number | null
  }

  export type IngressoSumAggregateOutputType = {
    id: number | null
    preco: number | null
    sessaoId: number | null
  }

  export type IngressoMinAggregateOutputType = {
    id: number | null
    preco: number | null
    sessaoId: number | null
  }

  export type IngressoMaxAggregateOutputType = {
    id: number | null
    preco: number | null
    sessaoId: number | null
  }

  export type IngressoCountAggregateOutputType = {
    id: number
    preco: number
    sessaoId: number
    _all: number
  }


  export type IngressoAvgAggregateInputType = {
    id?: true
    preco?: true
    sessaoId?: true
  }

  export type IngressoSumAggregateInputType = {
    id?: true
    preco?: true
    sessaoId?: true
  }

  export type IngressoMinAggregateInputType = {
    id?: true
    preco?: true
    sessaoId?: true
  }

  export type IngressoMaxAggregateInputType = {
    id?: true
    preco?: true
    sessaoId?: true
  }

  export type IngressoCountAggregateInputType = {
    id?: true
    preco?: true
    sessaoId?: true
    _all?: true
  }

  export type IngressoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ingresso to aggregate.
     */
    where?: IngressoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingressos to fetch.
     */
    orderBy?: IngressoOrderByWithRelationInput | IngressoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IngressoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingressos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingressos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ingressos
    **/
    _count?: true | IngressoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IngressoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IngressoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IngressoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IngressoMaxAggregateInputType
  }

  export type GetIngressoAggregateType<T extends IngressoAggregateArgs> = {
        [P in keyof T & keyof AggregateIngresso]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIngresso[P]>
      : GetScalarType<T[P], AggregateIngresso[P]>
  }




  export type IngressoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IngressoWhereInput
    orderBy?: IngressoOrderByWithAggregationInput | IngressoOrderByWithAggregationInput[]
    by: IngressoScalarFieldEnum[] | IngressoScalarFieldEnum
    having?: IngressoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IngressoCountAggregateInputType | true
    _avg?: IngressoAvgAggregateInputType
    _sum?: IngressoSumAggregateInputType
    _min?: IngressoMinAggregateInputType
    _max?: IngressoMaxAggregateInputType
  }

  export type IngressoGroupByOutputType = {
    id: number
    preco: number
    sessaoId: number
    _count: IngressoCountAggregateOutputType | null
    _avg: IngressoAvgAggregateOutputType | null
    _sum: IngressoSumAggregateOutputType | null
    _min: IngressoMinAggregateOutputType | null
    _max: IngressoMaxAggregateOutputType | null
  }

  type GetIngressoGroupByPayload<T extends IngressoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IngressoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IngressoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IngressoGroupByOutputType[P]>
            : GetScalarType<T[P], IngressoGroupByOutputType[P]>
        }
      >
    >


  export type IngressoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    preco?: boolean
    sessaoId?: boolean
    sessao?: boolean | SessaoDefaultArgs<ExtArgs>
    pedidos?: boolean | Ingresso$pedidosArgs<ExtArgs>
    _count?: boolean | IngressoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ingresso"]>

  export type IngressoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    preco?: boolean
    sessaoId?: boolean
    sessao?: boolean | SessaoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ingresso"]>

  export type IngressoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    preco?: boolean
    sessaoId?: boolean
    sessao?: boolean | SessaoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ingresso"]>

  export type IngressoSelectScalar = {
    id?: boolean
    preco?: boolean
    sessaoId?: boolean
  }

  export type IngressoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "preco" | "sessaoId", ExtArgs["result"]["ingresso"]>
  export type IngressoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessao?: boolean | SessaoDefaultArgs<ExtArgs>
    pedidos?: boolean | Ingresso$pedidosArgs<ExtArgs>
    _count?: boolean | IngressoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type IngressoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessao?: boolean | SessaoDefaultArgs<ExtArgs>
  }
  export type IngressoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessao?: boolean | SessaoDefaultArgs<ExtArgs>
  }

  export type $IngressoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ingresso"
    objects: {
      sessao: Prisma.$SessaoPayload<ExtArgs>
      pedidos: Prisma.$PedidoIngressoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      preco: number
      sessaoId: number
    }, ExtArgs["result"]["ingresso"]>
    composites: {}
  }

  type IngressoGetPayload<S extends boolean | null | undefined | IngressoDefaultArgs> = $Result.GetResult<Prisma.$IngressoPayload, S>

  type IngressoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IngressoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IngressoCountAggregateInputType | true
    }

  export interface IngressoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ingresso'], meta: { name: 'Ingresso' } }
    /**
     * Find zero or one Ingresso that matches the filter.
     * @param {IngressoFindUniqueArgs} args - Arguments to find a Ingresso
     * @example
     * // Get one Ingresso
     * const ingresso = await prisma.ingresso.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IngressoFindUniqueArgs>(args: SelectSubset<T, IngressoFindUniqueArgs<ExtArgs>>): Prisma__IngressoClient<$Result.GetResult<Prisma.$IngressoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ingresso that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IngressoFindUniqueOrThrowArgs} args - Arguments to find a Ingresso
     * @example
     * // Get one Ingresso
     * const ingresso = await prisma.ingresso.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IngressoFindUniqueOrThrowArgs>(args: SelectSubset<T, IngressoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IngressoClient<$Result.GetResult<Prisma.$IngressoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ingresso that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngressoFindFirstArgs} args - Arguments to find a Ingresso
     * @example
     * // Get one Ingresso
     * const ingresso = await prisma.ingresso.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IngressoFindFirstArgs>(args?: SelectSubset<T, IngressoFindFirstArgs<ExtArgs>>): Prisma__IngressoClient<$Result.GetResult<Prisma.$IngressoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ingresso that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngressoFindFirstOrThrowArgs} args - Arguments to find a Ingresso
     * @example
     * // Get one Ingresso
     * const ingresso = await prisma.ingresso.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IngressoFindFirstOrThrowArgs>(args?: SelectSubset<T, IngressoFindFirstOrThrowArgs<ExtArgs>>): Prisma__IngressoClient<$Result.GetResult<Prisma.$IngressoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ingressos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngressoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ingressos
     * const ingressos = await prisma.ingresso.findMany()
     * 
     * // Get first 10 Ingressos
     * const ingressos = await prisma.ingresso.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ingressoWithIdOnly = await prisma.ingresso.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IngressoFindManyArgs>(args?: SelectSubset<T, IngressoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngressoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ingresso.
     * @param {IngressoCreateArgs} args - Arguments to create a Ingresso.
     * @example
     * // Create one Ingresso
     * const Ingresso = await prisma.ingresso.create({
     *   data: {
     *     // ... data to create a Ingresso
     *   }
     * })
     * 
     */
    create<T extends IngressoCreateArgs>(args: SelectSubset<T, IngressoCreateArgs<ExtArgs>>): Prisma__IngressoClient<$Result.GetResult<Prisma.$IngressoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ingressos.
     * @param {IngressoCreateManyArgs} args - Arguments to create many Ingressos.
     * @example
     * // Create many Ingressos
     * const ingresso = await prisma.ingresso.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IngressoCreateManyArgs>(args?: SelectSubset<T, IngressoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ingressos and returns the data saved in the database.
     * @param {IngressoCreateManyAndReturnArgs} args - Arguments to create many Ingressos.
     * @example
     * // Create many Ingressos
     * const ingresso = await prisma.ingresso.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ingressos and only return the `id`
     * const ingressoWithIdOnly = await prisma.ingresso.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IngressoCreateManyAndReturnArgs>(args?: SelectSubset<T, IngressoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngressoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ingresso.
     * @param {IngressoDeleteArgs} args - Arguments to delete one Ingresso.
     * @example
     * // Delete one Ingresso
     * const Ingresso = await prisma.ingresso.delete({
     *   where: {
     *     // ... filter to delete one Ingresso
     *   }
     * })
     * 
     */
    delete<T extends IngressoDeleteArgs>(args: SelectSubset<T, IngressoDeleteArgs<ExtArgs>>): Prisma__IngressoClient<$Result.GetResult<Prisma.$IngressoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ingresso.
     * @param {IngressoUpdateArgs} args - Arguments to update one Ingresso.
     * @example
     * // Update one Ingresso
     * const ingresso = await prisma.ingresso.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IngressoUpdateArgs>(args: SelectSubset<T, IngressoUpdateArgs<ExtArgs>>): Prisma__IngressoClient<$Result.GetResult<Prisma.$IngressoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ingressos.
     * @param {IngressoDeleteManyArgs} args - Arguments to filter Ingressos to delete.
     * @example
     * // Delete a few Ingressos
     * const { count } = await prisma.ingresso.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IngressoDeleteManyArgs>(args?: SelectSubset<T, IngressoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ingressos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngressoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ingressos
     * const ingresso = await prisma.ingresso.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IngressoUpdateManyArgs>(args: SelectSubset<T, IngressoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ingressos and returns the data updated in the database.
     * @param {IngressoUpdateManyAndReturnArgs} args - Arguments to update many Ingressos.
     * @example
     * // Update many Ingressos
     * const ingresso = await prisma.ingresso.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ingressos and only return the `id`
     * const ingressoWithIdOnly = await prisma.ingresso.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends IngressoUpdateManyAndReturnArgs>(args: SelectSubset<T, IngressoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngressoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ingresso.
     * @param {IngressoUpsertArgs} args - Arguments to update or create a Ingresso.
     * @example
     * // Update or create a Ingresso
     * const ingresso = await prisma.ingresso.upsert({
     *   create: {
     *     // ... data to create a Ingresso
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ingresso we want to update
     *   }
     * })
     */
    upsert<T extends IngressoUpsertArgs>(args: SelectSubset<T, IngressoUpsertArgs<ExtArgs>>): Prisma__IngressoClient<$Result.GetResult<Prisma.$IngressoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ingressos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngressoCountArgs} args - Arguments to filter Ingressos to count.
     * @example
     * // Count the number of Ingressos
     * const count = await prisma.ingresso.count({
     *   where: {
     *     // ... the filter for the Ingressos we want to count
     *   }
     * })
    **/
    count<T extends IngressoCountArgs>(
      args?: Subset<T, IngressoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IngressoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ingresso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngressoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IngressoAggregateArgs>(args: Subset<T, IngressoAggregateArgs>): Prisma.PrismaPromise<GetIngressoAggregateType<T>>

    /**
     * Group by Ingresso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngressoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends IngressoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IngressoGroupByArgs['orderBy'] }
        : { orderBy?: IngressoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, IngressoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIngressoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ingresso model
   */
  readonly fields: IngressoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ingresso.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IngressoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sessao<T extends SessaoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SessaoDefaultArgs<ExtArgs>>): Prisma__SessaoClient<$Result.GetResult<Prisma.$SessaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    pedidos<T extends Ingresso$pedidosArgs<ExtArgs> = {}>(args?: Subset<T, Ingresso$pedidosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoIngressoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Ingresso model
   */
  interface IngressoFieldRefs {
    readonly id: FieldRef<"Ingresso", 'Int'>
    readonly preco: FieldRef<"Ingresso", 'Float'>
    readonly sessaoId: FieldRef<"Ingresso", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Ingresso findUnique
   */
  export type IngressoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingresso
     */
    select?: IngressoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingresso
     */
    omit?: IngressoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngressoInclude<ExtArgs> | null
    /**
     * Filter, which Ingresso to fetch.
     */
    where: IngressoWhereUniqueInput
  }

  /**
   * Ingresso findUniqueOrThrow
   */
  export type IngressoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingresso
     */
    select?: IngressoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingresso
     */
    omit?: IngressoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngressoInclude<ExtArgs> | null
    /**
     * Filter, which Ingresso to fetch.
     */
    where: IngressoWhereUniqueInput
  }

  /**
   * Ingresso findFirst
   */
  export type IngressoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingresso
     */
    select?: IngressoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingresso
     */
    omit?: IngressoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngressoInclude<ExtArgs> | null
    /**
     * Filter, which Ingresso to fetch.
     */
    where?: IngressoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingressos to fetch.
     */
    orderBy?: IngressoOrderByWithRelationInput | IngressoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ingressos.
     */
    cursor?: IngressoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingressos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingressos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ingressos.
     */
    distinct?: IngressoScalarFieldEnum | IngressoScalarFieldEnum[]
  }

  /**
   * Ingresso findFirstOrThrow
   */
  export type IngressoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingresso
     */
    select?: IngressoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingresso
     */
    omit?: IngressoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngressoInclude<ExtArgs> | null
    /**
     * Filter, which Ingresso to fetch.
     */
    where?: IngressoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingressos to fetch.
     */
    orderBy?: IngressoOrderByWithRelationInput | IngressoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ingressos.
     */
    cursor?: IngressoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingressos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingressos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ingressos.
     */
    distinct?: IngressoScalarFieldEnum | IngressoScalarFieldEnum[]
  }

  /**
   * Ingresso findMany
   */
  export type IngressoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingresso
     */
    select?: IngressoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingresso
     */
    omit?: IngressoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngressoInclude<ExtArgs> | null
    /**
     * Filter, which Ingressos to fetch.
     */
    where?: IngressoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingressos to fetch.
     */
    orderBy?: IngressoOrderByWithRelationInput | IngressoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ingressos.
     */
    cursor?: IngressoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingressos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingressos.
     */
    skip?: number
    distinct?: IngressoScalarFieldEnum | IngressoScalarFieldEnum[]
  }

  /**
   * Ingresso create
   */
  export type IngressoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingresso
     */
    select?: IngressoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingresso
     */
    omit?: IngressoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngressoInclude<ExtArgs> | null
    /**
     * The data needed to create a Ingresso.
     */
    data: XOR<IngressoCreateInput, IngressoUncheckedCreateInput>
  }

  /**
   * Ingresso createMany
   */
  export type IngressoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ingressos.
     */
    data: IngressoCreateManyInput | IngressoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ingresso createManyAndReturn
   */
  export type IngressoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingresso
     */
    select?: IngressoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ingresso
     */
    omit?: IngressoOmit<ExtArgs> | null
    /**
     * The data used to create many Ingressos.
     */
    data: IngressoCreateManyInput | IngressoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngressoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ingresso update
   */
  export type IngressoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingresso
     */
    select?: IngressoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingresso
     */
    omit?: IngressoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngressoInclude<ExtArgs> | null
    /**
     * The data needed to update a Ingresso.
     */
    data: XOR<IngressoUpdateInput, IngressoUncheckedUpdateInput>
    /**
     * Choose, which Ingresso to update.
     */
    where: IngressoWhereUniqueInput
  }

  /**
   * Ingresso updateMany
   */
  export type IngressoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ingressos.
     */
    data: XOR<IngressoUpdateManyMutationInput, IngressoUncheckedUpdateManyInput>
    /**
     * Filter which Ingressos to update
     */
    where?: IngressoWhereInput
    /**
     * Limit how many Ingressos to update.
     */
    limit?: number
  }

  /**
   * Ingresso updateManyAndReturn
   */
  export type IngressoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingresso
     */
    select?: IngressoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ingresso
     */
    omit?: IngressoOmit<ExtArgs> | null
    /**
     * The data used to update Ingressos.
     */
    data: XOR<IngressoUpdateManyMutationInput, IngressoUncheckedUpdateManyInput>
    /**
     * Filter which Ingressos to update
     */
    where?: IngressoWhereInput
    /**
     * Limit how many Ingressos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngressoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ingresso upsert
   */
  export type IngressoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingresso
     */
    select?: IngressoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingresso
     */
    omit?: IngressoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngressoInclude<ExtArgs> | null
    /**
     * The filter to search for the Ingresso to update in case it exists.
     */
    where: IngressoWhereUniqueInput
    /**
     * In case the Ingresso found by the `where` argument doesn't exist, create a new Ingresso with this data.
     */
    create: XOR<IngressoCreateInput, IngressoUncheckedCreateInput>
    /**
     * In case the Ingresso was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IngressoUpdateInput, IngressoUncheckedUpdateInput>
  }

  /**
   * Ingresso delete
   */
  export type IngressoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingresso
     */
    select?: IngressoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingresso
     */
    omit?: IngressoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngressoInclude<ExtArgs> | null
    /**
     * Filter which Ingresso to delete.
     */
    where: IngressoWhereUniqueInput
  }

  /**
   * Ingresso deleteMany
   */
  export type IngressoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ingressos to delete
     */
    where?: IngressoWhereInput
    /**
     * Limit how many Ingressos to delete.
     */
    limit?: number
  }

  /**
   * Ingresso.pedidos
   */
  export type Ingresso$pedidosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoIngresso
     */
    select?: PedidoIngressoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoIngresso
     */
    omit?: PedidoIngressoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoIngressoInclude<ExtArgs> | null
    where?: PedidoIngressoWhereInput
    orderBy?: PedidoIngressoOrderByWithRelationInput | PedidoIngressoOrderByWithRelationInput[]
    cursor?: PedidoIngressoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PedidoIngressoScalarFieldEnum | PedidoIngressoScalarFieldEnum[]
  }

  /**
   * Ingresso without action
   */
  export type IngressoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingresso
     */
    select?: IngressoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingresso
     */
    omit?: IngressoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngressoInclude<ExtArgs> | null
  }


  /**
   * Model LancheCombo
   */

  export type AggregateLancheCombo = {
    _count: LancheComboCountAggregateOutputType | null
    _avg: LancheComboAvgAggregateOutputType | null
    _sum: LancheComboSumAggregateOutputType | null
    _min: LancheComboMinAggregateOutputType | null
    _max: LancheComboMaxAggregateOutputType | null
  }

  export type LancheComboAvgAggregateOutputType = {
    id: number | null
    adicional: Decimal | null
    subtotal: Decimal | null
  }

  export type LancheComboSumAggregateOutputType = {
    id: number | null
    adicional: Decimal | null
    subtotal: Decimal | null
  }

  export type LancheComboMinAggregateOutputType = {
    id: number | null
    nome: string | null
    descricao: string | null
    adicional: Decimal | null
    subtotal: Decimal | null
  }

  export type LancheComboMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    descricao: string | null
    adicional: Decimal | null
    subtotal: Decimal | null
  }

  export type LancheComboCountAggregateOutputType = {
    id: number
    nome: number
    descricao: number
    adicional: number
    subtotal: number
    _all: number
  }


  export type LancheComboAvgAggregateInputType = {
    id?: true
    adicional?: true
    subtotal?: true
  }

  export type LancheComboSumAggregateInputType = {
    id?: true
    adicional?: true
    subtotal?: true
  }

  export type LancheComboMinAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    adicional?: true
    subtotal?: true
  }

  export type LancheComboMaxAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    adicional?: true
    subtotal?: true
  }

  export type LancheComboCountAggregateInputType = {
    id?: true
    nome?: true
    descricao?: true
    adicional?: true
    subtotal?: true
    _all?: true
  }

  export type LancheComboAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LancheCombo to aggregate.
     */
    where?: LancheComboWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LancheCombos to fetch.
     */
    orderBy?: LancheComboOrderByWithRelationInput | LancheComboOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LancheComboWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LancheCombos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LancheCombos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LancheCombos
    **/
    _count?: true | LancheComboCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LancheComboAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LancheComboSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LancheComboMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LancheComboMaxAggregateInputType
  }

  export type GetLancheComboAggregateType<T extends LancheComboAggregateArgs> = {
        [P in keyof T & keyof AggregateLancheCombo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLancheCombo[P]>
      : GetScalarType<T[P], AggregateLancheCombo[P]>
  }




  export type LancheComboGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LancheComboWhereInput
    orderBy?: LancheComboOrderByWithAggregationInput | LancheComboOrderByWithAggregationInput[]
    by: LancheComboScalarFieldEnum[] | LancheComboScalarFieldEnum
    having?: LancheComboScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LancheComboCountAggregateInputType | true
    _avg?: LancheComboAvgAggregateInputType
    _sum?: LancheComboSumAggregateInputType
    _min?: LancheComboMinAggregateInputType
    _max?: LancheComboMaxAggregateInputType
  }

  export type LancheComboGroupByOutputType = {
    id: number
    nome: string
    descricao: string
    adicional: Decimal
    subtotal: Decimal
    _count: LancheComboCountAggregateOutputType | null
    _avg: LancheComboAvgAggregateOutputType | null
    _sum: LancheComboSumAggregateOutputType | null
    _min: LancheComboMinAggregateOutputType | null
    _max: LancheComboMaxAggregateOutputType | null
  }

  type GetLancheComboGroupByPayload<T extends LancheComboGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LancheComboGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LancheComboGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LancheComboGroupByOutputType[P]>
            : GetScalarType<T[P], LancheComboGroupByOutputType[P]>
        }
      >
    >


  export type LancheComboSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    adicional?: boolean
    subtotal?: boolean
    pedidos?: boolean | LancheCombo$pedidosArgs<ExtArgs>
    _count?: boolean | LancheComboCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lancheCombo"]>

  export type LancheComboSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    adicional?: boolean
    subtotal?: boolean
  }, ExtArgs["result"]["lancheCombo"]>

  export type LancheComboSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    descricao?: boolean
    adicional?: boolean
    subtotal?: boolean
  }, ExtArgs["result"]["lancheCombo"]>

  export type LancheComboSelectScalar = {
    id?: boolean
    nome?: boolean
    descricao?: boolean
    adicional?: boolean
    subtotal?: boolean
  }

  export type LancheComboOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "descricao" | "adicional" | "subtotal", ExtArgs["result"]["lancheCombo"]>
  export type LancheComboInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedidos?: boolean | LancheCombo$pedidosArgs<ExtArgs>
    _count?: boolean | LancheComboCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LancheComboIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type LancheComboIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $LancheComboPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LancheCombo"
    objects: {
      pedidos: Prisma.$PedidoLancheComboPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      descricao: string
      adicional: Prisma.Decimal
      subtotal: Prisma.Decimal
    }, ExtArgs["result"]["lancheCombo"]>
    composites: {}
  }

  type LancheComboGetPayload<S extends boolean | null | undefined | LancheComboDefaultArgs> = $Result.GetResult<Prisma.$LancheComboPayload, S>

  type LancheComboCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LancheComboFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LancheComboCountAggregateInputType | true
    }

  export interface LancheComboDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LancheCombo'], meta: { name: 'LancheCombo' } }
    /**
     * Find zero or one LancheCombo that matches the filter.
     * @param {LancheComboFindUniqueArgs} args - Arguments to find a LancheCombo
     * @example
     * // Get one LancheCombo
     * const lancheCombo = await prisma.lancheCombo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LancheComboFindUniqueArgs>(args: SelectSubset<T, LancheComboFindUniqueArgs<ExtArgs>>): Prisma__LancheComboClient<$Result.GetResult<Prisma.$LancheComboPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LancheCombo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LancheComboFindUniqueOrThrowArgs} args - Arguments to find a LancheCombo
     * @example
     * // Get one LancheCombo
     * const lancheCombo = await prisma.lancheCombo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LancheComboFindUniqueOrThrowArgs>(args: SelectSubset<T, LancheComboFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LancheComboClient<$Result.GetResult<Prisma.$LancheComboPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LancheCombo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LancheComboFindFirstArgs} args - Arguments to find a LancheCombo
     * @example
     * // Get one LancheCombo
     * const lancheCombo = await prisma.lancheCombo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LancheComboFindFirstArgs>(args?: SelectSubset<T, LancheComboFindFirstArgs<ExtArgs>>): Prisma__LancheComboClient<$Result.GetResult<Prisma.$LancheComboPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LancheCombo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LancheComboFindFirstOrThrowArgs} args - Arguments to find a LancheCombo
     * @example
     * // Get one LancheCombo
     * const lancheCombo = await prisma.lancheCombo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LancheComboFindFirstOrThrowArgs>(args?: SelectSubset<T, LancheComboFindFirstOrThrowArgs<ExtArgs>>): Prisma__LancheComboClient<$Result.GetResult<Prisma.$LancheComboPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LancheCombos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LancheComboFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LancheCombos
     * const lancheCombos = await prisma.lancheCombo.findMany()
     * 
     * // Get first 10 LancheCombos
     * const lancheCombos = await prisma.lancheCombo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lancheComboWithIdOnly = await prisma.lancheCombo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LancheComboFindManyArgs>(args?: SelectSubset<T, LancheComboFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LancheComboPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LancheCombo.
     * @param {LancheComboCreateArgs} args - Arguments to create a LancheCombo.
     * @example
     * // Create one LancheCombo
     * const LancheCombo = await prisma.lancheCombo.create({
     *   data: {
     *     // ... data to create a LancheCombo
     *   }
     * })
     * 
     */
    create<T extends LancheComboCreateArgs>(args: SelectSubset<T, LancheComboCreateArgs<ExtArgs>>): Prisma__LancheComboClient<$Result.GetResult<Prisma.$LancheComboPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LancheCombos.
     * @param {LancheComboCreateManyArgs} args - Arguments to create many LancheCombos.
     * @example
     * // Create many LancheCombos
     * const lancheCombo = await prisma.lancheCombo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LancheComboCreateManyArgs>(args?: SelectSubset<T, LancheComboCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LancheCombos and returns the data saved in the database.
     * @param {LancheComboCreateManyAndReturnArgs} args - Arguments to create many LancheCombos.
     * @example
     * // Create many LancheCombos
     * const lancheCombo = await prisma.lancheCombo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LancheCombos and only return the `id`
     * const lancheComboWithIdOnly = await prisma.lancheCombo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LancheComboCreateManyAndReturnArgs>(args?: SelectSubset<T, LancheComboCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LancheComboPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LancheCombo.
     * @param {LancheComboDeleteArgs} args - Arguments to delete one LancheCombo.
     * @example
     * // Delete one LancheCombo
     * const LancheCombo = await prisma.lancheCombo.delete({
     *   where: {
     *     // ... filter to delete one LancheCombo
     *   }
     * })
     * 
     */
    delete<T extends LancheComboDeleteArgs>(args: SelectSubset<T, LancheComboDeleteArgs<ExtArgs>>): Prisma__LancheComboClient<$Result.GetResult<Prisma.$LancheComboPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LancheCombo.
     * @param {LancheComboUpdateArgs} args - Arguments to update one LancheCombo.
     * @example
     * // Update one LancheCombo
     * const lancheCombo = await prisma.lancheCombo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LancheComboUpdateArgs>(args: SelectSubset<T, LancheComboUpdateArgs<ExtArgs>>): Prisma__LancheComboClient<$Result.GetResult<Prisma.$LancheComboPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LancheCombos.
     * @param {LancheComboDeleteManyArgs} args - Arguments to filter LancheCombos to delete.
     * @example
     * // Delete a few LancheCombos
     * const { count } = await prisma.lancheCombo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LancheComboDeleteManyArgs>(args?: SelectSubset<T, LancheComboDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LancheCombos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LancheComboUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LancheCombos
     * const lancheCombo = await prisma.lancheCombo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LancheComboUpdateManyArgs>(args: SelectSubset<T, LancheComboUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LancheCombos and returns the data updated in the database.
     * @param {LancheComboUpdateManyAndReturnArgs} args - Arguments to update many LancheCombos.
     * @example
     * // Update many LancheCombos
     * const lancheCombo = await prisma.lancheCombo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LancheCombos and only return the `id`
     * const lancheComboWithIdOnly = await prisma.lancheCombo.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LancheComboUpdateManyAndReturnArgs>(args: SelectSubset<T, LancheComboUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LancheComboPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LancheCombo.
     * @param {LancheComboUpsertArgs} args - Arguments to update or create a LancheCombo.
     * @example
     * // Update or create a LancheCombo
     * const lancheCombo = await prisma.lancheCombo.upsert({
     *   create: {
     *     // ... data to create a LancheCombo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LancheCombo we want to update
     *   }
     * })
     */
    upsert<T extends LancheComboUpsertArgs>(args: SelectSubset<T, LancheComboUpsertArgs<ExtArgs>>): Prisma__LancheComboClient<$Result.GetResult<Prisma.$LancheComboPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LancheCombos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LancheComboCountArgs} args - Arguments to filter LancheCombos to count.
     * @example
     * // Count the number of LancheCombos
     * const count = await prisma.lancheCombo.count({
     *   where: {
     *     // ... the filter for the LancheCombos we want to count
     *   }
     * })
    **/
    count<T extends LancheComboCountArgs>(
      args?: Subset<T, LancheComboCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LancheComboCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LancheCombo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LancheComboAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LancheComboAggregateArgs>(args: Subset<T, LancheComboAggregateArgs>): Prisma.PrismaPromise<GetLancheComboAggregateType<T>>

    /**
     * Group by LancheCombo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LancheComboGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LancheComboGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LancheComboGroupByArgs['orderBy'] }
        : { orderBy?: LancheComboGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LancheComboGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLancheComboGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LancheCombo model
   */
  readonly fields: LancheComboFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LancheCombo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LancheComboClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pedidos<T extends LancheCombo$pedidosArgs<ExtArgs> = {}>(args?: Subset<T, LancheCombo$pedidosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoLancheComboPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LancheCombo model
   */
  interface LancheComboFieldRefs {
    readonly id: FieldRef<"LancheCombo", 'Int'>
    readonly nome: FieldRef<"LancheCombo", 'String'>
    readonly descricao: FieldRef<"LancheCombo", 'String'>
    readonly adicional: FieldRef<"LancheCombo", 'Decimal'>
    readonly subtotal: FieldRef<"LancheCombo", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * LancheCombo findUnique
   */
  export type LancheComboFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LancheCombo
     */
    select?: LancheComboSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LancheCombo
     */
    omit?: LancheComboOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LancheComboInclude<ExtArgs> | null
    /**
     * Filter, which LancheCombo to fetch.
     */
    where: LancheComboWhereUniqueInput
  }

  /**
   * LancheCombo findUniqueOrThrow
   */
  export type LancheComboFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LancheCombo
     */
    select?: LancheComboSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LancheCombo
     */
    omit?: LancheComboOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LancheComboInclude<ExtArgs> | null
    /**
     * Filter, which LancheCombo to fetch.
     */
    where: LancheComboWhereUniqueInput
  }

  /**
   * LancheCombo findFirst
   */
  export type LancheComboFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LancheCombo
     */
    select?: LancheComboSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LancheCombo
     */
    omit?: LancheComboOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LancheComboInclude<ExtArgs> | null
    /**
     * Filter, which LancheCombo to fetch.
     */
    where?: LancheComboWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LancheCombos to fetch.
     */
    orderBy?: LancheComboOrderByWithRelationInput | LancheComboOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LancheCombos.
     */
    cursor?: LancheComboWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LancheCombos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LancheCombos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LancheCombos.
     */
    distinct?: LancheComboScalarFieldEnum | LancheComboScalarFieldEnum[]
  }

  /**
   * LancheCombo findFirstOrThrow
   */
  export type LancheComboFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LancheCombo
     */
    select?: LancheComboSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LancheCombo
     */
    omit?: LancheComboOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LancheComboInclude<ExtArgs> | null
    /**
     * Filter, which LancheCombo to fetch.
     */
    where?: LancheComboWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LancheCombos to fetch.
     */
    orderBy?: LancheComboOrderByWithRelationInput | LancheComboOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LancheCombos.
     */
    cursor?: LancheComboWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LancheCombos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LancheCombos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LancheCombos.
     */
    distinct?: LancheComboScalarFieldEnum | LancheComboScalarFieldEnum[]
  }

  /**
   * LancheCombo findMany
   */
  export type LancheComboFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LancheCombo
     */
    select?: LancheComboSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LancheCombo
     */
    omit?: LancheComboOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LancheComboInclude<ExtArgs> | null
    /**
     * Filter, which LancheCombos to fetch.
     */
    where?: LancheComboWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LancheCombos to fetch.
     */
    orderBy?: LancheComboOrderByWithRelationInput | LancheComboOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LancheCombos.
     */
    cursor?: LancheComboWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LancheCombos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LancheCombos.
     */
    skip?: number
    distinct?: LancheComboScalarFieldEnum | LancheComboScalarFieldEnum[]
  }

  /**
   * LancheCombo create
   */
  export type LancheComboCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LancheCombo
     */
    select?: LancheComboSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LancheCombo
     */
    omit?: LancheComboOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LancheComboInclude<ExtArgs> | null
    /**
     * The data needed to create a LancheCombo.
     */
    data: XOR<LancheComboCreateInput, LancheComboUncheckedCreateInput>
  }

  /**
   * LancheCombo createMany
   */
  export type LancheComboCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LancheCombos.
     */
    data: LancheComboCreateManyInput | LancheComboCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LancheCombo createManyAndReturn
   */
  export type LancheComboCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LancheCombo
     */
    select?: LancheComboSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LancheCombo
     */
    omit?: LancheComboOmit<ExtArgs> | null
    /**
     * The data used to create many LancheCombos.
     */
    data: LancheComboCreateManyInput | LancheComboCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LancheCombo update
   */
  export type LancheComboUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LancheCombo
     */
    select?: LancheComboSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LancheCombo
     */
    omit?: LancheComboOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LancheComboInclude<ExtArgs> | null
    /**
     * The data needed to update a LancheCombo.
     */
    data: XOR<LancheComboUpdateInput, LancheComboUncheckedUpdateInput>
    /**
     * Choose, which LancheCombo to update.
     */
    where: LancheComboWhereUniqueInput
  }

  /**
   * LancheCombo updateMany
   */
  export type LancheComboUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LancheCombos.
     */
    data: XOR<LancheComboUpdateManyMutationInput, LancheComboUncheckedUpdateManyInput>
    /**
     * Filter which LancheCombos to update
     */
    where?: LancheComboWhereInput
    /**
     * Limit how many LancheCombos to update.
     */
    limit?: number
  }

  /**
   * LancheCombo updateManyAndReturn
   */
  export type LancheComboUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LancheCombo
     */
    select?: LancheComboSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LancheCombo
     */
    omit?: LancheComboOmit<ExtArgs> | null
    /**
     * The data used to update LancheCombos.
     */
    data: XOR<LancheComboUpdateManyMutationInput, LancheComboUncheckedUpdateManyInput>
    /**
     * Filter which LancheCombos to update
     */
    where?: LancheComboWhereInput
    /**
     * Limit how many LancheCombos to update.
     */
    limit?: number
  }

  /**
   * LancheCombo upsert
   */
  export type LancheComboUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LancheCombo
     */
    select?: LancheComboSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LancheCombo
     */
    omit?: LancheComboOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LancheComboInclude<ExtArgs> | null
    /**
     * The filter to search for the LancheCombo to update in case it exists.
     */
    where: LancheComboWhereUniqueInput
    /**
     * In case the LancheCombo found by the `where` argument doesn't exist, create a new LancheCombo with this data.
     */
    create: XOR<LancheComboCreateInput, LancheComboUncheckedCreateInput>
    /**
     * In case the LancheCombo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LancheComboUpdateInput, LancheComboUncheckedUpdateInput>
  }

  /**
   * LancheCombo delete
   */
  export type LancheComboDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LancheCombo
     */
    select?: LancheComboSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LancheCombo
     */
    omit?: LancheComboOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LancheComboInclude<ExtArgs> | null
    /**
     * Filter which LancheCombo to delete.
     */
    where: LancheComboWhereUniqueInput
  }

  /**
   * LancheCombo deleteMany
   */
  export type LancheComboDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LancheCombos to delete
     */
    where?: LancheComboWhereInput
    /**
     * Limit how many LancheCombos to delete.
     */
    limit?: number
  }

  /**
   * LancheCombo.pedidos
   */
  export type LancheCombo$pedidosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoLancheCombo
     */
    select?: PedidoLancheComboSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoLancheCombo
     */
    omit?: PedidoLancheComboOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoLancheComboInclude<ExtArgs> | null
    where?: PedidoLancheComboWhereInput
    orderBy?: PedidoLancheComboOrderByWithRelationInput | PedidoLancheComboOrderByWithRelationInput[]
    cursor?: PedidoLancheComboWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PedidoLancheComboScalarFieldEnum | PedidoLancheComboScalarFieldEnum[]
  }

  /**
   * LancheCombo without action
   */
  export type LancheComboDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LancheCombo
     */
    select?: LancheComboSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LancheCombo
     */
    omit?: LancheComboOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LancheComboInclude<ExtArgs> | null
  }


  /**
   * Model Pedido
   */

  export type AggregatePedido = {
    _count: PedidoCountAggregateOutputType | null
    _avg: PedidoAvgAggregateOutputType | null
    _sum: PedidoSumAggregateOutputType | null
    _min: PedidoMinAggregateOutputType | null
    _max: PedidoMaxAggregateOutputType | null
  }

  export type PedidoAvgAggregateOutputType = {
    id: number | null
    total: Decimal | null
  }

  export type PedidoSumAggregateOutputType = {
    id: number | null
    total: Decimal | null
  }

  export type PedidoMinAggregateOutputType = {
    id: number | null
    cliente: string | null
    total: Decimal | null
  }

  export type PedidoMaxAggregateOutputType = {
    id: number | null
    cliente: string | null
    total: Decimal | null
  }

  export type PedidoCountAggregateOutputType = {
    id: number
    cliente: number
    total: number
    _all: number
  }


  export type PedidoAvgAggregateInputType = {
    id?: true
    total?: true
  }

  export type PedidoSumAggregateInputType = {
    id?: true
    total?: true
  }

  export type PedidoMinAggregateInputType = {
    id?: true
    cliente?: true
    total?: true
  }

  export type PedidoMaxAggregateInputType = {
    id?: true
    cliente?: true
    total?: true
  }

  export type PedidoCountAggregateInputType = {
    id?: true
    cliente?: true
    total?: true
    _all?: true
  }

  export type PedidoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pedido to aggregate.
     */
    where?: PedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pedidos to fetch.
     */
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pedidos
    **/
    _count?: true | PedidoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PedidoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PedidoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PedidoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PedidoMaxAggregateInputType
  }

  export type GetPedidoAggregateType<T extends PedidoAggregateArgs> = {
        [P in keyof T & keyof AggregatePedido]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePedido[P]>
      : GetScalarType<T[P], AggregatePedido[P]>
  }




  export type PedidoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PedidoWhereInput
    orderBy?: PedidoOrderByWithAggregationInput | PedidoOrderByWithAggregationInput[]
    by: PedidoScalarFieldEnum[] | PedidoScalarFieldEnum
    having?: PedidoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PedidoCountAggregateInputType | true
    _avg?: PedidoAvgAggregateInputType
    _sum?: PedidoSumAggregateInputType
    _min?: PedidoMinAggregateInputType
    _max?: PedidoMaxAggregateInputType
  }

  export type PedidoGroupByOutputType = {
    id: number
    cliente: string
    total: Decimal
    _count: PedidoCountAggregateOutputType | null
    _avg: PedidoAvgAggregateOutputType | null
    _sum: PedidoSumAggregateOutputType | null
    _min: PedidoMinAggregateOutputType | null
    _max: PedidoMaxAggregateOutputType | null
  }

  type GetPedidoGroupByPayload<T extends PedidoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PedidoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PedidoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PedidoGroupByOutputType[P]>
            : GetScalarType<T[P], PedidoGroupByOutputType[P]>
        }
      >
    >


  export type PedidoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cliente?: boolean
    total?: boolean
    ingressos?: boolean | Pedido$ingressosArgs<ExtArgs>
    lancheCombos?: boolean | Pedido$lancheCombosArgs<ExtArgs>
    _count?: boolean | PedidoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pedido"]>

  export type PedidoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cliente?: boolean
    total?: boolean
  }, ExtArgs["result"]["pedido"]>

  export type PedidoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cliente?: boolean
    total?: boolean
  }, ExtArgs["result"]["pedido"]>

  export type PedidoSelectScalar = {
    id?: boolean
    cliente?: boolean
    total?: boolean
  }

  export type PedidoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cliente" | "total", ExtArgs["result"]["pedido"]>
  export type PedidoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ingressos?: boolean | Pedido$ingressosArgs<ExtArgs>
    lancheCombos?: boolean | Pedido$lancheCombosArgs<ExtArgs>
    _count?: boolean | PedidoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PedidoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PedidoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PedidoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pedido"
    objects: {
      ingressos: Prisma.$PedidoIngressoPayload<ExtArgs>[]
      lancheCombos: Prisma.$PedidoLancheComboPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cliente: string
      total: Prisma.Decimal
    }, ExtArgs["result"]["pedido"]>
    composites: {}
  }

  type PedidoGetPayload<S extends boolean | null | undefined | PedidoDefaultArgs> = $Result.GetResult<Prisma.$PedidoPayload, S>

  type PedidoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PedidoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PedidoCountAggregateInputType | true
    }

  export interface PedidoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pedido'], meta: { name: 'Pedido' } }
    /**
     * Find zero or one Pedido that matches the filter.
     * @param {PedidoFindUniqueArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PedidoFindUniqueArgs>(args: SelectSubset<T, PedidoFindUniqueArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pedido that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PedidoFindUniqueOrThrowArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PedidoFindUniqueOrThrowArgs>(args: SelectSubset<T, PedidoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pedido that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoFindFirstArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PedidoFindFirstArgs>(args?: SelectSubset<T, PedidoFindFirstArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pedido that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoFindFirstOrThrowArgs} args - Arguments to find a Pedido
     * @example
     * // Get one Pedido
     * const pedido = await prisma.pedido.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PedidoFindFirstOrThrowArgs>(args?: SelectSubset<T, PedidoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pedidos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pedidos
     * const pedidos = await prisma.pedido.findMany()
     * 
     * // Get first 10 Pedidos
     * const pedidos = await prisma.pedido.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pedidoWithIdOnly = await prisma.pedido.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PedidoFindManyArgs>(args?: SelectSubset<T, PedidoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pedido.
     * @param {PedidoCreateArgs} args - Arguments to create a Pedido.
     * @example
     * // Create one Pedido
     * const Pedido = await prisma.pedido.create({
     *   data: {
     *     // ... data to create a Pedido
     *   }
     * })
     * 
     */
    create<T extends PedidoCreateArgs>(args: SelectSubset<T, PedidoCreateArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pedidos.
     * @param {PedidoCreateManyArgs} args - Arguments to create many Pedidos.
     * @example
     * // Create many Pedidos
     * const pedido = await prisma.pedido.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PedidoCreateManyArgs>(args?: SelectSubset<T, PedidoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pedidos and returns the data saved in the database.
     * @param {PedidoCreateManyAndReturnArgs} args - Arguments to create many Pedidos.
     * @example
     * // Create many Pedidos
     * const pedido = await prisma.pedido.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pedidos and only return the `id`
     * const pedidoWithIdOnly = await prisma.pedido.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PedidoCreateManyAndReturnArgs>(args?: SelectSubset<T, PedidoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pedido.
     * @param {PedidoDeleteArgs} args - Arguments to delete one Pedido.
     * @example
     * // Delete one Pedido
     * const Pedido = await prisma.pedido.delete({
     *   where: {
     *     // ... filter to delete one Pedido
     *   }
     * })
     * 
     */
    delete<T extends PedidoDeleteArgs>(args: SelectSubset<T, PedidoDeleteArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pedido.
     * @param {PedidoUpdateArgs} args - Arguments to update one Pedido.
     * @example
     * // Update one Pedido
     * const pedido = await prisma.pedido.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PedidoUpdateArgs>(args: SelectSubset<T, PedidoUpdateArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pedidos.
     * @param {PedidoDeleteManyArgs} args - Arguments to filter Pedidos to delete.
     * @example
     * // Delete a few Pedidos
     * const { count } = await prisma.pedido.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PedidoDeleteManyArgs>(args?: SelectSubset<T, PedidoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pedidos
     * const pedido = await prisma.pedido.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PedidoUpdateManyArgs>(args: SelectSubset<T, PedidoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pedidos and returns the data updated in the database.
     * @param {PedidoUpdateManyAndReturnArgs} args - Arguments to update many Pedidos.
     * @example
     * // Update many Pedidos
     * const pedido = await prisma.pedido.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pedidos and only return the `id`
     * const pedidoWithIdOnly = await prisma.pedido.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PedidoUpdateManyAndReturnArgs>(args: SelectSubset<T, PedidoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pedido.
     * @param {PedidoUpsertArgs} args - Arguments to update or create a Pedido.
     * @example
     * // Update or create a Pedido
     * const pedido = await prisma.pedido.upsert({
     *   create: {
     *     // ... data to create a Pedido
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pedido we want to update
     *   }
     * })
     */
    upsert<T extends PedidoUpsertArgs>(args: SelectSubset<T, PedidoUpsertArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoCountArgs} args - Arguments to filter Pedidos to count.
     * @example
     * // Count the number of Pedidos
     * const count = await prisma.pedido.count({
     *   where: {
     *     // ... the filter for the Pedidos we want to count
     *   }
     * })
    **/
    count<T extends PedidoCountArgs>(
      args?: Subset<T, PedidoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PedidoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PedidoAggregateArgs>(args: Subset<T, PedidoAggregateArgs>): Prisma.PrismaPromise<GetPedidoAggregateType<T>>

    /**
     * Group by Pedido.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PedidoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PedidoGroupByArgs['orderBy'] }
        : { orderBy?: PedidoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PedidoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPedidoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pedido model
   */
  readonly fields: PedidoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pedido.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PedidoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ingressos<T extends Pedido$ingressosArgs<ExtArgs> = {}>(args?: Subset<T, Pedido$ingressosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoIngressoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    lancheCombos<T extends Pedido$lancheCombosArgs<ExtArgs> = {}>(args?: Subset<T, Pedido$lancheCombosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoLancheComboPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Pedido model
   */
  interface PedidoFieldRefs {
    readonly id: FieldRef<"Pedido", 'Int'>
    readonly cliente: FieldRef<"Pedido", 'String'>
    readonly total: FieldRef<"Pedido", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * Pedido findUnique
   */
  export type PedidoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedido to fetch.
     */
    where: PedidoWhereUniqueInput
  }

  /**
   * Pedido findUniqueOrThrow
   */
  export type PedidoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedido to fetch.
     */
    where: PedidoWhereUniqueInput
  }

  /**
   * Pedido findFirst
   */
  export type PedidoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedido to fetch.
     */
    where?: PedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pedidos to fetch.
     */
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pedidos.
     */
    cursor?: PedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pedidos.
     */
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * Pedido findFirstOrThrow
   */
  export type PedidoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedido to fetch.
     */
    where?: PedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pedidos to fetch.
     */
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pedidos.
     */
    cursor?: PedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pedidos.
     */
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * Pedido findMany
   */
  export type PedidoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter, which Pedidos to fetch.
     */
    where?: PedidoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pedidos to fetch.
     */
    orderBy?: PedidoOrderByWithRelationInput | PedidoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pedidos.
     */
    cursor?: PedidoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pedidos.
     */
    skip?: number
    distinct?: PedidoScalarFieldEnum | PedidoScalarFieldEnum[]
  }

  /**
   * Pedido create
   */
  export type PedidoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * The data needed to create a Pedido.
     */
    data: XOR<PedidoCreateInput, PedidoUncheckedCreateInput>
  }

  /**
   * Pedido createMany
   */
  export type PedidoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pedidos.
     */
    data: PedidoCreateManyInput | PedidoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pedido createManyAndReturn
   */
  export type PedidoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * The data used to create many Pedidos.
     */
    data: PedidoCreateManyInput | PedidoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pedido update
   */
  export type PedidoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * The data needed to update a Pedido.
     */
    data: XOR<PedidoUpdateInput, PedidoUncheckedUpdateInput>
    /**
     * Choose, which Pedido to update.
     */
    where: PedidoWhereUniqueInput
  }

  /**
   * Pedido updateMany
   */
  export type PedidoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pedidos.
     */
    data: XOR<PedidoUpdateManyMutationInput, PedidoUncheckedUpdateManyInput>
    /**
     * Filter which Pedidos to update
     */
    where?: PedidoWhereInput
    /**
     * Limit how many Pedidos to update.
     */
    limit?: number
  }

  /**
   * Pedido updateManyAndReturn
   */
  export type PedidoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * The data used to update Pedidos.
     */
    data: XOR<PedidoUpdateManyMutationInput, PedidoUncheckedUpdateManyInput>
    /**
     * Filter which Pedidos to update
     */
    where?: PedidoWhereInput
    /**
     * Limit how many Pedidos to update.
     */
    limit?: number
  }

  /**
   * Pedido upsert
   */
  export type PedidoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * The filter to search for the Pedido to update in case it exists.
     */
    where: PedidoWhereUniqueInput
    /**
     * In case the Pedido found by the `where` argument doesn't exist, create a new Pedido with this data.
     */
    create: XOR<PedidoCreateInput, PedidoUncheckedCreateInput>
    /**
     * In case the Pedido was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PedidoUpdateInput, PedidoUncheckedUpdateInput>
  }

  /**
   * Pedido delete
   */
  export type PedidoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
    /**
     * Filter which Pedido to delete.
     */
    where: PedidoWhereUniqueInput
  }

  /**
   * Pedido deleteMany
   */
  export type PedidoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pedidos to delete
     */
    where?: PedidoWhereInput
    /**
     * Limit how many Pedidos to delete.
     */
    limit?: number
  }

  /**
   * Pedido.ingressos
   */
  export type Pedido$ingressosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoIngresso
     */
    select?: PedidoIngressoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoIngresso
     */
    omit?: PedidoIngressoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoIngressoInclude<ExtArgs> | null
    where?: PedidoIngressoWhereInput
    orderBy?: PedidoIngressoOrderByWithRelationInput | PedidoIngressoOrderByWithRelationInput[]
    cursor?: PedidoIngressoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PedidoIngressoScalarFieldEnum | PedidoIngressoScalarFieldEnum[]
  }

  /**
   * Pedido.lancheCombos
   */
  export type Pedido$lancheCombosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoLancheCombo
     */
    select?: PedidoLancheComboSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoLancheCombo
     */
    omit?: PedidoLancheComboOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoLancheComboInclude<ExtArgs> | null
    where?: PedidoLancheComboWhereInput
    orderBy?: PedidoLancheComboOrderByWithRelationInput | PedidoLancheComboOrderByWithRelationInput[]
    cursor?: PedidoLancheComboWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PedidoLancheComboScalarFieldEnum | PedidoLancheComboScalarFieldEnum[]
  }

  /**
   * Pedido without action
   */
  export type PedidoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pedido
     */
    select?: PedidoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pedido
     */
    omit?: PedidoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoInclude<ExtArgs> | null
  }


  /**
   * Model PedidoIngresso
   */

  export type AggregatePedidoIngresso = {
    _count: PedidoIngressoCountAggregateOutputType | null
    _avg: PedidoIngressoAvgAggregateOutputType | null
    _sum: PedidoIngressoSumAggregateOutputType | null
    _min: PedidoIngressoMinAggregateOutputType | null
    _max: PedidoIngressoMaxAggregateOutputType | null
  }

  export type PedidoIngressoAvgAggregateOutputType = {
    id: number | null
    pedidoId: number | null
    ingressoId: number | null
  }

  export type PedidoIngressoSumAggregateOutputType = {
    id: number | null
    pedidoId: number | null
    ingressoId: number | null
  }

  export type PedidoIngressoMinAggregateOutputType = {
    id: number | null
    pedidoId: number | null
    ingressoId: number | null
  }

  export type PedidoIngressoMaxAggregateOutputType = {
    id: number | null
    pedidoId: number | null
    ingressoId: number | null
  }

  export type PedidoIngressoCountAggregateOutputType = {
    id: number
    pedidoId: number
    ingressoId: number
    _all: number
  }


  export type PedidoIngressoAvgAggregateInputType = {
    id?: true
    pedidoId?: true
    ingressoId?: true
  }

  export type PedidoIngressoSumAggregateInputType = {
    id?: true
    pedidoId?: true
    ingressoId?: true
  }

  export type PedidoIngressoMinAggregateInputType = {
    id?: true
    pedidoId?: true
    ingressoId?: true
  }

  export type PedidoIngressoMaxAggregateInputType = {
    id?: true
    pedidoId?: true
    ingressoId?: true
  }

  export type PedidoIngressoCountAggregateInputType = {
    id?: true
    pedidoId?: true
    ingressoId?: true
    _all?: true
  }

  export type PedidoIngressoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PedidoIngresso to aggregate.
     */
    where?: PedidoIngressoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PedidoIngressos to fetch.
     */
    orderBy?: PedidoIngressoOrderByWithRelationInput | PedidoIngressoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PedidoIngressoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PedidoIngressos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PedidoIngressos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PedidoIngressos
    **/
    _count?: true | PedidoIngressoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PedidoIngressoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PedidoIngressoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PedidoIngressoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PedidoIngressoMaxAggregateInputType
  }

  export type GetPedidoIngressoAggregateType<T extends PedidoIngressoAggregateArgs> = {
        [P in keyof T & keyof AggregatePedidoIngresso]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePedidoIngresso[P]>
      : GetScalarType<T[P], AggregatePedidoIngresso[P]>
  }




  export type PedidoIngressoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PedidoIngressoWhereInput
    orderBy?: PedidoIngressoOrderByWithAggregationInput | PedidoIngressoOrderByWithAggregationInput[]
    by: PedidoIngressoScalarFieldEnum[] | PedidoIngressoScalarFieldEnum
    having?: PedidoIngressoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PedidoIngressoCountAggregateInputType | true
    _avg?: PedidoIngressoAvgAggregateInputType
    _sum?: PedidoIngressoSumAggregateInputType
    _min?: PedidoIngressoMinAggregateInputType
    _max?: PedidoIngressoMaxAggregateInputType
  }

  export type PedidoIngressoGroupByOutputType = {
    id: number
    pedidoId: number
    ingressoId: number
    _count: PedidoIngressoCountAggregateOutputType | null
    _avg: PedidoIngressoAvgAggregateOutputType | null
    _sum: PedidoIngressoSumAggregateOutputType | null
    _min: PedidoIngressoMinAggregateOutputType | null
    _max: PedidoIngressoMaxAggregateOutputType | null
  }

  type GetPedidoIngressoGroupByPayload<T extends PedidoIngressoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PedidoIngressoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PedidoIngressoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PedidoIngressoGroupByOutputType[P]>
            : GetScalarType<T[P], PedidoIngressoGroupByOutputType[P]>
        }
      >
    >


  export type PedidoIngressoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pedidoId?: boolean
    ingressoId?: boolean
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
    ingresso?: boolean | IngressoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pedidoIngresso"]>

  export type PedidoIngressoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pedidoId?: boolean
    ingressoId?: boolean
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
    ingresso?: boolean | IngressoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pedidoIngresso"]>

  export type PedidoIngressoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pedidoId?: boolean
    ingressoId?: boolean
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
    ingresso?: boolean | IngressoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pedidoIngresso"]>

  export type PedidoIngressoSelectScalar = {
    id?: boolean
    pedidoId?: boolean
    ingressoId?: boolean
  }

  export type PedidoIngressoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pedidoId" | "ingressoId", ExtArgs["result"]["pedidoIngresso"]>
  export type PedidoIngressoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
    ingresso?: boolean | IngressoDefaultArgs<ExtArgs>
  }
  export type PedidoIngressoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
    ingresso?: boolean | IngressoDefaultArgs<ExtArgs>
  }
  export type PedidoIngressoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
    ingresso?: boolean | IngressoDefaultArgs<ExtArgs>
  }

  export type $PedidoIngressoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PedidoIngresso"
    objects: {
      pedido: Prisma.$PedidoPayload<ExtArgs>
      ingresso: Prisma.$IngressoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      pedidoId: number
      ingressoId: number
    }, ExtArgs["result"]["pedidoIngresso"]>
    composites: {}
  }

  type PedidoIngressoGetPayload<S extends boolean | null | undefined | PedidoIngressoDefaultArgs> = $Result.GetResult<Prisma.$PedidoIngressoPayload, S>

  type PedidoIngressoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PedidoIngressoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PedidoIngressoCountAggregateInputType | true
    }

  export interface PedidoIngressoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PedidoIngresso'], meta: { name: 'PedidoIngresso' } }
    /**
     * Find zero or one PedidoIngresso that matches the filter.
     * @param {PedidoIngressoFindUniqueArgs} args - Arguments to find a PedidoIngresso
     * @example
     * // Get one PedidoIngresso
     * const pedidoIngresso = await prisma.pedidoIngresso.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PedidoIngressoFindUniqueArgs>(args: SelectSubset<T, PedidoIngressoFindUniqueArgs<ExtArgs>>): Prisma__PedidoIngressoClient<$Result.GetResult<Prisma.$PedidoIngressoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PedidoIngresso that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PedidoIngressoFindUniqueOrThrowArgs} args - Arguments to find a PedidoIngresso
     * @example
     * // Get one PedidoIngresso
     * const pedidoIngresso = await prisma.pedidoIngresso.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PedidoIngressoFindUniqueOrThrowArgs>(args: SelectSubset<T, PedidoIngressoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PedidoIngressoClient<$Result.GetResult<Prisma.$PedidoIngressoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PedidoIngresso that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoIngressoFindFirstArgs} args - Arguments to find a PedidoIngresso
     * @example
     * // Get one PedidoIngresso
     * const pedidoIngresso = await prisma.pedidoIngresso.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PedidoIngressoFindFirstArgs>(args?: SelectSubset<T, PedidoIngressoFindFirstArgs<ExtArgs>>): Prisma__PedidoIngressoClient<$Result.GetResult<Prisma.$PedidoIngressoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PedidoIngresso that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoIngressoFindFirstOrThrowArgs} args - Arguments to find a PedidoIngresso
     * @example
     * // Get one PedidoIngresso
     * const pedidoIngresso = await prisma.pedidoIngresso.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PedidoIngressoFindFirstOrThrowArgs>(args?: SelectSubset<T, PedidoIngressoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PedidoIngressoClient<$Result.GetResult<Prisma.$PedidoIngressoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PedidoIngressos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoIngressoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PedidoIngressos
     * const pedidoIngressos = await prisma.pedidoIngresso.findMany()
     * 
     * // Get first 10 PedidoIngressos
     * const pedidoIngressos = await prisma.pedidoIngresso.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pedidoIngressoWithIdOnly = await prisma.pedidoIngresso.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PedidoIngressoFindManyArgs>(args?: SelectSubset<T, PedidoIngressoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoIngressoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PedidoIngresso.
     * @param {PedidoIngressoCreateArgs} args - Arguments to create a PedidoIngresso.
     * @example
     * // Create one PedidoIngresso
     * const PedidoIngresso = await prisma.pedidoIngresso.create({
     *   data: {
     *     // ... data to create a PedidoIngresso
     *   }
     * })
     * 
     */
    create<T extends PedidoIngressoCreateArgs>(args: SelectSubset<T, PedidoIngressoCreateArgs<ExtArgs>>): Prisma__PedidoIngressoClient<$Result.GetResult<Prisma.$PedidoIngressoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PedidoIngressos.
     * @param {PedidoIngressoCreateManyArgs} args - Arguments to create many PedidoIngressos.
     * @example
     * // Create many PedidoIngressos
     * const pedidoIngresso = await prisma.pedidoIngresso.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PedidoIngressoCreateManyArgs>(args?: SelectSubset<T, PedidoIngressoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PedidoIngressos and returns the data saved in the database.
     * @param {PedidoIngressoCreateManyAndReturnArgs} args - Arguments to create many PedidoIngressos.
     * @example
     * // Create many PedidoIngressos
     * const pedidoIngresso = await prisma.pedidoIngresso.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PedidoIngressos and only return the `id`
     * const pedidoIngressoWithIdOnly = await prisma.pedidoIngresso.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PedidoIngressoCreateManyAndReturnArgs>(args?: SelectSubset<T, PedidoIngressoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoIngressoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PedidoIngresso.
     * @param {PedidoIngressoDeleteArgs} args - Arguments to delete one PedidoIngresso.
     * @example
     * // Delete one PedidoIngresso
     * const PedidoIngresso = await prisma.pedidoIngresso.delete({
     *   where: {
     *     // ... filter to delete one PedidoIngresso
     *   }
     * })
     * 
     */
    delete<T extends PedidoIngressoDeleteArgs>(args: SelectSubset<T, PedidoIngressoDeleteArgs<ExtArgs>>): Prisma__PedidoIngressoClient<$Result.GetResult<Prisma.$PedidoIngressoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PedidoIngresso.
     * @param {PedidoIngressoUpdateArgs} args - Arguments to update one PedidoIngresso.
     * @example
     * // Update one PedidoIngresso
     * const pedidoIngresso = await prisma.pedidoIngresso.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PedidoIngressoUpdateArgs>(args: SelectSubset<T, PedidoIngressoUpdateArgs<ExtArgs>>): Prisma__PedidoIngressoClient<$Result.GetResult<Prisma.$PedidoIngressoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PedidoIngressos.
     * @param {PedidoIngressoDeleteManyArgs} args - Arguments to filter PedidoIngressos to delete.
     * @example
     * // Delete a few PedidoIngressos
     * const { count } = await prisma.pedidoIngresso.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PedidoIngressoDeleteManyArgs>(args?: SelectSubset<T, PedidoIngressoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PedidoIngressos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoIngressoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PedidoIngressos
     * const pedidoIngresso = await prisma.pedidoIngresso.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PedidoIngressoUpdateManyArgs>(args: SelectSubset<T, PedidoIngressoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PedidoIngressos and returns the data updated in the database.
     * @param {PedidoIngressoUpdateManyAndReturnArgs} args - Arguments to update many PedidoIngressos.
     * @example
     * // Update many PedidoIngressos
     * const pedidoIngresso = await prisma.pedidoIngresso.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PedidoIngressos and only return the `id`
     * const pedidoIngressoWithIdOnly = await prisma.pedidoIngresso.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PedidoIngressoUpdateManyAndReturnArgs>(args: SelectSubset<T, PedidoIngressoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoIngressoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PedidoIngresso.
     * @param {PedidoIngressoUpsertArgs} args - Arguments to update or create a PedidoIngresso.
     * @example
     * // Update or create a PedidoIngresso
     * const pedidoIngresso = await prisma.pedidoIngresso.upsert({
     *   create: {
     *     // ... data to create a PedidoIngresso
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PedidoIngresso we want to update
     *   }
     * })
     */
    upsert<T extends PedidoIngressoUpsertArgs>(args: SelectSubset<T, PedidoIngressoUpsertArgs<ExtArgs>>): Prisma__PedidoIngressoClient<$Result.GetResult<Prisma.$PedidoIngressoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PedidoIngressos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoIngressoCountArgs} args - Arguments to filter PedidoIngressos to count.
     * @example
     * // Count the number of PedidoIngressos
     * const count = await prisma.pedidoIngresso.count({
     *   where: {
     *     // ... the filter for the PedidoIngressos we want to count
     *   }
     * })
    **/
    count<T extends PedidoIngressoCountArgs>(
      args?: Subset<T, PedidoIngressoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PedidoIngressoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PedidoIngresso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoIngressoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PedidoIngressoAggregateArgs>(args: Subset<T, PedidoIngressoAggregateArgs>): Prisma.PrismaPromise<GetPedidoIngressoAggregateType<T>>

    /**
     * Group by PedidoIngresso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoIngressoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PedidoIngressoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PedidoIngressoGroupByArgs['orderBy'] }
        : { orderBy?: PedidoIngressoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PedidoIngressoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPedidoIngressoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PedidoIngresso model
   */
  readonly fields: PedidoIngressoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PedidoIngresso.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PedidoIngressoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pedido<T extends PedidoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PedidoDefaultArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ingresso<T extends IngressoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, IngressoDefaultArgs<ExtArgs>>): Prisma__IngressoClient<$Result.GetResult<Prisma.$IngressoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PedidoIngresso model
   */
  interface PedidoIngressoFieldRefs {
    readonly id: FieldRef<"PedidoIngresso", 'Int'>
    readonly pedidoId: FieldRef<"PedidoIngresso", 'Int'>
    readonly ingressoId: FieldRef<"PedidoIngresso", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PedidoIngresso findUnique
   */
  export type PedidoIngressoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoIngresso
     */
    select?: PedidoIngressoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoIngresso
     */
    omit?: PedidoIngressoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoIngressoInclude<ExtArgs> | null
    /**
     * Filter, which PedidoIngresso to fetch.
     */
    where: PedidoIngressoWhereUniqueInput
  }

  /**
   * PedidoIngresso findUniqueOrThrow
   */
  export type PedidoIngressoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoIngresso
     */
    select?: PedidoIngressoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoIngresso
     */
    omit?: PedidoIngressoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoIngressoInclude<ExtArgs> | null
    /**
     * Filter, which PedidoIngresso to fetch.
     */
    where: PedidoIngressoWhereUniqueInput
  }

  /**
   * PedidoIngresso findFirst
   */
  export type PedidoIngressoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoIngresso
     */
    select?: PedidoIngressoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoIngresso
     */
    omit?: PedidoIngressoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoIngressoInclude<ExtArgs> | null
    /**
     * Filter, which PedidoIngresso to fetch.
     */
    where?: PedidoIngressoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PedidoIngressos to fetch.
     */
    orderBy?: PedidoIngressoOrderByWithRelationInput | PedidoIngressoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PedidoIngressos.
     */
    cursor?: PedidoIngressoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PedidoIngressos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PedidoIngressos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PedidoIngressos.
     */
    distinct?: PedidoIngressoScalarFieldEnum | PedidoIngressoScalarFieldEnum[]
  }

  /**
   * PedidoIngresso findFirstOrThrow
   */
  export type PedidoIngressoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoIngresso
     */
    select?: PedidoIngressoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoIngresso
     */
    omit?: PedidoIngressoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoIngressoInclude<ExtArgs> | null
    /**
     * Filter, which PedidoIngresso to fetch.
     */
    where?: PedidoIngressoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PedidoIngressos to fetch.
     */
    orderBy?: PedidoIngressoOrderByWithRelationInput | PedidoIngressoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PedidoIngressos.
     */
    cursor?: PedidoIngressoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PedidoIngressos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PedidoIngressos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PedidoIngressos.
     */
    distinct?: PedidoIngressoScalarFieldEnum | PedidoIngressoScalarFieldEnum[]
  }

  /**
   * PedidoIngresso findMany
   */
  export type PedidoIngressoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoIngresso
     */
    select?: PedidoIngressoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoIngresso
     */
    omit?: PedidoIngressoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoIngressoInclude<ExtArgs> | null
    /**
     * Filter, which PedidoIngressos to fetch.
     */
    where?: PedidoIngressoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PedidoIngressos to fetch.
     */
    orderBy?: PedidoIngressoOrderByWithRelationInput | PedidoIngressoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PedidoIngressos.
     */
    cursor?: PedidoIngressoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PedidoIngressos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PedidoIngressos.
     */
    skip?: number
    distinct?: PedidoIngressoScalarFieldEnum | PedidoIngressoScalarFieldEnum[]
  }

  /**
   * PedidoIngresso create
   */
  export type PedidoIngressoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoIngresso
     */
    select?: PedidoIngressoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoIngresso
     */
    omit?: PedidoIngressoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoIngressoInclude<ExtArgs> | null
    /**
     * The data needed to create a PedidoIngresso.
     */
    data: XOR<PedidoIngressoCreateInput, PedidoIngressoUncheckedCreateInput>
  }

  /**
   * PedidoIngresso createMany
   */
  export type PedidoIngressoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PedidoIngressos.
     */
    data: PedidoIngressoCreateManyInput | PedidoIngressoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PedidoIngresso createManyAndReturn
   */
  export type PedidoIngressoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoIngresso
     */
    select?: PedidoIngressoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoIngresso
     */
    omit?: PedidoIngressoOmit<ExtArgs> | null
    /**
     * The data used to create many PedidoIngressos.
     */
    data: PedidoIngressoCreateManyInput | PedidoIngressoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoIngressoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PedidoIngresso update
   */
  export type PedidoIngressoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoIngresso
     */
    select?: PedidoIngressoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoIngresso
     */
    omit?: PedidoIngressoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoIngressoInclude<ExtArgs> | null
    /**
     * The data needed to update a PedidoIngresso.
     */
    data: XOR<PedidoIngressoUpdateInput, PedidoIngressoUncheckedUpdateInput>
    /**
     * Choose, which PedidoIngresso to update.
     */
    where: PedidoIngressoWhereUniqueInput
  }

  /**
   * PedidoIngresso updateMany
   */
  export type PedidoIngressoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PedidoIngressos.
     */
    data: XOR<PedidoIngressoUpdateManyMutationInput, PedidoIngressoUncheckedUpdateManyInput>
    /**
     * Filter which PedidoIngressos to update
     */
    where?: PedidoIngressoWhereInput
    /**
     * Limit how many PedidoIngressos to update.
     */
    limit?: number
  }

  /**
   * PedidoIngresso updateManyAndReturn
   */
  export type PedidoIngressoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoIngresso
     */
    select?: PedidoIngressoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoIngresso
     */
    omit?: PedidoIngressoOmit<ExtArgs> | null
    /**
     * The data used to update PedidoIngressos.
     */
    data: XOR<PedidoIngressoUpdateManyMutationInput, PedidoIngressoUncheckedUpdateManyInput>
    /**
     * Filter which PedidoIngressos to update
     */
    where?: PedidoIngressoWhereInput
    /**
     * Limit how many PedidoIngressos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoIngressoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PedidoIngresso upsert
   */
  export type PedidoIngressoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoIngresso
     */
    select?: PedidoIngressoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoIngresso
     */
    omit?: PedidoIngressoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoIngressoInclude<ExtArgs> | null
    /**
     * The filter to search for the PedidoIngresso to update in case it exists.
     */
    where: PedidoIngressoWhereUniqueInput
    /**
     * In case the PedidoIngresso found by the `where` argument doesn't exist, create a new PedidoIngresso with this data.
     */
    create: XOR<PedidoIngressoCreateInput, PedidoIngressoUncheckedCreateInput>
    /**
     * In case the PedidoIngresso was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PedidoIngressoUpdateInput, PedidoIngressoUncheckedUpdateInput>
  }

  /**
   * PedidoIngresso delete
   */
  export type PedidoIngressoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoIngresso
     */
    select?: PedidoIngressoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoIngresso
     */
    omit?: PedidoIngressoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoIngressoInclude<ExtArgs> | null
    /**
     * Filter which PedidoIngresso to delete.
     */
    where: PedidoIngressoWhereUniqueInput
  }

  /**
   * PedidoIngresso deleteMany
   */
  export type PedidoIngressoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PedidoIngressos to delete
     */
    where?: PedidoIngressoWhereInput
    /**
     * Limit how many PedidoIngressos to delete.
     */
    limit?: number
  }

  /**
   * PedidoIngresso without action
   */
  export type PedidoIngressoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoIngresso
     */
    select?: PedidoIngressoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoIngresso
     */
    omit?: PedidoIngressoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoIngressoInclude<ExtArgs> | null
  }


  /**
   * Model PedidoLancheCombo
   */

  export type AggregatePedidoLancheCombo = {
    _count: PedidoLancheComboCountAggregateOutputType | null
    _avg: PedidoLancheComboAvgAggregateOutputType | null
    _sum: PedidoLancheComboSumAggregateOutputType | null
    _min: PedidoLancheComboMinAggregateOutputType | null
    _max: PedidoLancheComboMaxAggregateOutputType | null
  }

  export type PedidoLancheComboAvgAggregateOutputType = {
    id: number | null
    pedidoId: number | null
    lancheComboId: number | null
  }

  export type PedidoLancheComboSumAggregateOutputType = {
    id: number | null
    pedidoId: number | null
    lancheComboId: number | null
  }

  export type PedidoLancheComboMinAggregateOutputType = {
    id: number | null
    pedidoId: number | null
    lancheComboId: number | null
  }

  export type PedidoLancheComboMaxAggregateOutputType = {
    id: number | null
    pedidoId: number | null
    lancheComboId: number | null
  }

  export type PedidoLancheComboCountAggregateOutputType = {
    id: number
    pedidoId: number
    lancheComboId: number
    _all: number
  }


  export type PedidoLancheComboAvgAggregateInputType = {
    id?: true
    pedidoId?: true
    lancheComboId?: true
  }

  export type PedidoLancheComboSumAggregateInputType = {
    id?: true
    pedidoId?: true
    lancheComboId?: true
  }

  export type PedidoLancheComboMinAggregateInputType = {
    id?: true
    pedidoId?: true
    lancheComboId?: true
  }

  export type PedidoLancheComboMaxAggregateInputType = {
    id?: true
    pedidoId?: true
    lancheComboId?: true
  }

  export type PedidoLancheComboCountAggregateInputType = {
    id?: true
    pedidoId?: true
    lancheComboId?: true
    _all?: true
  }

  export type PedidoLancheComboAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PedidoLancheCombo to aggregate.
     */
    where?: PedidoLancheComboWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PedidoLancheCombos to fetch.
     */
    orderBy?: PedidoLancheComboOrderByWithRelationInput | PedidoLancheComboOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PedidoLancheComboWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PedidoLancheCombos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PedidoLancheCombos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PedidoLancheCombos
    **/
    _count?: true | PedidoLancheComboCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PedidoLancheComboAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PedidoLancheComboSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PedidoLancheComboMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PedidoLancheComboMaxAggregateInputType
  }

  export type GetPedidoLancheComboAggregateType<T extends PedidoLancheComboAggregateArgs> = {
        [P in keyof T & keyof AggregatePedidoLancheCombo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePedidoLancheCombo[P]>
      : GetScalarType<T[P], AggregatePedidoLancheCombo[P]>
  }




  export type PedidoLancheComboGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PedidoLancheComboWhereInput
    orderBy?: PedidoLancheComboOrderByWithAggregationInput | PedidoLancheComboOrderByWithAggregationInput[]
    by: PedidoLancheComboScalarFieldEnum[] | PedidoLancheComboScalarFieldEnum
    having?: PedidoLancheComboScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PedidoLancheComboCountAggregateInputType | true
    _avg?: PedidoLancheComboAvgAggregateInputType
    _sum?: PedidoLancheComboSumAggregateInputType
    _min?: PedidoLancheComboMinAggregateInputType
    _max?: PedidoLancheComboMaxAggregateInputType
  }

  export type PedidoLancheComboGroupByOutputType = {
    id: number
    pedidoId: number
    lancheComboId: number
    _count: PedidoLancheComboCountAggregateOutputType | null
    _avg: PedidoLancheComboAvgAggregateOutputType | null
    _sum: PedidoLancheComboSumAggregateOutputType | null
    _min: PedidoLancheComboMinAggregateOutputType | null
    _max: PedidoLancheComboMaxAggregateOutputType | null
  }

  type GetPedidoLancheComboGroupByPayload<T extends PedidoLancheComboGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PedidoLancheComboGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PedidoLancheComboGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PedidoLancheComboGroupByOutputType[P]>
            : GetScalarType<T[P], PedidoLancheComboGroupByOutputType[P]>
        }
      >
    >


  export type PedidoLancheComboSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pedidoId?: boolean
    lancheComboId?: boolean
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
    lancheCombo?: boolean | LancheComboDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pedidoLancheCombo"]>

  export type PedidoLancheComboSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pedidoId?: boolean
    lancheComboId?: boolean
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
    lancheCombo?: boolean | LancheComboDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pedidoLancheCombo"]>

  export type PedidoLancheComboSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pedidoId?: boolean
    lancheComboId?: boolean
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
    lancheCombo?: boolean | LancheComboDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pedidoLancheCombo"]>

  export type PedidoLancheComboSelectScalar = {
    id?: boolean
    pedidoId?: boolean
    lancheComboId?: boolean
  }

  export type PedidoLancheComboOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pedidoId" | "lancheComboId", ExtArgs["result"]["pedidoLancheCombo"]>
  export type PedidoLancheComboInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
    lancheCombo?: boolean | LancheComboDefaultArgs<ExtArgs>
  }
  export type PedidoLancheComboIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
    lancheCombo?: boolean | LancheComboDefaultArgs<ExtArgs>
  }
  export type PedidoLancheComboIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedido?: boolean | PedidoDefaultArgs<ExtArgs>
    lancheCombo?: boolean | LancheComboDefaultArgs<ExtArgs>
  }

  export type $PedidoLancheComboPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PedidoLancheCombo"
    objects: {
      pedido: Prisma.$PedidoPayload<ExtArgs>
      lancheCombo: Prisma.$LancheComboPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      pedidoId: number
      lancheComboId: number
    }, ExtArgs["result"]["pedidoLancheCombo"]>
    composites: {}
  }

  type PedidoLancheComboGetPayload<S extends boolean | null | undefined | PedidoLancheComboDefaultArgs> = $Result.GetResult<Prisma.$PedidoLancheComboPayload, S>

  type PedidoLancheComboCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PedidoLancheComboFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PedidoLancheComboCountAggregateInputType | true
    }

  export interface PedidoLancheComboDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PedidoLancheCombo'], meta: { name: 'PedidoLancheCombo' } }
    /**
     * Find zero or one PedidoLancheCombo that matches the filter.
     * @param {PedidoLancheComboFindUniqueArgs} args - Arguments to find a PedidoLancheCombo
     * @example
     * // Get one PedidoLancheCombo
     * const pedidoLancheCombo = await prisma.pedidoLancheCombo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PedidoLancheComboFindUniqueArgs>(args: SelectSubset<T, PedidoLancheComboFindUniqueArgs<ExtArgs>>): Prisma__PedidoLancheComboClient<$Result.GetResult<Prisma.$PedidoLancheComboPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PedidoLancheCombo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PedidoLancheComboFindUniqueOrThrowArgs} args - Arguments to find a PedidoLancheCombo
     * @example
     * // Get one PedidoLancheCombo
     * const pedidoLancheCombo = await prisma.pedidoLancheCombo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PedidoLancheComboFindUniqueOrThrowArgs>(args: SelectSubset<T, PedidoLancheComboFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PedidoLancheComboClient<$Result.GetResult<Prisma.$PedidoLancheComboPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PedidoLancheCombo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoLancheComboFindFirstArgs} args - Arguments to find a PedidoLancheCombo
     * @example
     * // Get one PedidoLancheCombo
     * const pedidoLancheCombo = await prisma.pedidoLancheCombo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PedidoLancheComboFindFirstArgs>(args?: SelectSubset<T, PedidoLancheComboFindFirstArgs<ExtArgs>>): Prisma__PedidoLancheComboClient<$Result.GetResult<Prisma.$PedidoLancheComboPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PedidoLancheCombo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoLancheComboFindFirstOrThrowArgs} args - Arguments to find a PedidoLancheCombo
     * @example
     * // Get one PedidoLancheCombo
     * const pedidoLancheCombo = await prisma.pedidoLancheCombo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PedidoLancheComboFindFirstOrThrowArgs>(args?: SelectSubset<T, PedidoLancheComboFindFirstOrThrowArgs<ExtArgs>>): Prisma__PedidoLancheComboClient<$Result.GetResult<Prisma.$PedidoLancheComboPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PedidoLancheCombos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoLancheComboFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PedidoLancheCombos
     * const pedidoLancheCombos = await prisma.pedidoLancheCombo.findMany()
     * 
     * // Get first 10 PedidoLancheCombos
     * const pedidoLancheCombos = await prisma.pedidoLancheCombo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pedidoLancheComboWithIdOnly = await prisma.pedidoLancheCombo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PedidoLancheComboFindManyArgs>(args?: SelectSubset<T, PedidoLancheComboFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoLancheComboPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PedidoLancheCombo.
     * @param {PedidoLancheComboCreateArgs} args - Arguments to create a PedidoLancheCombo.
     * @example
     * // Create one PedidoLancheCombo
     * const PedidoLancheCombo = await prisma.pedidoLancheCombo.create({
     *   data: {
     *     // ... data to create a PedidoLancheCombo
     *   }
     * })
     * 
     */
    create<T extends PedidoLancheComboCreateArgs>(args: SelectSubset<T, PedidoLancheComboCreateArgs<ExtArgs>>): Prisma__PedidoLancheComboClient<$Result.GetResult<Prisma.$PedidoLancheComboPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PedidoLancheCombos.
     * @param {PedidoLancheComboCreateManyArgs} args - Arguments to create many PedidoLancheCombos.
     * @example
     * // Create many PedidoLancheCombos
     * const pedidoLancheCombo = await prisma.pedidoLancheCombo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PedidoLancheComboCreateManyArgs>(args?: SelectSubset<T, PedidoLancheComboCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PedidoLancheCombos and returns the data saved in the database.
     * @param {PedidoLancheComboCreateManyAndReturnArgs} args - Arguments to create many PedidoLancheCombos.
     * @example
     * // Create many PedidoLancheCombos
     * const pedidoLancheCombo = await prisma.pedidoLancheCombo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PedidoLancheCombos and only return the `id`
     * const pedidoLancheComboWithIdOnly = await prisma.pedidoLancheCombo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PedidoLancheComboCreateManyAndReturnArgs>(args?: SelectSubset<T, PedidoLancheComboCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoLancheComboPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PedidoLancheCombo.
     * @param {PedidoLancheComboDeleteArgs} args - Arguments to delete one PedidoLancheCombo.
     * @example
     * // Delete one PedidoLancheCombo
     * const PedidoLancheCombo = await prisma.pedidoLancheCombo.delete({
     *   where: {
     *     // ... filter to delete one PedidoLancheCombo
     *   }
     * })
     * 
     */
    delete<T extends PedidoLancheComboDeleteArgs>(args: SelectSubset<T, PedidoLancheComboDeleteArgs<ExtArgs>>): Prisma__PedidoLancheComboClient<$Result.GetResult<Prisma.$PedidoLancheComboPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PedidoLancheCombo.
     * @param {PedidoLancheComboUpdateArgs} args - Arguments to update one PedidoLancheCombo.
     * @example
     * // Update one PedidoLancheCombo
     * const pedidoLancheCombo = await prisma.pedidoLancheCombo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PedidoLancheComboUpdateArgs>(args: SelectSubset<T, PedidoLancheComboUpdateArgs<ExtArgs>>): Prisma__PedidoLancheComboClient<$Result.GetResult<Prisma.$PedidoLancheComboPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PedidoLancheCombos.
     * @param {PedidoLancheComboDeleteManyArgs} args - Arguments to filter PedidoLancheCombos to delete.
     * @example
     * // Delete a few PedidoLancheCombos
     * const { count } = await prisma.pedidoLancheCombo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PedidoLancheComboDeleteManyArgs>(args?: SelectSubset<T, PedidoLancheComboDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PedidoLancheCombos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoLancheComboUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PedidoLancheCombos
     * const pedidoLancheCombo = await prisma.pedidoLancheCombo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PedidoLancheComboUpdateManyArgs>(args: SelectSubset<T, PedidoLancheComboUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PedidoLancheCombos and returns the data updated in the database.
     * @param {PedidoLancheComboUpdateManyAndReturnArgs} args - Arguments to update many PedidoLancheCombos.
     * @example
     * // Update many PedidoLancheCombos
     * const pedidoLancheCombo = await prisma.pedidoLancheCombo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PedidoLancheCombos and only return the `id`
     * const pedidoLancheComboWithIdOnly = await prisma.pedidoLancheCombo.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PedidoLancheComboUpdateManyAndReturnArgs>(args: SelectSubset<T, PedidoLancheComboUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PedidoLancheComboPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PedidoLancheCombo.
     * @param {PedidoLancheComboUpsertArgs} args - Arguments to update or create a PedidoLancheCombo.
     * @example
     * // Update or create a PedidoLancheCombo
     * const pedidoLancheCombo = await prisma.pedidoLancheCombo.upsert({
     *   create: {
     *     // ... data to create a PedidoLancheCombo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PedidoLancheCombo we want to update
     *   }
     * })
     */
    upsert<T extends PedidoLancheComboUpsertArgs>(args: SelectSubset<T, PedidoLancheComboUpsertArgs<ExtArgs>>): Prisma__PedidoLancheComboClient<$Result.GetResult<Prisma.$PedidoLancheComboPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PedidoLancheCombos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoLancheComboCountArgs} args - Arguments to filter PedidoLancheCombos to count.
     * @example
     * // Count the number of PedidoLancheCombos
     * const count = await prisma.pedidoLancheCombo.count({
     *   where: {
     *     // ... the filter for the PedidoLancheCombos we want to count
     *   }
     * })
    **/
    count<T extends PedidoLancheComboCountArgs>(
      args?: Subset<T, PedidoLancheComboCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PedidoLancheComboCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PedidoLancheCombo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoLancheComboAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PedidoLancheComboAggregateArgs>(args: Subset<T, PedidoLancheComboAggregateArgs>): Prisma.PrismaPromise<GetPedidoLancheComboAggregateType<T>>

    /**
     * Group by PedidoLancheCombo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PedidoLancheComboGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PedidoLancheComboGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PedidoLancheComboGroupByArgs['orderBy'] }
        : { orderBy?: PedidoLancheComboGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PedidoLancheComboGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPedidoLancheComboGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PedidoLancheCombo model
   */
  readonly fields: PedidoLancheComboFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PedidoLancheCombo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PedidoLancheComboClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pedido<T extends PedidoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PedidoDefaultArgs<ExtArgs>>): Prisma__PedidoClient<$Result.GetResult<Prisma.$PedidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    lancheCombo<T extends LancheComboDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LancheComboDefaultArgs<ExtArgs>>): Prisma__LancheComboClient<$Result.GetResult<Prisma.$LancheComboPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PedidoLancheCombo model
   */
  interface PedidoLancheComboFieldRefs {
    readonly id: FieldRef<"PedidoLancheCombo", 'Int'>
    readonly pedidoId: FieldRef<"PedidoLancheCombo", 'Int'>
    readonly lancheComboId: FieldRef<"PedidoLancheCombo", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PedidoLancheCombo findUnique
   */
  export type PedidoLancheComboFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoLancheCombo
     */
    select?: PedidoLancheComboSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoLancheCombo
     */
    omit?: PedidoLancheComboOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoLancheComboInclude<ExtArgs> | null
    /**
     * Filter, which PedidoLancheCombo to fetch.
     */
    where: PedidoLancheComboWhereUniqueInput
  }

  /**
   * PedidoLancheCombo findUniqueOrThrow
   */
  export type PedidoLancheComboFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoLancheCombo
     */
    select?: PedidoLancheComboSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoLancheCombo
     */
    omit?: PedidoLancheComboOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoLancheComboInclude<ExtArgs> | null
    /**
     * Filter, which PedidoLancheCombo to fetch.
     */
    where: PedidoLancheComboWhereUniqueInput
  }

  /**
   * PedidoLancheCombo findFirst
   */
  export type PedidoLancheComboFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoLancheCombo
     */
    select?: PedidoLancheComboSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoLancheCombo
     */
    omit?: PedidoLancheComboOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoLancheComboInclude<ExtArgs> | null
    /**
     * Filter, which PedidoLancheCombo to fetch.
     */
    where?: PedidoLancheComboWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PedidoLancheCombos to fetch.
     */
    orderBy?: PedidoLancheComboOrderByWithRelationInput | PedidoLancheComboOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PedidoLancheCombos.
     */
    cursor?: PedidoLancheComboWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PedidoLancheCombos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PedidoLancheCombos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PedidoLancheCombos.
     */
    distinct?: PedidoLancheComboScalarFieldEnum | PedidoLancheComboScalarFieldEnum[]
  }

  /**
   * PedidoLancheCombo findFirstOrThrow
   */
  export type PedidoLancheComboFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoLancheCombo
     */
    select?: PedidoLancheComboSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoLancheCombo
     */
    omit?: PedidoLancheComboOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoLancheComboInclude<ExtArgs> | null
    /**
     * Filter, which PedidoLancheCombo to fetch.
     */
    where?: PedidoLancheComboWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PedidoLancheCombos to fetch.
     */
    orderBy?: PedidoLancheComboOrderByWithRelationInput | PedidoLancheComboOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PedidoLancheCombos.
     */
    cursor?: PedidoLancheComboWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PedidoLancheCombos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PedidoLancheCombos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PedidoLancheCombos.
     */
    distinct?: PedidoLancheComboScalarFieldEnum | PedidoLancheComboScalarFieldEnum[]
  }

  /**
   * PedidoLancheCombo findMany
   */
  export type PedidoLancheComboFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoLancheCombo
     */
    select?: PedidoLancheComboSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoLancheCombo
     */
    omit?: PedidoLancheComboOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoLancheComboInclude<ExtArgs> | null
    /**
     * Filter, which PedidoLancheCombos to fetch.
     */
    where?: PedidoLancheComboWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PedidoLancheCombos to fetch.
     */
    orderBy?: PedidoLancheComboOrderByWithRelationInput | PedidoLancheComboOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PedidoLancheCombos.
     */
    cursor?: PedidoLancheComboWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PedidoLancheCombos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PedidoLancheCombos.
     */
    skip?: number
    distinct?: PedidoLancheComboScalarFieldEnum | PedidoLancheComboScalarFieldEnum[]
  }

  /**
   * PedidoLancheCombo create
   */
  export type PedidoLancheComboCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoLancheCombo
     */
    select?: PedidoLancheComboSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoLancheCombo
     */
    omit?: PedidoLancheComboOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoLancheComboInclude<ExtArgs> | null
    /**
     * The data needed to create a PedidoLancheCombo.
     */
    data: XOR<PedidoLancheComboCreateInput, PedidoLancheComboUncheckedCreateInput>
  }

  /**
   * PedidoLancheCombo createMany
   */
  export type PedidoLancheComboCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PedidoLancheCombos.
     */
    data: PedidoLancheComboCreateManyInput | PedidoLancheComboCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PedidoLancheCombo createManyAndReturn
   */
  export type PedidoLancheComboCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoLancheCombo
     */
    select?: PedidoLancheComboSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoLancheCombo
     */
    omit?: PedidoLancheComboOmit<ExtArgs> | null
    /**
     * The data used to create many PedidoLancheCombos.
     */
    data: PedidoLancheComboCreateManyInput | PedidoLancheComboCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoLancheComboIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PedidoLancheCombo update
   */
  export type PedidoLancheComboUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoLancheCombo
     */
    select?: PedidoLancheComboSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoLancheCombo
     */
    omit?: PedidoLancheComboOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoLancheComboInclude<ExtArgs> | null
    /**
     * The data needed to update a PedidoLancheCombo.
     */
    data: XOR<PedidoLancheComboUpdateInput, PedidoLancheComboUncheckedUpdateInput>
    /**
     * Choose, which PedidoLancheCombo to update.
     */
    where: PedidoLancheComboWhereUniqueInput
  }

  /**
   * PedidoLancheCombo updateMany
   */
  export type PedidoLancheComboUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PedidoLancheCombos.
     */
    data: XOR<PedidoLancheComboUpdateManyMutationInput, PedidoLancheComboUncheckedUpdateManyInput>
    /**
     * Filter which PedidoLancheCombos to update
     */
    where?: PedidoLancheComboWhereInput
    /**
     * Limit how many PedidoLancheCombos to update.
     */
    limit?: number
  }

  /**
   * PedidoLancheCombo updateManyAndReturn
   */
  export type PedidoLancheComboUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoLancheCombo
     */
    select?: PedidoLancheComboSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoLancheCombo
     */
    omit?: PedidoLancheComboOmit<ExtArgs> | null
    /**
     * The data used to update PedidoLancheCombos.
     */
    data: XOR<PedidoLancheComboUpdateManyMutationInput, PedidoLancheComboUncheckedUpdateManyInput>
    /**
     * Filter which PedidoLancheCombos to update
     */
    where?: PedidoLancheComboWhereInput
    /**
     * Limit how many PedidoLancheCombos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoLancheComboIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PedidoLancheCombo upsert
   */
  export type PedidoLancheComboUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoLancheCombo
     */
    select?: PedidoLancheComboSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoLancheCombo
     */
    omit?: PedidoLancheComboOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoLancheComboInclude<ExtArgs> | null
    /**
     * The filter to search for the PedidoLancheCombo to update in case it exists.
     */
    where: PedidoLancheComboWhereUniqueInput
    /**
     * In case the PedidoLancheCombo found by the `where` argument doesn't exist, create a new PedidoLancheCombo with this data.
     */
    create: XOR<PedidoLancheComboCreateInput, PedidoLancheComboUncheckedCreateInput>
    /**
     * In case the PedidoLancheCombo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PedidoLancheComboUpdateInput, PedidoLancheComboUncheckedUpdateInput>
  }

  /**
   * PedidoLancheCombo delete
   */
  export type PedidoLancheComboDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoLancheCombo
     */
    select?: PedidoLancheComboSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoLancheCombo
     */
    omit?: PedidoLancheComboOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoLancheComboInclude<ExtArgs> | null
    /**
     * Filter which PedidoLancheCombo to delete.
     */
    where: PedidoLancheComboWhereUniqueInput
  }

  /**
   * PedidoLancheCombo deleteMany
   */
  export type PedidoLancheComboDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PedidoLancheCombos to delete
     */
    where?: PedidoLancheComboWhereInput
    /**
     * Limit how many PedidoLancheCombos to delete.
     */
    limit?: number
  }

  /**
   * PedidoLancheCombo without action
   */
  export type PedidoLancheComboDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PedidoLancheCombo
     */
    select?: PedidoLancheComboSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PedidoLancheCombo
     */
    omit?: PedidoLancheComboOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PedidoLancheComboInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CinemaScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    localizacao: 'localizacao'
  };

  export type CinemaScalarFieldEnum = (typeof CinemaScalarFieldEnum)[keyof typeof CinemaScalarFieldEnum]


  export const SalaScalarFieldEnum: {
    id: 'id',
    numero: 'numero',
    capacidade: 'capacidade',
    cinemaId: 'cinemaId'
  };

  export type SalaScalarFieldEnum = (typeof SalaScalarFieldEnum)[keyof typeof SalaScalarFieldEnum]


  export const FilmeScalarFieldEnum: {
    id: 'id',
    titulo: 'titulo',
    genero: 'genero',
    duracao: 'duracao',
    dataLancamento: 'dataLancamento'
  };

  export type FilmeScalarFieldEnum = (typeof FilmeScalarFieldEnum)[keyof typeof FilmeScalarFieldEnum]


  export const SessaoScalarFieldEnum: {
    id: 'id',
    horario: 'horario',
    salaId: 'salaId',
    filmeId: 'filmeId',
    cinemaId: 'cinemaId'
  };

  export type SessaoScalarFieldEnum = (typeof SessaoScalarFieldEnum)[keyof typeof SessaoScalarFieldEnum]


  export const IngressoScalarFieldEnum: {
    id: 'id',
    preco: 'preco',
    sessaoId: 'sessaoId'
  };

  export type IngressoScalarFieldEnum = (typeof IngressoScalarFieldEnum)[keyof typeof IngressoScalarFieldEnum]


  export const LancheComboScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    descricao: 'descricao',
    adicional: 'adicional',
    subtotal: 'subtotal'
  };

  export type LancheComboScalarFieldEnum = (typeof LancheComboScalarFieldEnum)[keyof typeof LancheComboScalarFieldEnum]


  export const PedidoScalarFieldEnum: {
    id: 'id',
    cliente: 'cliente',
    total: 'total'
  };

  export type PedidoScalarFieldEnum = (typeof PedidoScalarFieldEnum)[keyof typeof PedidoScalarFieldEnum]


  export const PedidoIngressoScalarFieldEnum: {
    id: 'id',
    pedidoId: 'pedidoId',
    ingressoId: 'ingressoId'
  };

  export type PedidoIngressoScalarFieldEnum = (typeof PedidoIngressoScalarFieldEnum)[keyof typeof PedidoIngressoScalarFieldEnum]


  export const PedidoLancheComboScalarFieldEnum: {
    id: 'id',
    pedidoId: 'pedidoId',
    lancheComboId: 'lancheComboId'
  };

  export type PedidoLancheComboScalarFieldEnum = (typeof PedidoLancheComboScalarFieldEnum)[keyof typeof PedidoLancheComboScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    
  /**
   * Deep Input Types
   */


  export type CinemaWhereInput = {
    AND?: CinemaWhereInput | CinemaWhereInput[]
    OR?: CinemaWhereInput[]
    NOT?: CinemaWhereInput | CinemaWhereInput[]
    id?: IntFilter<"Cinema"> | number
    nome?: StringFilter<"Cinema"> | string
    localizacao?: StringFilter<"Cinema"> | string
    salas?: SalaListRelationFilter
    sessoes?: SessaoListRelationFilter
  }

  export type CinemaOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    localizacao?: SortOrder
    salas?: SalaOrderByRelationAggregateInput
    sessoes?: SessaoOrderByRelationAggregateInput
  }

  export type CinemaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CinemaWhereInput | CinemaWhereInput[]
    OR?: CinemaWhereInput[]
    NOT?: CinemaWhereInput | CinemaWhereInput[]
    nome?: StringFilter<"Cinema"> | string
    localizacao?: StringFilter<"Cinema"> | string
    salas?: SalaListRelationFilter
    sessoes?: SessaoListRelationFilter
  }, "id">

  export type CinemaOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    localizacao?: SortOrder
    _count?: CinemaCountOrderByAggregateInput
    _avg?: CinemaAvgOrderByAggregateInput
    _max?: CinemaMaxOrderByAggregateInput
    _min?: CinemaMinOrderByAggregateInput
    _sum?: CinemaSumOrderByAggregateInput
  }

  export type CinemaScalarWhereWithAggregatesInput = {
    AND?: CinemaScalarWhereWithAggregatesInput | CinemaScalarWhereWithAggregatesInput[]
    OR?: CinemaScalarWhereWithAggregatesInput[]
    NOT?: CinemaScalarWhereWithAggregatesInput | CinemaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Cinema"> | number
    nome?: StringWithAggregatesFilter<"Cinema"> | string
    localizacao?: StringWithAggregatesFilter<"Cinema"> | string
  }

  export type SalaWhereInput = {
    AND?: SalaWhereInput | SalaWhereInput[]
    OR?: SalaWhereInput[]
    NOT?: SalaWhereInput | SalaWhereInput[]
    id?: IntFilter<"Sala"> | number
    numero?: IntFilter<"Sala"> | number
    capacidade?: IntFilter<"Sala"> | number
    cinemaId?: IntFilter<"Sala"> | number
    cinema?: XOR<CinemaScalarRelationFilter, CinemaWhereInput>
    sessoes?: SessaoListRelationFilter
  }

  export type SalaOrderByWithRelationInput = {
    id?: SortOrder
    numero?: SortOrder
    capacidade?: SortOrder
    cinemaId?: SortOrder
    cinema?: CinemaOrderByWithRelationInput
    sessoes?: SessaoOrderByRelationAggregateInput
  }

  export type SalaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SalaWhereInput | SalaWhereInput[]
    OR?: SalaWhereInput[]
    NOT?: SalaWhereInput | SalaWhereInput[]
    numero?: IntFilter<"Sala"> | number
    capacidade?: IntFilter<"Sala"> | number
    cinemaId?: IntFilter<"Sala"> | number
    cinema?: XOR<CinemaScalarRelationFilter, CinemaWhereInput>
    sessoes?: SessaoListRelationFilter
  }, "id">

  export type SalaOrderByWithAggregationInput = {
    id?: SortOrder
    numero?: SortOrder
    capacidade?: SortOrder
    cinemaId?: SortOrder
    _count?: SalaCountOrderByAggregateInput
    _avg?: SalaAvgOrderByAggregateInput
    _max?: SalaMaxOrderByAggregateInput
    _min?: SalaMinOrderByAggregateInput
    _sum?: SalaSumOrderByAggregateInput
  }

  export type SalaScalarWhereWithAggregatesInput = {
    AND?: SalaScalarWhereWithAggregatesInput | SalaScalarWhereWithAggregatesInput[]
    OR?: SalaScalarWhereWithAggregatesInput[]
    NOT?: SalaScalarWhereWithAggregatesInput | SalaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Sala"> | number
    numero?: IntWithAggregatesFilter<"Sala"> | number
    capacidade?: IntWithAggregatesFilter<"Sala"> | number
    cinemaId?: IntWithAggregatesFilter<"Sala"> | number
  }

  export type FilmeWhereInput = {
    AND?: FilmeWhereInput | FilmeWhereInput[]
    OR?: FilmeWhereInput[]
    NOT?: FilmeWhereInput | FilmeWhereInput[]
    id?: IntFilter<"Filme"> | number
    titulo?: StringFilter<"Filme"> | string
    genero?: StringFilter<"Filme"> | string
    duracao?: IntFilter<"Filme"> | number
    dataLancamento?: DateTimeFilter<"Filme"> | Date | string
    sessoes?: SessaoListRelationFilter
  }

  export type FilmeOrderByWithRelationInput = {
    id?: SortOrder
    titulo?: SortOrder
    genero?: SortOrder
    duracao?: SortOrder
    dataLancamento?: SortOrder
    sessoes?: SessaoOrderByRelationAggregateInput
  }

  export type FilmeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FilmeWhereInput | FilmeWhereInput[]
    OR?: FilmeWhereInput[]
    NOT?: FilmeWhereInput | FilmeWhereInput[]
    titulo?: StringFilter<"Filme"> | string
    genero?: StringFilter<"Filme"> | string
    duracao?: IntFilter<"Filme"> | number
    dataLancamento?: DateTimeFilter<"Filme"> | Date | string
    sessoes?: SessaoListRelationFilter
  }, "id">

  export type FilmeOrderByWithAggregationInput = {
    id?: SortOrder
    titulo?: SortOrder
    genero?: SortOrder
    duracao?: SortOrder
    dataLancamento?: SortOrder
    _count?: FilmeCountOrderByAggregateInput
    _avg?: FilmeAvgOrderByAggregateInput
    _max?: FilmeMaxOrderByAggregateInput
    _min?: FilmeMinOrderByAggregateInput
    _sum?: FilmeSumOrderByAggregateInput
  }

  export type FilmeScalarWhereWithAggregatesInput = {
    AND?: FilmeScalarWhereWithAggregatesInput | FilmeScalarWhereWithAggregatesInput[]
    OR?: FilmeScalarWhereWithAggregatesInput[]
    NOT?: FilmeScalarWhereWithAggregatesInput | FilmeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Filme"> | number
    titulo?: StringWithAggregatesFilter<"Filme"> | string
    genero?: StringWithAggregatesFilter<"Filme"> | string
    duracao?: IntWithAggregatesFilter<"Filme"> | number
    dataLancamento?: DateTimeWithAggregatesFilter<"Filme"> | Date | string
  }

  export type SessaoWhereInput = {
    AND?: SessaoWhereInput | SessaoWhereInput[]
    OR?: SessaoWhereInput[]
    NOT?: SessaoWhereInput | SessaoWhereInput[]
    id?: IntFilter<"Sessao"> | number
    horario?: DateTimeFilter<"Sessao"> | Date | string
    salaId?: IntFilter<"Sessao"> | number
    filmeId?: IntFilter<"Sessao"> | number
    cinemaId?: IntFilter<"Sessao"> | number
    sala?: XOR<SalaScalarRelationFilter, SalaWhereInput>
    filme?: XOR<FilmeScalarRelationFilter, FilmeWhereInput>
    cinema?: XOR<CinemaScalarRelationFilter, CinemaWhereInput>
    ingressos?: IngressoListRelationFilter
  }

  export type SessaoOrderByWithRelationInput = {
    id?: SortOrder
    horario?: SortOrder
    salaId?: SortOrder
    filmeId?: SortOrder
    cinemaId?: SortOrder
    sala?: SalaOrderByWithRelationInput
    filme?: FilmeOrderByWithRelationInput
    cinema?: CinemaOrderByWithRelationInput
    ingressos?: IngressoOrderByRelationAggregateInput
  }

  export type SessaoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SessaoWhereInput | SessaoWhereInput[]
    OR?: SessaoWhereInput[]
    NOT?: SessaoWhereInput | SessaoWhereInput[]
    horario?: DateTimeFilter<"Sessao"> | Date | string
    salaId?: IntFilter<"Sessao"> | number
    filmeId?: IntFilter<"Sessao"> | number
    cinemaId?: IntFilter<"Sessao"> | number
    sala?: XOR<SalaScalarRelationFilter, SalaWhereInput>
    filme?: XOR<FilmeScalarRelationFilter, FilmeWhereInput>
    cinema?: XOR<CinemaScalarRelationFilter, CinemaWhereInput>
    ingressos?: IngressoListRelationFilter
  }, "id">

  export type SessaoOrderByWithAggregationInput = {
    id?: SortOrder
    horario?: SortOrder
    salaId?: SortOrder
    filmeId?: SortOrder
    cinemaId?: SortOrder
    _count?: SessaoCountOrderByAggregateInput
    _avg?: SessaoAvgOrderByAggregateInput
    _max?: SessaoMaxOrderByAggregateInput
    _min?: SessaoMinOrderByAggregateInput
    _sum?: SessaoSumOrderByAggregateInput
  }

  export type SessaoScalarWhereWithAggregatesInput = {
    AND?: SessaoScalarWhereWithAggregatesInput | SessaoScalarWhereWithAggregatesInput[]
    OR?: SessaoScalarWhereWithAggregatesInput[]
    NOT?: SessaoScalarWhereWithAggregatesInput | SessaoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Sessao"> | number
    horario?: DateTimeWithAggregatesFilter<"Sessao"> | Date | string
    salaId?: IntWithAggregatesFilter<"Sessao"> | number
    filmeId?: IntWithAggregatesFilter<"Sessao"> | number
    cinemaId?: IntWithAggregatesFilter<"Sessao"> | number
  }

  export type IngressoWhereInput = {
    AND?: IngressoWhereInput | IngressoWhereInput[]
    OR?: IngressoWhereInput[]
    NOT?: IngressoWhereInput | IngressoWhereInput[]
    id?: IntFilter<"Ingresso"> | number
    preco?: FloatFilter<"Ingresso"> | number
    sessaoId?: IntFilter<"Ingresso"> | number
    sessao?: XOR<SessaoScalarRelationFilter, SessaoWhereInput>
    pedidos?: PedidoIngressoListRelationFilter
  }

  export type IngressoOrderByWithRelationInput = {
    id?: SortOrder
    preco?: SortOrder
    sessaoId?: SortOrder
    sessao?: SessaoOrderByWithRelationInput
    pedidos?: PedidoIngressoOrderByRelationAggregateInput
  }

  export type IngressoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: IngressoWhereInput | IngressoWhereInput[]
    OR?: IngressoWhereInput[]
    NOT?: IngressoWhereInput | IngressoWhereInput[]
    preco?: FloatFilter<"Ingresso"> | number
    sessaoId?: IntFilter<"Ingresso"> | number
    sessao?: XOR<SessaoScalarRelationFilter, SessaoWhereInput>
    pedidos?: PedidoIngressoListRelationFilter
  }, "id">

  export type IngressoOrderByWithAggregationInput = {
    id?: SortOrder
    preco?: SortOrder
    sessaoId?: SortOrder
    _count?: IngressoCountOrderByAggregateInput
    _avg?: IngressoAvgOrderByAggregateInput
    _max?: IngressoMaxOrderByAggregateInput
    _min?: IngressoMinOrderByAggregateInput
    _sum?: IngressoSumOrderByAggregateInput
  }

  export type IngressoScalarWhereWithAggregatesInput = {
    AND?: IngressoScalarWhereWithAggregatesInput | IngressoScalarWhereWithAggregatesInput[]
    OR?: IngressoScalarWhereWithAggregatesInput[]
    NOT?: IngressoScalarWhereWithAggregatesInput | IngressoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Ingresso"> | number
    preco?: FloatWithAggregatesFilter<"Ingresso"> | number
    sessaoId?: IntWithAggregatesFilter<"Ingresso"> | number
  }

  export type LancheComboWhereInput = {
    AND?: LancheComboWhereInput | LancheComboWhereInput[]
    OR?: LancheComboWhereInput[]
    NOT?: LancheComboWhereInput | LancheComboWhereInput[]
    id?: IntFilter<"LancheCombo"> | number
    nome?: StringFilter<"LancheCombo"> | string
    descricao?: StringFilter<"LancheCombo"> | string
    adicional?: DecimalFilter<"LancheCombo"> | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFilter<"LancheCombo"> | Decimal | DecimalJsLike | number | string
    pedidos?: PedidoLancheComboListRelationFilter
  }

  export type LancheComboOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    adicional?: SortOrder
    subtotal?: SortOrder
    pedidos?: PedidoLancheComboOrderByRelationAggregateInput
  }

  export type LancheComboWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LancheComboWhereInput | LancheComboWhereInput[]
    OR?: LancheComboWhereInput[]
    NOT?: LancheComboWhereInput | LancheComboWhereInput[]
    nome?: StringFilter<"LancheCombo"> | string
    descricao?: StringFilter<"LancheCombo"> | string
    adicional?: DecimalFilter<"LancheCombo"> | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFilter<"LancheCombo"> | Decimal | DecimalJsLike | number | string
    pedidos?: PedidoLancheComboListRelationFilter
  }, "id">

  export type LancheComboOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    adicional?: SortOrder
    subtotal?: SortOrder
    _count?: LancheComboCountOrderByAggregateInput
    _avg?: LancheComboAvgOrderByAggregateInput
    _max?: LancheComboMaxOrderByAggregateInput
    _min?: LancheComboMinOrderByAggregateInput
    _sum?: LancheComboSumOrderByAggregateInput
  }

  export type LancheComboScalarWhereWithAggregatesInput = {
    AND?: LancheComboScalarWhereWithAggregatesInput | LancheComboScalarWhereWithAggregatesInput[]
    OR?: LancheComboScalarWhereWithAggregatesInput[]
    NOT?: LancheComboScalarWhereWithAggregatesInput | LancheComboScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"LancheCombo"> | number
    nome?: StringWithAggregatesFilter<"LancheCombo"> | string
    descricao?: StringWithAggregatesFilter<"LancheCombo"> | string
    adicional?: DecimalWithAggregatesFilter<"LancheCombo"> | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalWithAggregatesFilter<"LancheCombo"> | Decimal | DecimalJsLike | number | string
  }

  export type PedidoWhereInput = {
    AND?: PedidoWhereInput | PedidoWhereInput[]
    OR?: PedidoWhereInput[]
    NOT?: PedidoWhereInput | PedidoWhereInput[]
    id?: IntFilter<"Pedido"> | number
    cliente?: StringFilter<"Pedido"> | string
    total?: DecimalFilter<"Pedido"> | Decimal | DecimalJsLike | number | string
    ingressos?: PedidoIngressoListRelationFilter
    lancheCombos?: PedidoLancheComboListRelationFilter
  }

  export type PedidoOrderByWithRelationInput = {
    id?: SortOrder
    cliente?: SortOrder
    total?: SortOrder
    ingressos?: PedidoIngressoOrderByRelationAggregateInput
    lancheCombos?: PedidoLancheComboOrderByRelationAggregateInput
  }

  export type PedidoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PedidoWhereInput | PedidoWhereInput[]
    OR?: PedidoWhereInput[]
    NOT?: PedidoWhereInput | PedidoWhereInput[]
    cliente?: StringFilter<"Pedido"> | string
    total?: DecimalFilter<"Pedido"> | Decimal | DecimalJsLike | number | string
    ingressos?: PedidoIngressoListRelationFilter
    lancheCombos?: PedidoLancheComboListRelationFilter
  }, "id">

  export type PedidoOrderByWithAggregationInput = {
    id?: SortOrder
    cliente?: SortOrder
    total?: SortOrder
    _count?: PedidoCountOrderByAggregateInput
    _avg?: PedidoAvgOrderByAggregateInput
    _max?: PedidoMaxOrderByAggregateInput
    _min?: PedidoMinOrderByAggregateInput
    _sum?: PedidoSumOrderByAggregateInput
  }

  export type PedidoScalarWhereWithAggregatesInput = {
    AND?: PedidoScalarWhereWithAggregatesInput | PedidoScalarWhereWithAggregatesInput[]
    OR?: PedidoScalarWhereWithAggregatesInput[]
    NOT?: PedidoScalarWhereWithAggregatesInput | PedidoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Pedido"> | number
    cliente?: StringWithAggregatesFilter<"Pedido"> | string
    total?: DecimalWithAggregatesFilter<"Pedido"> | Decimal | DecimalJsLike | number | string
  }

  export type PedidoIngressoWhereInput = {
    AND?: PedidoIngressoWhereInput | PedidoIngressoWhereInput[]
    OR?: PedidoIngressoWhereInput[]
    NOT?: PedidoIngressoWhereInput | PedidoIngressoWhereInput[]
    id?: IntFilter<"PedidoIngresso"> | number
    pedidoId?: IntFilter<"PedidoIngresso"> | number
    ingressoId?: IntFilter<"PedidoIngresso"> | number
    pedido?: XOR<PedidoScalarRelationFilter, PedidoWhereInput>
    ingresso?: XOR<IngressoScalarRelationFilter, IngressoWhereInput>
  }

  export type PedidoIngressoOrderByWithRelationInput = {
    id?: SortOrder
    pedidoId?: SortOrder
    ingressoId?: SortOrder
    pedido?: PedidoOrderByWithRelationInput
    ingresso?: IngressoOrderByWithRelationInput
  }

  export type PedidoIngressoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PedidoIngressoWhereInput | PedidoIngressoWhereInput[]
    OR?: PedidoIngressoWhereInput[]
    NOT?: PedidoIngressoWhereInput | PedidoIngressoWhereInput[]
    pedidoId?: IntFilter<"PedidoIngresso"> | number
    ingressoId?: IntFilter<"PedidoIngresso"> | number
    pedido?: XOR<PedidoScalarRelationFilter, PedidoWhereInput>
    ingresso?: XOR<IngressoScalarRelationFilter, IngressoWhereInput>
  }, "id">

  export type PedidoIngressoOrderByWithAggregationInput = {
    id?: SortOrder
    pedidoId?: SortOrder
    ingressoId?: SortOrder
    _count?: PedidoIngressoCountOrderByAggregateInput
    _avg?: PedidoIngressoAvgOrderByAggregateInput
    _max?: PedidoIngressoMaxOrderByAggregateInput
    _min?: PedidoIngressoMinOrderByAggregateInput
    _sum?: PedidoIngressoSumOrderByAggregateInput
  }

  export type PedidoIngressoScalarWhereWithAggregatesInput = {
    AND?: PedidoIngressoScalarWhereWithAggregatesInput | PedidoIngressoScalarWhereWithAggregatesInput[]
    OR?: PedidoIngressoScalarWhereWithAggregatesInput[]
    NOT?: PedidoIngressoScalarWhereWithAggregatesInput | PedidoIngressoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PedidoIngresso"> | number
    pedidoId?: IntWithAggregatesFilter<"PedidoIngresso"> | number
    ingressoId?: IntWithAggregatesFilter<"PedidoIngresso"> | number
  }

  export type PedidoLancheComboWhereInput = {
    AND?: PedidoLancheComboWhereInput | PedidoLancheComboWhereInput[]
    OR?: PedidoLancheComboWhereInput[]
    NOT?: PedidoLancheComboWhereInput | PedidoLancheComboWhereInput[]
    id?: IntFilter<"PedidoLancheCombo"> | number
    pedidoId?: IntFilter<"PedidoLancheCombo"> | number
    lancheComboId?: IntFilter<"PedidoLancheCombo"> | number
    pedido?: XOR<PedidoScalarRelationFilter, PedidoWhereInput>
    lancheCombo?: XOR<LancheComboScalarRelationFilter, LancheComboWhereInput>
  }

  export type PedidoLancheComboOrderByWithRelationInput = {
    id?: SortOrder
    pedidoId?: SortOrder
    lancheComboId?: SortOrder
    pedido?: PedidoOrderByWithRelationInput
    lancheCombo?: LancheComboOrderByWithRelationInput
  }

  export type PedidoLancheComboWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PedidoLancheComboWhereInput | PedidoLancheComboWhereInput[]
    OR?: PedidoLancheComboWhereInput[]
    NOT?: PedidoLancheComboWhereInput | PedidoLancheComboWhereInput[]
    pedidoId?: IntFilter<"PedidoLancheCombo"> | number
    lancheComboId?: IntFilter<"PedidoLancheCombo"> | number
    pedido?: XOR<PedidoScalarRelationFilter, PedidoWhereInput>
    lancheCombo?: XOR<LancheComboScalarRelationFilter, LancheComboWhereInput>
  }, "id">

  export type PedidoLancheComboOrderByWithAggregationInput = {
    id?: SortOrder
    pedidoId?: SortOrder
    lancheComboId?: SortOrder
    _count?: PedidoLancheComboCountOrderByAggregateInput
    _avg?: PedidoLancheComboAvgOrderByAggregateInput
    _max?: PedidoLancheComboMaxOrderByAggregateInput
    _min?: PedidoLancheComboMinOrderByAggregateInput
    _sum?: PedidoLancheComboSumOrderByAggregateInput
  }

  export type PedidoLancheComboScalarWhereWithAggregatesInput = {
    AND?: PedidoLancheComboScalarWhereWithAggregatesInput | PedidoLancheComboScalarWhereWithAggregatesInput[]
    OR?: PedidoLancheComboScalarWhereWithAggregatesInput[]
    NOT?: PedidoLancheComboScalarWhereWithAggregatesInput | PedidoLancheComboScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PedidoLancheCombo"> | number
    pedidoId?: IntWithAggregatesFilter<"PedidoLancheCombo"> | number
    lancheComboId?: IntWithAggregatesFilter<"PedidoLancheCombo"> | number
  }

  export type CinemaCreateInput = {
    nome: string
    localizacao: string
    salas?: SalaCreateNestedManyWithoutCinemaInput
    sessoes?: SessaoCreateNestedManyWithoutCinemaInput
  }

  export type CinemaUncheckedCreateInput = {
    id?: number
    nome: string
    localizacao: string
    salas?: SalaUncheckedCreateNestedManyWithoutCinemaInput
    sessoes?: SessaoUncheckedCreateNestedManyWithoutCinemaInput
  }

  export type CinemaUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    localizacao?: StringFieldUpdateOperationsInput | string
    salas?: SalaUpdateManyWithoutCinemaNestedInput
    sessoes?: SessaoUpdateManyWithoutCinemaNestedInput
  }

  export type CinemaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    localizacao?: StringFieldUpdateOperationsInput | string
    salas?: SalaUncheckedUpdateManyWithoutCinemaNestedInput
    sessoes?: SessaoUncheckedUpdateManyWithoutCinemaNestedInput
  }

  export type CinemaCreateManyInput = {
    id?: number
    nome: string
    localizacao: string
  }

  export type CinemaUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    localizacao?: StringFieldUpdateOperationsInput | string
  }

  export type CinemaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    localizacao?: StringFieldUpdateOperationsInput | string
  }

  export type SalaCreateInput = {
    numero: number
    capacidade: number
    cinema: CinemaCreateNestedOneWithoutSalasInput
    sessoes?: SessaoCreateNestedManyWithoutSalaInput
  }

  export type SalaUncheckedCreateInput = {
    id?: number
    numero: number
    capacidade: number
    cinemaId: number
    sessoes?: SessaoUncheckedCreateNestedManyWithoutSalaInput
  }

  export type SalaUpdateInput = {
    numero?: IntFieldUpdateOperationsInput | number
    capacidade?: IntFieldUpdateOperationsInput | number
    cinema?: CinemaUpdateOneRequiredWithoutSalasNestedInput
    sessoes?: SessaoUpdateManyWithoutSalaNestedInput
  }

  export type SalaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero?: IntFieldUpdateOperationsInput | number
    capacidade?: IntFieldUpdateOperationsInput | number
    cinemaId?: IntFieldUpdateOperationsInput | number
    sessoes?: SessaoUncheckedUpdateManyWithoutSalaNestedInput
  }

  export type SalaCreateManyInput = {
    id?: number
    numero: number
    capacidade: number
    cinemaId: number
  }

  export type SalaUpdateManyMutationInput = {
    numero?: IntFieldUpdateOperationsInput | number
    capacidade?: IntFieldUpdateOperationsInput | number
  }

  export type SalaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero?: IntFieldUpdateOperationsInput | number
    capacidade?: IntFieldUpdateOperationsInput | number
    cinemaId?: IntFieldUpdateOperationsInput | number
  }

  export type FilmeCreateInput = {
    titulo: string
    genero: string
    duracao: number
    dataLancamento: Date | string
    sessoes?: SessaoCreateNestedManyWithoutFilmeInput
  }

  export type FilmeUncheckedCreateInput = {
    id?: number
    titulo: string
    genero: string
    duracao: number
    dataLancamento: Date | string
    sessoes?: SessaoUncheckedCreateNestedManyWithoutFilmeInput
  }

  export type FilmeUpdateInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    genero?: StringFieldUpdateOperationsInput | string
    duracao?: IntFieldUpdateOperationsInput | number
    dataLancamento?: DateTimeFieldUpdateOperationsInput | Date | string
    sessoes?: SessaoUpdateManyWithoutFilmeNestedInput
  }

  export type FilmeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    genero?: StringFieldUpdateOperationsInput | string
    duracao?: IntFieldUpdateOperationsInput | number
    dataLancamento?: DateTimeFieldUpdateOperationsInput | Date | string
    sessoes?: SessaoUncheckedUpdateManyWithoutFilmeNestedInput
  }

  export type FilmeCreateManyInput = {
    id?: number
    titulo: string
    genero: string
    duracao: number
    dataLancamento: Date | string
  }

  export type FilmeUpdateManyMutationInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    genero?: StringFieldUpdateOperationsInput | string
    duracao?: IntFieldUpdateOperationsInput | number
    dataLancamento?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FilmeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    genero?: StringFieldUpdateOperationsInput | string
    duracao?: IntFieldUpdateOperationsInput | number
    dataLancamento?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessaoCreateInput = {
    horario: Date | string
    sala: SalaCreateNestedOneWithoutSessoesInput
    filme: FilmeCreateNestedOneWithoutSessoesInput
    cinema: CinemaCreateNestedOneWithoutSessoesInput
    ingressos?: IngressoCreateNestedManyWithoutSessaoInput
  }

  export type SessaoUncheckedCreateInput = {
    id?: number
    horario: Date | string
    salaId: number
    filmeId: number
    cinemaId: number
    ingressos?: IngressoUncheckedCreateNestedManyWithoutSessaoInput
  }

  export type SessaoUpdateInput = {
    horario?: DateTimeFieldUpdateOperationsInput | Date | string
    sala?: SalaUpdateOneRequiredWithoutSessoesNestedInput
    filme?: FilmeUpdateOneRequiredWithoutSessoesNestedInput
    cinema?: CinemaUpdateOneRequiredWithoutSessoesNestedInput
    ingressos?: IngressoUpdateManyWithoutSessaoNestedInput
  }

  export type SessaoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    horario?: DateTimeFieldUpdateOperationsInput | Date | string
    salaId?: IntFieldUpdateOperationsInput | number
    filmeId?: IntFieldUpdateOperationsInput | number
    cinemaId?: IntFieldUpdateOperationsInput | number
    ingressos?: IngressoUncheckedUpdateManyWithoutSessaoNestedInput
  }

  export type SessaoCreateManyInput = {
    id?: number
    horario: Date | string
    salaId: number
    filmeId: number
    cinemaId: number
  }

  export type SessaoUpdateManyMutationInput = {
    horario?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessaoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    horario?: DateTimeFieldUpdateOperationsInput | Date | string
    salaId?: IntFieldUpdateOperationsInput | number
    filmeId?: IntFieldUpdateOperationsInput | number
    cinemaId?: IntFieldUpdateOperationsInput | number
  }

  export type IngressoCreateInput = {
    preco: number
    sessao: SessaoCreateNestedOneWithoutIngressosInput
    pedidos?: PedidoIngressoCreateNestedManyWithoutIngressoInput
  }

  export type IngressoUncheckedCreateInput = {
    id?: number
    preco: number
    sessaoId: number
    pedidos?: PedidoIngressoUncheckedCreateNestedManyWithoutIngressoInput
  }

  export type IngressoUpdateInput = {
    preco?: FloatFieldUpdateOperationsInput | number
    sessao?: SessaoUpdateOneRequiredWithoutIngressosNestedInput
    pedidos?: PedidoIngressoUpdateManyWithoutIngressoNestedInput
  }

  export type IngressoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    preco?: FloatFieldUpdateOperationsInput | number
    sessaoId?: IntFieldUpdateOperationsInput | number
    pedidos?: PedidoIngressoUncheckedUpdateManyWithoutIngressoNestedInput
  }

  export type IngressoCreateManyInput = {
    id?: number
    preco: number
    sessaoId: number
  }

  export type IngressoUpdateManyMutationInput = {
    preco?: FloatFieldUpdateOperationsInput | number
  }

  export type IngressoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    preco?: FloatFieldUpdateOperationsInput | number
    sessaoId?: IntFieldUpdateOperationsInput | number
  }

  export type LancheComboCreateInput = {
    nome: string
    descricao: string
    adicional: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
    pedidos?: PedidoLancheComboCreateNestedManyWithoutLancheComboInput
  }

  export type LancheComboUncheckedCreateInput = {
    id?: number
    nome: string
    descricao: string
    adicional: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
    pedidos?: PedidoLancheComboUncheckedCreateNestedManyWithoutLancheComboInput
  }

  export type LancheComboUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    adicional?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pedidos?: PedidoLancheComboUpdateManyWithoutLancheComboNestedInput
  }

  export type LancheComboUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    adicional?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    pedidos?: PedidoLancheComboUncheckedUpdateManyWithoutLancheComboNestedInput
  }

  export type LancheComboCreateManyInput = {
    id?: number
    nome: string
    descricao: string
    adicional: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
  }

  export type LancheComboUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    adicional?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type LancheComboUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    adicional?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type PedidoCreateInput = {
    cliente: string
    total: Decimal | DecimalJsLike | number | string
    ingressos?: PedidoIngressoCreateNestedManyWithoutPedidoInput
    lancheCombos?: PedidoLancheComboCreateNestedManyWithoutPedidoInput
  }

  export type PedidoUncheckedCreateInput = {
    id?: number
    cliente: string
    total: Decimal | DecimalJsLike | number | string
    ingressos?: PedidoIngressoUncheckedCreateNestedManyWithoutPedidoInput
    lancheCombos?: PedidoLancheComboUncheckedCreateNestedManyWithoutPedidoInput
  }

  export type PedidoUpdateInput = {
    cliente?: StringFieldUpdateOperationsInput | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ingressos?: PedidoIngressoUpdateManyWithoutPedidoNestedInput
    lancheCombos?: PedidoLancheComboUpdateManyWithoutPedidoNestedInput
  }

  export type PedidoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cliente?: StringFieldUpdateOperationsInput | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ingressos?: PedidoIngressoUncheckedUpdateManyWithoutPedidoNestedInput
    lancheCombos?: PedidoLancheComboUncheckedUpdateManyWithoutPedidoNestedInput
  }

  export type PedidoCreateManyInput = {
    id?: number
    cliente: string
    total: Decimal | DecimalJsLike | number | string
  }

  export type PedidoUpdateManyMutationInput = {
    cliente?: StringFieldUpdateOperationsInput | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type PedidoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cliente?: StringFieldUpdateOperationsInput | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type PedidoIngressoCreateInput = {
    pedido: PedidoCreateNestedOneWithoutIngressosInput
    ingresso: IngressoCreateNestedOneWithoutPedidosInput
  }

  export type PedidoIngressoUncheckedCreateInput = {
    id?: number
    pedidoId: number
    ingressoId: number
  }

  export type PedidoIngressoUpdateInput = {
    pedido?: PedidoUpdateOneRequiredWithoutIngressosNestedInput
    ingresso?: IngressoUpdateOneRequiredWithoutPedidosNestedInput
  }

  export type PedidoIngressoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    pedidoId?: IntFieldUpdateOperationsInput | number
    ingressoId?: IntFieldUpdateOperationsInput | number
  }

  export type PedidoIngressoCreateManyInput = {
    id?: number
    pedidoId: number
    ingressoId: number
  }

  export type PedidoIngressoUpdateManyMutationInput = {

  }

  export type PedidoIngressoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    pedidoId?: IntFieldUpdateOperationsInput | number
    ingressoId?: IntFieldUpdateOperationsInput | number
  }

  export type PedidoLancheComboCreateInput = {
    pedido: PedidoCreateNestedOneWithoutLancheCombosInput
    lancheCombo: LancheComboCreateNestedOneWithoutPedidosInput
  }

  export type PedidoLancheComboUncheckedCreateInput = {
    id?: number
    pedidoId: number
    lancheComboId: number
  }

  export type PedidoLancheComboUpdateInput = {
    pedido?: PedidoUpdateOneRequiredWithoutLancheCombosNestedInput
    lancheCombo?: LancheComboUpdateOneRequiredWithoutPedidosNestedInput
  }

  export type PedidoLancheComboUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    pedidoId?: IntFieldUpdateOperationsInput | number
    lancheComboId?: IntFieldUpdateOperationsInput | number
  }

  export type PedidoLancheComboCreateManyInput = {
    id?: number
    pedidoId: number
    lancheComboId: number
  }

  export type PedidoLancheComboUpdateManyMutationInput = {

  }

  export type PedidoLancheComboUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    pedidoId?: IntFieldUpdateOperationsInput | number
    lancheComboId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type SalaListRelationFilter = {
    every?: SalaWhereInput
    some?: SalaWhereInput
    none?: SalaWhereInput
  }

  export type SessaoListRelationFilter = {
    every?: SessaoWhereInput
    some?: SessaoWhereInput
    none?: SessaoWhereInput
  }

  export type SalaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CinemaCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    localizacao?: SortOrder
  }

  export type CinemaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CinemaMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    localizacao?: SortOrder
  }

  export type CinemaMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    localizacao?: SortOrder
  }

  export type CinemaSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type CinemaScalarRelationFilter = {
    is?: CinemaWhereInput
    isNot?: CinemaWhereInput
  }

  export type SalaCountOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    capacidade?: SortOrder
    cinemaId?: SortOrder
  }

  export type SalaAvgOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    capacidade?: SortOrder
    cinemaId?: SortOrder
  }

  export type SalaMaxOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    capacidade?: SortOrder
    cinemaId?: SortOrder
  }

  export type SalaMinOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    capacidade?: SortOrder
    cinemaId?: SortOrder
  }

  export type SalaSumOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    capacidade?: SortOrder
    cinemaId?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type FilmeCountOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    genero?: SortOrder
    duracao?: SortOrder
    dataLancamento?: SortOrder
  }

  export type FilmeAvgOrderByAggregateInput = {
    id?: SortOrder
    duracao?: SortOrder
  }

  export type FilmeMaxOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    genero?: SortOrder
    duracao?: SortOrder
    dataLancamento?: SortOrder
  }

  export type FilmeMinOrderByAggregateInput = {
    id?: SortOrder
    titulo?: SortOrder
    genero?: SortOrder
    duracao?: SortOrder
    dataLancamento?: SortOrder
  }

  export type FilmeSumOrderByAggregateInput = {
    id?: SortOrder
    duracao?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type SalaScalarRelationFilter = {
    is?: SalaWhereInput
    isNot?: SalaWhereInput
  }

  export type FilmeScalarRelationFilter = {
    is?: FilmeWhereInput
    isNot?: FilmeWhereInput
  }

  export type IngressoListRelationFilter = {
    every?: IngressoWhereInput
    some?: IngressoWhereInput
    none?: IngressoWhereInput
  }

  export type IngressoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessaoCountOrderByAggregateInput = {
    id?: SortOrder
    horario?: SortOrder
    salaId?: SortOrder
    filmeId?: SortOrder
    cinemaId?: SortOrder
  }

  export type SessaoAvgOrderByAggregateInput = {
    id?: SortOrder
    salaId?: SortOrder
    filmeId?: SortOrder
    cinemaId?: SortOrder
  }

  export type SessaoMaxOrderByAggregateInput = {
    id?: SortOrder
    horario?: SortOrder
    salaId?: SortOrder
    filmeId?: SortOrder
    cinemaId?: SortOrder
  }

  export type SessaoMinOrderByAggregateInput = {
    id?: SortOrder
    horario?: SortOrder
    salaId?: SortOrder
    filmeId?: SortOrder
    cinemaId?: SortOrder
  }

  export type SessaoSumOrderByAggregateInput = {
    id?: SortOrder
    salaId?: SortOrder
    filmeId?: SortOrder
    cinemaId?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type SessaoScalarRelationFilter = {
    is?: SessaoWhereInput
    isNot?: SessaoWhereInput
  }

  export type PedidoIngressoListRelationFilter = {
    every?: PedidoIngressoWhereInput
    some?: PedidoIngressoWhereInput
    none?: PedidoIngressoWhereInput
  }

  export type PedidoIngressoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type IngressoCountOrderByAggregateInput = {
    id?: SortOrder
    preco?: SortOrder
    sessaoId?: SortOrder
  }

  export type IngressoAvgOrderByAggregateInput = {
    id?: SortOrder
    preco?: SortOrder
    sessaoId?: SortOrder
  }

  export type IngressoMaxOrderByAggregateInput = {
    id?: SortOrder
    preco?: SortOrder
    sessaoId?: SortOrder
  }

  export type IngressoMinOrderByAggregateInput = {
    id?: SortOrder
    preco?: SortOrder
    sessaoId?: SortOrder
  }

  export type IngressoSumOrderByAggregateInput = {
    id?: SortOrder
    preco?: SortOrder
    sessaoId?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type PedidoLancheComboListRelationFilter = {
    every?: PedidoLancheComboWhereInput
    some?: PedidoLancheComboWhereInput
    none?: PedidoLancheComboWhereInput
  }

  export type PedidoLancheComboOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LancheComboCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    adicional?: SortOrder
    subtotal?: SortOrder
  }

  export type LancheComboAvgOrderByAggregateInput = {
    id?: SortOrder
    adicional?: SortOrder
    subtotal?: SortOrder
  }

  export type LancheComboMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    adicional?: SortOrder
    subtotal?: SortOrder
  }

  export type LancheComboMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    descricao?: SortOrder
    adicional?: SortOrder
    subtotal?: SortOrder
  }

  export type LancheComboSumOrderByAggregateInput = {
    id?: SortOrder
    adicional?: SortOrder
    subtotal?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type PedidoCountOrderByAggregateInput = {
    id?: SortOrder
    cliente?: SortOrder
    total?: SortOrder
  }

  export type PedidoAvgOrderByAggregateInput = {
    id?: SortOrder
    total?: SortOrder
  }

  export type PedidoMaxOrderByAggregateInput = {
    id?: SortOrder
    cliente?: SortOrder
    total?: SortOrder
  }

  export type PedidoMinOrderByAggregateInput = {
    id?: SortOrder
    cliente?: SortOrder
    total?: SortOrder
  }

  export type PedidoSumOrderByAggregateInput = {
    id?: SortOrder
    total?: SortOrder
  }

  export type PedidoScalarRelationFilter = {
    is?: PedidoWhereInput
    isNot?: PedidoWhereInput
  }

  export type IngressoScalarRelationFilter = {
    is?: IngressoWhereInput
    isNot?: IngressoWhereInput
  }

  export type PedidoIngressoCountOrderByAggregateInput = {
    id?: SortOrder
    pedidoId?: SortOrder
    ingressoId?: SortOrder
  }

  export type PedidoIngressoAvgOrderByAggregateInput = {
    id?: SortOrder
    pedidoId?: SortOrder
    ingressoId?: SortOrder
  }

  export type PedidoIngressoMaxOrderByAggregateInput = {
    id?: SortOrder
    pedidoId?: SortOrder
    ingressoId?: SortOrder
  }

  export type PedidoIngressoMinOrderByAggregateInput = {
    id?: SortOrder
    pedidoId?: SortOrder
    ingressoId?: SortOrder
  }

  export type PedidoIngressoSumOrderByAggregateInput = {
    id?: SortOrder
    pedidoId?: SortOrder
    ingressoId?: SortOrder
  }

  export type LancheComboScalarRelationFilter = {
    is?: LancheComboWhereInput
    isNot?: LancheComboWhereInput
  }

  export type PedidoLancheComboCountOrderByAggregateInput = {
    id?: SortOrder
    pedidoId?: SortOrder
    lancheComboId?: SortOrder
  }

  export type PedidoLancheComboAvgOrderByAggregateInput = {
    id?: SortOrder
    pedidoId?: SortOrder
    lancheComboId?: SortOrder
  }

  export type PedidoLancheComboMaxOrderByAggregateInput = {
    id?: SortOrder
    pedidoId?: SortOrder
    lancheComboId?: SortOrder
  }

  export type PedidoLancheComboMinOrderByAggregateInput = {
    id?: SortOrder
    pedidoId?: SortOrder
    lancheComboId?: SortOrder
  }

  export type PedidoLancheComboSumOrderByAggregateInput = {
    id?: SortOrder
    pedidoId?: SortOrder
    lancheComboId?: SortOrder
  }

  export type SalaCreateNestedManyWithoutCinemaInput = {
    create?: XOR<SalaCreateWithoutCinemaInput, SalaUncheckedCreateWithoutCinemaInput> | SalaCreateWithoutCinemaInput[] | SalaUncheckedCreateWithoutCinemaInput[]
    connectOrCreate?: SalaCreateOrConnectWithoutCinemaInput | SalaCreateOrConnectWithoutCinemaInput[]
    createMany?: SalaCreateManyCinemaInputEnvelope
    connect?: SalaWhereUniqueInput | SalaWhereUniqueInput[]
  }

  export type SessaoCreateNestedManyWithoutCinemaInput = {
    create?: XOR<SessaoCreateWithoutCinemaInput, SessaoUncheckedCreateWithoutCinemaInput> | SessaoCreateWithoutCinemaInput[] | SessaoUncheckedCreateWithoutCinemaInput[]
    connectOrCreate?: SessaoCreateOrConnectWithoutCinemaInput | SessaoCreateOrConnectWithoutCinemaInput[]
    createMany?: SessaoCreateManyCinemaInputEnvelope
    connect?: SessaoWhereUniqueInput | SessaoWhereUniqueInput[]
  }

  export type SalaUncheckedCreateNestedManyWithoutCinemaInput = {
    create?: XOR<SalaCreateWithoutCinemaInput, SalaUncheckedCreateWithoutCinemaInput> | SalaCreateWithoutCinemaInput[] | SalaUncheckedCreateWithoutCinemaInput[]
    connectOrCreate?: SalaCreateOrConnectWithoutCinemaInput | SalaCreateOrConnectWithoutCinemaInput[]
    createMany?: SalaCreateManyCinemaInputEnvelope
    connect?: SalaWhereUniqueInput | SalaWhereUniqueInput[]
  }

  export type SessaoUncheckedCreateNestedManyWithoutCinemaInput = {
    create?: XOR<SessaoCreateWithoutCinemaInput, SessaoUncheckedCreateWithoutCinemaInput> | SessaoCreateWithoutCinemaInput[] | SessaoUncheckedCreateWithoutCinemaInput[]
    connectOrCreate?: SessaoCreateOrConnectWithoutCinemaInput | SessaoCreateOrConnectWithoutCinemaInput[]
    createMany?: SessaoCreateManyCinemaInputEnvelope
    connect?: SessaoWhereUniqueInput | SessaoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type SalaUpdateManyWithoutCinemaNestedInput = {
    create?: XOR<SalaCreateWithoutCinemaInput, SalaUncheckedCreateWithoutCinemaInput> | SalaCreateWithoutCinemaInput[] | SalaUncheckedCreateWithoutCinemaInput[]
    connectOrCreate?: SalaCreateOrConnectWithoutCinemaInput | SalaCreateOrConnectWithoutCinemaInput[]
    upsert?: SalaUpsertWithWhereUniqueWithoutCinemaInput | SalaUpsertWithWhereUniqueWithoutCinemaInput[]
    createMany?: SalaCreateManyCinemaInputEnvelope
    set?: SalaWhereUniqueInput | SalaWhereUniqueInput[]
    disconnect?: SalaWhereUniqueInput | SalaWhereUniqueInput[]
    delete?: SalaWhereUniqueInput | SalaWhereUniqueInput[]
    connect?: SalaWhereUniqueInput | SalaWhereUniqueInput[]
    update?: SalaUpdateWithWhereUniqueWithoutCinemaInput | SalaUpdateWithWhereUniqueWithoutCinemaInput[]
    updateMany?: SalaUpdateManyWithWhereWithoutCinemaInput | SalaUpdateManyWithWhereWithoutCinemaInput[]
    deleteMany?: SalaScalarWhereInput | SalaScalarWhereInput[]
  }

  export type SessaoUpdateManyWithoutCinemaNestedInput = {
    create?: XOR<SessaoCreateWithoutCinemaInput, SessaoUncheckedCreateWithoutCinemaInput> | SessaoCreateWithoutCinemaInput[] | SessaoUncheckedCreateWithoutCinemaInput[]
    connectOrCreate?: SessaoCreateOrConnectWithoutCinemaInput | SessaoCreateOrConnectWithoutCinemaInput[]
    upsert?: SessaoUpsertWithWhereUniqueWithoutCinemaInput | SessaoUpsertWithWhereUniqueWithoutCinemaInput[]
    createMany?: SessaoCreateManyCinemaInputEnvelope
    set?: SessaoWhereUniqueInput | SessaoWhereUniqueInput[]
    disconnect?: SessaoWhereUniqueInput | SessaoWhereUniqueInput[]
    delete?: SessaoWhereUniqueInput | SessaoWhereUniqueInput[]
    connect?: SessaoWhereUniqueInput | SessaoWhereUniqueInput[]
    update?: SessaoUpdateWithWhereUniqueWithoutCinemaInput | SessaoUpdateWithWhereUniqueWithoutCinemaInput[]
    updateMany?: SessaoUpdateManyWithWhereWithoutCinemaInput | SessaoUpdateManyWithWhereWithoutCinemaInput[]
    deleteMany?: SessaoScalarWhereInput | SessaoScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SalaUncheckedUpdateManyWithoutCinemaNestedInput = {
    create?: XOR<SalaCreateWithoutCinemaInput, SalaUncheckedCreateWithoutCinemaInput> | SalaCreateWithoutCinemaInput[] | SalaUncheckedCreateWithoutCinemaInput[]
    connectOrCreate?: SalaCreateOrConnectWithoutCinemaInput | SalaCreateOrConnectWithoutCinemaInput[]
    upsert?: SalaUpsertWithWhereUniqueWithoutCinemaInput | SalaUpsertWithWhereUniqueWithoutCinemaInput[]
    createMany?: SalaCreateManyCinemaInputEnvelope
    set?: SalaWhereUniqueInput | SalaWhereUniqueInput[]
    disconnect?: SalaWhereUniqueInput | SalaWhereUniqueInput[]
    delete?: SalaWhereUniqueInput | SalaWhereUniqueInput[]
    connect?: SalaWhereUniqueInput | SalaWhereUniqueInput[]
    update?: SalaUpdateWithWhereUniqueWithoutCinemaInput | SalaUpdateWithWhereUniqueWithoutCinemaInput[]
    updateMany?: SalaUpdateManyWithWhereWithoutCinemaInput | SalaUpdateManyWithWhereWithoutCinemaInput[]
    deleteMany?: SalaScalarWhereInput | SalaScalarWhereInput[]
  }

  export type SessaoUncheckedUpdateManyWithoutCinemaNestedInput = {
    create?: XOR<SessaoCreateWithoutCinemaInput, SessaoUncheckedCreateWithoutCinemaInput> | SessaoCreateWithoutCinemaInput[] | SessaoUncheckedCreateWithoutCinemaInput[]
    connectOrCreate?: SessaoCreateOrConnectWithoutCinemaInput | SessaoCreateOrConnectWithoutCinemaInput[]
    upsert?: SessaoUpsertWithWhereUniqueWithoutCinemaInput | SessaoUpsertWithWhereUniqueWithoutCinemaInput[]
    createMany?: SessaoCreateManyCinemaInputEnvelope
    set?: SessaoWhereUniqueInput | SessaoWhereUniqueInput[]
    disconnect?: SessaoWhereUniqueInput | SessaoWhereUniqueInput[]
    delete?: SessaoWhereUniqueInput | SessaoWhereUniqueInput[]
    connect?: SessaoWhereUniqueInput | SessaoWhereUniqueInput[]
    update?: SessaoUpdateWithWhereUniqueWithoutCinemaInput | SessaoUpdateWithWhereUniqueWithoutCinemaInput[]
    updateMany?: SessaoUpdateManyWithWhereWithoutCinemaInput | SessaoUpdateManyWithWhereWithoutCinemaInput[]
    deleteMany?: SessaoScalarWhereInput | SessaoScalarWhereInput[]
  }

  export type CinemaCreateNestedOneWithoutSalasInput = {
    create?: XOR<CinemaCreateWithoutSalasInput, CinemaUncheckedCreateWithoutSalasInput>
    connectOrCreate?: CinemaCreateOrConnectWithoutSalasInput
    connect?: CinemaWhereUniqueInput
  }

  export type SessaoCreateNestedManyWithoutSalaInput = {
    create?: XOR<SessaoCreateWithoutSalaInput, SessaoUncheckedCreateWithoutSalaInput> | SessaoCreateWithoutSalaInput[] | SessaoUncheckedCreateWithoutSalaInput[]
    connectOrCreate?: SessaoCreateOrConnectWithoutSalaInput | SessaoCreateOrConnectWithoutSalaInput[]
    createMany?: SessaoCreateManySalaInputEnvelope
    connect?: SessaoWhereUniqueInput | SessaoWhereUniqueInput[]
  }

  export type SessaoUncheckedCreateNestedManyWithoutSalaInput = {
    create?: XOR<SessaoCreateWithoutSalaInput, SessaoUncheckedCreateWithoutSalaInput> | SessaoCreateWithoutSalaInput[] | SessaoUncheckedCreateWithoutSalaInput[]
    connectOrCreate?: SessaoCreateOrConnectWithoutSalaInput | SessaoCreateOrConnectWithoutSalaInput[]
    createMany?: SessaoCreateManySalaInputEnvelope
    connect?: SessaoWhereUniqueInput | SessaoWhereUniqueInput[]
  }

  export type CinemaUpdateOneRequiredWithoutSalasNestedInput = {
    create?: XOR<CinemaCreateWithoutSalasInput, CinemaUncheckedCreateWithoutSalasInput>
    connectOrCreate?: CinemaCreateOrConnectWithoutSalasInput
    upsert?: CinemaUpsertWithoutSalasInput
    connect?: CinemaWhereUniqueInput
    update?: XOR<XOR<CinemaUpdateToOneWithWhereWithoutSalasInput, CinemaUpdateWithoutSalasInput>, CinemaUncheckedUpdateWithoutSalasInput>
  }

  export type SessaoUpdateManyWithoutSalaNestedInput = {
    create?: XOR<SessaoCreateWithoutSalaInput, SessaoUncheckedCreateWithoutSalaInput> | SessaoCreateWithoutSalaInput[] | SessaoUncheckedCreateWithoutSalaInput[]
    connectOrCreate?: SessaoCreateOrConnectWithoutSalaInput | SessaoCreateOrConnectWithoutSalaInput[]
    upsert?: SessaoUpsertWithWhereUniqueWithoutSalaInput | SessaoUpsertWithWhereUniqueWithoutSalaInput[]
    createMany?: SessaoCreateManySalaInputEnvelope
    set?: SessaoWhereUniqueInput | SessaoWhereUniqueInput[]
    disconnect?: SessaoWhereUniqueInput | SessaoWhereUniqueInput[]
    delete?: SessaoWhereUniqueInput | SessaoWhereUniqueInput[]
    connect?: SessaoWhereUniqueInput | SessaoWhereUniqueInput[]
    update?: SessaoUpdateWithWhereUniqueWithoutSalaInput | SessaoUpdateWithWhereUniqueWithoutSalaInput[]
    updateMany?: SessaoUpdateManyWithWhereWithoutSalaInput | SessaoUpdateManyWithWhereWithoutSalaInput[]
    deleteMany?: SessaoScalarWhereInput | SessaoScalarWhereInput[]
  }

  export type SessaoUncheckedUpdateManyWithoutSalaNestedInput = {
    create?: XOR<SessaoCreateWithoutSalaInput, SessaoUncheckedCreateWithoutSalaInput> | SessaoCreateWithoutSalaInput[] | SessaoUncheckedCreateWithoutSalaInput[]
    connectOrCreate?: SessaoCreateOrConnectWithoutSalaInput | SessaoCreateOrConnectWithoutSalaInput[]
    upsert?: SessaoUpsertWithWhereUniqueWithoutSalaInput | SessaoUpsertWithWhereUniqueWithoutSalaInput[]
    createMany?: SessaoCreateManySalaInputEnvelope
    set?: SessaoWhereUniqueInput | SessaoWhereUniqueInput[]
    disconnect?: SessaoWhereUniqueInput | SessaoWhereUniqueInput[]
    delete?: SessaoWhereUniqueInput | SessaoWhereUniqueInput[]
    connect?: SessaoWhereUniqueInput | SessaoWhereUniqueInput[]
    update?: SessaoUpdateWithWhereUniqueWithoutSalaInput | SessaoUpdateWithWhereUniqueWithoutSalaInput[]
    updateMany?: SessaoUpdateManyWithWhereWithoutSalaInput | SessaoUpdateManyWithWhereWithoutSalaInput[]
    deleteMany?: SessaoScalarWhereInput | SessaoScalarWhereInput[]
  }

  export type SessaoCreateNestedManyWithoutFilmeInput = {
    create?: XOR<SessaoCreateWithoutFilmeInput, SessaoUncheckedCreateWithoutFilmeInput> | SessaoCreateWithoutFilmeInput[] | SessaoUncheckedCreateWithoutFilmeInput[]
    connectOrCreate?: SessaoCreateOrConnectWithoutFilmeInput | SessaoCreateOrConnectWithoutFilmeInput[]
    createMany?: SessaoCreateManyFilmeInputEnvelope
    connect?: SessaoWhereUniqueInput | SessaoWhereUniqueInput[]
  }

  export type SessaoUncheckedCreateNestedManyWithoutFilmeInput = {
    create?: XOR<SessaoCreateWithoutFilmeInput, SessaoUncheckedCreateWithoutFilmeInput> | SessaoCreateWithoutFilmeInput[] | SessaoUncheckedCreateWithoutFilmeInput[]
    connectOrCreate?: SessaoCreateOrConnectWithoutFilmeInput | SessaoCreateOrConnectWithoutFilmeInput[]
    createMany?: SessaoCreateManyFilmeInputEnvelope
    connect?: SessaoWhereUniqueInput | SessaoWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SessaoUpdateManyWithoutFilmeNestedInput = {
    create?: XOR<SessaoCreateWithoutFilmeInput, SessaoUncheckedCreateWithoutFilmeInput> | SessaoCreateWithoutFilmeInput[] | SessaoUncheckedCreateWithoutFilmeInput[]
    connectOrCreate?: SessaoCreateOrConnectWithoutFilmeInput | SessaoCreateOrConnectWithoutFilmeInput[]
    upsert?: SessaoUpsertWithWhereUniqueWithoutFilmeInput | SessaoUpsertWithWhereUniqueWithoutFilmeInput[]
    createMany?: SessaoCreateManyFilmeInputEnvelope
    set?: SessaoWhereUniqueInput | SessaoWhereUniqueInput[]
    disconnect?: SessaoWhereUniqueInput | SessaoWhereUniqueInput[]
    delete?: SessaoWhereUniqueInput | SessaoWhereUniqueInput[]
    connect?: SessaoWhereUniqueInput | SessaoWhereUniqueInput[]
    update?: SessaoUpdateWithWhereUniqueWithoutFilmeInput | SessaoUpdateWithWhereUniqueWithoutFilmeInput[]
    updateMany?: SessaoUpdateManyWithWhereWithoutFilmeInput | SessaoUpdateManyWithWhereWithoutFilmeInput[]
    deleteMany?: SessaoScalarWhereInput | SessaoScalarWhereInput[]
  }

  export type SessaoUncheckedUpdateManyWithoutFilmeNestedInput = {
    create?: XOR<SessaoCreateWithoutFilmeInput, SessaoUncheckedCreateWithoutFilmeInput> | SessaoCreateWithoutFilmeInput[] | SessaoUncheckedCreateWithoutFilmeInput[]
    connectOrCreate?: SessaoCreateOrConnectWithoutFilmeInput | SessaoCreateOrConnectWithoutFilmeInput[]
    upsert?: SessaoUpsertWithWhereUniqueWithoutFilmeInput | SessaoUpsertWithWhereUniqueWithoutFilmeInput[]
    createMany?: SessaoCreateManyFilmeInputEnvelope
    set?: SessaoWhereUniqueInput | SessaoWhereUniqueInput[]
    disconnect?: SessaoWhereUniqueInput | SessaoWhereUniqueInput[]
    delete?: SessaoWhereUniqueInput | SessaoWhereUniqueInput[]
    connect?: SessaoWhereUniqueInput | SessaoWhereUniqueInput[]
    update?: SessaoUpdateWithWhereUniqueWithoutFilmeInput | SessaoUpdateWithWhereUniqueWithoutFilmeInput[]
    updateMany?: SessaoUpdateManyWithWhereWithoutFilmeInput | SessaoUpdateManyWithWhereWithoutFilmeInput[]
    deleteMany?: SessaoScalarWhereInput | SessaoScalarWhereInput[]
  }

  export type SalaCreateNestedOneWithoutSessoesInput = {
    create?: XOR<SalaCreateWithoutSessoesInput, SalaUncheckedCreateWithoutSessoesInput>
    connectOrCreate?: SalaCreateOrConnectWithoutSessoesInput
    connect?: SalaWhereUniqueInput
  }

  export type FilmeCreateNestedOneWithoutSessoesInput = {
    create?: XOR<FilmeCreateWithoutSessoesInput, FilmeUncheckedCreateWithoutSessoesInput>
    connectOrCreate?: FilmeCreateOrConnectWithoutSessoesInput
    connect?: FilmeWhereUniqueInput
  }

  export type CinemaCreateNestedOneWithoutSessoesInput = {
    create?: XOR<CinemaCreateWithoutSessoesInput, CinemaUncheckedCreateWithoutSessoesInput>
    connectOrCreate?: CinemaCreateOrConnectWithoutSessoesInput
    connect?: CinemaWhereUniqueInput
  }

  export type IngressoCreateNestedManyWithoutSessaoInput = {
    create?: XOR<IngressoCreateWithoutSessaoInput, IngressoUncheckedCreateWithoutSessaoInput> | IngressoCreateWithoutSessaoInput[] | IngressoUncheckedCreateWithoutSessaoInput[]
    connectOrCreate?: IngressoCreateOrConnectWithoutSessaoInput | IngressoCreateOrConnectWithoutSessaoInput[]
    createMany?: IngressoCreateManySessaoInputEnvelope
    connect?: IngressoWhereUniqueInput | IngressoWhereUniqueInput[]
  }

  export type IngressoUncheckedCreateNestedManyWithoutSessaoInput = {
    create?: XOR<IngressoCreateWithoutSessaoInput, IngressoUncheckedCreateWithoutSessaoInput> | IngressoCreateWithoutSessaoInput[] | IngressoUncheckedCreateWithoutSessaoInput[]
    connectOrCreate?: IngressoCreateOrConnectWithoutSessaoInput | IngressoCreateOrConnectWithoutSessaoInput[]
    createMany?: IngressoCreateManySessaoInputEnvelope
    connect?: IngressoWhereUniqueInput | IngressoWhereUniqueInput[]
  }

  export type SalaUpdateOneRequiredWithoutSessoesNestedInput = {
    create?: XOR<SalaCreateWithoutSessoesInput, SalaUncheckedCreateWithoutSessoesInput>
    connectOrCreate?: SalaCreateOrConnectWithoutSessoesInput
    upsert?: SalaUpsertWithoutSessoesInput
    connect?: SalaWhereUniqueInput
    update?: XOR<XOR<SalaUpdateToOneWithWhereWithoutSessoesInput, SalaUpdateWithoutSessoesInput>, SalaUncheckedUpdateWithoutSessoesInput>
  }

  export type FilmeUpdateOneRequiredWithoutSessoesNestedInput = {
    create?: XOR<FilmeCreateWithoutSessoesInput, FilmeUncheckedCreateWithoutSessoesInput>
    connectOrCreate?: FilmeCreateOrConnectWithoutSessoesInput
    upsert?: FilmeUpsertWithoutSessoesInput
    connect?: FilmeWhereUniqueInput
    update?: XOR<XOR<FilmeUpdateToOneWithWhereWithoutSessoesInput, FilmeUpdateWithoutSessoesInput>, FilmeUncheckedUpdateWithoutSessoesInput>
  }

  export type CinemaUpdateOneRequiredWithoutSessoesNestedInput = {
    create?: XOR<CinemaCreateWithoutSessoesInput, CinemaUncheckedCreateWithoutSessoesInput>
    connectOrCreate?: CinemaCreateOrConnectWithoutSessoesInput
    upsert?: CinemaUpsertWithoutSessoesInput
    connect?: CinemaWhereUniqueInput
    update?: XOR<XOR<CinemaUpdateToOneWithWhereWithoutSessoesInput, CinemaUpdateWithoutSessoesInput>, CinemaUncheckedUpdateWithoutSessoesInput>
  }

  export type IngressoUpdateManyWithoutSessaoNestedInput = {
    create?: XOR<IngressoCreateWithoutSessaoInput, IngressoUncheckedCreateWithoutSessaoInput> | IngressoCreateWithoutSessaoInput[] | IngressoUncheckedCreateWithoutSessaoInput[]
    connectOrCreate?: IngressoCreateOrConnectWithoutSessaoInput | IngressoCreateOrConnectWithoutSessaoInput[]
    upsert?: IngressoUpsertWithWhereUniqueWithoutSessaoInput | IngressoUpsertWithWhereUniqueWithoutSessaoInput[]
    createMany?: IngressoCreateManySessaoInputEnvelope
    set?: IngressoWhereUniqueInput | IngressoWhereUniqueInput[]
    disconnect?: IngressoWhereUniqueInput | IngressoWhereUniqueInput[]
    delete?: IngressoWhereUniqueInput | IngressoWhereUniqueInput[]
    connect?: IngressoWhereUniqueInput | IngressoWhereUniqueInput[]
    update?: IngressoUpdateWithWhereUniqueWithoutSessaoInput | IngressoUpdateWithWhereUniqueWithoutSessaoInput[]
    updateMany?: IngressoUpdateManyWithWhereWithoutSessaoInput | IngressoUpdateManyWithWhereWithoutSessaoInput[]
    deleteMany?: IngressoScalarWhereInput | IngressoScalarWhereInput[]
  }

  export type IngressoUncheckedUpdateManyWithoutSessaoNestedInput = {
    create?: XOR<IngressoCreateWithoutSessaoInput, IngressoUncheckedCreateWithoutSessaoInput> | IngressoCreateWithoutSessaoInput[] | IngressoUncheckedCreateWithoutSessaoInput[]
    connectOrCreate?: IngressoCreateOrConnectWithoutSessaoInput | IngressoCreateOrConnectWithoutSessaoInput[]
    upsert?: IngressoUpsertWithWhereUniqueWithoutSessaoInput | IngressoUpsertWithWhereUniqueWithoutSessaoInput[]
    createMany?: IngressoCreateManySessaoInputEnvelope
    set?: IngressoWhereUniqueInput | IngressoWhereUniqueInput[]
    disconnect?: IngressoWhereUniqueInput | IngressoWhereUniqueInput[]
    delete?: IngressoWhereUniqueInput | IngressoWhereUniqueInput[]
    connect?: IngressoWhereUniqueInput | IngressoWhereUniqueInput[]
    update?: IngressoUpdateWithWhereUniqueWithoutSessaoInput | IngressoUpdateWithWhereUniqueWithoutSessaoInput[]
    updateMany?: IngressoUpdateManyWithWhereWithoutSessaoInput | IngressoUpdateManyWithWhereWithoutSessaoInput[]
    deleteMany?: IngressoScalarWhereInput | IngressoScalarWhereInput[]
  }

  export type SessaoCreateNestedOneWithoutIngressosInput = {
    create?: XOR<SessaoCreateWithoutIngressosInput, SessaoUncheckedCreateWithoutIngressosInput>
    connectOrCreate?: SessaoCreateOrConnectWithoutIngressosInput
    connect?: SessaoWhereUniqueInput
  }

  export type PedidoIngressoCreateNestedManyWithoutIngressoInput = {
    create?: XOR<PedidoIngressoCreateWithoutIngressoInput, PedidoIngressoUncheckedCreateWithoutIngressoInput> | PedidoIngressoCreateWithoutIngressoInput[] | PedidoIngressoUncheckedCreateWithoutIngressoInput[]
    connectOrCreate?: PedidoIngressoCreateOrConnectWithoutIngressoInput | PedidoIngressoCreateOrConnectWithoutIngressoInput[]
    createMany?: PedidoIngressoCreateManyIngressoInputEnvelope
    connect?: PedidoIngressoWhereUniqueInput | PedidoIngressoWhereUniqueInput[]
  }

  export type PedidoIngressoUncheckedCreateNestedManyWithoutIngressoInput = {
    create?: XOR<PedidoIngressoCreateWithoutIngressoInput, PedidoIngressoUncheckedCreateWithoutIngressoInput> | PedidoIngressoCreateWithoutIngressoInput[] | PedidoIngressoUncheckedCreateWithoutIngressoInput[]
    connectOrCreate?: PedidoIngressoCreateOrConnectWithoutIngressoInput | PedidoIngressoCreateOrConnectWithoutIngressoInput[]
    createMany?: PedidoIngressoCreateManyIngressoInputEnvelope
    connect?: PedidoIngressoWhereUniqueInput | PedidoIngressoWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SessaoUpdateOneRequiredWithoutIngressosNestedInput = {
    create?: XOR<SessaoCreateWithoutIngressosInput, SessaoUncheckedCreateWithoutIngressosInput>
    connectOrCreate?: SessaoCreateOrConnectWithoutIngressosInput
    upsert?: SessaoUpsertWithoutIngressosInput
    connect?: SessaoWhereUniqueInput
    update?: XOR<XOR<SessaoUpdateToOneWithWhereWithoutIngressosInput, SessaoUpdateWithoutIngressosInput>, SessaoUncheckedUpdateWithoutIngressosInput>
  }

  export type PedidoIngressoUpdateManyWithoutIngressoNestedInput = {
    create?: XOR<PedidoIngressoCreateWithoutIngressoInput, PedidoIngressoUncheckedCreateWithoutIngressoInput> | PedidoIngressoCreateWithoutIngressoInput[] | PedidoIngressoUncheckedCreateWithoutIngressoInput[]
    connectOrCreate?: PedidoIngressoCreateOrConnectWithoutIngressoInput | PedidoIngressoCreateOrConnectWithoutIngressoInput[]
    upsert?: PedidoIngressoUpsertWithWhereUniqueWithoutIngressoInput | PedidoIngressoUpsertWithWhereUniqueWithoutIngressoInput[]
    createMany?: PedidoIngressoCreateManyIngressoInputEnvelope
    set?: PedidoIngressoWhereUniqueInput | PedidoIngressoWhereUniqueInput[]
    disconnect?: PedidoIngressoWhereUniqueInput | PedidoIngressoWhereUniqueInput[]
    delete?: PedidoIngressoWhereUniqueInput | PedidoIngressoWhereUniqueInput[]
    connect?: PedidoIngressoWhereUniqueInput | PedidoIngressoWhereUniqueInput[]
    update?: PedidoIngressoUpdateWithWhereUniqueWithoutIngressoInput | PedidoIngressoUpdateWithWhereUniqueWithoutIngressoInput[]
    updateMany?: PedidoIngressoUpdateManyWithWhereWithoutIngressoInput | PedidoIngressoUpdateManyWithWhereWithoutIngressoInput[]
    deleteMany?: PedidoIngressoScalarWhereInput | PedidoIngressoScalarWhereInput[]
  }

  export type PedidoIngressoUncheckedUpdateManyWithoutIngressoNestedInput = {
    create?: XOR<PedidoIngressoCreateWithoutIngressoInput, PedidoIngressoUncheckedCreateWithoutIngressoInput> | PedidoIngressoCreateWithoutIngressoInput[] | PedidoIngressoUncheckedCreateWithoutIngressoInput[]
    connectOrCreate?: PedidoIngressoCreateOrConnectWithoutIngressoInput | PedidoIngressoCreateOrConnectWithoutIngressoInput[]
    upsert?: PedidoIngressoUpsertWithWhereUniqueWithoutIngressoInput | PedidoIngressoUpsertWithWhereUniqueWithoutIngressoInput[]
    createMany?: PedidoIngressoCreateManyIngressoInputEnvelope
    set?: PedidoIngressoWhereUniqueInput | PedidoIngressoWhereUniqueInput[]
    disconnect?: PedidoIngressoWhereUniqueInput | PedidoIngressoWhereUniqueInput[]
    delete?: PedidoIngressoWhereUniqueInput | PedidoIngressoWhereUniqueInput[]
    connect?: PedidoIngressoWhereUniqueInput | PedidoIngressoWhereUniqueInput[]
    update?: PedidoIngressoUpdateWithWhereUniqueWithoutIngressoInput | PedidoIngressoUpdateWithWhereUniqueWithoutIngressoInput[]
    updateMany?: PedidoIngressoUpdateManyWithWhereWithoutIngressoInput | PedidoIngressoUpdateManyWithWhereWithoutIngressoInput[]
    deleteMany?: PedidoIngressoScalarWhereInput | PedidoIngressoScalarWhereInput[]
  }

  export type PedidoLancheComboCreateNestedManyWithoutLancheComboInput = {
    create?: XOR<PedidoLancheComboCreateWithoutLancheComboInput, PedidoLancheComboUncheckedCreateWithoutLancheComboInput> | PedidoLancheComboCreateWithoutLancheComboInput[] | PedidoLancheComboUncheckedCreateWithoutLancheComboInput[]
    connectOrCreate?: PedidoLancheComboCreateOrConnectWithoutLancheComboInput | PedidoLancheComboCreateOrConnectWithoutLancheComboInput[]
    createMany?: PedidoLancheComboCreateManyLancheComboInputEnvelope
    connect?: PedidoLancheComboWhereUniqueInput | PedidoLancheComboWhereUniqueInput[]
  }

  export type PedidoLancheComboUncheckedCreateNestedManyWithoutLancheComboInput = {
    create?: XOR<PedidoLancheComboCreateWithoutLancheComboInput, PedidoLancheComboUncheckedCreateWithoutLancheComboInput> | PedidoLancheComboCreateWithoutLancheComboInput[] | PedidoLancheComboUncheckedCreateWithoutLancheComboInput[]
    connectOrCreate?: PedidoLancheComboCreateOrConnectWithoutLancheComboInput | PedidoLancheComboCreateOrConnectWithoutLancheComboInput[]
    createMany?: PedidoLancheComboCreateManyLancheComboInputEnvelope
    connect?: PedidoLancheComboWhereUniqueInput | PedidoLancheComboWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type PedidoLancheComboUpdateManyWithoutLancheComboNestedInput = {
    create?: XOR<PedidoLancheComboCreateWithoutLancheComboInput, PedidoLancheComboUncheckedCreateWithoutLancheComboInput> | PedidoLancheComboCreateWithoutLancheComboInput[] | PedidoLancheComboUncheckedCreateWithoutLancheComboInput[]
    connectOrCreate?: PedidoLancheComboCreateOrConnectWithoutLancheComboInput | PedidoLancheComboCreateOrConnectWithoutLancheComboInput[]
    upsert?: PedidoLancheComboUpsertWithWhereUniqueWithoutLancheComboInput | PedidoLancheComboUpsertWithWhereUniqueWithoutLancheComboInput[]
    createMany?: PedidoLancheComboCreateManyLancheComboInputEnvelope
    set?: PedidoLancheComboWhereUniqueInput | PedidoLancheComboWhereUniqueInput[]
    disconnect?: PedidoLancheComboWhereUniqueInput | PedidoLancheComboWhereUniqueInput[]
    delete?: PedidoLancheComboWhereUniqueInput | PedidoLancheComboWhereUniqueInput[]
    connect?: PedidoLancheComboWhereUniqueInput | PedidoLancheComboWhereUniqueInput[]
    update?: PedidoLancheComboUpdateWithWhereUniqueWithoutLancheComboInput | PedidoLancheComboUpdateWithWhereUniqueWithoutLancheComboInput[]
    updateMany?: PedidoLancheComboUpdateManyWithWhereWithoutLancheComboInput | PedidoLancheComboUpdateManyWithWhereWithoutLancheComboInput[]
    deleteMany?: PedidoLancheComboScalarWhereInput | PedidoLancheComboScalarWhereInput[]
  }

  export type PedidoLancheComboUncheckedUpdateManyWithoutLancheComboNestedInput = {
    create?: XOR<PedidoLancheComboCreateWithoutLancheComboInput, PedidoLancheComboUncheckedCreateWithoutLancheComboInput> | PedidoLancheComboCreateWithoutLancheComboInput[] | PedidoLancheComboUncheckedCreateWithoutLancheComboInput[]
    connectOrCreate?: PedidoLancheComboCreateOrConnectWithoutLancheComboInput | PedidoLancheComboCreateOrConnectWithoutLancheComboInput[]
    upsert?: PedidoLancheComboUpsertWithWhereUniqueWithoutLancheComboInput | PedidoLancheComboUpsertWithWhereUniqueWithoutLancheComboInput[]
    createMany?: PedidoLancheComboCreateManyLancheComboInputEnvelope
    set?: PedidoLancheComboWhereUniqueInput | PedidoLancheComboWhereUniqueInput[]
    disconnect?: PedidoLancheComboWhereUniqueInput | PedidoLancheComboWhereUniqueInput[]
    delete?: PedidoLancheComboWhereUniqueInput | PedidoLancheComboWhereUniqueInput[]
    connect?: PedidoLancheComboWhereUniqueInput | PedidoLancheComboWhereUniqueInput[]
    update?: PedidoLancheComboUpdateWithWhereUniqueWithoutLancheComboInput | PedidoLancheComboUpdateWithWhereUniqueWithoutLancheComboInput[]
    updateMany?: PedidoLancheComboUpdateManyWithWhereWithoutLancheComboInput | PedidoLancheComboUpdateManyWithWhereWithoutLancheComboInput[]
    deleteMany?: PedidoLancheComboScalarWhereInput | PedidoLancheComboScalarWhereInput[]
  }

  export type PedidoIngressoCreateNestedManyWithoutPedidoInput = {
    create?: XOR<PedidoIngressoCreateWithoutPedidoInput, PedidoIngressoUncheckedCreateWithoutPedidoInput> | PedidoIngressoCreateWithoutPedidoInput[] | PedidoIngressoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: PedidoIngressoCreateOrConnectWithoutPedidoInput | PedidoIngressoCreateOrConnectWithoutPedidoInput[]
    createMany?: PedidoIngressoCreateManyPedidoInputEnvelope
    connect?: PedidoIngressoWhereUniqueInput | PedidoIngressoWhereUniqueInput[]
  }

  export type PedidoLancheComboCreateNestedManyWithoutPedidoInput = {
    create?: XOR<PedidoLancheComboCreateWithoutPedidoInput, PedidoLancheComboUncheckedCreateWithoutPedidoInput> | PedidoLancheComboCreateWithoutPedidoInput[] | PedidoLancheComboUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: PedidoLancheComboCreateOrConnectWithoutPedidoInput | PedidoLancheComboCreateOrConnectWithoutPedidoInput[]
    createMany?: PedidoLancheComboCreateManyPedidoInputEnvelope
    connect?: PedidoLancheComboWhereUniqueInput | PedidoLancheComboWhereUniqueInput[]
  }

  export type PedidoIngressoUncheckedCreateNestedManyWithoutPedidoInput = {
    create?: XOR<PedidoIngressoCreateWithoutPedidoInput, PedidoIngressoUncheckedCreateWithoutPedidoInput> | PedidoIngressoCreateWithoutPedidoInput[] | PedidoIngressoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: PedidoIngressoCreateOrConnectWithoutPedidoInput | PedidoIngressoCreateOrConnectWithoutPedidoInput[]
    createMany?: PedidoIngressoCreateManyPedidoInputEnvelope
    connect?: PedidoIngressoWhereUniqueInput | PedidoIngressoWhereUniqueInput[]
  }

  export type PedidoLancheComboUncheckedCreateNestedManyWithoutPedidoInput = {
    create?: XOR<PedidoLancheComboCreateWithoutPedidoInput, PedidoLancheComboUncheckedCreateWithoutPedidoInput> | PedidoLancheComboCreateWithoutPedidoInput[] | PedidoLancheComboUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: PedidoLancheComboCreateOrConnectWithoutPedidoInput | PedidoLancheComboCreateOrConnectWithoutPedidoInput[]
    createMany?: PedidoLancheComboCreateManyPedidoInputEnvelope
    connect?: PedidoLancheComboWhereUniqueInput | PedidoLancheComboWhereUniqueInput[]
  }

  export type PedidoIngressoUpdateManyWithoutPedidoNestedInput = {
    create?: XOR<PedidoIngressoCreateWithoutPedidoInput, PedidoIngressoUncheckedCreateWithoutPedidoInput> | PedidoIngressoCreateWithoutPedidoInput[] | PedidoIngressoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: PedidoIngressoCreateOrConnectWithoutPedidoInput | PedidoIngressoCreateOrConnectWithoutPedidoInput[]
    upsert?: PedidoIngressoUpsertWithWhereUniqueWithoutPedidoInput | PedidoIngressoUpsertWithWhereUniqueWithoutPedidoInput[]
    createMany?: PedidoIngressoCreateManyPedidoInputEnvelope
    set?: PedidoIngressoWhereUniqueInput | PedidoIngressoWhereUniqueInput[]
    disconnect?: PedidoIngressoWhereUniqueInput | PedidoIngressoWhereUniqueInput[]
    delete?: PedidoIngressoWhereUniqueInput | PedidoIngressoWhereUniqueInput[]
    connect?: PedidoIngressoWhereUniqueInput | PedidoIngressoWhereUniqueInput[]
    update?: PedidoIngressoUpdateWithWhereUniqueWithoutPedidoInput | PedidoIngressoUpdateWithWhereUniqueWithoutPedidoInput[]
    updateMany?: PedidoIngressoUpdateManyWithWhereWithoutPedidoInput | PedidoIngressoUpdateManyWithWhereWithoutPedidoInput[]
    deleteMany?: PedidoIngressoScalarWhereInput | PedidoIngressoScalarWhereInput[]
  }

  export type PedidoLancheComboUpdateManyWithoutPedidoNestedInput = {
    create?: XOR<PedidoLancheComboCreateWithoutPedidoInput, PedidoLancheComboUncheckedCreateWithoutPedidoInput> | PedidoLancheComboCreateWithoutPedidoInput[] | PedidoLancheComboUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: PedidoLancheComboCreateOrConnectWithoutPedidoInput | PedidoLancheComboCreateOrConnectWithoutPedidoInput[]
    upsert?: PedidoLancheComboUpsertWithWhereUniqueWithoutPedidoInput | PedidoLancheComboUpsertWithWhereUniqueWithoutPedidoInput[]
    createMany?: PedidoLancheComboCreateManyPedidoInputEnvelope
    set?: PedidoLancheComboWhereUniqueInput | PedidoLancheComboWhereUniqueInput[]
    disconnect?: PedidoLancheComboWhereUniqueInput | PedidoLancheComboWhereUniqueInput[]
    delete?: PedidoLancheComboWhereUniqueInput | PedidoLancheComboWhereUniqueInput[]
    connect?: PedidoLancheComboWhereUniqueInput | PedidoLancheComboWhereUniqueInput[]
    update?: PedidoLancheComboUpdateWithWhereUniqueWithoutPedidoInput | PedidoLancheComboUpdateWithWhereUniqueWithoutPedidoInput[]
    updateMany?: PedidoLancheComboUpdateManyWithWhereWithoutPedidoInput | PedidoLancheComboUpdateManyWithWhereWithoutPedidoInput[]
    deleteMany?: PedidoLancheComboScalarWhereInput | PedidoLancheComboScalarWhereInput[]
  }

  export type PedidoIngressoUncheckedUpdateManyWithoutPedidoNestedInput = {
    create?: XOR<PedidoIngressoCreateWithoutPedidoInput, PedidoIngressoUncheckedCreateWithoutPedidoInput> | PedidoIngressoCreateWithoutPedidoInput[] | PedidoIngressoUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: PedidoIngressoCreateOrConnectWithoutPedidoInput | PedidoIngressoCreateOrConnectWithoutPedidoInput[]
    upsert?: PedidoIngressoUpsertWithWhereUniqueWithoutPedidoInput | PedidoIngressoUpsertWithWhereUniqueWithoutPedidoInput[]
    createMany?: PedidoIngressoCreateManyPedidoInputEnvelope
    set?: PedidoIngressoWhereUniqueInput | PedidoIngressoWhereUniqueInput[]
    disconnect?: PedidoIngressoWhereUniqueInput | PedidoIngressoWhereUniqueInput[]
    delete?: PedidoIngressoWhereUniqueInput | PedidoIngressoWhereUniqueInput[]
    connect?: PedidoIngressoWhereUniqueInput | PedidoIngressoWhereUniqueInput[]
    update?: PedidoIngressoUpdateWithWhereUniqueWithoutPedidoInput | PedidoIngressoUpdateWithWhereUniqueWithoutPedidoInput[]
    updateMany?: PedidoIngressoUpdateManyWithWhereWithoutPedidoInput | PedidoIngressoUpdateManyWithWhereWithoutPedidoInput[]
    deleteMany?: PedidoIngressoScalarWhereInput | PedidoIngressoScalarWhereInput[]
  }

  export type PedidoLancheComboUncheckedUpdateManyWithoutPedidoNestedInput = {
    create?: XOR<PedidoLancheComboCreateWithoutPedidoInput, PedidoLancheComboUncheckedCreateWithoutPedidoInput> | PedidoLancheComboCreateWithoutPedidoInput[] | PedidoLancheComboUncheckedCreateWithoutPedidoInput[]
    connectOrCreate?: PedidoLancheComboCreateOrConnectWithoutPedidoInput | PedidoLancheComboCreateOrConnectWithoutPedidoInput[]
    upsert?: PedidoLancheComboUpsertWithWhereUniqueWithoutPedidoInput | PedidoLancheComboUpsertWithWhereUniqueWithoutPedidoInput[]
    createMany?: PedidoLancheComboCreateManyPedidoInputEnvelope
    set?: PedidoLancheComboWhereUniqueInput | PedidoLancheComboWhereUniqueInput[]
    disconnect?: PedidoLancheComboWhereUniqueInput | PedidoLancheComboWhereUniqueInput[]
    delete?: PedidoLancheComboWhereUniqueInput | PedidoLancheComboWhereUniqueInput[]
    connect?: PedidoLancheComboWhereUniqueInput | PedidoLancheComboWhereUniqueInput[]
    update?: PedidoLancheComboUpdateWithWhereUniqueWithoutPedidoInput | PedidoLancheComboUpdateWithWhereUniqueWithoutPedidoInput[]
    updateMany?: PedidoLancheComboUpdateManyWithWhereWithoutPedidoInput | PedidoLancheComboUpdateManyWithWhereWithoutPedidoInput[]
    deleteMany?: PedidoLancheComboScalarWhereInput | PedidoLancheComboScalarWhereInput[]
  }

  export type PedidoCreateNestedOneWithoutIngressosInput = {
    create?: XOR<PedidoCreateWithoutIngressosInput, PedidoUncheckedCreateWithoutIngressosInput>
    connectOrCreate?: PedidoCreateOrConnectWithoutIngressosInput
    connect?: PedidoWhereUniqueInput
  }

  export type IngressoCreateNestedOneWithoutPedidosInput = {
    create?: XOR<IngressoCreateWithoutPedidosInput, IngressoUncheckedCreateWithoutPedidosInput>
    connectOrCreate?: IngressoCreateOrConnectWithoutPedidosInput
    connect?: IngressoWhereUniqueInput
  }

  export type PedidoUpdateOneRequiredWithoutIngressosNestedInput = {
    create?: XOR<PedidoCreateWithoutIngressosInput, PedidoUncheckedCreateWithoutIngressosInput>
    connectOrCreate?: PedidoCreateOrConnectWithoutIngressosInput
    upsert?: PedidoUpsertWithoutIngressosInput
    connect?: PedidoWhereUniqueInput
    update?: XOR<XOR<PedidoUpdateToOneWithWhereWithoutIngressosInput, PedidoUpdateWithoutIngressosInput>, PedidoUncheckedUpdateWithoutIngressosInput>
  }

  export type IngressoUpdateOneRequiredWithoutPedidosNestedInput = {
    create?: XOR<IngressoCreateWithoutPedidosInput, IngressoUncheckedCreateWithoutPedidosInput>
    connectOrCreate?: IngressoCreateOrConnectWithoutPedidosInput
    upsert?: IngressoUpsertWithoutPedidosInput
    connect?: IngressoWhereUniqueInput
    update?: XOR<XOR<IngressoUpdateToOneWithWhereWithoutPedidosInput, IngressoUpdateWithoutPedidosInput>, IngressoUncheckedUpdateWithoutPedidosInput>
  }

  export type PedidoCreateNestedOneWithoutLancheCombosInput = {
    create?: XOR<PedidoCreateWithoutLancheCombosInput, PedidoUncheckedCreateWithoutLancheCombosInput>
    connectOrCreate?: PedidoCreateOrConnectWithoutLancheCombosInput
    connect?: PedidoWhereUniqueInput
  }

  export type LancheComboCreateNestedOneWithoutPedidosInput = {
    create?: XOR<LancheComboCreateWithoutPedidosInput, LancheComboUncheckedCreateWithoutPedidosInput>
    connectOrCreate?: LancheComboCreateOrConnectWithoutPedidosInput
    connect?: LancheComboWhereUniqueInput
  }

  export type PedidoUpdateOneRequiredWithoutLancheCombosNestedInput = {
    create?: XOR<PedidoCreateWithoutLancheCombosInput, PedidoUncheckedCreateWithoutLancheCombosInput>
    connectOrCreate?: PedidoCreateOrConnectWithoutLancheCombosInput
    upsert?: PedidoUpsertWithoutLancheCombosInput
    connect?: PedidoWhereUniqueInput
    update?: XOR<XOR<PedidoUpdateToOneWithWhereWithoutLancheCombosInput, PedidoUpdateWithoutLancheCombosInput>, PedidoUncheckedUpdateWithoutLancheCombosInput>
  }

  export type LancheComboUpdateOneRequiredWithoutPedidosNestedInput = {
    create?: XOR<LancheComboCreateWithoutPedidosInput, LancheComboUncheckedCreateWithoutPedidosInput>
    connectOrCreate?: LancheComboCreateOrConnectWithoutPedidosInput
    upsert?: LancheComboUpsertWithoutPedidosInput
    connect?: LancheComboWhereUniqueInput
    update?: XOR<XOR<LancheComboUpdateToOneWithWhereWithoutPedidosInput, LancheComboUpdateWithoutPedidosInput>, LancheComboUncheckedUpdateWithoutPedidosInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type SalaCreateWithoutCinemaInput = {
    numero: number
    capacidade: number
    sessoes?: SessaoCreateNestedManyWithoutSalaInput
  }

  export type SalaUncheckedCreateWithoutCinemaInput = {
    id?: number
    numero: number
    capacidade: number
    sessoes?: SessaoUncheckedCreateNestedManyWithoutSalaInput
  }

  export type SalaCreateOrConnectWithoutCinemaInput = {
    where: SalaWhereUniqueInput
    create: XOR<SalaCreateWithoutCinemaInput, SalaUncheckedCreateWithoutCinemaInput>
  }

  export type SalaCreateManyCinemaInputEnvelope = {
    data: SalaCreateManyCinemaInput | SalaCreateManyCinemaInput[]
    skipDuplicates?: boolean
  }

  export type SessaoCreateWithoutCinemaInput = {
    horario: Date | string
    sala: SalaCreateNestedOneWithoutSessoesInput
    filme: FilmeCreateNestedOneWithoutSessoesInput
    ingressos?: IngressoCreateNestedManyWithoutSessaoInput
  }

  export type SessaoUncheckedCreateWithoutCinemaInput = {
    id?: number
    horario: Date | string
    salaId: number
    filmeId: number
    ingressos?: IngressoUncheckedCreateNestedManyWithoutSessaoInput
  }

  export type SessaoCreateOrConnectWithoutCinemaInput = {
    where: SessaoWhereUniqueInput
    create: XOR<SessaoCreateWithoutCinemaInput, SessaoUncheckedCreateWithoutCinemaInput>
  }

  export type SessaoCreateManyCinemaInputEnvelope = {
    data: SessaoCreateManyCinemaInput | SessaoCreateManyCinemaInput[]
    skipDuplicates?: boolean
  }

  export type SalaUpsertWithWhereUniqueWithoutCinemaInput = {
    where: SalaWhereUniqueInput
    update: XOR<SalaUpdateWithoutCinemaInput, SalaUncheckedUpdateWithoutCinemaInput>
    create: XOR<SalaCreateWithoutCinemaInput, SalaUncheckedCreateWithoutCinemaInput>
  }

  export type SalaUpdateWithWhereUniqueWithoutCinemaInput = {
    where: SalaWhereUniqueInput
    data: XOR<SalaUpdateWithoutCinemaInput, SalaUncheckedUpdateWithoutCinemaInput>
  }

  export type SalaUpdateManyWithWhereWithoutCinemaInput = {
    where: SalaScalarWhereInput
    data: XOR<SalaUpdateManyMutationInput, SalaUncheckedUpdateManyWithoutCinemaInput>
  }

  export type SalaScalarWhereInput = {
    AND?: SalaScalarWhereInput | SalaScalarWhereInput[]
    OR?: SalaScalarWhereInput[]
    NOT?: SalaScalarWhereInput | SalaScalarWhereInput[]
    id?: IntFilter<"Sala"> | number
    numero?: IntFilter<"Sala"> | number
    capacidade?: IntFilter<"Sala"> | number
    cinemaId?: IntFilter<"Sala"> | number
  }

  export type SessaoUpsertWithWhereUniqueWithoutCinemaInput = {
    where: SessaoWhereUniqueInput
    update: XOR<SessaoUpdateWithoutCinemaInput, SessaoUncheckedUpdateWithoutCinemaInput>
    create: XOR<SessaoCreateWithoutCinemaInput, SessaoUncheckedCreateWithoutCinemaInput>
  }

  export type SessaoUpdateWithWhereUniqueWithoutCinemaInput = {
    where: SessaoWhereUniqueInput
    data: XOR<SessaoUpdateWithoutCinemaInput, SessaoUncheckedUpdateWithoutCinemaInput>
  }

  export type SessaoUpdateManyWithWhereWithoutCinemaInput = {
    where: SessaoScalarWhereInput
    data: XOR<SessaoUpdateManyMutationInput, SessaoUncheckedUpdateManyWithoutCinemaInput>
  }

  export type SessaoScalarWhereInput = {
    AND?: SessaoScalarWhereInput | SessaoScalarWhereInput[]
    OR?: SessaoScalarWhereInput[]
    NOT?: SessaoScalarWhereInput | SessaoScalarWhereInput[]
    id?: IntFilter<"Sessao"> | number
    horario?: DateTimeFilter<"Sessao"> | Date | string
    salaId?: IntFilter<"Sessao"> | number
    filmeId?: IntFilter<"Sessao"> | number
    cinemaId?: IntFilter<"Sessao"> | number
  }

  export type CinemaCreateWithoutSalasInput = {
    nome: string
    localizacao: string
    sessoes?: SessaoCreateNestedManyWithoutCinemaInput
  }

  export type CinemaUncheckedCreateWithoutSalasInput = {
    id?: number
    nome: string
    localizacao: string
    sessoes?: SessaoUncheckedCreateNestedManyWithoutCinemaInput
  }

  export type CinemaCreateOrConnectWithoutSalasInput = {
    where: CinemaWhereUniqueInput
    create: XOR<CinemaCreateWithoutSalasInput, CinemaUncheckedCreateWithoutSalasInput>
  }

  export type SessaoCreateWithoutSalaInput = {
    horario: Date | string
    filme: FilmeCreateNestedOneWithoutSessoesInput
    cinema: CinemaCreateNestedOneWithoutSessoesInput
    ingressos?: IngressoCreateNestedManyWithoutSessaoInput
  }

  export type SessaoUncheckedCreateWithoutSalaInput = {
    id?: number
    horario: Date | string
    filmeId: number
    cinemaId: number
    ingressos?: IngressoUncheckedCreateNestedManyWithoutSessaoInput
  }

  export type SessaoCreateOrConnectWithoutSalaInput = {
    where: SessaoWhereUniqueInput
    create: XOR<SessaoCreateWithoutSalaInput, SessaoUncheckedCreateWithoutSalaInput>
  }

  export type SessaoCreateManySalaInputEnvelope = {
    data: SessaoCreateManySalaInput | SessaoCreateManySalaInput[]
    skipDuplicates?: boolean
  }

  export type CinemaUpsertWithoutSalasInput = {
    update: XOR<CinemaUpdateWithoutSalasInput, CinemaUncheckedUpdateWithoutSalasInput>
    create: XOR<CinemaCreateWithoutSalasInput, CinemaUncheckedCreateWithoutSalasInput>
    where?: CinemaWhereInput
  }

  export type CinemaUpdateToOneWithWhereWithoutSalasInput = {
    where?: CinemaWhereInput
    data: XOR<CinemaUpdateWithoutSalasInput, CinemaUncheckedUpdateWithoutSalasInput>
  }

  export type CinemaUpdateWithoutSalasInput = {
    nome?: StringFieldUpdateOperationsInput | string
    localizacao?: StringFieldUpdateOperationsInput | string
    sessoes?: SessaoUpdateManyWithoutCinemaNestedInput
  }

  export type CinemaUncheckedUpdateWithoutSalasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    localizacao?: StringFieldUpdateOperationsInput | string
    sessoes?: SessaoUncheckedUpdateManyWithoutCinemaNestedInput
  }

  export type SessaoUpsertWithWhereUniqueWithoutSalaInput = {
    where: SessaoWhereUniqueInput
    update: XOR<SessaoUpdateWithoutSalaInput, SessaoUncheckedUpdateWithoutSalaInput>
    create: XOR<SessaoCreateWithoutSalaInput, SessaoUncheckedCreateWithoutSalaInput>
  }

  export type SessaoUpdateWithWhereUniqueWithoutSalaInput = {
    where: SessaoWhereUniqueInput
    data: XOR<SessaoUpdateWithoutSalaInput, SessaoUncheckedUpdateWithoutSalaInput>
  }

  export type SessaoUpdateManyWithWhereWithoutSalaInput = {
    where: SessaoScalarWhereInput
    data: XOR<SessaoUpdateManyMutationInput, SessaoUncheckedUpdateManyWithoutSalaInput>
  }

  export type SessaoCreateWithoutFilmeInput = {
    horario: Date | string
    sala: SalaCreateNestedOneWithoutSessoesInput
    cinema: CinemaCreateNestedOneWithoutSessoesInput
    ingressos?: IngressoCreateNestedManyWithoutSessaoInput
  }

  export type SessaoUncheckedCreateWithoutFilmeInput = {
    id?: number
    horario: Date | string
    salaId: number
    cinemaId: number
    ingressos?: IngressoUncheckedCreateNestedManyWithoutSessaoInput
  }

  export type SessaoCreateOrConnectWithoutFilmeInput = {
    where: SessaoWhereUniqueInput
    create: XOR<SessaoCreateWithoutFilmeInput, SessaoUncheckedCreateWithoutFilmeInput>
  }

  export type SessaoCreateManyFilmeInputEnvelope = {
    data: SessaoCreateManyFilmeInput | SessaoCreateManyFilmeInput[]
    skipDuplicates?: boolean
  }

  export type SessaoUpsertWithWhereUniqueWithoutFilmeInput = {
    where: SessaoWhereUniqueInput
    update: XOR<SessaoUpdateWithoutFilmeInput, SessaoUncheckedUpdateWithoutFilmeInput>
    create: XOR<SessaoCreateWithoutFilmeInput, SessaoUncheckedCreateWithoutFilmeInput>
  }

  export type SessaoUpdateWithWhereUniqueWithoutFilmeInput = {
    where: SessaoWhereUniqueInput
    data: XOR<SessaoUpdateWithoutFilmeInput, SessaoUncheckedUpdateWithoutFilmeInput>
  }

  export type SessaoUpdateManyWithWhereWithoutFilmeInput = {
    where: SessaoScalarWhereInput
    data: XOR<SessaoUpdateManyMutationInput, SessaoUncheckedUpdateManyWithoutFilmeInput>
  }

  export type SalaCreateWithoutSessoesInput = {
    numero: number
    capacidade: number
    cinema: CinemaCreateNestedOneWithoutSalasInput
  }

  export type SalaUncheckedCreateWithoutSessoesInput = {
    id?: number
    numero: number
    capacidade: number
    cinemaId: number
  }

  export type SalaCreateOrConnectWithoutSessoesInput = {
    where: SalaWhereUniqueInput
    create: XOR<SalaCreateWithoutSessoesInput, SalaUncheckedCreateWithoutSessoesInput>
  }

  export type FilmeCreateWithoutSessoesInput = {
    titulo: string
    genero: string
    duracao: number
    dataLancamento: Date | string
  }

  export type FilmeUncheckedCreateWithoutSessoesInput = {
    id?: number
    titulo: string
    genero: string
    duracao: number
    dataLancamento: Date | string
  }

  export type FilmeCreateOrConnectWithoutSessoesInput = {
    where: FilmeWhereUniqueInput
    create: XOR<FilmeCreateWithoutSessoesInput, FilmeUncheckedCreateWithoutSessoesInput>
  }

  export type CinemaCreateWithoutSessoesInput = {
    nome: string
    localizacao: string
    salas?: SalaCreateNestedManyWithoutCinemaInput
  }

  export type CinemaUncheckedCreateWithoutSessoesInput = {
    id?: number
    nome: string
    localizacao: string
    salas?: SalaUncheckedCreateNestedManyWithoutCinemaInput
  }

  export type CinemaCreateOrConnectWithoutSessoesInput = {
    where: CinemaWhereUniqueInput
    create: XOR<CinemaCreateWithoutSessoesInput, CinemaUncheckedCreateWithoutSessoesInput>
  }

  export type IngressoCreateWithoutSessaoInput = {
    preco: number
    pedidos?: PedidoIngressoCreateNestedManyWithoutIngressoInput
  }

  export type IngressoUncheckedCreateWithoutSessaoInput = {
    id?: number
    preco: number
    pedidos?: PedidoIngressoUncheckedCreateNestedManyWithoutIngressoInput
  }

  export type IngressoCreateOrConnectWithoutSessaoInput = {
    where: IngressoWhereUniqueInput
    create: XOR<IngressoCreateWithoutSessaoInput, IngressoUncheckedCreateWithoutSessaoInput>
  }

  export type IngressoCreateManySessaoInputEnvelope = {
    data: IngressoCreateManySessaoInput | IngressoCreateManySessaoInput[]
    skipDuplicates?: boolean
  }

  export type SalaUpsertWithoutSessoesInput = {
    update: XOR<SalaUpdateWithoutSessoesInput, SalaUncheckedUpdateWithoutSessoesInput>
    create: XOR<SalaCreateWithoutSessoesInput, SalaUncheckedCreateWithoutSessoesInput>
    where?: SalaWhereInput
  }

  export type SalaUpdateToOneWithWhereWithoutSessoesInput = {
    where?: SalaWhereInput
    data: XOR<SalaUpdateWithoutSessoesInput, SalaUncheckedUpdateWithoutSessoesInput>
  }

  export type SalaUpdateWithoutSessoesInput = {
    numero?: IntFieldUpdateOperationsInput | number
    capacidade?: IntFieldUpdateOperationsInput | number
    cinema?: CinemaUpdateOneRequiredWithoutSalasNestedInput
  }

  export type SalaUncheckedUpdateWithoutSessoesInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero?: IntFieldUpdateOperationsInput | number
    capacidade?: IntFieldUpdateOperationsInput | number
    cinemaId?: IntFieldUpdateOperationsInput | number
  }

  export type FilmeUpsertWithoutSessoesInput = {
    update: XOR<FilmeUpdateWithoutSessoesInput, FilmeUncheckedUpdateWithoutSessoesInput>
    create: XOR<FilmeCreateWithoutSessoesInput, FilmeUncheckedCreateWithoutSessoesInput>
    where?: FilmeWhereInput
  }

  export type FilmeUpdateToOneWithWhereWithoutSessoesInput = {
    where?: FilmeWhereInput
    data: XOR<FilmeUpdateWithoutSessoesInput, FilmeUncheckedUpdateWithoutSessoesInput>
  }

  export type FilmeUpdateWithoutSessoesInput = {
    titulo?: StringFieldUpdateOperationsInput | string
    genero?: StringFieldUpdateOperationsInput | string
    duracao?: IntFieldUpdateOperationsInput | number
    dataLancamento?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FilmeUncheckedUpdateWithoutSessoesInput = {
    id?: IntFieldUpdateOperationsInput | number
    titulo?: StringFieldUpdateOperationsInput | string
    genero?: StringFieldUpdateOperationsInput | string
    duracao?: IntFieldUpdateOperationsInput | number
    dataLancamento?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CinemaUpsertWithoutSessoesInput = {
    update: XOR<CinemaUpdateWithoutSessoesInput, CinemaUncheckedUpdateWithoutSessoesInput>
    create: XOR<CinemaCreateWithoutSessoesInput, CinemaUncheckedCreateWithoutSessoesInput>
    where?: CinemaWhereInput
  }

  export type CinemaUpdateToOneWithWhereWithoutSessoesInput = {
    where?: CinemaWhereInput
    data: XOR<CinemaUpdateWithoutSessoesInput, CinemaUncheckedUpdateWithoutSessoesInput>
  }

  export type CinemaUpdateWithoutSessoesInput = {
    nome?: StringFieldUpdateOperationsInput | string
    localizacao?: StringFieldUpdateOperationsInput | string
    salas?: SalaUpdateManyWithoutCinemaNestedInput
  }

  export type CinemaUncheckedUpdateWithoutSessoesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    localizacao?: StringFieldUpdateOperationsInput | string
    salas?: SalaUncheckedUpdateManyWithoutCinemaNestedInput
  }

  export type IngressoUpsertWithWhereUniqueWithoutSessaoInput = {
    where: IngressoWhereUniqueInput
    update: XOR<IngressoUpdateWithoutSessaoInput, IngressoUncheckedUpdateWithoutSessaoInput>
    create: XOR<IngressoCreateWithoutSessaoInput, IngressoUncheckedCreateWithoutSessaoInput>
  }

  export type IngressoUpdateWithWhereUniqueWithoutSessaoInput = {
    where: IngressoWhereUniqueInput
    data: XOR<IngressoUpdateWithoutSessaoInput, IngressoUncheckedUpdateWithoutSessaoInput>
  }

  export type IngressoUpdateManyWithWhereWithoutSessaoInput = {
    where: IngressoScalarWhereInput
    data: XOR<IngressoUpdateManyMutationInput, IngressoUncheckedUpdateManyWithoutSessaoInput>
  }

  export type IngressoScalarWhereInput = {
    AND?: IngressoScalarWhereInput | IngressoScalarWhereInput[]
    OR?: IngressoScalarWhereInput[]
    NOT?: IngressoScalarWhereInput | IngressoScalarWhereInput[]
    id?: IntFilter<"Ingresso"> | number
    preco?: FloatFilter<"Ingresso"> | number
    sessaoId?: IntFilter<"Ingresso"> | number
  }

  export type SessaoCreateWithoutIngressosInput = {
    horario: Date | string
    sala: SalaCreateNestedOneWithoutSessoesInput
    filme: FilmeCreateNestedOneWithoutSessoesInput
    cinema: CinemaCreateNestedOneWithoutSessoesInput
  }

  export type SessaoUncheckedCreateWithoutIngressosInput = {
    id?: number
    horario: Date | string
    salaId: number
    filmeId: number
    cinemaId: number
  }

  export type SessaoCreateOrConnectWithoutIngressosInput = {
    where: SessaoWhereUniqueInput
    create: XOR<SessaoCreateWithoutIngressosInput, SessaoUncheckedCreateWithoutIngressosInput>
  }

  export type PedidoIngressoCreateWithoutIngressoInput = {
    pedido: PedidoCreateNestedOneWithoutIngressosInput
  }

  export type PedidoIngressoUncheckedCreateWithoutIngressoInput = {
    id?: number
    pedidoId: number
  }

  export type PedidoIngressoCreateOrConnectWithoutIngressoInput = {
    where: PedidoIngressoWhereUniqueInput
    create: XOR<PedidoIngressoCreateWithoutIngressoInput, PedidoIngressoUncheckedCreateWithoutIngressoInput>
  }

  export type PedidoIngressoCreateManyIngressoInputEnvelope = {
    data: PedidoIngressoCreateManyIngressoInput | PedidoIngressoCreateManyIngressoInput[]
    skipDuplicates?: boolean
  }

  export type SessaoUpsertWithoutIngressosInput = {
    update: XOR<SessaoUpdateWithoutIngressosInput, SessaoUncheckedUpdateWithoutIngressosInput>
    create: XOR<SessaoCreateWithoutIngressosInput, SessaoUncheckedCreateWithoutIngressosInput>
    where?: SessaoWhereInput
  }

  export type SessaoUpdateToOneWithWhereWithoutIngressosInput = {
    where?: SessaoWhereInput
    data: XOR<SessaoUpdateWithoutIngressosInput, SessaoUncheckedUpdateWithoutIngressosInput>
  }

  export type SessaoUpdateWithoutIngressosInput = {
    horario?: DateTimeFieldUpdateOperationsInput | Date | string
    sala?: SalaUpdateOneRequiredWithoutSessoesNestedInput
    filme?: FilmeUpdateOneRequiredWithoutSessoesNestedInput
    cinema?: CinemaUpdateOneRequiredWithoutSessoesNestedInput
  }

  export type SessaoUncheckedUpdateWithoutIngressosInput = {
    id?: IntFieldUpdateOperationsInput | number
    horario?: DateTimeFieldUpdateOperationsInput | Date | string
    salaId?: IntFieldUpdateOperationsInput | number
    filmeId?: IntFieldUpdateOperationsInput | number
    cinemaId?: IntFieldUpdateOperationsInput | number
  }

  export type PedidoIngressoUpsertWithWhereUniqueWithoutIngressoInput = {
    where: PedidoIngressoWhereUniqueInput
    update: XOR<PedidoIngressoUpdateWithoutIngressoInput, PedidoIngressoUncheckedUpdateWithoutIngressoInput>
    create: XOR<PedidoIngressoCreateWithoutIngressoInput, PedidoIngressoUncheckedCreateWithoutIngressoInput>
  }

  export type PedidoIngressoUpdateWithWhereUniqueWithoutIngressoInput = {
    where: PedidoIngressoWhereUniqueInput
    data: XOR<PedidoIngressoUpdateWithoutIngressoInput, PedidoIngressoUncheckedUpdateWithoutIngressoInput>
  }

  export type PedidoIngressoUpdateManyWithWhereWithoutIngressoInput = {
    where: PedidoIngressoScalarWhereInput
    data: XOR<PedidoIngressoUpdateManyMutationInput, PedidoIngressoUncheckedUpdateManyWithoutIngressoInput>
  }

  export type PedidoIngressoScalarWhereInput = {
    AND?: PedidoIngressoScalarWhereInput | PedidoIngressoScalarWhereInput[]
    OR?: PedidoIngressoScalarWhereInput[]
    NOT?: PedidoIngressoScalarWhereInput | PedidoIngressoScalarWhereInput[]
    id?: IntFilter<"PedidoIngresso"> | number
    pedidoId?: IntFilter<"PedidoIngresso"> | number
    ingressoId?: IntFilter<"PedidoIngresso"> | number
  }

  export type PedidoLancheComboCreateWithoutLancheComboInput = {
    pedido: PedidoCreateNestedOneWithoutLancheCombosInput
  }

  export type PedidoLancheComboUncheckedCreateWithoutLancheComboInput = {
    id?: number
    pedidoId: number
  }

  export type PedidoLancheComboCreateOrConnectWithoutLancheComboInput = {
    where: PedidoLancheComboWhereUniqueInput
    create: XOR<PedidoLancheComboCreateWithoutLancheComboInput, PedidoLancheComboUncheckedCreateWithoutLancheComboInput>
  }

  export type PedidoLancheComboCreateManyLancheComboInputEnvelope = {
    data: PedidoLancheComboCreateManyLancheComboInput | PedidoLancheComboCreateManyLancheComboInput[]
    skipDuplicates?: boolean
  }

  export type PedidoLancheComboUpsertWithWhereUniqueWithoutLancheComboInput = {
    where: PedidoLancheComboWhereUniqueInput
    update: XOR<PedidoLancheComboUpdateWithoutLancheComboInput, PedidoLancheComboUncheckedUpdateWithoutLancheComboInput>
    create: XOR<PedidoLancheComboCreateWithoutLancheComboInput, PedidoLancheComboUncheckedCreateWithoutLancheComboInput>
  }

  export type PedidoLancheComboUpdateWithWhereUniqueWithoutLancheComboInput = {
    where: PedidoLancheComboWhereUniqueInput
    data: XOR<PedidoLancheComboUpdateWithoutLancheComboInput, PedidoLancheComboUncheckedUpdateWithoutLancheComboInput>
  }

  export type PedidoLancheComboUpdateManyWithWhereWithoutLancheComboInput = {
    where: PedidoLancheComboScalarWhereInput
    data: XOR<PedidoLancheComboUpdateManyMutationInput, PedidoLancheComboUncheckedUpdateManyWithoutLancheComboInput>
  }

  export type PedidoLancheComboScalarWhereInput = {
    AND?: PedidoLancheComboScalarWhereInput | PedidoLancheComboScalarWhereInput[]
    OR?: PedidoLancheComboScalarWhereInput[]
    NOT?: PedidoLancheComboScalarWhereInput | PedidoLancheComboScalarWhereInput[]
    id?: IntFilter<"PedidoLancheCombo"> | number
    pedidoId?: IntFilter<"PedidoLancheCombo"> | number
    lancheComboId?: IntFilter<"PedidoLancheCombo"> | number
  }

  export type PedidoIngressoCreateWithoutPedidoInput = {
    ingresso: IngressoCreateNestedOneWithoutPedidosInput
  }

  export type PedidoIngressoUncheckedCreateWithoutPedidoInput = {
    id?: number
    ingressoId: number
  }

  export type PedidoIngressoCreateOrConnectWithoutPedidoInput = {
    where: PedidoIngressoWhereUniqueInput
    create: XOR<PedidoIngressoCreateWithoutPedidoInput, PedidoIngressoUncheckedCreateWithoutPedidoInput>
  }

  export type PedidoIngressoCreateManyPedidoInputEnvelope = {
    data: PedidoIngressoCreateManyPedidoInput | PedidoIngressoCreateManyPedidoInput[]
    skipDuplicates?: boolean
  }

  export type PedidoLancheComboCreateWithoutPedidoInput = {
    lancheCombo: LancheComboCreateNestedOneWithoutPedidosInput
  }

  export type PedidoLancheComboUncheckedCreateWithoutPedidoInput = {
    id?: number
    lancheComboId: number
  }

  export type PedidoLancheComboCreateOrConnectWithoutPedidoInput = {
    where: PedidoLancheComboWhereUniqueInput
    create: XOR<PedidoLancheComboCreateWithoutPedidoInput, PedidoLancheComboUncheckedCreateWithoutPedidoInput>
  }

  export type PedidoLancheComboCreateManyPedidoInputEnvelope = {
    data: PedidoLancheComboCreateManyPedidoInput | PedidoLancheComboCreateManyPedidoInput[]
    skipDuplicates?: boolean
  }

  export type PedidoIngressoUpsertWithWhereUniqueWithoutPedidoInput = {
    where: PedidoIngressoWhereUniqueInput
    update: XOR<PedidoIngressoUpdateWithoutPedidoInput, PedidoIngressoUncheckedUpdateWithoutPedidoInput>
    create: XOR<PedidoIngressoCreateWithoutPedidoInput, PedidoIngressoUncheckedCreateWithoutPedidoInput>
  }

  export type PedidoIngressoUpdateWithWhereUniqueWithoutPedidoInput = {
    where: PedidoIngressoWhereUniqueInput
    data: XOR<PedidoIngressoUpdateWithoutPedidoInput, PedidoIngressoUncheckedUpdateWithoutPedidoInput>
  }

  export type PedidoIngressoUpdateManyWithWhereWithoutPedidoInput = {
    where: PedidoIngressoScalarWhereInput
    data: XOR<PedidoIngressoUpdateManyMutationInput, PedidoIngressoUncheckedUpdateManyWithoutPedidoInput>
  }

  export type PedidoLancheComboUpsertWithWhereUniqueWithoutPedidoInput = {
    where: PedidoLancheComboWhereUniqueInput
    update: XOR<PedidoLancheComboUpdateWithoutPedidoInput, PedidoLancheComboUncheckedUpdateWithoutPedidoInput>
    create: XOR<PedidoLancheComboCreateWithoutPedidoInput, PedidoLancheComboUncheckedCreateWithoutPedidoInput>
  }

  export type PedidoLancheComboUpdateWithWhereUniqueWithoutPedidoInput = {
    where: PedidoLancheComboWhereUniqueInput
    data: XOR<PedidoLancheComboUpdateWithoutPedidoInput, PedidoLancheComboUncheckedUpdateWithoutPedidoInput>
  }

  export type PedidoLancheComboUpdateManyWithWhereWithoutPedidoInput = {
    where: PedidoLancheComboScalarWhereInput
    data: XOR<PedidoLancheComboUpdateManyMutationInput, PedidoLancheComboUncheckedUpdateManyWithoutPedidoInput>
  }

  export type PedidoCreateWithoutIngressosInput = {
    cliente: string
    total: Decimal | DecimalJsLike | number | string
    lancheCombos?: PedidoLancheComboCreateNestedManyWithoutPedidoInput
  }

  export type PedidoUncheckedCreateWithoutIngressosInput = {
    id?: number
    cliente: string
    total: Decimal | DecimalJsLike | number | string
    lancheCombos?: PedidoLancheComboUncheckedCreateNestedManyWithoutPedidoInput
  }

  export type PedidoCreateOrConnectWithoutIngressosInput = {
    where: PedidoWhereUniqueInput
    create: XOR<PedidoCreateWithoutIngressosInput, PedidoUncheckedCreateWithoutIngressosInput>
  }

  export type IngressoCreateWithoutPedidosInput = {
    preco: number
    sessao: SessaoCreateNestedOneWithoutIngressosInput
  }

  export type IngressoUncheckedCreateWithoutPedidosInput = {
    id?: number
    preco: number
    sessaoId: number
  }

  export type IngressoCreateOrConnectWithoutPedidosInput = {
    where: IngressoWhereUniqueInput
    create: XOR<IngressoCreateWithoutPedidosInput, IngressoUncheckedCreateWithoutPedidosInput>
  }

  export type PedidoUpsertWithoutIngressosInput = {
    update: XOR<PedidoUpdateWithoutIngressosInput, PedidoUncheckedUpdateWithoutIngressosInput>
    create: XOR<PedidoCreateWithoutIngressosInput, PedidoUncheckedCreateWithoutIngressosInput>
    where?: PedidoWhereInput
  }

  export type PedidoUpdateToOneWithWhereWithoutIngressosInput = {
    where?: PedidoWhereInput
    data: XOR<PedidoUpdateWithoutIngressosInput, PedidoUncheckedUpdateWithoutIngressosInput>
  }

  export type PedidoUpdateWithoutIngressosInput = {
    cliente?: StringFieldUpdateOperationsInput | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lancheCombos?: PedidoLancheComboUpdateManyWithoutPedidoNestedInput
  }

  export type PedidoUncheckedUpdateWithoutIngressosInput = {
    id?: IntFieldUpdateOperationsInput | number
    cliente?: StringFieldUpdateOperationsInput | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    lancheCombos?: PedidoLancheComboUncheckedUpdateManyWithoutPedidoNestedInput
  }

  export type IngressoUpsertWithoutPedidosInput = {
    update: XOR<IngressoUpdateWithoutPedidosInput, IngressoUncheckedUpdateWithoutPedidosInput>
    create: XOR<IngressoCreateWithoutPedidosInput, IngressoUncheckedCreateWithoutPedidosInput>
    where?: IngressoWhereInput
  }

  export type IngressoUpdateToOneWithWhereWithoutPedidosInput = {
    where?: IngressoWhereInput
    data: XOR<IngressoUpdateWithoutPedidosInput, IngressoUncheckedUpdateWithoutPedidosInput>
  }

  export type IngressoUpdateWithoutPedidosInput = {
    preco?: FloatFieldUpdateOperationsInput | number
    sessao?: SessaoUpdateOneRequiredWithoutIngressosNestedInput
  }

  export type IngressoUncheckedUpdateWithoutPedidosInput = {
    id?: IntFieldUpdateOperationsInput | number
    preco?: FloatFieldUpdateOperationsInput | number
    sessaoId?: IntFieldUpdateOperationsInput | number
  }

  export type PedidoCreateWithoutLancheCombosInput = {
    cliente: string
    total: Decimal | DecimalJsLike | number | string
    ingressos?: PedidoIngressoCreateNestedManyWithoutPedidoInput
  }

  export type PedidoUncheckedCreateWithoutLancheCombosInput = {
    id?: number
    cliente: string
    total: Decimal | DecimalJsLike | number | string
    ingressos?: PedidoIngressoUncheckedCreateNestedManyWithoutPedidoInput
  }

  export type PedidoCreateOrConnectWithoutLancheCombosInput = {
    where: PedidoWhereUniqueInput
    create: XOR<PedidoCreateWithoutLancheCombosInput, PedidoUncheckedCreateWithoutLancheCombosInput>
  }

  export type LancheComboCreateWithoutPedidosInput = {
    nome: string
    descricao: string
    adicional: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
  }

  export type LancheComboUncheckedCreateWithoutPedidosInput = {
    id?: number
    nome: string
    descricao: string
    adicional: Decimal | DecimalJsLike | number | string
    subtotal: Decimal | DecimalJsLike | number | string
  }

  export type LancheComboCreateOrConnectWithoutPedidosInput = {
    where: LancheComboWhereUniqueInput
    create: XOR<LancheComboCreateWithoutPedidosInput, LancheComboUncheckedCreateWithoutPedidosInput>
  }

  export type PedidoUpsertWithoutLancheCombosInput = {
    update: XOR<PedidoUpdateWithoutLancheCombosInput, PedidoUncheckedUpdateWithoutLancheCombosInput>
    create: XOR<PedidoCreateWithoutLancheCombosInput, PedidoUncheckedCreateWithoutLancheCombosInput>
    where?: PedidoWhereInput
  }

  export type PedidoUpdateToOneWithWhereWithoutLancheCombosInput = {
    where?: PedidoWhereInput
    data: XOR<PedidoUpdateWithoutLancheCombosInput, PedidoUncheckedUpdateWithoutLancheCombosInput>
  }

  export type PedidoUpdateWithoutLancheCombosInput = {
    cliente?: StringFieldUpdateOperationsInput | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ingressos?: PedidoIngressoUpdateManyWithoutPedidoNestedInput
  }

  export type PedidoUncheckedUpdateWithoutLancheCombosInput = {
    id?: IntFieldUpdateOperationsInput | number
    cliente?: StringFieldUpdateOperationsInput | string
    total?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ingressos?: PedidoIngressoUncheckedUpdateManyWithoutPedidoNestedInput
  }

  export type LancheComboUpsertWithoutPedidosInput = {
    update: XOR<LancheComboUpdateWithoutPedidosInput, LancheComboUncheckedUpdateWithoutPedidosInput>
    create: XOR<LancheComboCreateWithoutPedidosInput, LancheComboUncheckedCreateWithoutPedidosInput>
    where?: LancheComboWhereInput
  }

  export type LancheComboUpdateToOneWithWhereWithoutPedidosInput = {
    where?: LancheComboWhereInput
    data: XOR<LancheComboUpdateWithoutPedidosInput, LancheComboUncheckedUpdateWithoutPedidosInput>
  }

  export type LancheComboUpdateWithoutPedidosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    adicional?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type LancheComboUncheckedUpdateWithoutPedidosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    adicional?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    subtotal?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type SalaCreateManyCinemaInput = {
    id?: number
    numero: number
    capacidade: number
  }

  export type SessaoCreateManyCinemaInput = {
    id?: number
    horario: Date | string
    salaId: number
    filmeId: number
  }

  export type SalaUpdateWithoutCinemaInput = {
    numero?: IntFieldUpdateOperationsInput | number
    capacidade?: IntFieldUpdateOperationsInput | number
    sessoes?: SessaoUpdateManyWithoutSalaNestedInput
  }

  export type SalaUncheckedUpdateWithoutCinemaInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero?: IntFieldUpdateOperationsInput | number
    capacidade?: IntFieldUpdateOperationsInput | number
    sessoes?: SessaoUncheckedUpdateManyWithoutSalaNestedInput
  }

  export type SalaUncheckedUpdateManyWithoutCinemaInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero?: IntFieldUpdateOperationsInput | number
    capacidade?: IntFieldUpdateOperationsInput | number
  }

  export type SessaoUpdateWithoutCinemaInput = {
    horario?: DateTimeFieldUpdateOperationsInput | Date | string
    sala?: SalaUpdateOneRequiredWithoutSessoesNestedInput
    filme?: FilmeUpdateOneRequiredWithoutSessoesNestedInput
    ingressos?: IngressoUpdateManyWithoutSessaoNestedInput
  }

  export type SessaoUncheckedUpdateWithoutCinemaInput = {
    id?: IntFieldUpdateOperationsInput | number
    horario?: DateTimeFieldUpdateOperationsInput | Date | string
    salaId?: IntFieldUpdateOperationsInput | number
    filmeId?: IntFieldUpdateOperationsInput | number
    ingressos?: IngressoUncheckedUpdateManyWithoutSessaoNestedInput
  }

  export type SessaoUncheckedUpdateManyWithoutCinemaInput = {
    id?: IntFieldUpdateOperationsInput | number
    horario?: DateTimeFieldUpdateOperationsInput | Date | string
    salaId?: IntFieldUpdateOperationsInput | number
    filmeId?: IntFieldUpdateOperationsInput | number
  }

  export type SessaoCreateManySalaInput = {
    id?: number
    horario: Date | string
    filmeId: number
    cinemaId: number
  }

  export type SessaoUpdateWithoutSalaInput = {
    horario?: DateTimeFieldUpdateOperationsInput | Date | string
    filme?: FilmeUpdateOneRequiredWithoutSessoesNestedInput
    cinema?: CinemaUpdateOneRequiredWithoutSessoesNestedInput
    ingressos?: IngressoUpdateManyWithoutSessaoNestedInput
  }

  export type SessaoUncheckedUpdateWithoutSalaInput = {
    id?: IntFieldUpdateOperationsInput | number
    horario?: DateTimeFieldUpdateOperationsInput | Date | string
    filmeId?: IntFieldUpdateOperationsInput | number
    cinemaId?: IntFieldUpdateOperationsInput | number
    ingressos?: IngressoUncheckedUpdateManyWithoutSessaoNestedInput
  }

  export type SessaoUncheckedUpdateManyWithoutSalaInput = {
    id?: IntFieldUpdateOperationsInput | number
    horario?: DateTimeFieldUpdateOperationsInput | Date | string
    filmeId?: IntFieldUpdateOperationsInput | number
    cinemaId?: IntFieldUpdateOperationsInput | number
  }

  export type SessaoCreateManyFilmeInput = {
    id?: number
    horario: Date | string
    salaId: number
    cinemaId: number
  }

  export type SessaoUpdateWithoutFilmeInput = {
    horario?: DateTimeFieldUpdateOperationsInput | Date | string
    sala?: SalaUpdateOneRequiredWithoutSessoesNestedInput
    cinema?: CinemaUpdateOneRequiredWithoutSessoesNestedInput
    ingressos?: IngressoUpdateManyWithoutSessaoNestedInput
  }

  export type SessaoUncheckedUpdateWithoutFilmeInput = {
    id?: IntFieldUpdateOperationsInput | number
    horario?: DateTimeFieldUpdateOperationsInput | Date | string
    salaId?: IntFieldUpdateOperationsInput | number
    cinemaId?: IntFieldUpdateOperationsInput | number
    ingressos?: IngressoUncheckedUpdateManyWithoutSessaoNestedInput
  }

  export type SessaoUncheckedUpdateManyWithoutFilmeInput = {
    id?: IntFieldUpdateOperationsInput | number
    horario?: DateTimeFieldUpdateOperationsInput | Date | string
    salaId?: IntFieldUpdateOperationsInput | number
    cinemaId?: IntFieldUpdateOperationsInput | number
  }

  export type IngressoCreateManySessaoInput = {
    id?: number
    preco: number
  }

  export type IngressoUpdateWithoutSessaoInput = {
    preco?: FloatFieldUpdateOperationsInput | number
    pedidos?: PedidoIngressoUpdateManyWithoutIngressoNestedInput
  }

  export type IngressoUncheckedUpdateWithoutSessaoInput = {
    id?: IntFieldUpdateOperationsInput | number
    preco?: FloatFieldUpdateOperationsInput | number
    pedidos?: PedidoIngressoUncheckedUpdateManyWithoutIngressoNestedInput
  }

  export type IngressoUncheckedUpdateManyWithoutSessaoInput = {
    id?: IntFieldUpdateOperationsInput | number
    preco?: FloatFieldUpdateOperationsInput | number
  }

  export type PedidoIngressoCreateManyIngressoInput = {
    id?: number
    pedidoId: number
  }

  export type PedidoIngressoUpdateWithoutIngressoInput = {
    pedido?: PedidoUpdateOneRequiredWithoutIngressosNestedInput
  }

  export type PedidoIngressoUncheckedUpdateWithoutIngressoInput = {
    id?: IntFieldUpdateOperationsInput | number
    pedidoId?: IntFieldUpdateOperationsInput | number
  }

  export type PedidoIngressoUncheckedUpdateManyWithoutIngressoInput = {
    id?: IntFieldUpdateOperationsInput | number
    pedidoId?: IntFieldUpdateOperationsInput | number
  }

  export type PedidoLancheComboCreateManyLancheComboInput = {
    id?: number
    pedidoId: number
  }

  export type PedidoLancheComboUpdateWithoutLancheComboInput = {
    pedido?: PedidoUpdateOneRequiredWithoutLancheCombosNestedInput
  }

  export type PedidoLancheComboUncheckedUpdateWithoutLancheComboInput = {
    id?: IntFieldUpdateOperationsInput | number
    pedidoId?: IntFieldUpdateOperationsInput | number
  }

  export type PedidoLancheComboUncheckedUpdateManyWithoutLancheComboInput = {
    id?: IntFieldUpdateOperationsInput | number
    pedidoId?: IntFieldUpdateOperationsInput | number
  }

  export type PedidoIngressoCreateManyPedidoInput = {
    id?: number
    ingressoId: number
  }

  export type PedidoLancheComboCreateManyPedidoInput = {
    id?: number
    lancheComboId: number
  }

  export type PedidoIngressoUpdateWithoutPedidoInput = {
    ingresso?: IngressoUpdateOneRequiredWithoutPedidosNestedInput
  }

  export type PedidoIngressoUncheckedUpdateWithoutPedidoInput = {
    id?: IntFieldUpdateOperationsInput | number
    ingressoId?: IntFieldUpdateOperationsInput | number
  }

  export type PedidoIngressoUncheckedUpdateManyWithoutPedidoInput = {
    id?: IntFieldUpdateOperationsInput | number
    ingressoId?: IntFieldUpdateOperationsInput | number
  }

  export type PedidoLancheComboUpdateWithoutPedidoInput = {
    lancheCombo?: LancheComboUpdateOneRequiredWithoutPedidosNestedInput
  }

  export type PedidoLancheComboUncheckedUpdateWithoutPedidoInput = {
    id?: IntFieldUpdateOperationsInput | number
    lancheComboId?: IntFieldUpdateOperationsInput | number
  }

  export type PedidoLancheComboUncheckedUpdateManyWithoutPedidoInput = {
    id?: IntFieldUpdateOperationsInput | number
    lancheComboId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}