type GetPureTypeWithoutId<T> = NewPick<T, GetPureTypeKeyWithoutId<Required<T>>>;

type GetPureTypeKeyWithoutId<T> = {
  [K in keyof T]: T[K] extends object ? never : K extends "_id" ? never : K;
}[keyof T];

type GetPureType<T> = NewPick<T, GetPureTypeKey<Required<T>>>;

type GetPureTypeKey<T> = {
  [K in keyof T]: T[K] extends object ? (T[K] extends Date ? K : never) : K;
}[keyof T];

type IsProjectionZeroBase<T extends Record<string, any>> =
  T[keyof GetPureTypeWithoutId<T>] extends 0 ? true : false;

type ObjectKey<T> = {
  [K in keyof T]: T[K] extends object ? K : never;
}[keyof T];

type PickPureField<
  T,
  P,
  IsThisProjectZeroBase = IsProjectionZeroBase<P>
> = IsThisProjectZeroBase extends true ? Omit<T, keyof P> : NewPick<T, keyof P>;

type NewPick<T, K extends string | number | symbol> = {
  [P in Extract<keyof T, K>]: T[P];
};

export type SelectProjection2<
  T,
  Project,
  RResponse = Required<T>,
  RProject = Required<Project>
  //select pure projection
> = RResponse extends Array<infer U>
  ? (PickPureField<GetPureType<Required<U>>, RProject> &
      //call it recursive
      {
        [P in ObjectKey<RProject>]: Required<U> extends Partial<Record<P, any>>
          ? SelectProjection2<Required<U>[P], RProject[P]>
          : any;
      })[]
  : PickPureField<GetPureType<RResponse>, RProject> &
      //call it recursive
      {
        [P in ObjectKey<RProject>]: RResponse extends Record<P, unknown>
          ? SelectProjection2<RResponse[P], RProject[P]>
          : null;
      };

/****************************** this section is experimental */
export type GetType<T> = {
  [P in keyof T]: 0 | 1 | GetType<T[P]>;
};
