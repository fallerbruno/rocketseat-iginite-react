import { stripe } from "@/lib/stripe";
import { CheckoutContainer, ImageContainer } from "@/styles/pages/checkout";
import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Stripe from "stripe";

interface CheckoutProps {
  customerName: string;
  product: {
    name: string;
    imageUrl: string;
  };
}

export default function Checkout({ customerName, product }: CheckoutProps) {
  return (
    <>
      <Head>
        <title>Compra Efetuada | E-commerce</title>
        <meta name="robots" content="noindex" />
      </Head>
      <CheckoutContainer>
        <h1>Compra Efetuada!</h1>
        <ImageContainer>
          <Image src={product.imageUrl} alt="" width={120} height={110} />
        </ImageContainer>

        <p>
          Uhuul <strong>{customerName}</strong>, sua{" "}
          <strong>{product.name}</strong> já está a caminho da sua casa.
        </p>

        <Link href="/">Voltar ao Catalogo</Link>
      </CheckoutContainer>
    </>
  );
}

// Client Side Rendering useEffect -> Nesse caso tem 2 problemas: skelSkin e nao funciona pro stripe pois precisa da chave secreta
// getStaticProps -> não funciona nesse caso
// getServerSideProps ->

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const sessionId = query.session_id
    ? String(query.session_id)
    : query.session_id;

  if (sessionId === undefined) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ["line_items", "line_items.data.price.product"],
  });

  const customerName = session.customer_details
    ? session.customer_details.name
    : "";

  const product = session.line_items?.data[0].price?.product as Stripe.Product;

  return {
    props: {
      customerName,
      product: {
        name: product.name,
        imageUrl: product.images[0],
      },
    },
  };
};
