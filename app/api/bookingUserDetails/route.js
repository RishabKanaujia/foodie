import bookingUserDetail from "../database/bookingUserDetails";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const data = await bookingUserDetail.create(body);
    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}