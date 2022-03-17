import { Field, Int, ObjectType } from "type-graphql";
import { PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "typeorm";
import { Column } from "typeorm";
import { Entity } from "typeorm";

@Entity()
@ObjectType()
export class Address extends BaseEntity{

    @PrimaryGeneratedColumn()
    @Field(()=> Int, {nullable: true})
    id?: number
    @Column({type: String})
    @Field(()=> String, {nullable: true})
    city: string
    @Column()
    @Field({nullable: true})
    state?: string

}