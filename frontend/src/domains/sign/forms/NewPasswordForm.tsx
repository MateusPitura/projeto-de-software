import Form from "@/design-system/Form";
import { SchemaPassword } from "@/domains/global/schemas/schemas";
import type { ReactNode } from "react";
import SignCard from "../components/SignCard";
import useSafeFetch from "@/domains/global/hooks/useSafeFetch";
import { s } from "@/domains/global/schemas";
import { useMutation } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import InputPassword from "@/design-system/Form/InputPassword";
import useSnackbar from "@/domains/global/hooks/useSnackbar";
import useSignPageContext from "../hooks/useSignPageContext";
import { BASE_URL } from "@/domains/global/constants";

type NewPasswordFormInputs = s.infer<typeof SchemaPassword>;

export default function NewPasswordForm(): ReactNode {
  const { safeFetch } = useSafeFetch();
  const { showSuccessSnackbar } = useSnackbar();
  const { handleStep } = useSignPageContext();

  const [searchParams] = useSearchParams();
  let token: string | null = null;
  if (searchParams.has("token")) {
    token = searchParams.get("token");
  }

  async function handleNewPassword(data: NewPasswordFormInputs) {
    await safeFetch(`${BASE_URL}/newPassword`, {
      method: "post",
      body: {
        password: data.newPassword,
        token,
      },
    });
  }

  const { mutate, isPending } = useMutation({
    mutationFn: handleNewPassword,
    onSuccess: () => {
      handleStep("SIGN_IN");
      showSuccessSnackbar({
        title: "Senha definida com sucesso",
        description: "Acesse com a nova senha",
      });
    },
  });

  return (
    <Form<NewPasswordFormInputs>
      defaultValues={{
        confirmPassword: "",
        newPassword: "",
      }}
      schema={SchemaPassword}
      onSubmit={mutate}
      className="flex-1 flex flex-col"
    >
      <div className="flex-1">
        <InputPassword<NewPasswordFormInputs>
          label="Nova senha"
          name="newPassword"
          required
        />
        <InputPassword<NewPasswordFormInputs>
          label="Confirmar senha"
          name="confirmPassword"
          required
        />
      </div>
      <SignCard.Footer
        label="Salvar"
        primaryBtnState={isPending ? "loading" : undefined}
      />
    </Form>
  );
}
