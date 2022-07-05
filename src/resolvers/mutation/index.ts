import { NonEmptyArray } from "type-graphql";
import { UserMutation } from "./user";
import { StudentMutation } from "./student";
import { TeacherMutation } from "./teacher";
import { SubjectMutation } from "./subject";
import { ReportCardMutation } from "./reportCard";
import { ReportCardDetailMutation } from "./reportCardDetail";

export const mutation = [UserMutation];

export const mutations: NonEmptyArray<Function> = [
  UserMutation,
  StudentMutation,
  TeacherMutation,
  SubjectMutation,
  ReportCardMutation,
  ReportCardDetailMutation,
];
