import { create } from "zustand";
import {
  getCommentsByProductName,
  getCommentsByProductBrand,
  postFeeling,
  postTopics,
  postSummary,
} from "@/actions/fast-api";
import { useResultAISTore } from "@/stores/result-ai-store";
import { normalizeGetCommentsApiResponse } from "@/lib/utils";
import { TopicType } from "@/types/topic-type";

type InputStore = {
  input: string;
  option: string | null;
  isLoading: boolean;
  setInput: (value: string) => void;
  setOption: (option: "product_name" | "product_brand") => void;
  setIsloading: (value: boolean) => void;
  handleClickSendButton: () => Promise<void>;
};

export const useInputStore = create<InputStore>((set, get) => ({
  input: "",
  option: null,
  isLoading: false,

  setInput: (value) => set({ input: value }),

  setOption: (option) => set({ option }),

  setIsloading: (value) => set({ isLoading: value }),

  handleClickSendButton: async () => {
    const { input, option } = get();
    let res;

    if (!option) throw Error("Option was not provided");

    console.log("Chamando action para input ... ", input);

    set({ isLoading: true });

    // comentários
    if (option === "product_name") {
      res = await getCommentsByProductName({ product_name: input });
    } else if (option === "product_brand") {
      res = await getCommentsByProductBrand({ product_brand: input });
    }
    console.log("Response ", res);

    // post sentimento
    const sentimento = await postFeeling({ comentarios: res });
    console.log("Sentimento ", sentimento);

    // post topico
    const topic = await postTopics({ comentarios: res });
    console.log("Topic ", topic);

    // post summary
    const summary = await postSummary({ comentarios: res })
    console.log("Summary ", summary);

    set({ isLoading: false });
    if (res) {
      const normalizedComments = normalizeGetCommentsApiResponse(res);
      useResultAISTore.getState().setComments(normalizedComments);
    }

    if (sentimento) {
      useResultAISTore.getState().setFeelings(sentimento);
    }

    if (topic) {
      const allTopics: string[] = topic.flatMap(
        (item: any) => item.topicos_principais.extracted_topics
      );

      useResultAISTore.getState().setTopics(allTopics);
    }

    if (summary) {
      useResultAISTore.getInitialState().setSummary(summary)
    }
  },
}));
