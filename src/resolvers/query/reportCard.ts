import "reflect-metadata";
import { Resolver, Query, Ctx, InputType, Field } from "type-graphql";
import { ReportCard } from "../../db/entities";
import { Context } from "../../config/context";

@Resolver(ReportCard)
export class ReportCardQuery {
  @Query(() => [ReportCard])
  async allReportCards(@Ctx() ctx: Context) {
    return ctx.prisma.reportCard.findMany();
  }

  @Query(() => ReportCard)
  async reportCardById(@Ctx() ctx: Context, params: { reportCardId: string }) {
    return ctx.prisma.reportCard.findUnique({
      where: { id: params.reportCardId },
    });
  }

  @Query(() => [ReportCard])
  async countReportCards(@Ctx() ctx: Context) {
    return ctx.prisma.reportCard.count();
  }
}
