import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { ReviewComment } from "@/types/comment-type";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function normalizeGetCommentsApiResponse(data: any[]): ReviewComment[] {
  return data.map((item) => ({
    review_title: item["Título da Avaliação"] ?? "",
    review_text: item["Comentário"] ?? "",
    overall_rating: Number(item["Avaliação Geral"] ?? 0),
    submission_date: new Date().toISOString(),
    product: item["Marca"] ?? item["Produto"] ?? "",
    reviewer_id: Math.floor(Math.random() * 100000),
  }));
}
