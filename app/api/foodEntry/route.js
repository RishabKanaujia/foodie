import food from "../database/foodDb";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.json();
  const data = await food.create(body);

  return NextResponse.json(data);
}

export async function getFoodData(){
  const data = await food.find().lean()
  return data;
  }
export async function getFoodDataDinner(){
  const data = await food.find({category:'Dinner'}).lean()
  return data;
  }
export async function getFoodDataLunch(){
  const data = await food.find({category:'Lunch'}).lean()
  return data;
  }
export async function getFoodDataDessert(){
  const data = await food.find({category:'Dessert'}).lean()
  return data;
  }