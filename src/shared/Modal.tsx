import { createPortal } from "react-dom";
import { cn } from "./utils";

type ModalProps = {
  setOpen: (open: boolean) => void;
  open?: boolean;
  children: React.ReactNode;
};

type OverlayProps = {
  close: () => void;
  open?: boolean;
  children: React.ReactNode;
};

export function Overlay({ close, children, open }: OverlayProps) {
  return (
    <div
      className={cn({
        "fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center cursor-crosshair":
          true,
        "opacity-0 invisible": !open,
      })}
      onClick={close}
    >
      {children}
    </div>
  );
}

export default function Modal({ children, setOpen, open = false }: ModalProps) {
  const modalRoot = document.getElementById("modal");
  return createPortal(
    <Overlay close={() => setOpen(false)} open={open}>
      <div
        className={cn({
          "relative transition-all": true,
          "opacity-100 visible scale-100": open,
          "opacity-0 invisible scale-0": !open,
        })}
      >
        {children}
      </div>
    </Overlay>,
    modalRoot!
  );
}
