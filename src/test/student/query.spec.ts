import { Student } from "@prisma/client";
import { faker } from "@faker-js/faker";
import { MockContext, Context, createMockContext } from "../../config/context";
import { StudentQuery } from "../../resolvers/query/student";

const studentClass = new StudentQuery();
const spyStudentClass = jest.spyOn(studentClass, "studentNameEmail");

describe("Student Query Class", () => {
  let mockCtx: MockContext;
  let ctx: Context;
  let studentId = "";

  beforeEach(() => {
    mockCtx = createMockContext();
    ctx = mockCtx as unknown as Context;
  });

  test("should find a student by id", async () => {
    const expectStudent: Student = {
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
    mockCtx.prisma.student.findUnique.mockResolvedValue(expectStudent);
    const response = studentClass.studentById(mockCtx, {
      studentId: expectStudent.id,
    });
    await expect(response).resolves.toEqual(expectStudent);
  });

  test("Given an studentId When student exist The return a studentName with email", async () => {
    const expectStudent: Student = {
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
    const expectResponse = `${expectStudent.name}-${expectStudent.email}`;
    mockCtx.prisma.student.findUnique.mockResolvedValue(expectStudent);
    const response = studentClass.studentNameEmail(mockCtx, {
      id: expectStudent.id,
    });
    expect(spyStudentClass).toBeCalledTimes(1);
    await expect(response).resolves.toEqual(expectResponse);
  });

  test("should find a student by id", async () => {
    const expectedErrorMsg = `student not found with id ${studentId}`;
    mockCtx.prisma.student.findUnique.mockResolvedValue(null);
    const response = studentClass.studentById(mockCtx, { studentId: "2" });
    expect(response).rejects.toThrow(expectedErrorMsg);
  });
});
