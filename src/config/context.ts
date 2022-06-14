import { PrismaClient } from "@prisma/client";
import { mockDeep, DeepMockProxy } from "jest-mock-extended";
import { User } from "../db/entities";
import { Student } from "../db/entities";
import { Teacher } from "../db/entities";
import { Subject } from "../db/entities";
import { Report_card } from "../db/entities";

import prisma from "../client";

export interface Context {
  prisma: PrismaClient;
  jwt?: string;
  user?: User;
}

export type MockContext = {
  prisma: DeepMockProxy<PrismaClient>;
};

export const createMockContext = (): MockContext => {
  return {
    prisma: mockDeep<PrismaClient>(),
  };
};

export const context: Context = {
  prisma,
};
