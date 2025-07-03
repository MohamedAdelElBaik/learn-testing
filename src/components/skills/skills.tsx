export default function Skills({ skills }: { skills: string[] }) {
  return (
    <div>
      <ul>
        {skills.map((skill, index) => (
          <li key={skill + index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}
