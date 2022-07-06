import "reflect-metadata";
import { Resolver, Query, Ctx, InputType, Field, Arg } from "type-graphql";
import { Subject } from "../../db/entities";
import { Context } from "../../config/context";

@Resolver(Subject)
export class SubjectQuery {
  @Query(() => [Subject])
  async allSubjects(@Ctx() ctx: Context) {
    return ctx.prisma.subject.findMany({ include: { ReportCardDetail: true } });
  }

  @Query(() => Subject)
  async subjectById(@Ctx() ctx: Context, @Arg("subjectId") subjectId: string) {
    return ctx.prisma.subject.findUnique({
      where: { id: subjectId },
      include: { ReportCardDetail: true },
    });
  }

  @Query(() => String)
  async subjectDescription(@Ctx() ctx: Context, params: { subjectId: string }) {
    const subject = await ctx.prisma.subject.findUnique({
      where: { id: params.subjectId },
    });

    if (!subject) {
      throw new Error(`subject not found with id ${params.subjectId}`);
    }

    return `${subject.name}-${subject.description}`;
  }

  @Query(() => Number)
  async countSubjects(@Ctx() ctx: Context) {
    return ctx.prisma.subject.count();
  }
}
