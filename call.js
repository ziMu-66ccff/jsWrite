Function.prototype._call = function (binding, ...args) {
  // 判断调用者是否为函数
  if (typeof this !== 'function')
    throw new Error(`cannot read property _call from ${typeof this}`);
  // 处理binding不为对象的情况
  binding = binding == null ? globalThis : Object(binding);

  binding._call_ = this;
  const result = binding._call_(...args);
  delete binding._call_;
  return result;
};
