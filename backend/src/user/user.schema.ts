import { s } from '@shared/safeZod';
import { createZodDto } from 'nestjs-zod';

const SchemaAddress = s.SchemaAddress.extend({
  street: s.string().optional(),
  neighborhood: s.string().optional(),
  city: s.string().optional(),
  state: s.string().optional(),
  complement: s.string().optional(),
});

const SchemaUserPostInDto = s.object({
  fullName: s.fullName(),
  email: s.email(),
  cpf: s.cpf().nullable().optional(),
  birthDate: s.birthDate().nullable().optional(),
  code: s.string().nullable().optional(),
  cellPhone: s.cellphone().nullable().optional(),
  address: SchemaAddress.optional(),
  roleId: s.id(),
});

const SchemaUserCreateInDto = SchemaUserPostInDto.extend({
  clientId: s.id(),
});

const SchemaUserFetchInDto = s.object({
  page: s.number().optional(),
  status: s.list(['active', 'inactive']).optional(),
  fullName: s.fullName().optional(),
  orderBy: s.list(['fullName', 'email']).optional(),
});

const SchemaUserFindManyInDto = SchemaUserFetchInDto;

const SchemaUserPdfInDto = SchemaUserFetchInDto.omit({ page: true });

const SchemaUserGeneratePdfInDto = SchemaUserPdfInDto;

const SchemaUserSheetInDto = SchemaUserPdfInDto;

const SchemaUserGenerateSheetInDto = SchemaUserSheetInDto;

const SchemaUserUpdateInDto = SchemaUserPostInDto.partial().extend({
  password: s.password().optional(),
  address: SchemaAddress.partial().optional(),
  isActive: s.boolean().optional(),
});

const SchemaProfilePatchInDto = SchemaUserUpdateInDto.omit({
  roleId: true,
  isActive: true,
});

const SchemaUserDeleteInDto = s.object({
  isActive: s.boolean(),
});

export const SchemaUserPatchInDto = SchemaUserUpdateInDto.omit({
  isActive: true,
});

export class UserPostInDto extends createZodDto(SchemaUserPostInDto) {}
export class UserCreateInDto extends createZodDto(SchemaUserCreateInDto) {}
export class UserFetchInDto extends createZodDto(SchemaUserFetchInDto) {}
export class UserPdfInDto extends createZodDto(SchemaUserPdfInDto) {}
export class UserGeneratePdfInDto extends createZodDto(
  SchemaUserGeneratePdfInDto,
) {}
export class UserSheetInDto extends createZodDto(SchemaUserSheetInDto) {}
export class UserGenerateSheetInDto extends createZodDto(
  SchemaUserGenerateSheetInDto,
) {}
export class UserFindManyInDto extends createZodDto(SchemaUserFindManyInDto) {}
export class UserPatchInDto extends createZodDto(SchemaUserPatchInDto) {}
export class ProfilePatchInDto extends createZodDto(SchemaProfilePatchInDto) {}
export class UserDeleteInDto extends createZodDto(SchemaUserDeleteInDto) {}
export class UserUpdateInDto extends createZodDto(SchemaUserUpdateInDto) {}
