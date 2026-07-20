import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const messagesFilePath = path.join(process.cwd(), "data", "messages.json");

function getMessages() {
  try {
    if (!fs.existsSync(messagesFilePath)) {
      return [];
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

export async function GET() {
  const messages = getMessages();
  return NextResponse.json({ success: true, messages });
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ success: false, message: "Missing message ID" }, { status: 400 });
    }

    let messages = getMessages();
    messages = messages.filter((m: any) => m.id !== id);
    saveMessages(messages);

    return NextResponse.json({ success: true, message: "Message deleted successfully" });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Error deleting message" }, { status: 500 });
  }
}
