export type BeforeResult = Promise<any> | boolean | undefined | void

export const isPromise = (obj: any): obj is Promise<any> =>
  typeof obj === 'object' && typeof obj.then === 'function'

export const wrapPromise = (result: BeforeResult): Promise<any> => {
  if (isPromise(result)) {
    return result
  }

  if (typeof result === 'boolean') {
    return Promise.resolve(result)
  }

  return Promise.resolve(true)
}
