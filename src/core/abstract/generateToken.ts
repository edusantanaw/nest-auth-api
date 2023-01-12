export abstract class IGenerateToken {
  abstract generateToken: (userId: string) => Promise<string>;
}
