import booking from "../database/bookingDb";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req) {
    const body = await req.json();
    const data = await booking.create(body);
  // console.log(data)
    return NextResponse.json(data);
  }

  // export async function POST(req) {
  //   try {
  //     // Connect to the database
  //     await dbConnect();
  
  //     // Parse the request body
  //     const body = await req.json();
  
  //     // Check if required fields are present
  //     const { date, time, partySize } = body;
  //     if (!date || !time || !partySize) {
  //       return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
  //     }
  
  //     // Create a new booking entry in the database
  //     const data = await Booking.create(body);
  
  //     // Return the created booking entry
  //     return NextResponse.json(data, { status: 201 });
  //   } catch (error) {
  //     console.error('Error creating booking:', error);
  //     return NextResponse.json({ error: 'Error creating booking' }, { status: 500 });
  //   }
  // }