export abstract class IGenericRepository<T> {
  abstract create(data: T): Promise<T>;
}
