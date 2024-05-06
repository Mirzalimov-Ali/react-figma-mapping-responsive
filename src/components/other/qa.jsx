import React, { useRef, useState } from 'react'
import { QaContainer, QaLeft, QaLeftBox, QaRight, QaRightButton, QaRightInput } from '../../caravanStyle'
import emailjs from '@emailjs/browser';

import Snackbar from '@mui/joy/Snackbar';
import PlaylistAddCheckCircleRoundedIcon from '@mui/icons-material/PlaylistAddCheckCircleRounded';

function Qa() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_z6chytp', 'template_2zrkofn', form.current, {
        publicKey: 'd1zNbVrvDH_XPfMWr',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  const [open, setOpen] = useState(false);

  return (
    <QaContainer>
      <QaLeft>
        <QaLeftBox>
          <p>Name</p>
          <h4>Question Lorem ipsum dolor sit amet ?</h4>
        </QaLeftBox>
        <QaLeftBox>
          <p>Name</p>
          <h4>Question Lorem ipsum dolor sit amet ?</h4>
        </QaLeftBox>
        <QaLeftBox>
          <p>Name</p>
          <h4>Question Lorem ipsum dolor sit amet ?</h4>
        </QaLeftBox>
      </QaLeft>

      <QaRight>
        <h2>Send a question</h2>
        <form action="#" ref={form} onSubmit={sendEmail}>
          <QaRightInput type='text' placeholder='your name' name='user_name'/>
          <QaRightInput type='email' placeholder='your email' name='user_email'/>
          <QaRightInput type='text' placeholder='your question' style={{height: "100px"}} name='message'/>
          <QaRightButton onClick={() => setOpen(true)}>Send question</QaRightButton>
        </form>
      </QaRight>
      <Snackbar
        autoHideDuration={1100}
        variant="soft"
        color="success"
        open={open}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        startDecorator={<PlaylistAddCheckCircleRoundedIcon />}
      >
        Your message was sent successfully.
      </Snackbar>
    </QaContainer>
  )
}

export default Qa
