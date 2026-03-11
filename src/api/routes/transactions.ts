import express from "express";
import { TransactionService } from "../services/TransactionService.js";
import { auth } from "../../lib/auth.js";

export const transactionRouter = express.Router();

// Middleware to protect routes - assumes `auth.api.getSession` or similar is used,
// but for an Express app interacting with Better Auth, we can check headers directly using the auth instance
const requireAuth = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        // @ts-ignore
        const session = await auth.api.getSession({
            headers: new Headers(req.headers as any)
        });

        if (!session || !session.user) {
            return res.status(401).json({ error: "Unauthorized" });
        }

        // Attach user info to request for the services to use
        // @ts-ignore
        req.user = session.user;
        next();
    } catch (e) {
        return res.status(401).json({ error: "Unauthorized" });
    }
};

transactionRouter.use(requireAuth);

transactionRouter.get("/", async (req, res) => {
    try {
        // @ts-ignore
        const transactions = await TransactionService.getTransactions(req.user.id);
        res.json(transactions);
    } catch (e: any) {
        res.status(500).json({ error: e.message });
    }
});

transactionRouter.post("/", async (req, res) => {
    try {
        // @ts-ignore
        const result = await TransactionService.createTransaction(req.user.id, req.body);
        res.status(201).json({ message: "Transaction created", result });
    } catch (e: any) {
        res.status(500).json({ error: e.message });
    }
});

transactionRouter.get("/:id", async (req, res) => {
    try {
        // @ts-ignore
        const transaction = await TransactionService.getTransactionById(req.user.id, req.params.id);
        if (!transaction) return res.status(404).json({ error: "Not found" });
        res.json(transaction);
    } catch (e: any) {
        res.status(500).json({ error: e.message });
    }
});

transactionRouter.put("/:id", async (req, res) => {
    try {
        // @ts-ignore
        const result = await TransactionService.updateTransaction(req.user.id, req.params.id, req.body);
        res.json({ message: "Transaction updated", result });
    } catch (e: any) {
        res.status(500).json({ error: e.message });
    }
});

transactionRouter.delete("/:id", async (req, res) => {
    try {
        // @ts-ignore
        await TransactionService.deleteTransaction(req.user.id, req.params.id);
        res.json({ message: "Transaction deleted" });
    } catch (e: any) {
        res.status(500).json({ error: e.message });
    }
});
