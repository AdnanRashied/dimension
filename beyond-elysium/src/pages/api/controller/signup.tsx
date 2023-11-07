import bcrypt from 'bcryptjs';
import { NextApiRequest, NextApiResponse } from 'next';
import { User } from '@interface/User';
import { prisma } from '@prisma/prisma';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { firstName, lastName, email, password } = req.body as User;

  try {
    if (prisma) {
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser: User = await prisma.user.create({
        data: {
          firstName,
          lastName,
          email,
          password: hashedPassword,
        },
      });

      if (newUser) {
        return res.status(201).json({ message: 'Signup successful', user: newUser });
      } else {
        return res.status(500).json({ message: 'Signup failed' });
      }
    } else {
      return res.status(500).json({ message: 'Prisma is not properly configured' });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
