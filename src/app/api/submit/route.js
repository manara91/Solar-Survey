import { NextResponse } from "next/server";

export async function POST(request) {
  const data = await request.json();
  // قم بتحديد جميع المسارات التي يجب التحقق منها داخل كائن البيانات
  const requiredPaths = [
    "houseType",
    "houseAge",
    "electricityConsumption",
    "energySolutions",
    "question2_answer", // أضفناه هنا
  ];

  // تحقق مما إذا كانت البيانات مفقودة أو أن أي مسار من المسارات المطلوبة مفقود أو فارغ
  const isDataInvalid =
    !data ||
    requiredPaths.some((path) => {
      const value = data[path];

      // التحقق من القيمة
      if (value === undefined || value === null) return true;

      // التحقق من المصفوفة الفارغة (كما في question2_answer)
      if (Array.isArray(value) && value.length === 0) return true;

      return false;
    });

  if (isDataInvalid) {
    return NextResponse.json(
      { success: false, message: "missing answers" },
      { status: 400 }
    );
  }

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
