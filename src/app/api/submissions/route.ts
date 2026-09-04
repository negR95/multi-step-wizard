import { NextResponse } from "next/server";
import { completeWizardSchema } from "@/lib/validation";

export async function POST(request: Request) {
  try {
    const body: unknown = await request.json();
    const result = completeWizardSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          message: "اطلاعات ارسالی کامل یا معتبر نیست.",
          errors: result.error.flatten().fieldErrors,
        },
        { status: 422 },
      );
    }

    await new Promise((resolve) => setTimeout(resolve, 650));

    return NextResponse.json(
      {
        success: true,
        message:
          "از همراهی شما ممنونیم. اطلاعات کامل شما در یک درخواست دریافت شد.",
        submissionId: crypto.randomUUID().split("-")[0].toUpperCase(),
      },
      { status: 201 },
    );
  } catch {
    return NextResponse.json(
      { success: false, message: "بدنهٔ درخواست قابل پردازش نیست." },
      { status: 400 },
    );
  }
}
