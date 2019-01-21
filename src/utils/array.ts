/**
 * Create an array with of given length an current value,
 * if value is a function, value is result the result
 * from that function
 * @param length
 * @param value
 */
export function fill(length: number, value: any): any[] {
  let items = [];
  for (let i = 0; i < length; i++) {
    let item = typeof value === "function" ? value() : value;
    items.push(item);
  }
  return items;
}

export function plain(array: any[]): any[] {
  let result = [];
  for (let item of array) {
    if (Array.isArray(item)) result = result.concat(item);
    else result.push(item);
  }
  return result;
}

export function clone(array: any[]): any[] {
  return array.map(item => (Array.isArray(item) ? clone(item) : item));
}

export function validateIndex(index: number, max: number, min = 0) {
  if (index > max || index < min) throw RangeError("index out of range");
}
