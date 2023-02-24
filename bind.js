Function.prototype._bind = function (binding, ...args) {
  // 处理调用者不为函数的情况
  if (typeof this !== 'function')
    throw new Error(`cannot read property bind from ${typeof this}`);
  // 处理binding为空 or 不为对象的情况
  binding = binding == null ? globalThis : Object(binding);

  // 这里必须返回箭头函数，因为箭头函数的没有this会到外层作用域找this，才能找到func里面的this，也就是调用bind的那个函数
  return (...newArgs) => {
    binding._bind_ = this;
    const result = binding._bind_(...args, ...newArgs);
    delete binding._bind_;
    return result;
  };
};
