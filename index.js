function distanceFromHqInBlocks (customerLocation) {
  if (customerLocation =< 42 )   {
    const distanceFromHqInBlocks =`42 - ${customerLocation}`;
 return `${distanceFromHqInBlocks} blocks.`;
} else {
    const distanceFromHqInBlocks = `&{customerLocation} - 42`;
    return `${distanceFromHqInBlocks} blocks.`;
} }
