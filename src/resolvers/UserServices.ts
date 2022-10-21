import { User } from "src/entities/User";
import { Ctx, FieldResolver, Query, Resolver, Root } from "type-graphql";
import { serverContext } from "../types";

// @ObjectType()
// class FieldError {}


@Resolver(User)
export class UserResolver{

    @FieldResolver(() => String)
    email(@Root() user: User, @Ctx() {req}: serverContext) {
        console.log(req);
        return user.userEmail;
    }

    @Query(() => String)
    postMe(@Ctx() {req}: serverContext) {
        console.log(req);
        return "Hoola"
    }
}
