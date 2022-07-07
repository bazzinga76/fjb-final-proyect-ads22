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
import { ReportCard } from "../../db/entities";
import { Context } from "../../config/context";
import { ReportCardCreateInput, ReportCardUpdateInput } from "./inputs";

@Resolver(ReportCard)
export class ReportCardMutation {
  @Mutation((returns) => ReportCard)
  async createReportCard(
    @Arg("data") data: ReportCardCreateInput,
    @Ctx() ctx: Context
  ): Promise<ReportCard> {
    return ctx.prisma.reportCard.create({
      //data,
      data: {
        class: data.class,
        schoolYear: data.schoolYear,
        score: data.score,
        period: data.period,
        description: data.description,
        evaluationStartDate: data.evaluationStartDate,
        evaluationEndDate: data.evaluationEndDate,
        student: {
          connect: { id: data.studentId },
        },
      },
    });
  }

  @Mutation(() => ReportCard)
  async updateReportCard(
    @Arg("reportCardId") reportCardId: string,
    @Arg("data") data: ReportCardUpdateInput,
    @Ctx() ctx: Context,
    params: { reportCardId: string }
  ) {
    return ctx.prisma.reportCard.update({
      where: { id: reportCardId },
      data,
    });
  }

  @Mutation(() => ReportCard)
  async conectReportCardStudent(
    @Arg("reportCardId") reportCardId: string,
    @Arg("studentId") studentId: string,
    @Arg("data") data: ReportCardUpdateInput,
    @Ctx() ctx: Context,
    params: { reportCardId: string }
  ) {
    return ctx.prisma.reportCard.update({
      where: { id: reportCardId },
      data: {
        class: data.class,
        schoolYear: data.schoolYear,
        score: data.score,
        period: data.period,
        description: data.description,
        evaluationStartDate: data.evaluationStartDate,
        evaluationEndDate: data.evaluationEndDate,
        student: {
          connect: { id: data.studentId },
        },
      },
    });
  }

  @Mutation(() => ReportCard)
  async deleteReportCard(
    @Arg("reportCardId") reportCardId: string,
    @Ctx()
    ctx: Context
  ) {
    return ctx.prisma.reportCard.delete({
      where: { id: reportCardId },
    });
  }
}
