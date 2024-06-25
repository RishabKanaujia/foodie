import contactUser from "../database/contactUsUser";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const data = await contactUser.create(body);

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}
export async function getReviewData(){
  const data = await contactUser.find().lean()
  return data;
  }