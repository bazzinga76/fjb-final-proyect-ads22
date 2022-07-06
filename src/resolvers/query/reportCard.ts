import "reflect-metadata";
import { Resolver, Query, Ctx, InputType, Field, Arg } from "type-graphql";
import { ReportCard } from "../../db/entities";
import { Context } from "../../config/context";

@Resolver(ReportCard)
export class ReportCardQuery {
  /*  @FieldResolver()
  async reportCardDetail(
    @Root() reportCard: ReportCard,
    @Ctx() ctx: Context
  ): Promise<ReportCardDetail[]> {
    return await ctx.prisma.reportCard
      .findUnique({ where: { id: reportCard.id } })
      .reportCardDetail();
  } */

  @Query(() => [ReportCard])
  async allReportCards(@Ctx() ctx: Context) {
    return ctx.prisma.reportCard.findMany({
      include: { ReportCardDetail: { select: { id: true } } },
    });
  }

  @Query(() => ReportCard)
  async reportCardById(
    @Ctx() ctx: Context,
    @Arg("reportCardId") reportCardId: string
  ) {
    return ctx.prisma.reportCard.findUnique({
      where: { id: reportCardId },
      include: { ReportCardDetail: { select: { id: true } } },
    });
  }

  @Query(() => Number)
  async countReportCards(@Ctx() ctx: Context) {
    return ctx.prisma.reportCard.count();
  }
}
