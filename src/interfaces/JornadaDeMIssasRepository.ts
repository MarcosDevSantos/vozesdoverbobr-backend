export interface JornadaDeMissasRepositoryInterface {
  impawn(name: string, date: Date): Promise<{ success: boolean }>;
}
