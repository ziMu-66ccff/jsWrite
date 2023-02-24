function PromiseAll(promises) {
  return new Promise((resolve, reject) => {
    // 没有传入参数 or 传入的参数内部没有迭代器的时候会返回一个错误的promise
    if (promises == null || typeof promises[Symbol.iterator] !== 'function') {
      throw new Error('argument is not iterator');
    }

    // 将迭代器对象转化为数组
    promises = [...promises];
    // 处理空数组的情况
    if (promises.length === 0) resolve([]);

    let resolvedCount = 0;
    let promiseNum = promises.length;
    const values = [];

    promises.forEach((promise, index) => {
      // 判断数组元素是否为promise
      if (!promise instanceof Promise) {
        promise = Promise.resolve(promise);
      }
      promise
        .then((res) => {
          resolvedCount++;
          values[index] = res;
          if (resolvedCount === promiseNum) resolve(values);
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
}
