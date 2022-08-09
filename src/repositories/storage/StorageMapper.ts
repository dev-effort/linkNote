export interface StorageMapper<T> {
  fromJson(json: any): T;
}
