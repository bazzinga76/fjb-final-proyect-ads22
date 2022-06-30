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
import { SubjectCreateInput } from "./inputs";

@Resolver(Subject)
export class SubjectMutation {
  @Mutation((returns) => Subject)
  async createSubject(
    @Arg("data") data: SubjectCreateInput,
    @Ctx() ctx: Context
  ): Promise<Subject> {
    return ctx.prisma.subject.create({
      data,
    });
  }

  @Mutation(() => [Subject])
  async updateSubject(
    @Arg("data") data: SubjectCreateInput,
    @Ctx() ctx: Context,
    params: { subjectId: string }
  ) {
    return ctx.prisma.subject.update({
      where: { id: params.subjectId },
      data,
    });
  }

  @Mutation(() => [Subject])
  async deleteSubject(@Ctx() ctx: Context, params: { subjectId: string }) {
    return ctx.prisma.subject.delete({
      where: { id: params.subjectId },
    });
  }
}
