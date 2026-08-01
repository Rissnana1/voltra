import { NextRequest, NextResponse } from "next/server";
import { createOrder, getOrdersByPhone } from "@/lib/db";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, phone, delivery_country, items } = body ?? {};

  if (!name || !phone || !delivery_country || !Array.isArray(items) || items.length === 0) {
    return NextResponse.json(
      { error: "name, phone, delivery_country and at least one item are required." },
      { status: 400 }
    );
  }

  const order = await createOrder({ name, phone, delivery_country, items });

  // NOTE: this is where you'd trigger the M-Pesa STK push using
  // order.total, then flip order.status to "paid" once the callback
  // from Safaricom's Daraja API confirms payment.

  return NextResponse.json({ order }, { status: 201 });
}

export async function GET(req: NextRequest) {
  const phone = req.nextUrl.searchParams.get("phone");
  if (!phone) {
    return NextResponse.json({ error: "phone query param is required." }, { status: 400 });
  }
  const orders = await getOrdersByPhone(phone);
  return NextResponse.json({ orders });
}
