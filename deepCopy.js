// 深拷贝

function deepCopy(oldObj) {
  if (oldObj == null || typeof oldObj !== 'object') return;
  const newObj = Array.isArray(oldObj) ? [] : {};
  for (const key of Object.keys(oldObj)) {
    newObj[key] =
      typeof oldObj[key] === 'object' && oldObj[key] !== null ? deepCopy(oldObj[key]) : oldObj[key];
  }
  return newObj;
}
