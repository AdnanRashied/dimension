import { PrismaClient } from '@prisma/client';

declare const global: Global & { prisma?: PrismaClient };

if (typeof window === 'undefined') {
    if (process.env['NODE_ENV'] === 'production') {
        if (!global.prisma) {
            global.prisma = new PrismaClient();
        }
    } else {
        if (!global.prisma) {
            global.prisma = new PrismaClient();
        }
    }
}

export const prisma = global.prisma;