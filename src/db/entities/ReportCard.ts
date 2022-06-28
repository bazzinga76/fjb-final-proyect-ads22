import "reflect-metadata";
import { ObjectType, Field, ID, Int } from "type-graphql";
import { IsEmail } from "class-validator";
import { Student } from "./Student";
import { Subject } from "./Subject";
import { Teacher } from "./Teacher";

@ObjectType()
export class ReportCard {
  @Field((type) => ID)
  id?: string;

  @Field((type) => Student)
  student: Student;

  @Field((type) => ID)
  studentId: string;

  @Field((type) => Subject)
  subject: Subject;

  @Field((type) => ID)
  subjectId: string;

  @Field((type) => Teacher)
  teacher: Teacher;

  @Field((type) => ID)
  teacherId: string;

  @Field((type) => String, { nullable: true })
  class?: string | null;

  @Field((type) => String, { nullable: true })
  school_year?: string | null;

  @Field((type) => String, { nullable: true })
  score?: string | null;

  @Field((type) => String, { nullable: true })
  period?: string | null;

  @Field((type) => String, { nullable: true })
  description?: string | null;

  @Field((type) => Boolean, { nullable: true })
  passed?: boolean | false;

  @Field((type) => Date)
  evaluation_start_date?: Date;

  @Field((type) => Date)
  evaluation_end_date?: Date;

  @Field((type) => Number, { defaultValue: 0 })
  try?: number;

  @Field((type) => Date)
  createdAt?: Date;

  @Field((type) => Date)
  updatedAt?: Date;
}
