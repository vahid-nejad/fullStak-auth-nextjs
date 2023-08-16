import Login from "@/components/Login";
import { Modal } from "@/components/Modal";
import React from "react";
type Props = {
  searchParams?: Record<"callbackUrl" | "error", string>;
};
const signInPageIntercepted = (props: Props) => {
  return (
    <Modal>
      <Login
        error={props.searchParams?.error}
        callbackUrl={props.searchParams?.callbackUrl}
      />
    </Modal>
  );
};

export default signInPageIntercepted;
