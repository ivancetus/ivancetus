export const countUniqueTags = (arr: string[]): TagCountPair[] => {
  const countMap: { [key: string]: number } = {};

  for (let i = 0; i < arr.length; i++) {
    const string = arr[i];

    if (countMap[string]) {
      countMap[string]++;
    } else {
      countMap[string] = 1;
    }
  }

  return Object.keys(countMap).map((tagName) => ({
    tagName,
    count: countMap[tagName],
  }));
};
