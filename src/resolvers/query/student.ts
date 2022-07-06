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
import { ReportCard, ReportCardDetail, Student } from "../../db/entities";
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
    return ctx.prisma.student.findMany({
      include: {
        reportCard: {
          include: { ReportCardDetail: { select: { id: true } } },
        },
      },
    });
  }

  @Query(() => Student)
  async studentById(@Ctx() ctx: Context, @Arg("studentId") studentId: string) {
    return ctx.prisma.student.findUnique({
      where: { id: studentId },
      include: {
        reportCard: {
          include: { ReportCardDetail: true },
        },
      },
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

  @Query(() => Number)
  async countStudents(@Ctx() ctx: Context) {
    return ctx.prisma.student.count();
  }

  @Query(() => ReportCard)
  async reportCardByStudentId(
    @Ctx() ctx: Context,
    @Arg("studentId") studentId: string
  ) {
    return ctx.prisma.reportCard.findUnique({
      where: { studentId: studentId },
      include: { ReportCardDetail: true },
    });
  }

  @Query(() => [ReportCardDetail])
  async reportCardDetailByStudentId(
    @Ctx() ctx: Context,
    @Arg("studentId") studentId: string
  ) {
    return ctx.prisma.reportCard
      .findUnique({
        where: { studentId: studentId },
      })
      .ReportCardDetail();
  }
}
