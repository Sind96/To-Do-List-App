const BASE_URL = import.meta.env.VITE_BASE_URL;

// Fetch all tasks (getTasks)
export const fetchTasks = async () => {
  try {
    const tasks = await fetch(BASE_URL);
    if (!tasks.ok) {
      throw new Error(`Error fetching tasks: ${tasks.statusText}`);
    }

    const result = await tasks.json();
    if (!result || !result.tasks) {
      throw new Error("Invalid API response: Missing 'tasks' field");
    }

    return result.tasks;
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Error in fetchTasks: ${error.message}\n${error.stack}`);
    } else {
      console.error("An unknown error occurred");
    }
    throw error;
  }
};

// Create a new task (postTask)
export const createTask = async (title: string) => {
  try {
    const task = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title }),
    });
    if (!task.ok) {
      throw new Error(`Error creating task: ${task.statusText}`);
    }

    const result = await task.json();
    if (!result || !result.task) {
      throw new Error("Invalid API response: Missing 'task' field");
    }

    return result.task;
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Error in createTask: ${error.message}\n${error.stack}`);
    } else {
      console.error("An unknown error occurred");
    }
    throw error;
  }
};

// Update an existing task (putTask)
export const updateTask = async (
  id: string,
  updatedTask: { title?: string; completed?: boolean }
) => {
  try {
    const task = await fetch(`${BASE_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedTask),
    });
    if (!task.ok) {
      throw new Error(`Error updating task: ${task.statusText}`);
    }

    const result = await task.json();
    if (!result || !result.task) {
      throw new Error("Invalid API response: Missing 'task' field");
    }

    return result.task;
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Error in updateTask: ${error.message}\n${error.stack}`);
    } else {
      console.error("An unknown error occurred");
    }
    throw error;
  }
};

// Delete a task (deleteTask)
export const deleteTask = async (id: string) => {
  try {
    const task = await fetch(`${BASE_URL}/${id}`, {
      method: "DELETE",
    });
    if (!task.ok) {
      throw new Error(`Error deleting task: ${task.statusText}`);
    }

    const result = await task.json();
    if (!result || !result.task) {
      throw new Error("Invalid API response: Missing 'task' field");
    }

    return result;
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Error in deleteTask: ${error.message}\n${error.stack}`);
    } else {
      console.error("An unknown error occurred");
    }
    throw error;
  }
};
