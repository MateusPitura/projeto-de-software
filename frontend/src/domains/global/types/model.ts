import { Action, Resource } from "@shared/types";

export type Address = {
  cep: string;
  number: string;
  street?: string;
  complement?: string;
  neighborhood?: string;
  city?: string;
  state?: string;
};

export interface User {
  id: string;
  fullName: string;
  email: string;
  cellPhone?: string;
  cpf?: string;
  code?: string;
  birthDate?: string;
  address?: Address;
  isActive?: boolean;
  roleId?: string;
  permissions: Record<Resource, Record<Action, boolean>>;
}
