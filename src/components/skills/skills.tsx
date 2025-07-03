import { useState } from "react";

export default function Skills({ skills }: { skills: string[] }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <ul>
        {skills.map((skill, index) => (
          <li key={skill + index}>{skill}</li>
        ))}
      </ul>

      {isLoggedIn ? (
        <button>start learning</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>login</button>
      )}
    </div>
  );
}
