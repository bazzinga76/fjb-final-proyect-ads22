import "reflect-metadata";
import {
  Resolver,
  Query,
  Ctx,
  InputType,
  Field,
  Mutation,
  Arg,
  Int,
  FieldResolver,
} from "type-graphql";
import { Prisma } from "@prisma/client";
import { ReportCardDetail, Student } from "../../db/entities";
import { Context } from "../../config/context";
import { StudentCreateInput } from "./inputs";
import { PublicKeyInput } from "crypto";

@Resolver(Student)
export class StudentMutation {
  @Mutation((returns) => Student)
  async createStudent(
    @Arg("data") data: StudentCreateInput,
    @Ctx() ctx: Context
  ): Promise<Student> {
    return ctx.prisma.students.create({
      data,
    });
  }

  @Mutation(() => [Student])
  async updateStudent(
    @Arg("data") data: StudentCreateInput,
    @Ctx() ctx: Context,
    params: { studentId: string }
  ) {
    return ctx.prisma.students.update({
      where: { id: params.studentId },
      data,
    });
  }

  @Mutation(() => [Student])
  async deleteStudent(@Ctx() ctx: Context, params: { studentId: string }) {
    return ctx.prisma.students.delete({
      where: { id: params.studentId },
    });
  }
}
