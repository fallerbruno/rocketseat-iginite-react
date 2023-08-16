import { stripe } from "@/lib/stripe";
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from "@/styles/pages/product";
import { priceFormatter } from "@/utils/formatter";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Stripe from "stripe";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useState } from "react";
import Head from "next/head";

interface ProductProps {
  product: {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
    description: string;
    defaultPriceId: string;
  };
}

export default function Product({ product }: ProductProps) {
  const { isFallback } = useRouter();
  const [isCreatingCheckoutSession, setIsCreationCheckoutSession] =
    useState(false);
  // const router = useRouter();
  async function handleByProduct() {
    try {
      setIsCreationCheckoutSession(true);
      const response = await axios.post("/api/checkout", {
        priceId: product.defaultPriceId,
      });

      const { checkoutUrl } = response.data;

      toast(
        "Voce Sera redirecionado em uma nova guia para finalizar sua compra"
      );

      setTimeout(() => {
        window.location.href = checkoutUrl;
      }, 1000);
    } catch (error) {
      console.log(error);
      setIsCreationCheckoutSession(false);
      // conectar com uma ferramenta de observalibilidade (DataDog ou Sentry)
      toast("Erro ao processar o pagamento");
    }
  }

  return (
    <>
      <Head>
        <title>{product?.name}</title>
      </Head>
      <ProductContainer>
        {isFallback ? (
          <Skeleton width={520} height={480} circle />
        ) : (
          <ImageContainer>
            <ToastContainer />
            <Image src={product.imageUrl} alt="" width={520} height={480} />
          </ImageContainer>
        )}
        {isFallback ? (
          <Skeleton width={520} height={40} count={4} />
        ) : (
          <ProductDetails>
            <h1>{product.name}</h1>
            <span>{product.price}</span>
            <p>{product.description}</p>
            <button
              disabled={isCreatingCheckoutSession}
              onClick={handleByProduct}
            >
              Comprar agora
            </button>
          </ProductDetails>
        )}
      </ProductContainer>
    </>
  );
}

//usado para gerar as paginas dinamicas que serao acessadas
export const getStaticPaths: GetStaticPaths = async () => {
  // buscar os produtos mais vendidos / mais acessados
  // passaria somente os mais vendidos/ maisacessados
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const productId = params ? params.id : "";

  const response = await stripe.products.retrieve(productId, {
    expand: ["default_price"],
  });

  const price = response.default_price as Stripe.Price;

  return {
    props: {
      product: {
        id: response.id,
        name: response.name,
        imageUrl: response.images[0],
        url: response.url,
        defaultPriceId: price.id,
        price: priceFormatter.format(
          price.unit_amount ? price.unit_amount / 100 : 0
        ),
        description: response.description,
      },
    },
    revalidate: 60 * 60 * 1, // 1 hora
  };
};
