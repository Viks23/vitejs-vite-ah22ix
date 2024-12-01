function ListGroup() {
  let items = [
    'New York',
    'San Frantcisco',
    'Tokyo',
    'London',
    'Paris'
  ];
  items = [];

  const message = items.length === 0 && <p>No item found</p>;
  return (
    <>
      <h1>List </h1>
      {message}
      <ul className="list-group">
        {items.map(item =>
          <li className="list-group-item" key={item}>{item}</li>)}
      </ul>
    </>
  );
}

export default ListGroup;




