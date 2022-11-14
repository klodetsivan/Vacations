import express, { Request, Response, NextFunction } from "express";
import vacationsLogic from "../5-logic/vacations-logic";


const router = express.Router(); // Capital R

// GET http://localhost:3001/api/vacations
router.get("/vacations", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const vacations = await vacationsLogic.getAllVacations();
        response.json(vacations);
    }
    catch (err: any) {
        next(err);
    }
});

export default router;