import { stripe } from "@/lib/stripe";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const { priceId } = request.body;

  if (request.method !== "POST") {
    return response
      .setHeader("Allow", "POST")
      .status(405)
      .end("Method not allowed");
  }

  if (!priceId) {
    return response.status(400).json({ error: "Price id not provided" });
  }

  const checkoutSession = await stripe.checkout.sessions.create({
    success_url: `${process.env.NEXT_URL}/checkout?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.NEXT_URL}`,
    mode: "payment",
    payment_method_types: ["card"],
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
  });

  return response.status(200).json({ checkoutUrl: checkoutSession.url });
}
