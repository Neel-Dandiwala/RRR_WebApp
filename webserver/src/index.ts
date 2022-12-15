import "reflect-metadata";
import express from "express";
import session from "express-session";
import { default as connectMongoDBSession } from 'connect-mongodb-session';
import cors from "cors";
import { connection } from "./connection";
import { ObjectID } from "typeorm";

declare module 'express-session' {
    export interface SessionData {
      authenticationID: { [key: string]: ObjectID };
    }
  }

const main = async () => {

    // appDataSource.initialize();

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

    
    
    const MongoDBStore = connectMongoDBSession(session);
    const sessionStore = new MongoDBStore({
        uri: 'mongodb+srv://mongodb:mongodb@rrrcluster.nluljzi.mongodb.net/rrrdatabase?retryWrites=true&w=majority',
        collection: 'sessions'
    });

    sessionStore.on('error', function(error){
        console.log(error);
    })

    const app = express();
    app.set("trust proxy", true); // Enabling trust proxy for last / rightmost value

    app.use(
        cors({
            origin: 'http://localhost:4000',
            credentials: true,
            
        })
    );

    app.use(session(
        {
            name: 'rrrid',
            secret: 'VriddhiSanketKrishna',
            cookie: {
                maxAge: 1000 * 60 * 60 * 24 * 7,
                httpOnly: true,
                sameSite: 'lax',
                secure: false,
            },
            store: sessionStore,
            saveUninitialized: false,
            resave: false,
        }
    ));

    app.use(express.json());
    app.use(require('./routes/Routes'));
    app.use(require('./routes/UserRoutes'));
    app.use(require('./routes/AgentRoutes'));
    app.use(require('./routes/CompanyRoutes'));


    app.listen(4000, () => {
        console.log("Server started on localhost:4000")
    });

};

main().catch((err) => {
    console.error(err);
});