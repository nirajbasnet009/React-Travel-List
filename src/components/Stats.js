export default function Stats({ items }) {
  if (items.length === 0)
    return (
      <p className="stats">Start adding some items to your packing List✈️</p>
    );
  const packedItems = items.filter((item) => item.packed);
  const percentComplete = (packedItems.length / items.length) * 100;

  return (
    <footer className="stats">
      {percentComplete === 100
        ? "You got Everything! Ready to go✈️"
        : `👜 You have ${
            items.length
          } items on your list, and you already packed
      ${packedItems.length} (${percentComplete.toFixed(2)}%)`}
    </footer>
  );
}
