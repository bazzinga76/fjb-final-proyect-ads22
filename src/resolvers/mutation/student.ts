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
import { Student } from "../../db/entities";
import { Context } from "../../config/context";

@Resolver(Student)
export class StudentMutation {
  @Mutation((returns) => Student)
  async signupUser(
    @Arg("data") data: Prisma.StudentsCreateInput,
    @Ctx() ctx: Context
  ): Promise<Student> {
    return ctx.prisma.students.create({
      data: {
        email: data.email,
        name: data.name,
        paternal_surname: data.paternal_surname,
        maternal_surname: data.maternal_surname,
      },
    });
  }
}
