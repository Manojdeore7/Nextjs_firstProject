import Link from "next/link";

function About() {
  let details = [
    { id: 1, name: "Yash", role: "Senior Developer" },
    { id: 2, name: "Vaibhav", role: "Backend Developer" },
    { id: 3, name: "Suresh", role: "Frontend Developer" },
  ];
  return (
    <>
      {details.map((e, i) => {
        return (
          <Link href={`AboutUs/${e.id}`}>
            <a>
              <h1>{e.name}</h1>
            </a>
          </Link>
        );
      })}
    </>
  );
}
export default About;
