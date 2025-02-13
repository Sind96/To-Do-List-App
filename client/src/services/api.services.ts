const BASE_URL = "http://localhost:3000/tasks";

// Fetch all tasks
export const fetchTasks = async () => {
  try {
    const tasks = await fetch(BASE_URL);
    if (!tasks.ok) {
      throw new Error(`Error fetching tasks: ${tasks.statusText}`);
    }
    const result = await tasks.json();
    return result.tasks;
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Error in fetchTasks: ${error.message}`);
    } else {
      console.error("An unknown error occurred");
    }
    throw error;
  }
};

// Create a new task
export const createTask = async (title: string) => {
  try {
    const tasks = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title }),
    });

    if (!tasks.ok) {
      throw new Error(`Error creating task: ${tasks.statusText}`);
    }
    const result = await tasks.json();
    return result.task;
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Error in createTask: ${error.message}`);
    } else {
      console.error("An unknown error occurred");
    }
    throw error;
  }
};

// Update an existing task
export const updateTask = async (
  id: string,
  updatedTask: { title?: string; completed?: boolean }
) => {
  try {
    const tasks = await fetch(`${BASE_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedTask),
    });

    if (!tasks.ok) {
      throw new Error(`Error updating task: ${tasks.statusText}`);
    }
    const result = await tasks.json();
    return result.task;
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Error in updateTask: ${error.message}`);
    } else {
      console.error("An unknown error occurred");
    }
    throw error;
  }
};

// Delete a task
export const deleteTask = async (id: string) => {
  try {
    const tasks = await fetch(`${BASE_URL}/${id}`, {
      method: "DELETE",
    });
    if (!tasks.ok) {
      throw new Error(`Error deleting task: ${tasks.statusText}`);
    }
    const result = await tasks.json();
    return result;
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Error in deleteTask: ${error.message}`);
    } else {
      console.error("An unknown error occurred");
    }
    throw error;
  }
};
