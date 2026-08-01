import { NextRequest, NextResponse } from "next/server";
import { createRepairRequest, getRepairsByPhone } from "@/lib/db";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, phone, device_type, issue, city } = body ?? {};

  if (!name || !phone || !device_type || !issue) {
    return NextResponse.json(
      { error: "name, phone, device_type and issue are required." },
      { status: 400 }
    );
  }

  const repair = await createRepairRequest({
    name,
    phone,
    device_type,
    issue,
    city: city ?? "",
  });

  // NOTE: this is where you'd trigger the M-Pesa STK push or a
  // notification (SMS/email) once a real payments provider is wired in.

  return NextResponse.json({ repair }, { status: 201 });
}

export async function GET(req: NextRequest) {
  const phone = req.nextUrl.searchParams.get("phone");
  if (!phone) {
    return NextResponse.json({ error: "phone query param is required." }, { status: 400 });
  }
  const repairs = await getRepairsByPhone(phone);
  return NextResponse.json({ repairs });
}
