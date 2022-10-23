import { ArgsType, Field, InputType } from "type-graphql";

@ArgsType()
@InputType()
export class UserInfo {

    @Field()
    userName: string;

    @Field()
    userEmail: string;

    @Field()
    userPassword: string;

    @Field()
    userAge: number;

    @Field()
    userAddress: string;

    @Field()
    userMobile: string;

    @Field()
    userCity: string;

    @Field()
    userState: string;
}