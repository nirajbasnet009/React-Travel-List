import { useState } from "react";
import { Item } from "./Item";

export default function PackingList({
  items,
  onDeleteItems,
  onUpdateItems,
  onClearList,
}) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;

  if (sortBy === "packed") {
    sortedItems = [...items].sort((a, b) => a.packed - b.packed);
  } else if (sortBy === "description") {
    sortedItems = [...items].sort((a, b) =>
      a.description.localeCompare(b.description)
    );
  } else {
    sortedItems = items;
  }

  return (
    <div className="list actions">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            onDeleteItems={onDeleteItems}
            onUpdateItems={onUpdateItems}
            key={item.id}
          />
        ))}
      </ul>
      <div>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">sort by input order</option>
          <option value="description">sort by Description</option>
          <option value="packed">sort by packed status</option>
        </select>
        <button onClick={() => onClearList()}>CLEAR LIST</button>
      </div>
    </div>
  );
}
