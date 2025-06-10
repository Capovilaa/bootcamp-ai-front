import { Card, CardContent } from "@/components/ui/card";
import { ReviewComment } from "@/types/comment-type";
import { FeelingType } from "@/types/feeling-type";

type CommentCardProps = ReviewComment & {
  feeling: FeelingType;
};

export function CommentCard({
  review_title,
  review_text,
  overall_rating,
  submission_date,
  product,
  reviewer_id,
  feeling,
}: CommentCardProps) {
  return (
    <Card className="w-full mb-2 bg-white shadow-md rounded-lg hover:cursor-pointer hover:opacity-85 hover:bg-slate-50/80 transition-all">
      <CardContent>
        <h2 className="text-lg font-semibold">{product}</h2>
        <p className="text-sm text-gray-600">{review_text}</p>

        <div className="mt-2 text-xs text-gray-500">
          <span>Rating: {overall_rating} ★</span> |{" "}
          <span>Submitted: {submission_date}</span>
        </div>

        <div className="text-xs text-gray-400 mb-1">
          Product ID: {product} | Reviewer ID: {reviewer_id}
        </div>

        <div className="mt-1 text-xs">
          <span className="font-medium">Sentimentos:</span>{" "}
          <span>👍 {feeling.Positivos}</span>{" "}
          <span>👎 {feeling.Negativos}</span> <span>😐 {feeling.Neutros}</span>
        </div>
      </CardContent>
    </Card>
  );
}
