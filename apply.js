Function.prototype._apply = function (binding, args) {
  // 判断调用者是否为函数
  if (typeof this !== 'function')
    throw new Error(`cannot read property _apply from ${typeof this}`);
  // 处理binding为空 or 不为对象的情况
  binding = binding == null ? globalThis : Object(binding);
  // 处理args为空的情况
  args = args ? args : [];

  binding._apply_ = this;
  const result = binding._apply_(...args);
  delete binding._apply_;
  return result;
};
