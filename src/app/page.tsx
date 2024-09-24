function MyButton() {
  return (
    <button className="bg-fuchsia-700 p-1 rounded">
      I'm a button
    </button>
  );
}

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold">
        Welcome to my app
      </h1>
      <MyButton />
    </div>
  );
}
