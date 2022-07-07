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
import {
  ReportCardDetailCreateInput,
  ReportCardDetailUpdateInput,
} from "./inputs";

@Resolver(ReportCardDetail)
export class ReportCardDetailMutation {
  @Mutation((returns) => ReportCardDetail)
  async createReportCardDetail(
    @Arg("data") data: ReportCardDetailCreateInput,
    @Ctx() ctx: Context
  ): Promise<ReportCardDetail> {
    return ctx.prisma.reportCardDetail.create({
      data: {
        score: data.score,
        description: data.description,
        passed: data.passed,
        try: data.try,
        reportCard: {
          connect: { id: data.reportCardId },
        },
        teacher: {
          connect: { id: data.teacherId },
        },
        subject: {
          connect: { id: data.subjectId },
        },
      },
    });
  }

  @Mutation(() => [ReportCardDetail])
  async updateReportCardDetail(
    @Arg("reportCardDetailId") reportCardDetailId: string,
    @Arg("data") data: ReportCardDetailUpdateInput,
    @Ctx() ctx: Context,
    params: { reportCardDetailId: string }
  ) {
    return ctx.prisma.reportCardDetail.update({
      where: { id: reportCardDetailId },
      data,
    });
  }

  @Mutation(() => ReportCardDetail)
  async deleteReportCardDetail(
    @Arg("reportCardDetailId") reportCardDetailId: string,
    @Ctx() ctx: Context
  ) {
    return ctx.prisma.reportCardDetail.delete({
      where: { id: reportCardDetailId },
    });
  }
}
