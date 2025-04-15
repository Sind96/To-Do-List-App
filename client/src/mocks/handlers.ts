import { http } from "msw";

export const handlers = [
  http.get("/tasks", () => {
    return Response.json(
      {
        message: "Tasks fetched successfully",
        tasks: [
          { id: "1", title: "Test Task 1", completed: false },
          { id: "2", title: "Test Task 2", completed: true },
        ],
      },
      {
        status: 200,
      }
    );
  }),
];
