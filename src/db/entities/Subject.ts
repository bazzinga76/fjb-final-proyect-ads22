import "reflect-metadata";
import { ObjectType, Field, ID } from "type-graphql";
import { ReportCardDetail } from "./ReportCardDetail";

@ObjectType()
export class Subject {
  @Field((type) => ID)
  id?: string;

  @Field((type) => String, { nullable: true })
  name?: string | null;

  @Field((type) => String, { nullable: true })
  description?: string | null;

  @Field((type) => Date, { nullable: true })
  createdAt?: Date | null;

  @Field((type) => Date, { nullable: true })
  updatedAt?: Date | null;

  @Field((type) => ReportCardDetail, { nullable: true })
  reportCardDetail?: ReportCardDetail[] | null;
}
