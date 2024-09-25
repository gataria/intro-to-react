'use client';

import { useState } from "react";

interface listType {
  title: string,
  id: number,
}

interface myButtonProps {
  count: number,
  onClick: Function,
}

function MyButton({ count, onClick }: myButtonProps) {  
  return (
    <button onClick={() => onClick()} className="bg-fuchsia-700 p-1 rounded">
      I'm a button {`(clicked ${count}  times)`}
    </button>
  );
}

export default function Home() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  const list : listType[] = [
    { title: "Bread", id: 1 },
    { title: "Milk", id: 2 },
    { title: "Eggs", id: 3 },
  ];
  
  const listItems = list.map(listItem => 
    <li
      key={listItem.id}
      style={{
        color: ( listItem.id === 1 ) ? 'red' : 'white',
      }}
    >
      {listItem.title}
    </li>
  );

  return (
    <div>
      <h1 className="text-3xl font-bold">
        Welcome to my app
      </h1>
      <MyButton count={count} onClick={() => handleClick()} />
      <br />
      <MyButton count={count} onClick={() => handleClick()}/>
      <ul>
        {listItems}
      </ul>
    </div>
  );
}
