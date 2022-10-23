import { User } from "../entities/User";
import { Args, Ctx, Field, FieldResolver, Mutation, ObjectType, Query, Resolver, Root } from "type-graphql";
import { serverContext } from "../context";
import { ResponseFormat } from "./Format";
import { validation } from "../utils/validation";
import argon2 from "argon2";
import { connection } from "../connection";
import { CredentialsInput } from "../utils/CredentialsInput";
import { UserInfo } from "../utils/UserInfo";

@ObjectType()
class UserResponse {
    @Field(() => [ResponseFormat], { nullable: true })
    logs?: ResponseFormat[];
}

@Resolver(User)
export class UserResolver{

    @FieldResolver(() => String)
    userEmail(@Root() user: User, @Ctx() {req}: serverContext) {
        console.log(req);
        return user.userEmail;
    }

    @Query(() => String)
    postMe(@Ctx() {req}: serverContext) {
        console.log(req);
        return "Hoola"
    }

    @Mutation(() => UserResponse)
    async signUp(
        @Args("details") details: UserInfo,
        @Ctx() { req }: serverContext
    ): Promise<UserResponse | boolean> {
        let credentials = new CredentialsInput()
        credentials.email = details.userEmail;
        credentials.username = details.userName;
        credentials.password = details.userPassword;
        let logs = validation(credentials);
        if(logs){
            return { logs };
        }

        const hashedPassword = await argon2.hash(credentials.password);
        let result;  
        try {
            result = await connection
            .db('rrrdatabase')
            .collection('test')
            .insertOne(
                { 
                    userName: details.userName, 
                    userEmail: details.userEmail,
                    userPassword: hashedPassword,
                    userAge: details.userAge,
                    userAddress: details.userAddress,
                    userMobile: details.userMobile,
                    userCity: details.userCity,
                    userState: details.userState,
                    userCreatedAt: new Date(),
                    userUpdatedAt: new Date()
                }
                )
        } catch (err) {
                return err;
        }

        if(result.acknowledged){
            logs = [
                {
                    field: "Successful Insertion",
                    message: result.insertedId.toString(),
                }
            ]
        } else {
            logs = [
                {
                    field: "Unknown Error Occurred",
                    message: "Better check with administrator",
                }
            ]
        }
        
        return { logs };

    }
}
