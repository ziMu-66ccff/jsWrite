function promiseRace(promises) {
  new Promise((resolve, reject) => {
    if (promises == null || typeof promises[Symbol.iterator] !== 'function') {
      throw new Error('arrgument is not iterator');
    }
    promises = [...promises];
    if (promises.length === 0) resolve([]);
    promises.forEach((promise) => {
      if (!promise instanceof Promise) {
        promise = Promise.resolve(promise);
      }
      promise
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
}
