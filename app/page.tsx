"use client";

import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

export default function Home() {
  async function getRepos() {
    try {
      const data = await fetch(
        "https://api.github.com/users/MateusGustavo22/repos"
      );

      const repos = await data.json();

      return repos;
    } catch (error) {
      return error;
    }
  }

  const { data, isLoading, isError } = useQuery({
    queryKey: ["repos"],
    queryFn: getRepos,
    refetchOnWindowFocus: false
  });

  if (isLoading) return <span className="text-gray-400">Carregando...</span>;
  if (isError)
    return <span className="text-gray-400">Erro ao carregar a pagina</span>;

  return (
    <div className="w-max m-auto mt-8 flex flex-col gap-2">
      <span className="text-white text-xl">Repositórios</span>
      {data &&
        data?.map((repo) => (
          <div className="bg-zinc-900 px-6 py-2" key={repo.id}>
            <Link href={repo.html_url}>
              <span className="text-gray-400 hover:text-white">
                {repo.name}
              </span>
            </Link>
          </div>
        ))}
    </div>
  );
}
