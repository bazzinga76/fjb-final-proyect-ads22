import { NonEmptyArray } from "type-graphql";
import { UserQuery } from "./user";
import { StudentQuery } from "./student";
import { TeacherQuery } from "./teacher";
import { SubjectQuery } from "./subject";
import { ReportCardDetailQuery } from "./reportCardDetail";

export const query = [UserQuery];

export const queries: NonEmptyArray<Function> = [
  UserQuery,
  StudentQuery,
  TeacherQuery,
  SubjectQuery,
  ReportCardDetailQuery,
];
