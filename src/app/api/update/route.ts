import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    version: "1.0.5",
    url: "https://hwid-spoofer-server.vercel.app/update.zip"
  });
}
