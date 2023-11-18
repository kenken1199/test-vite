import { useState, useEffect } from "react";

type SomeExample = {
  id: number;
  title: string;
};

const ApiFetch = () => {
  const [posts, setPosts] = useState<SomeExample>({ id: 0, title: "" });

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1", { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
  }, []);
  return (
    <div>
      <ul>
        <li>hello {posts.title}</li>
      </ul>
    </div>
  );
};

export default ApiFetch;
