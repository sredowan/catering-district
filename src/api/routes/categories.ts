import express from "express";
import { CategoryService } from "../services/CategoryService";
import { auth } from "../../lib/auth";

export const categoryRouter = express.Router();

const requireAuth = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        // @ts-ignore
        const session = await auth.api.getSession({
            headers: new Headers(req.headers as any)
        });

        if (!session || !session.user) {
            return res.status(401).json({ error: "Unauthorized" });
        }

        // @ts-ignore
        req.user = session.user;
        next();
    } catch (e) {
        return res.status(401).json({ error: "Unauthorized" });
    }
};

categoryRouter.use(requireAuth);

categoryRouter.get("/", async (req, res) => {
    try {
        // @ts-ignore
        const categories = await CategoryService.getCategories(req.user.id);
        res.json(categories);
    } catch (e: any) {
        res.status(500).json({ error: e.message });
    }
});

categoryRouter.post("/", async (req, res) => {
    try {
        // @ts-ignore
        const result = await CategoryService.createCategory(req.user.id, {
            name: req.body.name,
            type: req.body.type,
            color: req.body.color
        });
        res.status(201).json({ message: "Category created", result });
    } catch (e: any) {
        res.status(500).json({ error: e.message });
    }
});

categoryRouter.delete("/:id", async (req, res) => {
    try {
        // @ts-ignore
        await CategoryService.deleteCategory(req.user.id, req.params.id);
        res.json({ message: "Category deleted" });
    } catch (e: any) {
        res.status(500).json({ error: e.message });
    }
});
