import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import logo from "../../assets/logo.svg";
import * as Dialog from "@radix-ui/react-dialog";
import { NewTransactionModal } from "../NewTransactionModal";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logo} alt="" />
        <Dialog.Root>
          {/* o asChild não cria um novo botão e sim aproveita o elemento filho */}
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova Transação</NewTransactionButton>
          </Dialog.Trigger>
          {/* Portal vem do react e coloca o elemento em outro local da aplicação */}
          <NewTransactionModal></NewTransactionModal>
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  );
}
