import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class ResponseFormat {
    @Field()
    field?: string;

    @Field()
    message?: string;
}
