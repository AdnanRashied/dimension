import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import { NextApiRequest, NextApiResponse } from 'next';
import { setCookie } from '../cookie'; // Import the cookie functions

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { email, password } = req.body;
  
  try {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
      select: {
        id:true,
        email: true,
        password: true,
      },
    });

    if (user) {
      const passwordMatch = await bcrypt.compare(password, user.password);

      if (passwordMatch) {
        setCookie(res, 'userId', user.id);

        return res.status(200).json({ message: 'Login successful', user });
      } else {

        return res.status(401).json({ message: 'Invalid credentials' });
      }
    } else {

      return res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
