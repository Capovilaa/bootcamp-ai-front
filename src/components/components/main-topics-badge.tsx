import React from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import { TopicType } from "@/types/topic-type";

type MainTopicsBadgeProps = {
  extracted_topics: string[];
};

export function MainTopicsBadge({ extracted_topics }: MainTopicsBadgeProps) {
  return (
    <ScrollArea className="w-full max-h-40 p-2 overflow-y-auto">
      <div className="flex gap-2">
        {extracted_topics.map((topic: any, index: any) => (
          <TooltipProvider key={index}>
            <Tooltip>
              <TooltipTrigger>
                <Badge
                  key={index}
                  className="bg-blue-100 text-blue-700 px-3 py-1 rounded max-w-52 truncate"
                >
                  {topic}
                </Badge>
              </TooltipTrigger>
              <TooltipContent>
                <p>{topic}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
