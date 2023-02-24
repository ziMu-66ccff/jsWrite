function PromiseAny(promises) {
  return new Promise((resolve, reject) => {
    if (promises == null || typeof promises[Symbol.iterator] !== 'function') {
      throw new Error('arrgument is not iterator');
    }

    promises = [...promises];
    if (promises.length === 0) resolve([]);

    let rejectedCount = 0;
    let promiseNum = promises.length;
    let errs = [];

    promises.forEach((promise, index) => {
      if (!promise instanceof Promise) {
        promise = Promise.resolve(promise);
      }
      promise
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          errs[index] = err;
          rejectedCount++;
          if (rejectedCount === promiseNum) reject(errs);
        });
    });
  });
}
