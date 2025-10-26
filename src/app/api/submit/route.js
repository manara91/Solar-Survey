import { NextResponse } from "next/server";

export async function POST(request) {
  const data = await request.json();

  // Server-side validation
  const requiredPaths = [
    "houseType",
    "houseAge",
    "electricityConsumption",
    "energySolutions",
    "question2_answer",
  ];

  const isDataInvalid =
    !data ||
    requiredPaths.some((path) => {
      const value = data[path];

      if (value === undefined || value === null) return true;

      if (Array.isArray(value) && value.length === 0) return true;

      return false;
    });

  if (isDataInvalid) {
    return NextResponse.json(
      { success: false, message: "missing answers" },
      { status: 400 }
    );
  }

  // Generate random yes/no decision
  const randomValue = Math.floor(Math.random() * 2);

  const isSolarWorthIt = randomValue === 1;

  const responseMessage = isSolarWorthIt
    ? "yes it worth"
    : "No it doesnt worth ";

  return NextResponse.json(
    { success: true, result: isSolarWorthIt, message: responseMessage },
    { status: 200 }
  );
}
