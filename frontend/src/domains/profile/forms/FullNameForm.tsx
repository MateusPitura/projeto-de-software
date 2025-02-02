import { useMemo, type ReactElement } from "react";
import { z } from "zod";
import useUpdateProfileInfo from "../hooks/useUpdateProfileInfo";
import Input from "@/design-system/Form/Input";
import Modal from "@/design-system/Modal";
import { useFormContext } from "react-hook-form";
import Form from "@/design-system/Form";

const SchemaFullNameForm = z.object({
  fullName: z
    .string()
    .regex(/^[a-zA-Z\s]+$/, { message: "Nome completo inválido" }),
});

type FullNameFormInputs = z.infer<typeof SchemaFullNameForm>;

interface FullNameFormProperties {
  handleCloseModal: () => void;
  defaultValues: Partial<FullNameFormInputs>;
}

export default function FullNameForm({
  defaultValues,
  handleCloseModal,
}: FullNameFormProperties): ReactElement {
  const { mutate, isPending } = useUpdateProfileInfo<FullNameFormInputs>({
    onSuccessSubmit: handleCloseModal,
    snackbarTitle: "Nome completo atualizado com sucesso",
  });

  return (
    <Form<FullNameFormInputs>
      onSubmit={mutate}
      defaultValues={defaultValues}
      schema={SchemaFullNameForm}
    >
      <FullNameFormContent isPending={isPending} />
    </Form>
  );
}

interface FullNameFormContentProps {
  isPending: boolean;
}

function FullNameFormContent({
  isPending,
}: FullNameFormContentProps): ReactElement {
  const {
    formState: { isDirty },
  } = useFormContext();

  const primaryBtnState = useMemo(() => {
    if (isPending) return "loading";
    if (!isDirty) return "disabled";
  }, [isPending, isDirty]);

  return (
    <>
      <Modal.Body>
        <Input<FullNameFormInputs>
          name="fullName"
          label="Nome completo"
          required
        />
      </Modal.Body>
      <Modal.Footer
        labelPrimaryBtn="Alterar"
        primaryBtnState={primaryBtnState}
      />
    </>
  );
}
