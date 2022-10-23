import { ArgsType, Field, InputType, Int } from "type-graphql";

@ArgsType()
@InputType()
export class UserInfo {

    @Field(() => String)
    userName: string;

    @Field(() => String)
    userEmail: string;

    @Field(() => String)
    userPassword: string;

    @Field(() => Int)
    userAge: number;

    @Field(() => String)
    userAddress: string;

    @Field(() => String)
    userMobile: string;

    @Field(() => String)
    userCity: string;

    @Field(() => String)
    userState: string;
}

export type UserInfoType = {
    userName: string;
    userEmail: string;
    userPassword: string;
    userAge: number;
    userAddress: string;
    userMobile: string;
    userCity: string;
    userState: string;
}