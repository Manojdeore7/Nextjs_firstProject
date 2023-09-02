import { useRouter } from "next/router";

function developer() {
  let router = useRouter();
  let id = router.query.ID;
  let details = [
    { id: 1, name: "Yash", role: "Senior Developer" },
    { id: 2, name: "Vaibhav", role: "Backend Developer" },
    { id: 3, name: "Suresh", role: "Frontend Developer" },
  ];

  let obj = details.filter((e) => {
    return e.id == id;
  });
  console.log(obj);
  return (
    <>
      <h1>{obj.name}</h1>
      <br></br>
      <h1>{obj.role}</h1>
    </>
  );
}
export default developer;
