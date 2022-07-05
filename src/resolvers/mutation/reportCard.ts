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
      data,
    });
  }

  @Mutation(() => [ReportCard])
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

  @Mutation(() => [ReportCard])
  async deleteReportCard(
    @Ctx() ctx: Context,
    params: { reportCardId: string }
  ) {
    return ctx.prisma.reportCard.delete({
      where: { id: params.reportCardId },
    });
  }
}
