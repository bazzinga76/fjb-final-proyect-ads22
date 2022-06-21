import "reflect-metadata";
import { ObjectType, Field, ID } from "type-graphql";
import { IsEmail } from "class-validator";
import { Report_card } from "./Report_card";

@ObjectType()
export class Teacher {
  @Field((type) => ID)
  id?: string;

  @Field((type) => String, { nullable: true })
  name?: string | null;

  @Field((type) => String, { nullable: true })
  paternal_surname?: string | null;

  @Field((type) => String, { nullable: true })
  maternal_surname?: string | null;

  @Field((type) => Date, { nullable: true })
  birth_date?: Date;

  @Field((type) => Date, { nullable: true })
  admission_date?: Date;

  @Field()
  @IsEmail()
  email: string;

  @Field((type) => Date, { nullable: true })
  createdAt?: Date;

  @Field((type) => Date, { nullable: true })
  updatedAt?: Date;

  @Field((type) => Report_card)
  report_card?: Report_card[];
}
