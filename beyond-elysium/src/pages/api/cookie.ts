import { serialize, parse } from 'cookie';
import { NextApiResponse } from 'next';

export function setCookie(res: NextApiResponse, name: string, value: string) {
  const cookie = serialize(name, value, {
    httpOnly: true, // Set the cookie as HTTP-only
    secure: process.env.NODE_ENV === 'production', // Set the secure flag in production
    sameSite: 'strict', // Set the sameSite attribute
    path: '/', // Adjust the path as needed
    maxAge: 60 * 60 * 24 * 7, // Set the cookie's max age (e.g., 7 days)
  });

  res.setHeader('Set-Cookie', cookie);
}

export function clearCookie(res: NextApiResponse, name: string) {
  const cookie = serialize(name, '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    path: '/',
    maxAge: 0, // Set max age to 0 to clear the cookie
  });

  res.setHeader('Set-Cookie', cookie);
}

export function parseCookies(req: any) {
  return parse(req.headers.cookie || '');
}