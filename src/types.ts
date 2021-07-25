type GetPureTypeWithoutId<T> = NewPick<T, GetPureTypeKeyWithoutId<Required<T>>>;

type GetPureTypeKeyWithoutId<T> = {
  [K in keyof T]: T[K] extends object ? never : K extends "_id" ? never : K;
}[keyof T];

type GetPureType<T> = NewPick<T, GetPureTypeKey<Required<T>>>;

type GetPureTypeKey<T> = {
  [K in keyof T]: T[K] extends object ? (T[K] extends Date ? K : never) : K;
}[keyof T];

/**
 * a type alias for find out whether this projection is one base or zero base
 * @remark it ignore _id field according to document of mongodb in behaves with _id field
 * @remark it does not checks projection is valid or not if projection is invalid (for example mix of wrong zeros and ones) it assumes projection is one base
 * @type {true | false}
 */
type IsProjectionZeroBase<T extends Record<string, any>> =
  T[keyof GetPureTypeWithoutId<T>] extends 0 ? true : false;

/**
 * finds all keys that in T that onw type is object
 */
type ObjectKey<T> = {
  [K in keyof T]: T[K] extends object ? K : never;
}[keyof T];

/**
 * a type alias for select all field key that should returns
 * @remark for object type field we assumed we do not return it and handle it in separate logic in {@link SelectProjection}
 * @template IsThisProjectZeroBase it specifies projection is one base or zero base (do not pass it we calculate it in place)
 */
type PickPureField<
  T,
  P,
  IsThisProjectZeroBase = IsProjectionZeroBase<P>
> = IsThisProjectZeroBase extends true ? Omit<T, keyof P> : NewPick<T, keyof P>;

/**
 * a type alias for pick some properties form a type it changes some behavior of ts`s pick with adapt to Omit structure in ts type utility
 * @see {@link Omit} structure and compare it with old {@link Pick}
 * @remark old pick is strict on given keys and we want not it
 */
type NewPick<T, K extends string | number | symbol> = {
  [P in Extract<keyof T, K>]: T[P];
};

/**
 * a type alias for select fields from type T according to projection Project
 * @template R the acutal object (response) that we wants to select some field of it according to projection
 * @template P the projection that specifies amount of returned data
 * @template RResponse the require of R (do not pass it we calculate it  )
 * @template RProject the require of P (do not pass it we calculate it  )
 * @note its work in 2 steps 1.handle all fields that are zero or one in their values 2.handle object field recursively (the logic that is come after & operator )
 */
export type SelectProjection<
  R,
  P,
  RResponse = Required<R>,
  RProject = Required<P>
  //we should consider to whether Response is Array or not if response is array we extract type of array and do processes on it
> = RResponse extends Array<infer U>
  ? //add all pure projection first to response
    (PickPureField<GetPureType<Required<U>>, RProject> &
      //append all selected inner object to response recursively
      {
        [P in ObjectKey<RProject>]: Required<U> extends Record<P, unknown>
          ? SelectProjection<Required<U>[P], RProject[P]>
          : any;
      })[]
  : //add all pure projection first to response
    PickPureField<GetPureType<RResponse>, RProject> &
      //append all selected inner object to response recursively
      {
        [P in ObjectKey<RProject>]: RResponse extends Record<P, unknown>
          ? SelectProjection<RResponse[P], RProject[P]>
          : any;
      };

/**
 * if we use get object directly in argument of funreq we can not give selected project of client so we define a type for achieve it
 * @note if we user get directly it return Partial of schema mainly without consider to selection of client
 */
export type GetType<T> = {
  [P in keyof T]: 0 | 1 | GetType<T[P]>;
};
