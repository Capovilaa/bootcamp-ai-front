"use client";

import React, { useState, useEffect } from "react";
import { Textarea } from "@/components/ui/textarea";
import { MESSAGES } from "@/app/messages/en";
import { Summary } from "@/types/summary-type";

export function ResponseArea({ summary }: Summary) {
  const [typedText, setTypedText] = useState<string>("");

  useEffect(() => {
    if (!summary || typeof summary !== "string") {
      setTypedText("");
      return;
    }

    let index = 0;
    setTypedText("");

    const interval = setInterval(() => {
      if (index < summary.length) {
        setTypedText((prev) => prev + summary.charAt(index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 10);

    return () => clearInterval(interval);
  }, [summary]);

  return (
    <div className="w-2/3 h-11/12 flex flex-col items-center justify-center">
      <div className="w-4/5 h-1/10 flex flex-col items-start">
        <h1 className="text-lg">{MESSAGES.summary.SUMMARY_TITLE}</h1>
        <h1 className="text-sm text-slate-500">
          {MESSAGES.summary.SUMMARY_DESCRIPTION}
        </h1>
      </div>

      <div className="w-4/5 h-9/10 max-h-full">
        <Textarea
          readOnly
          value={typedText}
          className="w-full h-2/3 rounded-lg"
        />
      </div>
    </div>
  );
}
