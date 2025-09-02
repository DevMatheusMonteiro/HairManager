import { Dialog } from "../Dialog";
import { LoginForm } from "../LoginForm";
import { RegistrationForm } from "../RegistrationForm";
import { RoleSelectionButtons } from "../RoleSelectionButtons";
import { useEffect } from "react";

export function AuthModal({
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
}) {
  function handleCloseDialog() {
    openLoginForm && setOpenLoginForm(false);
    openRegisterForm && setOpenRegisterForm(false);
    openRoleSelection && setOpenRoleSelection(false);
    setOpenDialog(false);
  }

  function handleOpenLoginForm() {
    !openDialog && setOpenDialog(true);
    setOpenLoginForm(true);
    openRegisterForm && setOpenRegisterForm(false);
  }

  function handleOpenRegistrationForm() {
    !openDialog && setOpenDialog(true);
    setOpenRegisterForm(true);
    openRoleSelection && setOpenRoleSelection(false);
  }

  function handleOpenRoleSelection() {
    !openDialog && setOpenDialog(true);
    setOpenRoleSelection(true);
    openLoginForm && setOpenLoginForm(false);
  }

  useEffect(() => {
    openLoginForm && handleOpenLoginForm();
    openRoleSelection && handleOpenRoleSelection();
    openRegisterForm && handleOpenRegistrationForm();
  }, [openLoginForm, openRoleSelection, openRegisterForm]);

  return (
    <Dialog open={openDialog} onClose={handleCloseDialog}>
      <LoginForm
        open={openLoginForm}
        onClose={handleCloseDialog}
        handleOpenRegistrationForm={handleOpenRoleSelection}
      />
      <RegistrationForm
        open={openRegisterForm}
        onClose={handleCloseDialog}
        handleOpenLoginForm={handleOpenLoginForm}
        role={chosenRole}
      />
      <RoleSelectionButtons
        setRole={setChosenRole}
        open={openRoleSelection}
        handleOpenRegistrationForm={handleOpenRegistrationForm}
        onClose={handleCloseDialog}
      />
    </Dialog>
  );
}
