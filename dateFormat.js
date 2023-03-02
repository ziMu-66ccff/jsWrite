// 日期格式化

function dateFormat(dateInput, format) {
  const year = dateInput.getFullYear();
  const month = dateInput.getMonth() + 1;
  const date = dateInput.getDate();
  format = format
    .replace('yyyy', year)
    .replace('mm', month)
    .replace('dd', date);
  return format;
}

console.log(dateFormat(new Date(), 'yyyy年mm月dd日'));
