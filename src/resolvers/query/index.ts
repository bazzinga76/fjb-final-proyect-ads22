import { NonEmptyArray } from "type-graphql";
import { PostQuery } from "./post";
import { UserQuery } from "./user";
import { StudentQuery } from "./student";
import { TeacherQuery } from "./teacher";
import { SubjectQuery } from "./subject";
import { ReportCardQuery } from "./reportCard";
import { ReportCardDetailQuery } from "./reportCardDetail";

export const query = [UserQuery];

export const queries: NonEmptyArray<Function> = [
  UserQuery,
  PostQuery,
  StudentQuery,
  TeacherQuery,
  SubjectQuery,
  ReportCardQuery,
  ReportCardDetailQuery,
];
