import { mysqlTable, varchar, text, timestamp, decimal, mysqlEnum } from 'drizzle-orm/mysql-core';
import { sql } from 'drizzle-orm';

export const users = mysqlTable('user', {
    id: varchar('id', { length: 255 }).primaryKey(),
    name: text('name').notNull(),
    email: varchar('email', { length: 255 }).notNull().unique(),
    emailVerified: timestamp('emailVerified', { mode: 'date' }),
    image: text('image'),
    createdAt: timestamp('createdAt').default(sql`CURRENT_TIMESTAMP`).notNull(),
    updatedAt: timestamp('updatedAt').default(sql`CURRENT_TIMESTAMP`).onUpdateNow().notNull()
});

export const session = mysqlTable('session', {
    id: varchar('id', { length: 255 }).primaryKey(),
    expiresAt: timestamp('expiresAt', { mode: 'date' }).notNull(),
    token: varchar('token', { length: 255 }).notNull().unique(),
    createdAt: timestamp('createdAt', { mode: 'date' }).notNull(),
    updatedAt: timestamp('updatedAt', { mode: 'date' }).notNull(),
    ipAddress: text('ipAddress'),
    userAgent: text('userAgent'),
    userId: varchar('userId', { length: 255 }).notNull().references(() => users.id)
});

export const account = mysqlTable('account', {
    id: varchar('id', { length: 255 }).primaryKey(),
    accountId: text('accountId').notNull(),
    providerId: text('providerId').notNull(),
    userId: varchar('userId', { length: 255 }).notNull().references(() => users.id),
    accessToken: text('accessToken'),
    refreshToken: text('refreshToken'),
    idToken: text('idToken'),
    accessTokenExpiresAt: timestamp('accessTokenExpiresAt', { mode: 'date' }),
    refreshTokenExpiresAt: timestamp('refreshTokenExpiresAt', { mode: 'date' }),
    scope: text('scope'),
    password: text('password'),
    createdAt: timestamp('createdAt', { mode: 'date' }).notNull(),
    updatedAt: timestamp('updatedAt', { mode: 'date' }).notNull()
});

export const verification = mysqlTable('verification', {
    id: varchar('id', { length: 255 }).primaryKey(),
    identifier: text('identifier').notNull(),
    value: text('value').notNull(),
    expiresAt: timestamp('expiresAt', { mode: 'date' }).notNull(),
    createdAt: timestamp('createdAt', { mode: 'date' }),
    updatedAt: timestamp('updatedAt', { mode: 'date' })
});

export const categories = mysqlTable('category', {
    id: varchar('id', { length: 255 }).primaryKey(),
    userId: varchar('userId', { length: 255 }).references(() => users.id), // If null, it's a default category
    name: text('name').notNull(),
    type: mysqlEnum('type', ['income', 'expense']).notNull(),
    color: text('color'),
    createdAt: timestamp('createdAt').default(sql`CURRENT_TIMESTAMP`).notNull(),
    updatedAt: timestamp('updatedAt').default(sql`CURRENT_TIMESTAMP`).onUpdateNow().notNull()
});

export const transactions = mysqlTable('transaction', {
    id: varchar('id', { length: 255 }).primaryKey(),
    userId: varchar('userId', { length: 255 }).notNull().references(() => users.id),
    amount: decimal('amount', { precision: 10, scale: 2 }).notNull(),
    type: mysqlEnum('type', ['income', 'expense']).notNull(),
    categoryId: varchar('categoryId', { length: 255 }).notNull().references(() => categories.id),
    date: timestamp('date').notNull(),
    description: text('description'),
    createdAt: timestamp('createdAt').default(sql`CURRENT_TIMESTAMP`).notNull(),
    updatedAt: timestamp('updatedAt').default(sql`CURRENT_TIMESTAMP`).onUpdateNow().notNull()
});
