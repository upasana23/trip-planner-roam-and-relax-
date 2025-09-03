export const runtime = 'nodejs';
import { NextResponse } from "next/server";
import { hash } from "bcrypt";
import prisma from "@/lib/prisma";

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();
    if (!email || !password) {
      return NextResponse.json({ error: "Email and password are required" }, { status: 400 });
    }
    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) {
      return NextResponse.json({ error: "User already exists" }, { status: 409 });
    }
    const passwordHash = await hash(password, 10);
    const user = await prisma.user.create({ data: { email, name, passwordHash } });
    return NextResponse.json({ id: user.id, email: user.email, name: user.name });
  } catch (err) {
    console.error('Signup error', err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

