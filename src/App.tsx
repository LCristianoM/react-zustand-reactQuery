import Card from "./components/Card";
import { useFetchRepositories } from "./hooks/useRepos";
import { useFavoriteReposStore } from "./store/favoriteRepos";

function App() {
  const { data, isLoading } = useFetchRepositories("LCristianoM");
  // const { data, isLoading } = useFetchRepositories("fazt");
  const { favoriteReposIds } = useFavoriteReposStore();

  if (isLoading) return <div> Is Loading... </div>;

  console.log(data);

  return (
    <div>
      {data?.map((repository) => (
        <Card
          repository={repository}
          key={ repository.id }
          isFavorite={favoriteReposIds.includes(repository.id)}
        ></Card>
      ))}
    </div>
  );
}

export default App;
