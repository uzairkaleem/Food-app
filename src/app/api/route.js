import connectTdb from "@/lib/db";

export async function GET() {
  console.log("🚀 API HIT");
  await connectTdb();
  return Response.json({ message: "check terminal" });
}
