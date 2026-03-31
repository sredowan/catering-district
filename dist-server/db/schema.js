var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { mysqlTable, varchar, text, timestamp, decimal, mysqlEnum } from 'drizzle-orm/mysql-core';
import { sql } from 'drizzle-orm';
export var users = mysqlTable('user', {
    id: varchar('id', { length: 255 }).primaryKey(),
    name: text('name').notNull(),
    email: varchar('email', { length: 255 }).notNull().unique(),
    emailVerified: timestamp('emailVerified', { mode: 'date' }),
    image: text('image'),
    createdAt: timestamp('createdAt').default(sql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["CURRENT_TIMESTAMP"], ["CURRENT_TIMESTAMP"])))).notNull(),
    updatedAt: timestamp('updatedAt').default(sql(templateObject_2 || (templateObject_2 = __makeTemplateObject(["CURRENT_TIMESTAMP"], ["CURRENT_TIMESTAMP"])))).onUpdateNow().notNull()
});
export var session = mysqlTable('session', {
    id: varchar('id', { length: 255 }).primaryKey(),
    expiresAt: timestamp('expiresAt', { mode: 'date' }).notNull(),
    token: varchar('token', { length: 255 }).notNull().unique(),
    createdAt: timestamp('createdAt', { mode: 'date' }).notNull(),
    updatedAt: timestamp('updatedAt', { mode: 'date' }).notNull(),
    ipAddress: text('ipAddress'),
    userAgent: text('userAgent'),
    userId: varchar('userId', { length: 255 }).notNull().references(function () { return users.id; })
});
export var account = mysqlTable('account', {
    id: varchar('id', { length: 255 }).primaryKey(),
    accountId: text('accountId').notNull(),
    providerId: text('providerId').notNull(),
    userId: varchar('userId', { length: 255 }).notNull().references(function () { return users.id; }),
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
export var verification = mysqlTable('verification', {
    id: varchar('id', { length: 255 }).primaryKey(),
    identifier: text('identifier').notNull(),
    value: text('value').notNull(),
    expiresAt: timestamp('expiresAt', { mode: 'date' }).notNull(),
    createdAt: timestamp('createdAt', { mode: 'date' }),
    updatedAt: timestamp('updatedAt', { mode: 'date' })
});
export var categories = mysqlTable('category', {
    id: varchar('id', { length: 255 }).primaryKey(),
    userId: varchar('userId', { length: 255 }).references(function () { return users.id; }), // If null, it's a default category
    name: text('name').notNull(),
    type: mysqlEnum('type', ['income', 'expense']).notNull(),
    color: text('color'),
    createdAt: timestamp('createdAt').default(sql(templateObject_3 || (templateObject_3 = __makeTemplateObject(["CURRENT_TIMESTAMP"], ["CURRENT_TIMESTAMP"])))).notNull(),
    updatedAt: timestamp('updatedAt').default(sql(templateObject_4 || (templateObject_4 = __makeTemplateObject(["CURRENT_TIMESTAMP"], ["CURRENT_TIMESTAMP"])))).onUpdateNow().notNull()
});
export var transactions = mysqlTable('transaction', {
    id: varchar('id', { length: 255 }).primaryKey(),
    userId: varchar('userId', { length: 255 }).notNull().references(function () { return users.id; }),
    amount: decimal('amount', { precision: 10, scale: 2 }).notNull(),
    type: mysqlEnum('type', ['income', 'expense']).notNull(),
    categoryId: varchar('categoryId', { length: 255 }).notNull().references(function () { return categories.id; }),
    date: timestamp('date').notNull(),
    description: text('description'),
    createdAt: timestamp('createdAt').default(sql(templateObject_5 || (templateObject_5 = __makeTemplateObject(["CURRENT_TIMESTAMP"], ["CURRENT_TIMESTAMP"])))).notNull(),
    updatedAt: timestamp('updatedAt').default(sql(templateObject_6 || (templateObject_6 = __makeTemplateObject(["CURRENT_TIMESTAMP"], ["CURRENT_TIMESTAMP"])))).onUpdateNow().notNull()
});
export var bookings = mysqlTable('booking', {
    id: varchar('id', { length: 255 }).primaryKey(),
    name: text('name').notNull(),
    email: varchar('email', { length: 255 }).notNull(),
    phone: text('phone'),
    date: varchar('date', { length: 255 }).notNull(),
    time: text('time').notNull(),
    guests: text('guests').notNull(),
    type: mysqlEnum('type', ['lunch', 'dinner', 'other']).notNull(),
    specialReqs: text('specialReqs'), // JSON stringified array of reqs
    agreedToUpdates: varchar('agreedToUpdates', { length: 10 }), // true/false
    agreedToTerms: varchar('agreedToTerms', { length: 10 }), // true/false
    status: mysqlEnum('status', ['pending', 'replied']).default('pending').notNull(),
    createdAt: timestamp('createdAt').default(sql(templateObject_7 || (templateObject_7 = __makeTemplateObject(["CURRENT_TIMESTAMP"], ["CURRENT_TIMESTAMP"])))).notNull(),
    updatedAt: timestamp('updatedAt').default(sql(templateObject_8 || (templateObject_8 = __makeTemplateObject(["CURRENT_TIMESTAMP"], ["CURRENT_TIMESTAMP"])))).onUpdateNow().notNull()
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;
