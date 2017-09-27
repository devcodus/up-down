export function increaseCount(count) {
  return {
    type: "INCREASE_COUNT",
    payload: count,
  }
}

export function decrementCount(count) {
  return {
    type: "DECREASE_COUNT",
    payload: count,
  }
}

// __________________________ //?// what's the difference between the functions above and the const below?

export const incrementCount = count => ({
  type: types.INCREASE_COUNT,
  payload: count,

});
