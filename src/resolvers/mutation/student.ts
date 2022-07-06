import "reflect-metadata";
import {
  Resolver,
  Query,
  Ctx,
  InputType,
  Field,
  Mutation,
  Arg,
  Int,
  FieldResolver,
} from "type-graphql";
import { Prisma } from "@prisma/client";
import { ReportCardDetail, Student } from "../../db/entities";
import { Context } from "../../config/context";
import { StudentCreateInput, StudentUpdateInput } from "./inputs";
import { PublicKeyInput } from "crypto";

@Resolver(Student)
export class StudentMutation {
  @Mutation((returns) => Student)
  async createStudent(
    @Arg("data") data: StudentCreateInput,
    @Ctx() ctx: Context
  ): Promise<Student> {
    console.log(data);
    return ctx.prisma.student.create({
      data,
    });
  }

  @Mutation((returns) => Student)
  async createStudentReportCard(
    @Arg("data") data: StudentCreateInput,
    @Ctx() ctx: Context
  ): Promise<Student> {
    console.log(data);
    return ctx.prisma.student.create({
      data: {
        name: data.name,
        paternal_surname: data.paternal_surname,
        maternal_surname: data.maternal_surname,
        birth_date: data.birth_date,
        admission_date: data.admission_date,
        email: data.email,
        reportCard: {
          connectOrCreate: {
            where: {
              studentId: data.studentId,
            },
            create: {
              email: 'viola@prisma.io',
              name: 'Viola',
            },
        },
      include: { reportCard: true },
    });
  }

  @Mutation(() => Student)
  async updateStudent(
    @Arg("studentId") studentId: string,
    @Arg("data") data: StudentUpdateInput,
    @Ctx() ctx: Context,
    params: { studentId: string }
  ) {
    return ctx.prisma.student.update({
      where: { id: studentId },
      data,
    });
  }

  @Mutation(() => Student)
  async connectStudentReportCard(
    @Arg("studentId") studentId: string,
    @Arg("reportCardId") reportCardId: string,
    @Arg("data") data: StudentUpdateInput,
    @Ctx() ctx: Context,
    params: { studentId: string }
  ) {
    return ctx.prisma.student.update({
      where: { id: studentId },
      data: {
        name: data.name,
        paternal_surname: data.paternal_surname,
        maternal_surname: data.maternal_surname,
        birth_date: data.birth_date,
        admission_date: data.admission_date,
        email: data.email,
        reportCard: {
          connect: { id: reportCardId },
        },
      },
    });
  }

  @Mutation(() => [Student])
  async deleteStudent(@Ctx() ctx: Context, params: { studentId: string }) {
    return ctx.prisma.student.delete({
      where: { id: params.studentId },
    });
  }
}
