"use client";

import React from "react";
import { ComentsSidebar } from "@/components/components/coments-sidebar";
import { Separator } from "@/components/ui/separator";
import { ResponseArea } from "@/components/components/response-area";
import { useInputStore } from "@/stores/input-store";
import { Loader2 } from "lucide-react";
import { useResultAISTore } from "@/stores/result-ai-store";

export function Main() {
  const isLoading = useInputStore((state) => state.isLoading === true);
  const summary = useResultAISTore((state) => state.summary);

  return (
    <div className="w-11/12 h-[90vh] flex flex-row items-center justify-center space-x-2">
      {isLoading ? (
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-row items-center animate-pulse">
            <span className="text-center text-lg">
              We're working on your prompt, please wait
            </span>
            <Loader2 className="animate-spin h-4" />
          </div>
        </div>
      ) : (
        <>
          {summary ? (
            <>
              <ComentsSidebar />
              <Separator orientation="vertical" />
              <ResponseArea summary={summary ? summary.resumo_final : null} />
            </>
          ) : (
            <div className="flex flex-row">
              <h1 className="text-xl">
                Find out what people are really saying about any product with AI
                🤖
              </h1>
            </div>
          )}
        </>
      )}
    </div>
  );
}
