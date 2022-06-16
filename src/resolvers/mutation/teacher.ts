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
import { Teacher } from "../../db/entities";
import { Context } from "../../config/context";

@Resolver(Teacher)
export class TeacherMutation {
  @Mutation((returns) => Teacher)
  async signupUser(
    @Arg("data") data: Prisma.TeachersCreateInput,
    @Ctx() ctx: Context
  ): Promise<Teacher> {
    return ctx.prisma.teachers.create({
      data: {
        email: data.email,
        name: data.name,
        paternal_surname: data.paternal_surname,
        maternal_surname: data.maternal_surname,
      },
    });
  }
}
