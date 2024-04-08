async function fetchData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const result = await res.json();
  return result;
}

export default async function Team() {
  const posts = await fetchData();
  console.log("fasfsf", posts);
  return (
    <div className="grid modile:grid-cols-2 laptop:grid-cols-4 gap-4 px-5 pt-6">
      {posts.map((el) => (
        <div key={el.id}>
          <img
            className="rounded-br-2xl rounded-t-2xl h-72 object-cover"
            src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
            alt="image"
          />
          <h4 className="text-2xl">{el.name}</h4>
          <h6 className="text-[#E8C32F] text-lg">Продюсер</h6>
          <h6 className="text-[#E8C32F] text-lg">{el.email}</h6>
          <h5 className="text-lg line-clamp-2">{el.phone}</h5>
        </div>
      ))}
    </div>
  );
}
