// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

var os = require('os');

type Data = {
  name: string
  date: any
  os: any,
  arch: any
}

let date_ob = new Date();
let year = date_ob.getFullYear();

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe', date: year, os: os.platform(), arch: os.arch() })
}
