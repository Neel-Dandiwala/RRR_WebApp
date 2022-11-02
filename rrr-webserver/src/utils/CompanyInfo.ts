import { ArgsType, Field, InputType, Int } from "type-graphql";

@ArgsType()
@InputType()
export class CompanyInfo {

    @Field(() => String)
    companyName: string;

    @Field(() => String)
    companyEmail: string;

    @Field(() => String)
    companyPassword: string;

    @Field(() => Int)
    companyPaperPrice: number;

    @Field(() => Int)
    companyPlasticPrice: number;

    @Field(() => Int)
    companyElectronicPrice: number;

    @Field(() => String)
    companyAddress: string;

    @Field(() => String)
    companyCity: string;

    @Field(() => String)
    companyState: string;

    @Field(() => String)
    companyPincode: string;
}
