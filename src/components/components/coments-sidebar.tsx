import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CommentCard } from "@/components/components/comment-card";
import { MainTopicsBadge } from "@/components/components/main-topics-badge";
import mainTopics from "@/app/mocks/mock-topics.json";
import { MESSAGES } from "@/app/messages/en";
import { useResultAISTore } from "@/stores/result-ai-store";

export function ComentsSidebar() {
  const comments = useResultAISTore((state) => state.comments);
  const feelings = useResultAISTore((state) => state.feelings);
  const topics = useResultAISTore((state) => state.topics);
  return (
    <div className="w-1/3 h-11/12 bg flex flex-col items-center justify-center">
      <div className="w-full h-1/10 flex flex-col items-start">
        <h1 className="text-lg">{MESSAGES.comments.COMMENTS_TITLE}</h1>
        <h1 className="text-sm text-slate-500">
          {MESSAGES.comments.COMMENTS_DESCRIPTION}
        </h1>
      </div>

      <ScrollArea className="w-full h-7/10">
        {comments.map((comment, idx) => {
          const feeling = feelings[idx];
          return <CommentCard key={idx} {...comment} feeling={feeling} />;
        })}
      </ScrollArea>

      <div className="w-full h-2/10 flex flex-col pt-2">
        <h1 className="text-lg">{MESSAGES.topics.TOPICS_TITLE}</h1>
        <h1 className="text-sm text-slate-500">
          {MESSAGES.topics.TOPICS_DESCRIPTION}
        </h1>
        <MainTopicsBadge extracted_topics={topics} />
      </div>
    </div>
  );
}
