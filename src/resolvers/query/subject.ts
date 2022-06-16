import "reflect-metadata";
import { Resolver, Query, Ctx, InputType, Field } from "type-graphql";
import { Subject } from "../../db/entities";
import { Context } from "../../config/context";

@Resolver(Subject)
export class SubjectQuery {
  @Query(() => [Subject])
  async allSubjects(@Ctx() ctx: Context) {
    return ctx.prisma.subjects.findMany();
  }

  @Query(() => Subject)
  async subjectById(@Ctx() ctx: Context, params: { subjectId: string }) {
    return ctx.prisma.subjects.findUnique({
      where: { id: params.subjectId },
    });
  }

  @Query(() => String)
  async subjectDescription(@Ctx() ctx: Context, params: { subjectId: string }) {
    const subject = await ctx.prisma.subjects.findUnique({
      where: { id: params.subjectId },
    });

    if (!subject) {
      throw new Error(`subject not found with id ${params.subjectId}`);
    }

    return `${subject.name}-${subject.description}`;
  }
}
