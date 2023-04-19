import { Button, TextInput } from "@ignite-ui/react";
import { ArrowRight } from "phosphor-react";
import { Form } from "./styles";

export const ClaimUsernameForm = () => {


//expressão regular para aceitar apenas os caracteres 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 e 12
  const regex = /^[1-12]+$/;
    


  return (
    <Form as="form">
      <TextInput size="sm" prefix="ignite.com/" placeholder="seu-usuário" />
      <Button size="sm" type="submit">
        Reservar
        <ArrowRight />
      </Button>
    </Form>

  );
};
