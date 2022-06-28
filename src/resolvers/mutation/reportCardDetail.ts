import "reflect-metadata";
import {
  Resolver,
  Query,
  Ctx,
  InputType,
  Field,
  Mutation,
  Arg,
} from "type-graphql";
import { Prisma } from "@prisma/client";
import { ReportCardDetail } from "../../db/entities";
import { Context } from "../../config/context";

@Resolver(ReportCardDetail)
export class ReportCardDetailMutation {
  @Mutation((returns) => ReportCardDetail)
  async createReportCardDetail(
    @Arg("data") data: Prisma.ReportCardDetailCreateInput,
    @Ctx() ctx: Context
  ): Promise<ReportCardDetail> {
    return ctx.prisma.reportCardDetail.create({
      data,
    });
  }

  @Mutation(() => [ReportCardDetail])
  async updateReportCardDetail(
    @Arg("data") data: Prisma.ReportCardDetailUpdateArgs,
    @Ctx() ctx: Context,
    params: { reportcarddetailId: string }
  ) {
    return ctx.prisma.reportCardDetail.update({
      where: { id: params.reportcarddetailId },
      data,
    });
  }

  @Mutation(() => [ReportCardDetail])
  async deleteReportCardDetail(
    @Ctx() ctx: Context,
    params: { reportcarddetailId: string }
  ) {
    return ctx.prisma.reportcarddetails.delete({
      where: { id: params.reportcarddetailId },
    });
  }
}
