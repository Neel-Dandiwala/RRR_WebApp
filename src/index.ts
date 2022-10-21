import "reflect-metadata";
import { DataSource } from "typeorm";
import path from "path";
import { User } from "./entities/User";
import { Agent } from "./entities/Agent";
import { Company } from "./entities/Company";
import { Waste } from "./entities/Waste";
import express from "express";
import cors from "cors";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { TrialResolver } from "./resolvers/Trial";
import { UserResolver } from "./resolvers/UserServices";

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

    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [TrialResolver, UserResolver],
            validate: false
        }),
        context: ({ req, res }) => ({
            req,
            res,
        }),
    });

    await apolloServer.start();

    const app = express();
    app.set("trust proxy", 1); // Enabling trust proxy for last / rightmost value

    app.use(
        cors({
            origin: process.env.CORS_ORIGIN,
            credentials: true,
        })
    );

    apolloServer.applyMiddleware({app, path: '/'});

    app.get("/", (_, res) => {
        res.send("Hello");
        console.log("here");
    })

    app.listen(4000, () => {
        console.log("Server started on localhost:4000")
    });

};

main().catch((err) => {
    console.error(err);
});