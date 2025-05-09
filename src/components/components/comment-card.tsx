import { Card, CardContent } from "@/components/ui/card";
import { Comment } from "@/types/comment-type";

export function CommentCard({
  review_title,
  review_text,
  overall_rating,
  submission_date,
  product_id,
  reviewer_id,
}: Comment) {
  return (
    <Card className="w-full mb-2 bg-white shadow-md rounded-lg hover:cursor-pointer hover:opacity-85 hover:bg-slate-50/80 transition-all">
      <CardContent>
        <h2 className="text-lg font-semibold">{review_title}</h2>
        <p className="text-sm text-gray-600">{review_text}</p>
        <div className="mt-2 text-xs text-gray-500">
          <span>Rating: {overall_rating} ★</span> |{" "}
          <span>Submitted: {submission_date}</span>
        </div>
        <div className="text-xs text-gray-400">
          Product ID: {product_id} | Reviewer ID: {reviewer_id}
        </div>
      </CardContent>
    </Card>
  );
}
