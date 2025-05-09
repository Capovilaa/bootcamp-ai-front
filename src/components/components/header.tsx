"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useInputStore } from "@/stores/input-store";
import { MESSAGES } from "@/app/messages/en";

export function Header() {
  const input = useInputStore((state) => state.input);
  const setInput = useInputStore((state) => state.setInput);
  const handleClickSendButton = useInputStore(
    (state) => state.handleClickSendButton
  );
  return (
    <div className="flex flex-row w-full h-32 items-center justify-center space-x-2">
      <Input
        placeholder={MESSAGES.header.INPUT_PLACEHOLDER}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-1/3"
      />
      <Button onClick={() => handleClickSendButton()}>
        <span>{MESSAGES.header.BUTTON_TEXT}</span>
      </Button>
    </div>
  );
}
