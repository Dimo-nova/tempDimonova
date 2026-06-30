import { NextRequest, NextResponse } from "next/server";
import { Client } from "@notionhq/client";
import { Resend } from "resend";

const notion = new Client({ auth: process.env.NOTION_TOKEN });
const resend = new Resend(process.env.RESEND_API_KEY);
const DB_ID = process.env.NOTION_LEADS_DB_ID!;

const vtypeMap: Record<string, string> = {
  restaurant: "Restaurante",
  pub: "Pub",
  cafe: "Cafetería",
  other: "Otro",
};

export async function POST(req: NextRequest) {
  const { name, email, venue, vtype, phone, message, menuUrl, locale } =
    await req.json();

  if (!name?.trim() || !email?.trim() || !venue?.trim()) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  try {
    await notion.pages.create({
      parent: { database_id: DB_ID },
      properties: {
        Nombre: { title: [{ text: { content: name } }] },
        Email: { email },
        Local: { rich_text: [{ text: { content: venue } }] },
        "Tipo de local": { select: { name: vtypeMap[vtype] ?? "Otro" } },
        ...(phone ? { Teléfono: { phone_number: phone } } : {}),
        ...(message ? { Mensaje: { rich_text: [{ text: { content: message } }] } } : {}),
        ...(menuUrl ? { "URL menú actual": { url: menuUrl } } : {}),
        Estado: { select: { name: "Nuevo" } },
        Idioma: { rich_text: [{ text: { content: locale ?? "es" } }] },
      },
    });

    await resend.emails.send({
      from: "Dimonova Web <noreply@dimonova.com>",
      to: "pablo@dimonova.com",
      subject: `Nuevo lead: ${venue} — ${name}`,
      html: `
        <h2 style="font-family:sans-serif">Nuevo lead desde dimonova.com</h2>
        <table style="font-family:sans-serif;font-size:14px;border-collapse:collapse">
          <tr><td style="padding:4px 12px 4px 0;color:#666">Nombre</td><td><strong>${name}</strong></td></tr>
          <tr><td style="padding:4px 12px 4px 0;color:#666">Email</td><td><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td style="padding:4px 12px 4px 0;color:#666">Local</td><td>${venue}</td></tr>
          <tr><td style="padding:4px 12px 4px 0;color:#666">Tipo</td><td>${vtypeMap[vtype] ?? vtype}</td></tr>
          ${phone ? `<tr><td style="padding:4px 12px 4px 0;color:#666">Teléfono</td><td>${phone}</td></tr>` : ""}
          ${message ? `<tr><td style="padding:4px 12px 4px 0;color:#666;vertical-align:top">Mensaje</td><td>${message}</td></tr>` : ""}
          ${menuUrl ? `<tr><td style="padding:4px 12px 4px 0;color:#666">Menú actual</td><td><a href="${menuUrl}">${menuUrl}</a></td></tr>` : ""}
          <tr><td style="padding:4px 12px 4px 0;color:#666">Idioma</td><td>${locale}</td></tr>
        </table>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
