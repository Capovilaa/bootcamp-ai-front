"use server";

import axios from "axios";
const URL = process.env.API_ENDPOINT;

export async function helloWorld() {
  const response = await axios({
    method: "get",
    url: URL,
  });

  if (response) return console.log("Response ", response.data);

  throw new Error("Error on fetch hello world");
}

type GetCommentsByProductNameProps = { product_name: string };

export async function getCommentsByProductName({
  product_name,
}: GetCommentsByProductNameProps) {
  const response = await axios({
    method: "get",
    url: `${URL}product_name/${product_name}`,
  });

  if (response) return response.data;

  throw new Error("Error on getComments");
}

type GetCommentsByProductBrandProps = { product_brand: string };

export async function getCommentsByProductBrand({
  product_brand,
}: GetCommentsByProductBrandProps) {
  const response = await axios({
    method: "get",
    url: `${URL}product_brand/${product_brand}`,
  });

  if (response) return response.data;

  throw new Error("Error on getComments");
}

type Comentario = {
  categoria_principal: string;
  produto: string;
  categoria: string;
  subcategoria: string;
  titulo_avaliacao: string;
  avaliacao_geral: number;
  recomendaria_a_um_amigo: string;
  comentario: string;
  id: string;
};

type PostFeelingProps = {
  comentarios: Comentario[];
};

export async function postFeeling(input: PostFeelingProps) {
  const response = await axios.post(`${URL}sentimentos`, input);

  if (response) return response.data.sentimentos;

  throw new Error("Error on post feelings");
}

type PostTopicsProps = {
  comentarios: Comentario[];
};
export async function postTopics(input: PostTopicsProps) {
  const response = await axios.post(`${URL}gerador_topicos`, input);

  if (response) return response.data.result;

  throw new Error("Error on post topics");
}

type PostSummaryProps = {
  comentarios: Comentario[];
};
export async function postSummary(input: PostSummaryProps) {
  const response = await axios.post(`${URL}sumarizacao`, input);

  if (response) return response.data;

  throw new Error("Error on post summary");
}
