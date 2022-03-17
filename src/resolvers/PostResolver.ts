import { Resolver } from "@nestjs/graphql";
import  {Post}  from "../entity/Post";
import { Arg, Field, InputType, Mutation, Query } from "type-graphql";

@InputType()
class PostInput{
    @Field()
    id: number
    @Field()
    title: string
    @Field(()=> String, {nullable: true})
    description?: string
}
@Resolver()
export class PostResolver{

    @Query(()=> [Post])
    getPosts(): Promise<Post[]>{
        return Post.find({});
    }

    @Mutation(()=> Post)
    insertPost(@Arg("title") title: string, @Arg("description") desc: string){
       return Post.create({title, description: desc}).save();
        
    }

    @Mutation(()=> Post)
    updatePost(@Arg("input") input: PostInput){
       return Post.update({id: input.id},input);
        
    }
}