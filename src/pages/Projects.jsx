import { useState } from "react";
import StarryBackground from "../components/Stars";

export function Projects() {
  const URL = "https://api.github.com/users/timmywheels/repos";

  const [data, setData] = useState([]);

  useState(() => {
    fetch(URL)
      .then((resp) => resp.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, []);

  return (
    <section>
      <StarryBackground count={500} />
      <h2>My projects</h2>
      <p>Here is a list of different projects throughout the years:</p>
      {data.map((repo) => (
        <article key={repo.id}>
          <a href={repo.html_url}>
            <h3>{repo.name}</h3>
          </a>
        </article>
      ))}
    </section>
  );
}
export default Projects;
