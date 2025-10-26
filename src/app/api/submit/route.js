import { NextResponse } from "next/server";

export async function POST(request) {
  const data = await request.json();

  // if (!data || !data.houseType) {
  //   return NextResponse.json(
  //     { success: false, message: "missing data." },
  //     { status: 400 }
  //   );
  // }

  // if (data.question2_options.length === 0) {
  //   return NextResponse.json(
  //     { success: false, message: "Missing required field: question2_options." },
  //     { status: 400 }
  //   );
  // }

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
