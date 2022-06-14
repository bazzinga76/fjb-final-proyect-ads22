import 'reflect-metadata';
import { ObjectType, Field, ID } from 'type-graphql';
import { User } from './User';
import { Post } from './Post';

@ObjectType()
export class Comment   {
    @Field((type) => ID)
    id: string

    @Field((type) => String, { nullable: true})
    content: string | null

    @Field((type) => User)
    author: User

    @Field((type) => ID)
    authorId: string

    @Field((type) => Post)
    post: Post

    @Field((type) => ID)
    postId: Post

    @Field((type) => Date)
    createdAt: Date

    @Field((type) => Date)
    updatedAt: Date
}