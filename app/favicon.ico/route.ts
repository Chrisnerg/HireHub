import { NextResponse } from "next/server"

export const GET = async () => {
  return new NextResponse(null, {
    status: 204,
    headers: {
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  })
}
