import { globalStyles } from "@/styles/global";
import type { AppProps } from "next/app";
import logo from "../assets/logo.svg";
import { Container, Header } from "@/styles/pages/app";
import Image from "next/image";
import { SkeletonTheme } from "react-loading-skeleton";
// funciona como container da aplicacao e eh carregado junto com qualquer pagina da aplicação
// colocar fora para nao carregar todas vezes, pois elas sao unicas e nao
globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <SkeletonTheme baseColor="#00b37e" highlightColor="#e1e1e6">
        <Header>
          <Image src={logo} alt="logo" />
        </Header>
        <Component {...pageProps} />
      </SkeletonTheme>
    </Container>
  );
}
