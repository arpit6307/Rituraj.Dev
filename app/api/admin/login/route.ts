import { NextResponse } from "next/server";

const ADMIN_EMAIL = "riturajswaroop@gmail.com";
const ADMIN_PASSWORD = "Ritu1432@569";

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      return NextResponse.json(
        {
          success: true,
          message: "Login successful!",
          token: "admin_authenticated_token_987654",
        },
        { status: 200 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: "Invalid Email or Password. Please check your credentials.",
      },
      { status: 401 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Server error during authentication." },
      { status: 500 }
    );
  }
}
