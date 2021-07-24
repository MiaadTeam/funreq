/**
 * a type alias extract all field that is pure (means is not objects)
 * @remark it ignore _id field
 */
type GetPureType<T> = Pick<T, GetPureTypeKey<Required<T>>>;

/**
 * a type alias for getting all pure field keys (means type of fields are not object and also ignore _id field)
 */
type GetPureTypeKey<T> = {
  [K in keyof T]: T[K] extends object ? never : K extends "_id" ? never : K;
}[keyof T];

/**
 * a type alias for find out whether this projection is one base or zero base
 * @remark it ignore _id field according to document of mongodb in behaves with _id field
 * @remark it does not checks projection is valid or not if projection is invalid (for example mix of wrong zeros and ones) it assumes projection is one base
 * @type {true | false}
 */
type IsProjectionZeroBase<
  T extends Record<string, any>
> = T[keyof GetPureType<T>] extends 0 ? true : false;

/**
 * a type alias for select all field key that should returns
 * @remark for object type field we assumed we do not return it and handle it in separate logic in {@link SelectProjection}
 * @template IsThisProjectZeroBase it specifies projection is one base or zero base (do not pass it we calculate it in place)
 */
type SelectProjectionKey<
  T,
  Project extends Partial<Record<keyof T, any>>,
  IsThisProjectZeroBase = IsProjectionZeroBase<Project>
> = {
  [K in keyof T]: IsThisProjectZeroBase extends true
    ? Project[K] extends 0 | object
      ? never
      : K
    : Project[K] extends 1
    ? K
    : never;
}[keyof T];

/**
 * finds all keys that in T that onw type is object
 */
type ObjectKey<T> = {
  [K in keyof T]: T[K] extends object ? K : never;
}[keyof T];

/**
 * a type alias for select fields from type T according to projection Project
 * @template T the acutal object that we wants to select some field of it according to projection
 * @remark T and projection extends each other to simulate equality operation in type, although T is super set of Project
 * @template Project the projection that specifies amount of returned data
 * @note its work in 2 steps 1.handle all fields that are zero or one in their values 2.handle object field recursively (the logic that is come after & operator )
 */
export type SelectProjection<
  T extends T extends Array<infer U>
    ? Partial<Record<keyof Project, any>>
    : any,
  Project extends Partial<Record<keyof T, any>>,
  ActualT = T extends Array<infer U> ? U : T
> = Pick<ActualT, SelectProjectionKey<Required<ActualT>, Required<Project>>> &
  //handle all object field recursively
  { [P in ObjectKey<Required<Project>>]: SelectProjection<T[P], Project[P]> };

/****************************** this section is experimental */
export type GetType<T> = {
  [P in keyof T]: 0 | 1 | GetType<T[P]>;
};
