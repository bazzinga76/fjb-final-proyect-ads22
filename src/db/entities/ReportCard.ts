import "reflect-metadata";
import { ObjectType, Field, ID, Int } from "type-graphql";
import { Student } from "./Student";
import { ReportCardDetail } from "./ReportCardDetail";

@ObjectType()
export class ReportCard {
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

  @Field((type) => Date)
  evaluationStartDate?: Date;

  @Field((type) => Date)
  evaluationEndDate?: Date;

  @Field((type) => Date, { nullable: true })
  createdAt?: Date | null;

  @Field((type) => Date, { nullable: true })
  updatedAt?: Date | null;

  @Field((type) => Student, { nullable: true })
  student?: Student | null;

  @Field((type) => ReportCardDetail, { nullable: true })
  reportCardDetail?: ReportCardDetail[] | null;
}
