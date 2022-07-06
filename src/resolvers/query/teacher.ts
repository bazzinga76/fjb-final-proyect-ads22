import "reflect-metadata";
import { Resolver, Query, Ctx, InputType, Field, Arg } from "type-graphql";
import { Teacher } from "../../db/entities";
import { Context } from "../../config/context";

@Resolver(Teacher)
export class TeacherQuery {
  @Query(() => [Teacher])
  async allTeachers(@Ctx() ctx: Context) {
    return ctx.prisma.teacher.findMany({ include: { ReportCardDetail: true } });
  }

  @Query(() => Teacher)
  async teacherById(@Ctx() ctx: Context, @Arg("teacherId") teacherId: string) {
    return ctx.prisma.teacher.findUnique({
      where: { id: teacherId },
      include: { ReportCardDetail: true },
    });
  }

  @Query(() => String)
  async teacherNameEmail(@Ctx() ctx: Context, params: { teacherId: string }) {
    const teacher = await ctx.prisma.teacher.findUnique({
      where: { id: params.teacherId },
    });

    if (!teacher) {
      throw new Error(`teacher not found with id ${params.teacherId}`);
    }

    return `${teacher.name}-${teacher.email}`;
  }

  @Query(() => Number)
  async countTeachers(@Ctx() ctx: Context) {
    return ctx.prisma.teacher.count();
  }
}
