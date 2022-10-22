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
import { appDataSource } from "./datasource";
import { connection } from "./connection";

const main = async () => {

    appDataSource.initialize();

    await connection.connect();

    // const mongodb = require('mongodb');
    // const MongoClient = mongodb.MongoClient;
    // const connection = new MongoClient('mongodb+srv://mongodb:mongodb@rrrcluster.nluljzi.mongodb.net/rrrdatabase?retryWrites=true&w=majority', { useNewUrlParser: true });

    // await connection.connect(() => {
    //     const collection = connection.db('rrrdatabase').collection('test');
    //     console.log(collection);

    //     console.log("Writing data trial in MONGO");
    //     var std = new User();
    //     std.userEmail = "27";
    //     std.userName = "Xiu";
    //     console.log(std);

        //Successful Insertion

        // collection.insertOne(std, function (err, result) {
        //     if (err) throw err;
        //     console.log("ADDED" + result);
        //     connection.close();
        // });
         
    // })

    // Successful Reading

    // const collection = connection.db('rrrdatabase').collection('test');
    // const results = async () => {
    //     const items = await collection.find({}).toArray();
    //     console.log(items);
    //     connection.close();
    // }
    // results().catch((err) => {
    //     console.error(err);
    // });
    

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