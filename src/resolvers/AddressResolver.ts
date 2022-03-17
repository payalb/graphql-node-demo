import { Resolver } from "@nestjs/graphql";
import { Arg, Field, InputType, Mutation,  Query } from "type-graphql";
import {Address} from "../entity/Address"

@InputType()
class AddressInput{

    @Field(()=> String)
    city: string
    @Field(()=> String)
    state: string
}

@Resolver()
export class AddressResolver{

    @Query(() => [Address])
    async getAddresses(): Promise<Address[]>{
        return Address.find({});
    }

    @Mutation(()=> Address)
    // async  saveAddress(@Arg("city")city: string, @Arg("state") s: string){
        async saveAddress(@Arg("input", () => AddressInput)input: AddressInput){
            return Address.create(input).save();
            
    }

}

