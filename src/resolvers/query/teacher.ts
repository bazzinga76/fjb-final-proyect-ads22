import "reflect-metadata";
import { Resolver, Query, Ctx, InputType, Field } from "type-graphql";
import { Teacher } from "../../db/entities";
import { Context } from "../../config/context";

@Resolver(Teacher)
export class UserQuery {
  @Query(() => [Teacher])
  async allTeachers(@Ctx() ctx: Context) {
    return ctx.prisma.teachers.findMany();
  }

  @Query(() => Teacher)
  async teacherById(@Ctx() ctx: Context, params: { teacherId: string }) {
    return ctx.prisma.teachers.findUnique({
      where: { id: params.teacherId },
    });
  }

  @Query(() => String)
  async teacherNameEmail(@Ctx() ctx: Context, params: { teacherId: string }) {
    const teacher = await ctx.prisma.teachers.findUnique({
      where: { id: params.teacherId },
    });

    if (!teacher) {
      throw new Error(`teacher not found with id ${params.teacherId}`);
    }

    return `${teacher.name}-${teacher.email}`;
  }
}
