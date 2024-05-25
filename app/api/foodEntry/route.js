import food from "../database/foodDb";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.json();
  const data = await food.create(body);

  return NextResponse.json(data);
}

export async function getFoodData(){
  const data = await food.find()
  return data;
  }
export async function getFoodDataDinner(){
  const data = await food.find({category:'dinner'})
  return data;
  }