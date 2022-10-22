import { Request, Response } from "express";

export type serverContext = {
    req: Request 
    res: Response 
}