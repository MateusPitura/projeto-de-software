import { PrismaClient } from '@prisma/client';
import {
  SEED_ROLE_ADMIN_ID,
  SEED_ROLE_SALES_ID,
} from '../../shared/src/constants';

const prisma = new PrismaClient();

async function seed() {
  console.log('🌠 Started to seed database');

  await prisma.permission.createMany({
    data: [
      {
        id: 1,
        resource: 'USERS',
        action: 'CREATE',
      },
      {
        id: 2,
        resource: 'USERS',
        action: 'READ',
      },
      {
        id: 3,
        resource: 'USERS',
        action: 'UPDATE',
      },
      {
        id: 4,
        resource: 'USERS',
        action: 'DELETE',
      },
    ],
  });

  await Promise.all([
    prisma.role.create({
      data: {
        id: SEED_ROLE_ADMIN_ID,
        name: 'ADMIN',
        permissions: {
          connect: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
        },
      },
    }),
    prisma.role.create({
      data: {
        id: SEED_ROLE_SALES_ID,
        name: 'SALES',
        permissions: {
          connect: [{ id: 2 }],
        },
      },
    }),
  ]);

  console.log('🌠 Successfully seeded database');
}

seed()
  .catch((error) => {
    console.log('🌠 Failed to run seed', error);
    console.error(error);
  })
  .finally(() => void prisma.$disconnect());
