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
import {
  Post,
  User,
  Student,
  Teacher,
  Subject,
  ReportCardDetail,
} from "../../db/entities";

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
export class SubjectCreateInput {
  @Field((type) => String)
  name: string;

  @Field((type) => String)
  description: string;
}

@InputType()
export class ReportCardDetailCreateInput {
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

  @Field((type) => Boolean)
  passed: boolean;

  @Field((type) => Date)
  evaluationStartDate: Date;

  @Field((type) => Date)
  evaluationEndDate: Date;

  @Field((type) => Number)
  try: number;
}

@InputType()
export class ReportCardDetailUpdateInput {
  @Field((type) => String)
  studentId: string;

  @Field((type) => String)
  teacherId: string;

  @Field((type) => String)
  subjectId: string;

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

  @Field((type) => Boolean)
  passed: boolean;

  @Field((type) => Date)
  evaluationStartDate: Date;

  @Field((type) => Date)
  evaluationEndDate: Date;

  @Field((type) => Number)
  try: number;
}
