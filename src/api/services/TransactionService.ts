import { db } from "../../db";
import { transactions } from "../../db/schema";
import { eq, and } from "drizzle-orm";

export class TransactionService {
    static async getTransactions(userId: string) {
        return await db
            .select()
            .from(transactions)
            .where(eq(transactions.userId, userId))
            .orderBy(transactions.date);
    }

    static async createTransaction(userId: string, data: any) {
        return await db.insert(transactions).values({
            id: crypto.randomUUID(),
            userId,
            amount: data.amount,
            type: data.type,
            categoryId: data.categoryId,
            date: new Date(data.date),
            description: data.description,
        });
    }

    static async getTransactionById(userId: string, transactionId: string) {
        const result = await db
            .select()
            .from(transactions)
            .where(and(eq(transactions.id, transactionId), eq(transactions.userId, userId)));
        return result[0]; // will be undefined if not found
    }

    static async updateTransaction(userId: string, transactionId: string, data: any) {
        return await db
            .update(transactions)
            .set({
                amount: data.amount,
                type: data.type,
                categoryId: data.categoryId,
                date: data.date ? new Date(data.date) : undefined,
                description: data.description,
            })
            .where(and(eq(transactions.id, transactionId), eq(transactions.userId, userId)));
    }

    static async deleteTransaction(userId: string, transactionId: string) {
        return await db
            .delete(transactions)
            .where(and(eq(transactions.id, transactionId), eq(transactions.userId, userId)));
    }
}
