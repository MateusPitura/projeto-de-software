import Button, { ButtonState } from "@/design-system/Button";
import useButtonState from "@/domains/global/hooks/useButtonState";
import { Childrenable } from "@/domains/global/types/components";
import { type ReactNode } from "react";

interface ContainerProps extends Childrenable {
  title: string;
}

function Container({ title, children }: ContainerProps): ReactNode {
  return (
    <div className="w-[23rem] h-[41rem] bg-light-surfaceContainerLowest px-4 py-8 flex flex-col gap-8 rounded-md">
      <span className="text-headline-large text-light-onSurface text-center">
        {title}
      </span>
      {children}
    </div>
  );
}

interface ButtonProps {
  label: string;
  variant?: "primary" | "secondary";
  primaryBtnState?: ButtonState;
}

function Footer({
  label,
  variant = "primary",
  primaryBtnState,
}: ButtonProps): ReactNode {
  const primaryBtnStateParsed = useButtonState({
    buttonState: primaryBtnState,
  });

  return (
    <Button
      label={label}
      textAlign="center"
      variant={variant}
      state={primaryBtnStateParsed}
      fullWidth
      type="submit"
    />
  );
}

const SignCard = Object.assign(Container, { Footer });

export default SignCard;
