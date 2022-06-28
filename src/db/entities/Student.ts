import "reflect-metadata";
import { ObjectType, Field, ID } from "type-graphql";
import { IsEmail } from "class-validator";
import { ReportCardDetail } from "./ReportCardDetail";

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
  birth_date?: Date;

  @Field((type) => Date, { nullable: true })
  admission_date?: Date;

  @Field()
  @IsEmail()
  email: string;

  @Field((type) => Date)
  createdAt?: Date;

  @Field((type) => Date)
  updatedAt?: Date;

  @Field((type) => ReportCardDetail)
  reportCardDetail?: ReportCardDetail[];
}
