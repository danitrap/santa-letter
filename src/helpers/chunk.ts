export function chunk<T>(letters: T[], perChunk: number): T[][] {
  return letters.reduce<T[][]>((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / perChunk);

    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = [] as T[];
    }

    resultArray[chunkIndex].push(item);
    return resultArray;
  }, []);
}
