export abstract class Encrypter {
  abstract genHash: (password: string) => Promise<string>;
}
