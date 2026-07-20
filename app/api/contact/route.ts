import { NextResponse } from "next/server";
import { z } from "zod";
import fs from "fs";
import path from "path";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const messagesFilePath = path.join(process.cwd(), "data", "messages.json");

function getMessages() {
  try {
    if (!fs.existsSync(messagesFilePath)) {
      fs.writeFileSync(messagesFilePath, "[]", "utf-8");
    }
    const fileData = fs.readFileSync(messagesFilePath, "utf-8");
    return JSON.parse(fileData);
  } catch (error) {
    return [];
  }
}

function saveMessages(messages: any[]) {
  try {
    fs.writeFileSync(messagesFilePath, JSON.stringify(messages, null, 2), "utf-8");
  } catch (error) {
    console.error("Error saving messages:", error);
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = contactSchema.parse(body);

    const newMessage = {
      id: `msg-${Date.now()}`,
      ...validatedData,
      date: new Date().toISOString(),
    };

    const existingMessages = getMessages();
    existingMessages.unshift(newMessage);
    saveMessages(existingMessages);

    return NextResponse.json(
      {
        success: true,
        message: "Thank you! Your message has been sent to Rituraj.",
      },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: error.flatten().fieldErrors },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
