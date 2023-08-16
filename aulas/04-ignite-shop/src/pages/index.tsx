import { styled } from "@/styles";
import { HomeContainer, Product } from "@/styles/pages/home";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { stripe } from "@/lib/stripe";
import { GetServerSideProps, GetStaticProps } from "next";
import Stripe from "stripe";
import { priceFormatter } from "@/utils/formatter";
import Link from "next/link";
import Head from "next/head";
interface HomeProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
  }[];
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2.5,
      spacing: 48,
    },
  });

  return (
    <>
      <Head>
        <title>Home | E-commerce</title>
      </Head>
      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/product/${product.id}`}
            prefetch={false}
          >
            <Product className="keen-slider__slide">
              {/* coloca a maior altura e largura pois ela vai redimencionar de acordo com necessario */}
              <Image
                src={product.imageUrl}
                alt=""
                width={520}
                height={480}
                blurDataURL={product.imageUrl}
              />
              <footer>
                <strong>{product.name}</strong>
                <span>{product.price}</span>
              </footer>
            </Product>
          </Link>
        ))}
      </HomeContainer>
    </>
  );
}

//SSR -> server side rendering
// dessa forma ele carrega no server side incluse os logs aparecem no temrinal neste caso
// somente em casos especificos que precisam de dados do servidor
// usuario n tem acessos
// export const getServerSideProps: GetServerSideProps = async () => {
//   const response = await stripe.products.list({
//     expand: ["data.default_price"],
//   });

//   const products = response.data.map((product) => {
//     const price = product.default_price as Stripe.Price;

//     return {
//       id: product.id,
//       name: product.name,
//       imageUrl: product.images[0],
//       url: product.url,
//       price: priceFormatter.format(price.unit_amount ? price.unit_amount / 100 : 0),
//     };
//   });

//   return {
//     props: {
//       products,
//     },
//   };
// };

//SSG -> server side generation
export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ["data.default_price"],
  });
  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price;

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      url: product.url,
      price: priceFormatter.format(
        price.unit_amount ? price.unit_amount / 100 : 0
      ),
    };
  });

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, // 2 horas
  };
};
