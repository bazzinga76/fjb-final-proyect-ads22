import "reflect-metadata";
import {
  Resolver,
  Query,
  Ctx,
  InputType,
  Field,
  Arg,
  FieldResolver,
  Root,
} from "type-graphql";
import { ReportCard, Student } from "../../db/entities";
import { Context } from "../../config/context";
import { FindByEmail, FindById } from "../mutation/inputs";

@Resolver((of) => Student)
export class StudentQuery {
  /*  @FieldResolver()
  async reportCard(
    @Root() student: Student,
    @Ctx() ctx: Context
  ): Promise<ReportCard[]> {
    return await ctx.prisma.student
      .findUnique({ where: { id: student.id } })
      .reportCard();
  } */

  @Query(() => [Student])
  async allStudents(@Ctx() ctx: Context) {
    return ctx.prisma.student.findMany();
  }

  @Query(() => Student)
  async studentById(@Ctx() ctx: Context, @Arg("studentId") studentId: string) {
    return ctx.prisma.student.findUnique({
      where: { id: studentId },
      include: { reportCard: true },
    });
  }

  @Query(() => String)
  async studentNameEmail(@Ctx() ctx: Context, @Arg("params") params: FindById) {
    const student = await ctx.prisma.student.findUnique({
      where: { id: params.id },
    });

    if (!student) {
      throw new Error(`student not found with id ${params.id}`);
    }

    return `${student.name}-${student.email}`;
  }

  @Query(() => Student)
  async studentByEmail(
    @Ctx() ctx: Context,
    @Arg("params") params: FindByEmail
  ) {
    return ctx.prisma.student.findUnique({
      where: { email: params.email },
    });
  }

  @Query(() => [Student])
  async countStudents(@Ctx() ctx: Context) {
    return ctx.prisma.student.count();
  }
}
