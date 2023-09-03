import { useRouter } from "next/router";

function developer(props) {
  let router = useRouter();
  let id;

  id = router.query.ID;

  let details = [
    { id: 1, name: "Yash", role: "Senior Developer" },
    { id: 2, name: "Vaibhav", role: "Backend Developer" },
    { id: 3, name: "Suresh", role: "Frontend Developer" },
  ];

  let obj;

  obj = details.filter((e) => {
    return e.id == (id || 1);
  });
  if (obj === undefined) {
    obj[0] = { name: "note awailablee", role: "try diff" };
  }
  console.log(id);
  return (
    <>
      <h1>{obj[0].name}</h1>
      <h1>{obj[0].role}</h1>
    </>
  );
}
export default developer;
