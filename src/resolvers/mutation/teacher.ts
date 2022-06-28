import "reflect-metadata";
import {
  Resolver,
  Query,
  Ctx,
  InputType,
  Field,
  Mutation,
  Arg,
} from "type-graphql";
import { Prisma } from "@prisma/client";
import { Teacher } from "../../db/entities";
import { Context } from "../../config/context";

@Resolver(Teacher)
export class StudentMutation {
  @Mutation((returns) => Teacher)
  async createTeacher(
    @Arg("data") data: Prisma.TeachersCreateWithoutReportCardDetailInput,
    @Ctx() ctx: Context
  ): Promise<Teacher> {
    return ctx.prisma.teachers.create({
      data,
    });
  }

  @Mutation(() => [Teacher])
  async updateTeacher(
    @Arg("data") data: Prisma.TeachersUpdateArgs,
    @Ctx() ctx: Context,
    params: { teacherId: string }
  ) {
    return ctx.prisma.teachers.update({
      where: { id: params.teacherId },
      data,
    });
  }

  @Mutation(() => [Teacher])
  async deleteTeacher(@Ctx() ctx: Context, params: { teacherId: string }) {
    return ctx.prisma.teachers.delete({
      where: { id: params.teacherId },
    });
  }
}
