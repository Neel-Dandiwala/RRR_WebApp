import { User } from "../entities/User";
import {Query, Resolver} from "type-graphql"
import { appDataSource } from "../datasource";
import { connection } from "../connection";

@Resolver()
export class TrialResolver {

    @Query(() => String)
    hello(){
        return "Anyeong";
    }

    @Query(() => [User])
    async checkMe(): Promise<User[]> {
        return await connection.db('rrrdatabase').collection('test').find({}).toArray();
    }
}