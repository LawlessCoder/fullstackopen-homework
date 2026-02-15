export function isEmpty(obj) {
  console.log("In isEmpty")
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      console.log(`Found property ${key}`)
      return false;
    }
  }
  console.log("isEmpty")
  return true;
}
