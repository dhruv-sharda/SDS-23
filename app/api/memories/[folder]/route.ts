import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const imageExt = [".jpg", ".jpeg", ".png", ".webp"];
const videoExt = [".mp4", ".mov", ".webm"];

export async function GET(
  request: Request,
  { params }: { params: Promise<{ folder: string }> }
) {
  const { folder } = await params;

  const dir = path.join(process.cwd(), "public", "memories", folder);

  if (!fs.existsSync(dir)) {
    return NextResponse.json([]);
  }

  const files = fs
    .readdirSync(dir)
    .filter((file) => {
      const ext = path.extname(file).toLowerCase();
      return imageExt.includes(ext) || videoExt.includes(ext);
    })
    .map((file) => {
      const ext = path.extname(file).toLowerCase();

      return {
        type: imageExt.includes(ext) ? "image" : "video",
        src: `/memories/${folder}/${file}`,
        caption: file.replace(path.extname(file), "").replaceAll("-", " "),
      };
    });

  return NextResponse.json(files);
}