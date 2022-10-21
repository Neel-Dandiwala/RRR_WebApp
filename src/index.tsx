import "reflect-metadata";
import { DataSource } from "typeorm";
import path from "path";
import { User } from "./entities/User";
import { Agent } from "./entities/Agent";
import { Company } from "./entities/Company";
import { Waste } from "./entities/Waste";

const main = async () => {
    const connection = new DataSource({
        type: "mongodb",
        url: process.env.DATABASE_URL,
        logging: true,
        migrations: [path.join(__dirname, "./migrations/*")],
        entities: [User, Agent, Company, Waste],
    })

    connection.initialize()
        .then(() => {
            console.log("Connection done!");
        })
        .catch((err) => {
            console.error("Error: ", err);
        })
};

main().catch((err) => {
    console.error(err);
});