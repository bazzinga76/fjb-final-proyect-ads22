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
