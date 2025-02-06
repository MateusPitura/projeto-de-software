import Button from "@/design-system/Button";
import { type ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { DisableUser } from "../types/disableUser";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import useSafeFetch from "@/domains/global/hooks/useSafeFetch";
import useSnackbar from "@/domains/global/hooks/useSnackbar";
import { baseUrl } from "@/domains/global/constants/requests";
import { queryKeys } from "@/domains/global/types/queryKeys";

interface UsersTableActionsProperties {
  isActive?: boolean;
  userId: string;
  fullName: string;
  handleDisableUserInfo: (user: DisableUser) => void;
}

export default function UsersTableActions({
  fullName,
  userId,
  isActive,
  handleDisableUserInfo,
}: UsersTableActionsProperties): ReactNode {
  const navigate = useNavigate();
  const { safeFetch } = useSafeFetch();
  const { showSuccessSnackbar } = useSnackbar();
  const queryClient = useQueryClient();

  async function enableUser() {
    await safeFetch({
      path: `${baseUrl}/users/${userId}`,
      method: "PATCH",
      body: { isActive: true },
    });
  }

  const { mutate, isPending } = useMutation({
    mutationFn: enableUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [queryKeys.USERS] });
      showSuccessSnackbar({
        title: `Usuário ${fullName} ativado com sucesso`,
      });
    },
  });

  return isActive ? (
    <>
      <Button
        variant="tertiary"
        fullWidth
        label="Editar"
        onClick={() => navigate(`/users/${userId}`)}
      />
      <Button
        variant="tertiary"
        fullWidth
        label="Desativar"
        onClick={() =>
          handleDisableUserInfo({
            userName: fullName,
            userId: userId,
          })
        }
      />
    </>
  ) : (
    <Button
      variant="tertiary"
      fullWidth
      label="Ativar"
      onClick={mutate}
      state={isPending ? "loading" : undefined}
    />
  );
}
