export abstract class IEncrypter {
  abstract genHash: (password: string) => Promise<string>;
}
