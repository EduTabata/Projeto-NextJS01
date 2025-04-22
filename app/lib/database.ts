import postgres from 'postgres';

export const sql = postgres(process.env.POSTGRES_URL!, {
  ssl: process.env.NODE_ENV === 'production' ? 'require' : undefined
});
if (!process.env.POSTGRES_URL) {
    throw new Error('POSTGRES_URL is not defined');
  }