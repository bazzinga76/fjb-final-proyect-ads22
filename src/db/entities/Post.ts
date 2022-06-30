import "reflect-metadata";
import { ObjectType, Field, ID } from "type-graphql";
import { User } from "./User";

@ObjectType()
export class Post {
  @Field((type) => ID)
  id?: string;

  @Field((type) => String)
  title: string;

  @Field((type) => String, { nullable: true })
  content: string | null;

  @Field((type) => Boolean)
  published: boolean;

  @Field((type) => Number, { defaultValue: 0 })
  viewCount?: number;

  @Field((type) => Date)
  createdAt?: Date;

  @Field((type) => Date)
  updatedAt?: Date;

  @Field((type) => String, { nullable: true })
  authorId: string;
}
