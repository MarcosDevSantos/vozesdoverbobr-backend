export type User = {
  nome: string;
  email: string;
  senha: string;
  telefone: string;
};

export interface UsersRepositoryInterface {
  createUser(user: User): Promise<{ success: boolean }>;
}
