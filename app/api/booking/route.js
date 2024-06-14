import booking from "../database/bookingDb";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req) {
    const body = await req.json();
    const data = await booking.create(body);
    return NextResponse.json(data);
  }

  export async function getBookingData(){
    const data = await booking.findOne().sort({ _id: -1 }).lean()
    return data;
    }