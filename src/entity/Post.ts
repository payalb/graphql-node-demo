import { Field, ID,  ObjectType } from "type-graphql"
import { PrimaryGeneratedColumn, BaseEntity, Entity,Column } from "typeorm"

@Entity()
@ObjectType()
export class Post extends BaseEntity{
    @Field(()=> ID)
    @PrimaryGeneratedColumn()
    id: number
    @Field()
    @Column()
    title: string
    @Field()
    @Column()
    description: string

}