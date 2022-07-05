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
import { TeacherCreateInput, TeacherUpdateInput } from "./inputs";

@Resolver(Teacher)
export class TeacherMutation {
  @Mutation((returns) => Teacher)
  async createTeacher(
    @Arg("data") data: TeacherCreateInput,
    @Ctx() ctx: Context
  ): Promise<Teacher> {
    return ctx.prisma.teacher.create({
      data,
    });
  }

  @Mutation(() => Teacher)
  async updateTeacher(
    @Arg("teacherId") teacherId: string,
    @Arg("data") data: TeacherUpdateInput,
    @Ctx() ctx: Context,
    params: { teacherId: string }
  ) {
    return ctx.prisma.teacher.update({
      where: { id: teacherId },
      data,
    });
  }

  @Mutation(() => [Teacher])
  async deleteTeacher(@Ctx() ctx: Context, params: { teacherId: string }) {
    return ctx.prisma.teacher.delete({
      where: { id: params.teacherId },
    });
  }
}
