import "reflect-metadata";
import { ObjectType, Field, ID } from "type-graphql";
import { IsEmail } from "class-validator";
import { ReportCard } from "./ReportCard";

@ObjectType()
export class Student {
  @Field((type) => ID)
  id: string;

  @Field((type) => String, { nullable: true })
  name?: string | null;

  @Field((type) => String, { nullable: true })
  paternal_surname?: string | null;

  @Field((type) => String, { nullable: true })
  maternal_surname?: string | null;

  @Field((type) => Date, { nullable: true })
  birth_date?: Date | null;

  @Field((type) => Date, { nullable: true })
  admission_date?: Date | null;

  @Field()
  @IsEmail()
  email: string;

  @Field((type) => Date, { nullable: true })
  createdAt?: Date | null;

  @Field((type) => Date, { nullable: true })
  updatedAt?: Date | null;

  @Field((type) => ReportCard, { nullable: true })
  reportCardDetail?: ReportCard[] | null;
}
