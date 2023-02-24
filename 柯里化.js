// 函数柯里化

function curreny(fn, ...args) {
  return args.length >= fn.length
    ? fn(...args)
    : curreny.bind(null, fn, ...args);
}
