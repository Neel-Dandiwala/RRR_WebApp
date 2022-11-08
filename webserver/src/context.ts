import { Request, Response } from "express";
import { Session } from "express-session";
import { ObjectID } from "typeorm";

export type serverContext = {
    req: Request  & {session?: Session & {authenticationID? : ObjectID }}
    res: Response 
}