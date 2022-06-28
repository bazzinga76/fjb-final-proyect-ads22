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
} from "type-graphql";
import { Prisma } from "@prisma/client";
import { Student } from "../../db/entities";
import { Context } from "../../config/context";

@Resolver(Student)
export class StudentMutation {
  @Mutation((returns) => Student)
  async createStudent(
    @Arg("data") data: Prisma.StudentsCreateWithoutReportCardDetailInput,
    @Ctx() ctx: Context
  ): Promise<Student> {
    return ctx.prisma.students.create({
      data,
    });
  }

  @Mutation(() => [Student])
  async updateStudent(
    @Arg("data") data: Prisma.StudentsUpdateArgs,
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
