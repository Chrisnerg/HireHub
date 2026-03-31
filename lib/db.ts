// 'server-only' prevents the DB connection from ever leaking to the browser - so db.ts can never be imported to a client component
import 'server-only';
import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
	throw new Error('DATABASE_URL is not set.');
}

const shouldUseRelaxedSsl =
	databaseUrl.includes('pooler.supabase.com') ||
	databaseUrl.includes('sslmode=require');

const pool = new Pool({
	connectionString: databaseUrl,
	ssl: shouldUseRelaxedSsl ? { rejectUnauthorized: false } : undefined,
});

const db = drizzle(pool);
export default db;