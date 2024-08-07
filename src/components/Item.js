export function Item({ item, onDeleteItems, onUpdateItems }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onUpdateItems(item.id)}
      ></input>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={(e) => onDeleteItems(item.id)}>❌</button>
    </li>
  );
}
