export abstract class EncrypterService {
  abstract genHash: (password: string) => Promise<string>;
}
