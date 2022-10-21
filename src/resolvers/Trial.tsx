import {Query, Resolver} from "type-graphql"

@Resolver()
export class TrialResolver {

    @Query(() => String)
    hello(){
        return "Anyeong";
    }
}