import 'reflect-metadata';
import { ObjectType, Field, ID } from 'type-graphql';
import { User } from './User';
import { Post } from './Post';
import { Comment } from './Comment';

@ObjectType()
export class Reaction   {
    @Field((type) => ID)
    id: string

    @Field((type) => User)
    user: User

    @Field((type) => ID)
    userId: string
    
    @Field((type) => Post)
    post: Post
    
    @Field((type) => ID)
    postId: String

    @Field((type) => Date)
    createdAt: Date

    @Field((type) => Date)
    updatedAt: Date
}

