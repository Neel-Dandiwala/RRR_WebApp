import { User } from "../entities/User";
import {Mutation, Query, Resolver} from "type-graphql"
import { connection } from "../connection";

@Resolver()
export class TrialResolver {

    @Query(() => String)
    hello(){
        return "Anyeong";
    }

    @Query(() => [User])
    async checkMe(): Promise<User[]> {
        return await connection.db('rrrdatabase').collection('test').find({ userName: 'raj12345'}).toArray();
    }

    @Mutation(() => Boolean)
    async tryUpload(): Promise<boolean> {
        // await connection.db('rrrdatabase').collection('test').insertOne({ userName: 'Gong', userEmail: '737373'});
        return true;
    }
}