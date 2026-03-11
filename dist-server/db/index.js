import { drizzle } from 'drizzle-orm/mysql2';
import mysql from 'mysql2/promise';
import * as schema from './schema';
var poolConnection = mysql.createPool({
    host: process.env.DB_HOST || 'srv2045.hstgr.io',
    user: process.env.DB_USER || 'u632925822_cduser',
    password: process.env.DB_PASSWORD || 'Redowan173123@',
    database: process.env.DB_NAME || 'u632925822_cddb',
});
export var db = drizzle({ client: poolConnection, schema: schema, mode: 'default' });
