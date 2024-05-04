import React, { useEffect, useRef } from 'react'
import { QaContainer, QaLeft, QaLeftBox, QaRight, QaRightButton, QaRightInput } from '../../caravanStyle'
import emailjs from '@emailjs/browser';

import Select, { selectClasses } from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';

import Snackbar from '@mui/joy/Snackbar';
import PlaylistAddCheckCircleRoundedIcon from '@mui/icons-material/PlaylistAddCheckCircleRounded';

import map from '../../assets/map.png'

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_z6chytp', 'template_sv3fzqj', form.current, {
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

  const new_script = (src) => {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = src;
      script.addEventListener("load", () => {
        resolve();
      });
      script.addEventListener("error", (e) => {
        reject(e);
      });
      document.head.appendChild(script);
    });
  };

  useEffect(() => {
    const my_script = new_script(
      "https://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=0da75fa5139aaadb4ac44031067aee4b"
    );
    my_script.then(() => {
      console.log("script loaded!!!");
      const kakao = window["kakao"];
      kakao.maps.load(() => {
        const mapContainer = document.getElementById("map");
        const options = {
          center: new kakao.maps.LatLng(35.88419, 128.88419),
          level: 3,
        };
        const map = new kakao.maps.Map(mapContainer, options);

        const markerPositions = [new kakao.maps.LatLng(35.88419, 128.88419)];

        markerPositions.forEach((position) => {
          const marker = new kakao.maps.Marker({
            position: position,
          });
          marker.setMap(map);
        });
      });
    });
  }, []);

  const [open, setOpen] = React.useState(false);

  return (
    <QaContainer>
      <div style={{display: 'flex', flexDirection: 'column', gap: "20px"}}>
        {/* <img src={map} alt="" width={"100%"}/> */}
        <div id="map" className="map" style={{height: "350px", marginTop: "0px"}}/>
        <div style={{display:'flex', gap: "30px"}}>
          <div style={{padding: "20px", boxShadow: "0px 10px 40px -20px", width: "50%", borderRadius: "10px"}}>
            <p style={{fontSize: "13px"}}>Phone number:</p>
            <p style={{fontWeight: "500"}}>+7 237 181 181</p>
            <p style={{fontWeight: "500"}}>+7 210 181 181</p>
          </div>
          <div style={{padding: "20px", boxShadow: "0px 10px 40px -20px", width: "50%", borderRadius: "10px"}}>
            <p style={{fontSize: "13px"}}>E - mail:</p>
            <p style={{fontWeight: "500"}}>logo.uz</p>
          </div>
        </div>
      </div>

      <QaRight>
        <h2>Have you got a question</h2>
        <form action="#" ref={form} onSubmit={sendEmail}>
          <QaRightInput type='text' placeholder='your name' name='user_name'/>
          <QaRightInput type='email' placeholder='your email' name='user_email'/>
          <QaRightInput type='text' placeholder='your phone' name='user_phone'/>
          <QaRightInput type='text' placeholder='your address' name='user_address'/>
          <Select placeholder="Select" name='user_cause' indicator={<KeyboardArrowDown />} sx={{border: "1px solid blue", width: "100%", marginBottom: "10px", [`& .${selectClasses.indicator}`]: {transition: '0.2s',[`&.${selectClasses.expanded}`]: {transform: 'rotate(-180deg)',},},}}>
            <Option value="to-buy">To buy</Option>
            <Option value="idea">Idea</Option>
            <Option value="collaboration">Collaboration</Option>
          </Select>  
          <QaRightInput type='text' placeholder='your question' style={{height: "100px"}} name='user_question'/>
          <QaRightButton onClick={() => setOpen(true)}>Send question</QaRightButton>
        </form>
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
      </QaRight>

    </QaContainer>
  )
}

export default Contact