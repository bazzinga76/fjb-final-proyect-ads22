import 'reflect-metadata';
import { ObjectType, Field, ID } from 'type-graphql';
import { IsEmail } from 'class-validator';
import { Post } from "./Post";
import { Comment } from "./Comment";
import { Reaction } from "./Reaction";

@ObjectType()
export class User {
    @Field((type) => ID)
    id?: string;

    @Field()
    @IsEmail()
    email: string;
    
    @Field((type) => String, { nullable: true })
    name?: string | null

    @Field((type) => Post)
    post?: Post[]

    @Field((type) => Comment)
    comments?: Comment[]

    @Field((type) => Reaction)
    reactions?: Reaction[]

    @Field((type) => Date)
    createdAt: Date

    @Field((type) => Date)
    updatedAt: Date
}

