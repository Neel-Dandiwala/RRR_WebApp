import "reflect-metadata";
import {createConnection} from "typeorm";
import path from "path";
import { User } from "./entities/User";
import { Agent } from "./entities/Agent";
import { Company } from "./entities/Company";
import { Waste } from "./entities/Waste";

const main = async () => {
    const connection = await createConnection({
        type: "mongodb",
        url: process.env.DATABASE_URL,
        logging: true,
        migrations: [path.join(__dirname, "./migrations/*")],
        entities: [User, Agent, Company, Waste],
    })
};

main().catch((err) => {
    console.error(err);
});