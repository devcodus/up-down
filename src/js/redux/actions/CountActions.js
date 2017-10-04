export function increaseCount(count) {
  return {
    type: 'INCREASE_COUNT',
    payload: count,
  };
}

export function decreaseCount(count) {
  return {
    type: 'DECREASE_COUNT',
    payload: count,
  };
}
