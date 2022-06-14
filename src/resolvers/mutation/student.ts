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
import { Student } from "../../db/entities";
import { Context } from "../../config/context";

@InputType()
class StudentCreateInput {
  @Field()
  email: string;

  @Field()
  name: string;
}

@Resolver(Student)
export class StudentMutation {
  @Mutation((returns) => Student)
  async signupUser(
    @Arg("data") data: StudentCreateInput,
    @Ctx() ctx: Context
  ): Promise<Student> {
    return ctx.prisma.students.create({
      data: {
        email: data.email,
        name: data.name,
      },
    });
  }
}
