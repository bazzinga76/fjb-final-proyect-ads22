import "reflect-metadata";
import { ObjectType, Field, ID } from "type-graphql";
import { User } from "./User";

@ObjectType()
export class Post {
  @Field((type) => ID)
  id: string;

  @Field((type) => String)
  title: string;

  @Field((type) => String, { nullable: true })
  content: string | null;

  @Field((type) => Boolean)
  published: boolean;

  @Field((type) => Number, { defaultValue: 0 })
  viewCount?: number;

  @Field((type) => Date, { nullable: true })
  createdAt?: Date | null;

  @Field((type) => Date, { nullable: true })
  updatedAt?: Date | null;

  @Field((type) => User, { nullable: true })
  author?: User | null;
}
