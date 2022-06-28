import "reflect-metadata";
import { Resolver, Query, Ctx, InputType, Field } from "type-graphql";
import { ReportCardDetail } from "../../db/entities";
import { Context } from "../../config/context";

@Resolver(ReportCardDetail)
export class ReportCardDetailQuery {
  @Query(() => [ReportCardDetail])
  async allReportCardDetails(@Ctx() ctx: Context) {
    return ctx.prisma.reportCardDetail.findMany();
  }

  @Query(() => ReportCardDetail)
  async report_cardById(
    @Ctx() ctx: Context,
    params: { report_cardId: string }
  ) {
    return ctx.prisma.reportCardDetail.findUnique({
      where: { id: params.report_cardId },
    });
  }

  @Query(() => [ReportCardDetail])
  async countReportCardDetails(@Ctx() ctx: Context) {
    return ctx.prisma.reportCardDetail.count();
  }
}
