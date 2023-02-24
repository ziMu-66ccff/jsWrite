// 节流
function throttle(fn, timeout = 500) {
  let timer = null;
  return function (...args) {
    if (timer === null) {
      fn.call(this, ...args);
      // 计时器里面的callback为宏任务，所以会先将timer设置为计时器的编号，等到时间到了才会执行callback设置为null
      timer = setTimeout(() => {
        timer = null;
      }, timeout);
    }
  };
}
