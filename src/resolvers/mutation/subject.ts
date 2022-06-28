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
import { Subject } from "../../db/entities";
import { Context } from "../../config/context";

@Resolver(Subject)
export class SubjectMutation {
  @Mutation((returns) => Subject)
  async createSubject(
    @Arg("data") data: Prisma.SubjectsCreateWithoutReportCardDetailInput,
    @Ctx() ctx: Context
  ): Promise<Subject> {
    return ctx.prisma.subjects.create({
      data,
    });
  }

  @Mutation(() => [Subject])
  async updateSubject(
    @Arg("data") data: Prisma.SubjectsUpdateArgs,
    @Ctx() ctx: Context,
    params: { subjectId: string }
  ) {
    return ctx.prisma.subjects.update({
      where: { id: params.subjectId },
      data,
    });
  }

  @Mutation(() => [Subject])
  async deleteSubject(@Ctx() ctx: Context, params: { subjectId: string }) {
    return ctx.prisma.subjects.delete({
      where: { id: params.subjectId },
    });
  }
}
