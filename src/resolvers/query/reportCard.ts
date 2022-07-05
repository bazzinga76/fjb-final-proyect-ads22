import "reflect-metadata";
import { Resolver, Query, Ctx, InputType, Field, Arg } from "type-graphql";
import { ReportCard } from "../../db/entities";
import { Context } from "../../config/context";

@Resolver(ReportCard)
export class ReportCardQuery {
  @Query(() => [ReportCard])
  async allReportCards(@Ctx() ctx: Context) {
    return ctx.prisma.reportCard.findMany();
  }

  @Query(() => ReportCard)
  async reportCardById(
    @Ctx() ctx: Context,
    @Arg("reportCardId") reportCardId: string
  ) {
    return ctx.prisma.reportCard.findUnique({
      where: { id: reportCardId },
      include: { ReportCardDetail: true },
    });
  }

  @Query(() => Number)
  async countReportCards(@Ctx() ctx: Context) {
    return ctx.prisma.reportCard.count();
  }
}
