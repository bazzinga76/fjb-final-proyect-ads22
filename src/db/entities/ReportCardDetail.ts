import "reflect-metadata";
import { ObjectType, Field, ID, Int } from "type-graphql";
import { IsEmail } from "class-validator";
import { Student } from "./Student";
import { Subject } from "./Subject";
import { Teacher } from "./Teacher";

@ObjectType()
export class ReportCardDetail {
  @Field((type) => ID)
  id?: string;

  @Field((type) => String, { nullable: true })
  class?: string | null;

  @Field((type) => String, { nullable: true })
  school_year?: string | null;

  @Field((type) => String, { nullable: true })
  score?: number | null;

  @Field((type) => String, { nullable: true })
  period?: string | null;

  @Field((type) => String, { nullable: true })
  description?: string | null;

  @Field((type) => Boolean, { nullable: true })
  passed?: boolean | false;

  @Field((type) => Date)
  evaluationStartDate?: Date;

  @Field((type) => Date)
  evaluationEndDate?: Date;

  @Field((type) => Number, { defaultValue: 0 })
  try?: number;

  @Field((type) => Date, { nullable: true })
  createdAt?: Date | null;

  @Field((type) => Date, { nullable: true })
  updatedAt?: Date | null;
}
