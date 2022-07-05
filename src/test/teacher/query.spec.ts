import { Teacher } from "@prisma/client";
import { faker } from "@faker-js/faker";
import { MockContext, Context, createMockContext } from "../../config/context";
import { TeacherQuery } from "../../resolvers/query/teacher";

const teacherClass = new TeacherQuery();
const spyTeacherClass = jest.spyOn(teacherClass, "teacherNameEmail");

describe("Teacher Query Class", () => {
  let mockCtx: MockContext;
  let ctx: Context;
  let teacherId = "";

  beforeEach(() => {
    mockCtx = createMockContext();
    ctx = mockCtx as unknown as Context;
  });

  test("should find a teacher by id", async () => {
    const expectTeacher: Teacher = {
      id: faker.database.mongodbObjectId(),
      email: faker.internet.email(),
      name: faker.name.findName(),
      paternal_surname: faker.name.findName(),
      maternal_surname: faker.name.findName(),
      birth_date: new Date(),
      admission_date: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    mockCtx.prisma.teacher.findUnique.mockResolvedValue(expectTeacher);
    const response = teacherClass.teacherById(mockCtx, {
      teacherId: expectTeacher.id,
    });
    await expect(response).resolves.toEqual(expectTeacher);
  });

  test("Given an teacherId When teacher exist The return a teacherName with email", async () => {
    const expectTeacher: Teacher = {
      id: faker.database.mongodbObjectId(),
      email: faker.internet.email(),
      name: faker.name.findName(),
      paternal_surname: faker.name.findName(),
      maternal_surname: faker.name.findName(),
      birth_date: new Date(),
      admission_date: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    const expectResponse = `${expectTeacher.name}-${expectTeacher.email}`;
    mockCtx.prisma.teacher.findUnique.mockResolvedValue(expectTeacher);
    const response = teacherClass.teacherNameEmail(mockCtx, {
      teacherId: expectTeacher.id,
    });
    expect(spyTeacherClass).toBeCalledTimes(1);
    await expect(response).resolves.toEqual(expectResponse);
  });

  test("should find a teacher by id", async () => {
    const expectedErrorMsg = `teacher not found with id ${teacherId}`;
    mockCtx.prisma.teacher.findUnique.mockResolvedValue(null);
    const response = teacherClass.teacherById(mockCtx, { teacherId: "2" });
    expect(response).rejects.toThrow(expectedErrorMsg);
  });
});
