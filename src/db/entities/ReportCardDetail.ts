import "reflect-metadata";
import { ObjectType, Field, ID, Int } from "type-graphql";
import { IsEmail } from "class-validator";
import { Subject } from "./Subject";
import { Teacher } from "./Teacher";
import { ReportCard } from "./ReportCard";

@ObjectType()
export class ReportCardDetail {
  @Field((type) => ID)
  id?: string;

  @Field((type) => String, { nullable: true })
  score?: number | null;

  @Field((type) => String, { nullable: true })
  period?: string | null;

  @Field((type) => String, { nullable: true })
  description?: string | null;

  @Field((type) => Boolean, { nullable: true })
  passed?: boolean | false;

  @Field((type) => Number, { defaultValue: 0 })
  try?: number;

  @Field((type) => Date, { nullable: true })
  createdAt?: Date | null;

  @Field((type) => Date, { nullable: true })
  updatedAt?: Date | null;

  @Field((type) => ReportCard, { nullable: true })
  reportCard?: ReportCard | null;

  @Field((type) => Teacher, { nullable: true })
  teacher?: Teacher | null;

  @Field((type) => Subject, { nullable: true })
  subject?: Subject | null;
}
