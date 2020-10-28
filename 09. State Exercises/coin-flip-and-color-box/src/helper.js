function choice(arr) {
  let ranIdx = Math.floor(Math.random() * arr.length); 
  return arr[ranIdx];
}

export { choice };