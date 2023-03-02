function assigin(target, ...objs) {
  if (target == null) {
    throw new Error('cannot convert undefined or null to object');
  }
  let newObj = Object(target);
  objs.forEach((obj) => {
    for (const key of Object.keys(obj)) {
      newObj[key] = obj[key];
    }
  });
  return newObj;
}
