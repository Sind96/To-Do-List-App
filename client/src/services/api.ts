const BASE_URL = "http://localhost:3000/tasks";

// Fetch all tasks
export const fetchTasks = async () => {
  try {
    const tasks = await fetch(BASE_URL);
    if (!tasks.ok) {
      throw new Error(`Error fetching tasks: ${tasks.statusText}`);
    }
    const result = await tasks.json();
    return result;
  } catch (error) {
    console.error(`Error in fetchTasks: ${error.message}`);
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
    return result;
  } catch (error) {
    console.error(`Error in createTask: ${error.message}`);
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
    return result;
  } catch (error) {
    console.error(`Error in updateTask: ${error.message}`);
    throw error;
  }
};

// Delete a task
export const deleteTask = async () => {
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
    console.error(`Error in deleteTask: ${error.message}`);
    throw error;
  }
};
