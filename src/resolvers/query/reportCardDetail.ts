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
  async reportCardById(@Ctx() ctx: Context, params: { reportCardId: string }) {
    return ctx.prisma.reportCardDetail.findUnique({
      where: { id: params.reportCardId },
    });
  }

  @Query(() => Number)
  async countReportCardDetails(@Ctx() ctx: Context) {
    return ctx.prisma.reportCardDetail.count();
  }
}
