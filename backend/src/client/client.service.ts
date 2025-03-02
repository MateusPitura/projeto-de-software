import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { Transaction } from '../types';

@Injectable()
export class ClientService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(transaction?: Transaction) {
    const database = transaction || this.prismaService;

    const client = await database.client.create({
      data: {},
    });

    return { clientId: client.id };
  }
}
