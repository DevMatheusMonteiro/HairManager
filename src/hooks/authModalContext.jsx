import { createContext, useState, useContext } from "react";
import { AuthModal } from "../components/AuthModal";
import { useAuth } from "./authContext";

const AuthModalContext = createContext();

export function AuthModalProvider({ children }) {
  const { user } = useAuth();
  const [openDialog, setOpenDialog] = useState(false);
  const [openLoginForm, setOpenLoginForm] = useState(false);
  const [openRegisterForm, setOpenRegisterForm] = useState(false);
  const [openRoleSelection, setOpenRoleSelection] = useState(false);
  const [chosenRole, setChosenRole] = useState("customer");

  return (
    <AuthModalContext.Provider
      value={{
        openDialog,
        setOpenDialog,
        openRegisterForm,
        setOpenRegisterForm,
        openLoginForm,
        setOpenLoginForm,
        openRoleSelection,
        setOpenRoleSelection,
        chosenRole,
        setChosenRole,
      }}
    >
      {children}
      {!user && (
        <AuthModal
          openDialog={openDialog}
          setOpenDialog={setOpenDialog}
          openLoginForm={openLoginForm}
          setOpenLoginForm={setOpenLoginForm}
          openRegisterForm={openRegisterForm}
          setOpenRegisterForm={setOpenRegisterForm}
          openRoleSelection={openRoleSelection}
          setOpenRoleSelection={setOpenRoleSelection}
          chosenRole={chosenRole}
          setChosenRole={setChosenRole}
        />
      )}
    </AuthModalContext.Provider>
  );
}

export function useAuthModal() {
  return useContext(AuthModalContext);
}
