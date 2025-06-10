import { ReviewComment } from "@/types/comment-type";
import { FeelingType } from "@/types/feeling-type";
import { Summary } from "@/types/summary-type";
import { create } from "zustand";

type ResultAIStore = {
  comments: ReviewComment[];
  feelings: FeelingType[];
  topics: string[];
summary: Summary | null

  setComments: (comments: ReviewComment[]) => void;
  setFeelings: (feelings: FeelingType[]) => void;
  setTopics: (topics: string[]) => void;
  setSummary: (summary: Summary) => void;
};


export const useResultAISTore = create<ResultAIStore>((set) => ({
  comments: [],
  feelings: [],
  topics: [],
  summary: null,

  setComments: (comments) => set({ comments }),
  setFeelings: (feelings) => set({ feelings }),
  setTopics: (topics) => set({ topics }),
  setSummary: (summary) => set({ summary }),
}));
