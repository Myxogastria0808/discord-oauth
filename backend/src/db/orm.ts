import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

type UserData = {
    id: number;
    discordId: string;
    createdAt: Date;
    updatedAt: Date;
};

const registerUser = async (discordId: string): Promise<void> => {
    const user: UserData = await prisma.user.create({
        data: {
            discordId,
        },
    });
};

const createUserValidator = async (discordId: string): Promise<boolean> => {
    const user: UserData | null = await prisma.user.findFirst({
        where: {
            discordId,
        },
    });
    if (user === null) {
        return true;
    } else {
        return false;
    }
};

const deleteUser = async (discordId: string): Promise<void> => {
    const user: UserData = await prisma.user.delete({
        where: {
            discordId,
        },
    });
};

export { registerUser, createUserValidator, deleteUser };
