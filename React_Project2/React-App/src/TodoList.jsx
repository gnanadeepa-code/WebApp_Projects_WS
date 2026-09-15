import { useState } from "react";

export const TodoList = () => {
  const [items, setItems] = useState([
    { id: 1, text: " Learn React", done: false },
    { id: 2, text: " Build an app", done: false },
  ]);

  const addItem = () => {
    const newItem = {
      id: Date.now(),
      text: "Deploy to Production",
      done: false,
    };
    // setItems([...items, newItem]);
    setItems(items.concat(newItem));
  };

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const toggleDone = (id) => {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          return { ...item, done: !item.done };
        }
        return item;
      })
    );
  };

  return (
    <div>
        <h2>Todo List</h2>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.id}>
              <span style={{textDecoration: item.done ? "line-through" : "none"}}>{item.text}</span>
              <button onClick={() => toggleDone(item.id)}>{item.done ? "Undo" : "Done"}</button>
              <button onClick={() => removeItem(item.id)}>Delete</button>
            </li>
          );
        })}
      </ul>
      <button onClick={addItem}>Add Item</button>
    </div>
  );
};
