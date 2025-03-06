import { s } from '@shared/safeZod';
import { createZodDto } from 'nestjs-zod';

const SchemaPassword = s.object({
  password: s.password(),
});

const SchemaAuthSigInInDto = s.object({
  email: s.email(),
  password: s.string(),
});

const SchemaResetPasswordInDto = SchemaPassword.extend({
  email: s.email(),
});

const SchemaAuthForgetPasswordInDto = SchemaAuthSigInInDto.pick({
  email: true,
});

const SchemaAuthSignUpInDto = s.object({
  email: s.email(),
  fullName: s.fullName(),
  name: s.string(),
  cnpj: s.cnpj(),
});

export class PasswordInDto extends createZodDto(SchemaPassword) {}
export class AuthSignInInDto extends createZodDto(SchemaAuthSigInInDto) {}
export class AuthForgetPasswordInDto extends createZodDto(
  SchemaAuthForgetPasswordInDto,
) {}
export class AuthSignUpInDto extends createZodDto(SchemaAuthSignUpInDto) {}
export class AuthResetPasswordInDto extends createZodDto(
  SchemaResetPasswordInDto,
) {}
