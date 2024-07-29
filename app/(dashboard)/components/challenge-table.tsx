import { Challenge, columns } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<Challenge[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      iteration: 1,
      status: "completed",
      challenge: "Challenge 1",
    },
    {
      id: "31",
      iteration: 5,
      status: "submitted",
      challenge: "Challenge 2",
    },
  ];
}

export default async function ChallengeTable() {
  const data = await getData();

  return (
    <div className="mx-auto py-10 min-w-[550px] ">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
