import {
  FunQLResponse,
  FunQLResponseSuccuss,
  SelectProjection,
} from "../types";

/**
 * @function
 * checks returned response is success or not and repairs response type to T (is in return type do it) for more information checks type predicate in ts {@link https://www.typescriptlang.org/docs/handbook/advanced-types.html#using-type-predicates| link in ts lang site}
 * @param response
 * @returns
 */
export const isRequestSuccess = <T>(
  response: FunQLResponse<T>
): response is FunQLResponseSuccuss<
  T extends SelectProjection<infer R, infer U> ? T : T
> => response.success === true;
