import Login from "@/components/Login";
import { Modal } from "@/components/Modal";
import React from "react";
interface Props {
  searchParams?: Record<"message" | "callbackUrl", string>;
}
const ModalSignInPage = (props: Props) => {
  return (
    <Modal>
      <Login message={props.searchParams?.message} callbackUrl={props.searchParams?.callbackUrl} />
    </Modal>
  );
};

export default ModalSignInPage;
