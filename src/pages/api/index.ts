// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

require("./db/mongoose");

type Data = {
  name: string
  date: any
  os: any,
  arch: any
}

const fetchApi = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const json = await res.json();
  return json;
};

let date_ob = new Date();
let year = date_ob.getFullYear();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const data = await fetchApi();
  res.status(200).json(data)
}
