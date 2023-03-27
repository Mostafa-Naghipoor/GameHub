import { MouseEvent } from "react";
function ListGroup() {
  let items = ["New York", "Tehran", "Tonekabon", "Ramsar", "Vancouver"];
  let selectedItem = 0;
  const handleClick = (event: MouseEvent) => console.log(event);
  return (
    <>
      <h1> list</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedItem === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={handleClick}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
