"use client";

import { useQuery } from "@tanstack/react-query";

export default function Home() {
  async function getRepos() {
    const data = await fetch(
      "https://api.github.com/users/MateusGustavo22/repos"
    );
    console.log(data);
  }

  const { data } = useQuery({
    queryKey: ["repos"],
    queryFn: getRepos,
  });

  return <h1>Hello World</h1>;
}
