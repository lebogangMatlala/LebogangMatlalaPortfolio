import { NextResponse } from "next/server";
import { Resend } from "resend";

//const resend = new Resend("re_dkG2TACf_7mSCVVhB2rgHDu7WtR2SsJJU");
const resend = new Resend(process.env.RESEND_API_KEY);
console.log("API key:", process.env);
export async function POST(req) {
  try {
    const body = await req.json();
    console.log('Request body:', body);

    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    await resend.emails.send({
      from: "Lebogang Matlala <onboarding@resend.dev>",
      to: ["lebogangmatlala94@gmail.com"],
      subject: `New message from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: "Email send failed." }, { status: 500 });
  }
}
