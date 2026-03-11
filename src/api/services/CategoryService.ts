import { db } from "../../db";
import { categories } from "../../db/schema";
import { eq, or, and } from "drizzle-orm";

export class CategoryService {
    static async getCategories(userId: string) {
        // Fetch categories that belong to the user OR default categories (where userId is null)
        return await db
            .select()
            .from(categories)
            .where(or(eq(categories.userId, userId), eq(categories.userId, 'null'))); // assuming default categories might literally be stored as 'null' or NULL in SQL, usually handle IS NULL with Drizzle eq(field, null) but better test it
    }

    static async createCategory(userId: string, data: { name: string; type: 'income' | 'expense'; color?: string }) {
        const result = await db.insert(categories).values({
            id: crypto.randomUUID(),
            userId,
            name: data.name,
            type: data.type,
            color: data.color,
        });
        return result;
    }

    static async deleteCategory(userId: string, categoryId: string) {
        return await db
            .delete(categories)
            // Ensure they can only delete THEIR categories, not default ones (if userId is null)
            .where(and(eq(categories.id, categoryId), eq(categories.userId, userId)));
    }
}
