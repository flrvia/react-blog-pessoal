import { Button, createStyles, makeStyles, Theme } from "@material-ui/core";
import { Box, Modal } from "@mui/material";
import React from "react";
import { useState } from "react";
import CloseIcon from "@material-ui/icons/Close";

import CadastroPost from "../cadastroPost/CadastroPost";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: "absolute",
      width: 600,
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  })
);

function ModalPostagem() {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  // function abreModal() {
  //   setOpen(true)
  // }

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <Box display="flex" justifyContent="flex-end" className="cursor">
        <CloseIcon onClick={handleClose}/>
      </Box>

      <CadastroPost />
    </div>
  );

  return (
    <>
      <Button 
      onClick={handleOpen} 
      variant="contained" >
        Nova Postagem
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </>
  );
}

export default ModalPostagem;
