import "reflect-metadata";
import { Resolver, Query, Ctx, InputType, Field } from "type-graphql";
import { Student } from "../../db/entities";
import { Context } from "../../config/context";

@Resolver(Student)
export class StudentQuery {
  @Query(() => [Student])
  async allStudents(@Ctx() ctx: Context) {
    return ctx.prisma.students.findMany();
  }

  @Query(() => Student)
  async studentById(@Ctx() ctx: Context, params: { studentId: string }) {
    return ctx.prisma.students.findUnique({
      where: { id: params.studentId },
    });
  }

  @Query(() => String)
  async studentNameEmail(@Ctx() ctx: Context, params: { studentId: string }) {
    const student = await ctx.prisma.students.findUnique({
      where: { id: params.studentId },
    });

    if (!student) {
      throw new Error(`student not found with id ${params.studentId}`);
    }

    return `${student.name}-${student.email}`;
  }
}
