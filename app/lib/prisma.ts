// lib/prisma.ts

import { PrismaClient } from '@prisma/client';

// Ensure that Prisma Client is only instantiated once during development
declare global {
  var prisma: PrismaClient | undefined;
}

let prisma: PrismaClient;

// Check if we are in production or development mode
if (process.env.NODE_ENV === 'production') {
  // In production mode, instantiate a new PrismaClient
  prisma = new PrismaClient();
} else {
  // In development mode, use the global object to store the Prisma instance
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

export default prisma;
