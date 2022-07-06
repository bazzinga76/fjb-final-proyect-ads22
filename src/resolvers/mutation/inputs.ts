import "reflect-metadata";
import {
  Resolver,
  Query,
  Ctx,
  InputType,
  Field,
  ID,
  Mutation,
  Arg,
} from "type-graphql";
import { ReportCard } from "../../db/entities";

@InputType()
export class UserCreateInput {
  @Field()
  email: string;

  @Field()
  name: string;
}

@InputType()
export class FindUserById {
  @Field((type) => ID)
  id: string;
}

@InputType()
export class StudentCreateInput {
  @Field((type) => String)
  name: string;

  @Field((type) => String)
  paternal_surname: string;

  @Field((type) => String)
  maternal_surname: string;

  @Field((type) => Date)
  birth_date: Date;

  @Field((type) => Date)
  admission_date: Date;

  @Field((type) => String)
  email: string;
}

@InputType()
export class StudentUpdateInput {
  @Field((type) => String, { nullable: true })
  name?: string;

  @Field((type) => String, { nullable: true })
  paternal_surname?: string;

  @Field((type) => String, { nullable: true })
  maternal_surname?: string;

  @Field((type) => Date, { nullable: true })
  birth_date?: Date;

  @Field((type) => Date, { nullable: true })
  admission_date?: Date;

  @Field((type) => String, { nullable: true })
  email?: string;
}

@InputType()
export class TeacherCreateInput {
  @Field((type) => String)
  name: string;

  @Field((type) => String)
  paternal_surname: string;

  @Field((type) => String)
  maternal_surname: string;

  @Field((type) => Date)
  birth_date: Date;

  @Field((type) => Date)
  admission_date: Date;

  @Field((type) => String)
  email: string;
}

@InputType()
export class TeacherUpdateInput {
  @Field((type) => String, { nullable: true })
  name?: string;

  @Field((type) => String, { nullable: true })
  paternal_surname?: string;

  @Field((type) => String, { nullable: true })
  maternal_surname?: string;

  @Field((type) => Date, { nullable: true })
  birth_date?: Date;

  @Field((type) => Date, { nullable: true })
  admission_date?: Date;

  @Field((type) => String, { nullable: true })
  email?: string;
}

@InputType()
export class SubjectCreateInput {
  @Field((type) => String)
  name: string;

  @Field((type) => String)
  description: string;
}

@InputType()
export class SubjectUpdateInput {
  @Field((type) => String, { nullable: true })
  name?: string;

  @Field((type) => String, { nullable: true })
  description?: string;
}

@InputType()
export class ReportCardCreateInput {
  @Field((type) => String)
  studentId: string;

  @Field((type) => String)
  class: string;

  @Field((type) => String)
  schoolYear: string;

  @Field((type) => Number)
  score: number;

  @Field((type) => String)
  period: string;

  @Field((type) => String)
  description: string;

  @Field((type) => Date)
  evaluationStartDate: Date;

  @Field((type) => Date)
  evaluationEndDate: Date;
}

@InputType()
export class ReportCardUpdateInput {
  @Field((type) => String)
  studentId: string;

  @Field((type) => String, { nullable: true })
  class?: string;

  @Field((type) => String, { nullable: true })
  schoolYear: string;

  @Field((type) => Number, { nullable: true })
  score: number;

  @Field((type) => String, { nullable: true })
  period: string;

  @Field((type) => String, { nullable: true })
  description: string;

  @Field((type) => Date, { nullable: true })
  evaluationStartDate: Date;

  @Field((type) => Date, { nullable: true })
  evaluationEndDate: Date;
}

@InputType()
export class ReportCardDetailCreateInput {
  @Field((type) => String)
  reportCardId: string;

  @Field((type) => String)
  teacherId: string;

  @Field((type) => String)
  subjectId: string;

  @Field((type) => Number)
  score: number;

  @Field((type) => String)
  description: string;

  @Field((type) => Boolean)
  passed: boolean;

  @Field((type) => Number)
  try: number;
}

@InputType()
export class ReportCardDetailUpdateInput {
  @Field((type) => String)
  reportCardId: string;

  @Field((type) => String)
  teacherId: string;

  @Field((type) => String)
  subjectId: string;

  @Field((type) => Number)
  score: number;

  @Field((type) => String)
  description: string;

  @Field((type) => Boolean)
  passed: boolean;

  @Field((type) => Number)
  try: number;
}

@InputType()
export class FindById {
  @Field((type) => ID)
  id: string;
}

@InputType()
export class FindByEmail {
  @Field((type) => String)
  email: string;
}
