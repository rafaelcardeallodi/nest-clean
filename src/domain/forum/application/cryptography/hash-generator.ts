export abstract class hashGenerator {
  abstract hash(plain: string): Promise<string>
}
