"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useInputStore } from "@/stores/input-store";
import { MESSAGES } from "@/app/messages/en";

export function Header() {
  const input = useInputStore((state) => state.input);
  const setInput = useInputStore((state) => state.setInput);
  const handleClickSendButton = useInputStore(
    (state) => state.handleClickSendButton
  );
  const option = useInputStore((state) => state.option);
  const setOption = useInputStore((state) => state.setOption);

  return (
    <div className="flex flex-row w-full h-32 items-center justify-center space-x-2">
      <Input
        placeholder={MESSAGES.header.INPUT_PLACEHOLDER}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-1/3"
      />
      <Select value={option ?? undefined} onValueChange={setOption}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder={"Options"} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="product_name">Nome Produto</SelectItem>
          <SelectItem value="product_brand">Marca produto</SelectItem>
        </SelectContent>
      </Select>
      <Button
        onClick={() => handleClickSendButton()}
        disabled={!input || !option}
      >
        <span>{MESSAGES.header.BUTTON_TEXT}</span>
      </Button>
    </div>
  );
}
