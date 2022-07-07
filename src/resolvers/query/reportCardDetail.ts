import "reflect-metadata";
import { Resolver, Query, Ctx, InputType, Field, Arg } from "type-graphql";
import { ReportCardDetail } from "../../db/entities";
import { Context } from "../../config/context";

@Resolver(ReportCardDetail)
export class ReportCardDetailQuery {
  @Query(() => [ReportCardDetail])
  async allReportCardDetails(@Ctx() ctx: Context) {
    return ctx.prisma.reportCardDetail.findMany();
  }

  @Query(() => ReportCardDetail)
  async reportCardDetailById(
    @Arg("reportCardDetailId") reportCardDetailId: string,
    @Ctx() ctx: Context
  ) {
    return ctx.prisma.reportCardDetail.findUnique({
      where: { id: reportCardDetailId },
    });
  }

  @Query(() => Number)
  async countReportCardDetails(@Ctx() ctx: Context) {
    return ctx.prisma.reportCardDetail.count();
  }
}
