import { serverContext } from "../context";
import { Args, Ctx, Field, Mutation, ObjectType, Query, Resolver } from "type-graphql";
import { Agent } from "../entities/Agent";
import { ResponseFormat } from "./Format";
import { AgentInfo } from "../utils/AgentInfo";
import { CredentialsInput } from "../utils/CredentialsInput";
import { validation } from "../utils/validation";
import argon2 from "argon2";
import { connection } from "../connection";

@ObjectType()
class AgentResponse {
    @Field(() => [ResponseFormat], {nullable: true})
    logs?: ResponseFormat[];

    @Field(() => Agent, {nullable: true})
    agent?: Agent;
}


@Resolver(Agent)
export class AgentResolver{

    @Query(() => String) 
    postAgentTry(@Ctx() {req}: serverContext){
        console.log(req);
        return "Agent Hola";
    }

    @Mutation(() => AgentResponse)
    async registerAgent(
        @Args('agentData', () => AgentInfo) agentData: AgentInfo,
        @Ctx() { req }: serverContext
    ): Promise<AgentResponse> {
        let credentials = new CredentialsInput();
        credentials.email = agentData.agentEmail;
        credentials.username = agentData.agentName;
        credentials.password = agentData.agentPassword;
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
                    agentName: agentData.agentName,
                    agentEmail: agentData.agentEmail,
                    agentPassword: hashedPassword,
                    agentAge: agentData.agentAge,
                    agentMobile: agentData.agentMobile,
                    agentCity: agentData.agentCity,
                    agentState: agentData.agentState,
                    agentCreatedAt: new Date(),
                    agentUpdatedAt: new Date(),
                }
            )
        } catch (err) {
            return err;
        }

        if(result.acknowledged){
            let agent: Agent = await connection.db('rrrdatabase').collection('test').findOne({ agentName: agentData.agentName });
            return { agent }
        }

        return {
            logs: [
                {
                    field: "Unknown Error Occurred",
                    message: "Better check with administrator",
                }
            ]
        }
    }
}