import { ArgsType, Field, InputType, Int } from "type-graphql";

@ArgsType()
@InputType()
export class AgentInfo {

    @Field(() => String)
    agentName: string;

    @Field(() => String)
    agentEmail: string;

    @Field(() => String)
    agentPassword: string;

    @Field(() => Int)
    agentAge: number;

    @Field(() => String)
    agentMobile: string;

    @Field(() => String)
    agentCity: string;

    @Field(() => String)
    agentState: string;

}