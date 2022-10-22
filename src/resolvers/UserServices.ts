import { User } from "../entities/User";
import { Ctx, FieldResolver, Query, Resolver, Root } from "type-graphql";
import { serverContext } from "../context";

// @ObjectType()
// class FieldError {}


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
}
