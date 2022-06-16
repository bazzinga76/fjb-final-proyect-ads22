import "reflect-metadata";
import { ObjectType, Field, ID } from "type-graphql";
import { IsEmail } from "class-validator";
import { Report_card } from "./Report_card";

@ObjectType()
export class Subject {
  @Field((type) => ID)
  id?: string;

  @Field((type) => String, { nullable: true })
  name?: string | null;

  @Field((type) => String, { nullable: true })
  description?: string | null;

  @Field((type) => Date)
  createdAt?: Date;

  @Field((type) => Date)
  updatedAt?: Date;

  @Field((type) => Report_card)
  report_card?: Report_card[];
}
