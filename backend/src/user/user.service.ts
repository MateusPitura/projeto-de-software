import { ConflictException, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { UserCreateInDto } from './user.dto';
import { genSalt, hashSync } from 'bcrypt';
import { TransactionHost } from '@nestjs-cls/transactional';
import { TransactionalAdapterPrisma } from '@nestjs-cls/transactional-adapter-prisma';

@Injectable()
export class UserService {
  constructor(
    private readonly databaseService: TransactionHost<TransactionalAdapterPrisma>,
  ) {}

  async create(createUserInDto: UserCreateInDto) {
    await this.verifyEmail(createUserInDto.email);

    createUserInDto.password = await this.encryptPassword(
      createUserInDto.password,
    );

    return await this.databaseService.tx.user.create({
      data: createUserInDto,
    });
  }

  async verifyEmail(email: string) {
    const emailAlreadyExist = await this.findUniqueUser({
      email,
    });

    if (emailAlreadyExist) {
      throw new ConflictException(`Email '${email}' already exists`);
    }
  }

  async findUniqueUser(
    userWhereUniqueInput: Prisma.UserWhereUniqueInput,
    select?: Prisma.UserSelect,
  ) {
    return await this.databaseService.tx.user.findUnique({
      where: userWhereUniqueInput,
      select,
    });
  }

  private async encryptPassword(password: string) {
    const salt = await genSalt(10);
    return hashSync(password, salt);
  }

  async changePassword(email: string, password: string) {
    const encryptedPassword = await this.encryptPassword(password);

    return await this.databaseService.tx.user.update({
      where: {
        email,
      },
      data: {
        password: encryptedPassword,
      },
    });
  }
}
