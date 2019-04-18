export enum RequestStatus {
  Default,
  IsFetching,
  IsLoaded,
  IsFailed
}

export function getRandomArbitary(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
