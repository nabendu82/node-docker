import { Router } from "express";
const router = Router();

router.get("/", (req, res) => res.json({ message: "Hello from Node Docker v3" }));

router.get("/health", (req, res) => {
  res.status(200).json({ message: "All is well" });
});

export default router;
