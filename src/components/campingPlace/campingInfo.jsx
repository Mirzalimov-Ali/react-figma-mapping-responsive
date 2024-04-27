import React from 'react'
import { campingPlace } from '../mock/campingPlace';
import { useParams } from 'react-router-dom';
import { CampingInfoContainer, CampingInfoImages, CampingInfoImgWrapper, CampingInfoLineItem, CampingInfoLineOne, CampingInfoLocationWrapper, CampingInfoMap, CampingInfoNameWrapper } from './style';

import campingImg1 from '../../assets/camping-places-1.webp'
import campingImg2 from '../../assets/camping-places-2.jpeg'
import campingImg3 from '../../assets/camping-places-3.jpg'
import campingImg4 from '../../assets/camping-places-4.jpg'
import campingImg5 from '../../assets/camping-places-5.webp'
import campingImg6 from '../../assets/camping-places-6.webp'

import locationIcon from '../../assets/location-icon.png'
import timeIcon from '../../assets/time-icon.png'
import phoneIcon from '../../assets/phone-icon.png'
import homeIcon from '../../assets/home-icon.png'

import map from '../../assets/map2.png'

import Snackbar from '@mui/joy/Snackbar';

function CampingInfo() {
  const { id } = useParams();
  const data = campingPlace.maindata.find((value) => value.id === parseInt(id));

  const [open, setOpen] = React.useState(false);
  const [variant, setVariant] = React.useState('outlined');

  const handleCopy = () => {
    const mapData = data.campingPlace.location;
    navigator.clipboard.writeText(mapData)
      .then(() => {
        setOpen(true);
        setVariant('plain');
      })
      .catch((error) => {
        alert("something went wrong")
      });
  };

  return ( 
    <CampingInfoContainer>
        <div style={{display: "flex", flexDirection: "column", alignItems: "start"}}>
            <CampingInfoImgWrapper>
                <CampingInfoImages src={campingImg1}/>
                <CampingInfoImages src={campingImg2}/>
                <CampingInfoImages src={campingImg3} $mobileNone/>
                <CampingInfoImages src={campingImg4} $tabletNone/>
                <CampingInfoImages src={campingImg5} $tabletNone/>
                <CampingInfoImages src={campingImg6} $tabletNone/>
            </CampingInfoImgWrapper>
            <CampingInfoNameWrapper>
                <h2>{data.campingPlace.name}</h2>
                <CampingInfoLocationWrapper>
                    <p style={{color: "blue", fontWeight: "500"}}>{data.campingPlace.location}</p>
                    <button onClick={handleCopy} style={{cursor: "pointer", background: "none", border: "1px solid #FF7A00", color: "#FF7A00", padding: "3px 13px", borderRadius: "6px"}}>Copy map</button>
                </CampingInfoLocationWrapper>
            </CampingInfoNameWrapper>
            <CampingInfoLineOne>
                <CampingInfoLineItem><img src={locationIcon} alt="" /><p style={{fontSize: "14px", opacity: "0.7"}}>{data.campingPlace.city}</p></CampingInfoLineItem>
                <CampingInfoLineItem><img src={timeIcon} alt="" /><p>from <span style={{color: "#FF7A00"}}>{data.campingPlace.working_hour.from}</span> to <span style={{color: "#FF7A00"}}>{data.campingPlace.working_hour.to}</span></p></CampingInfoLineItem>
            </CampingInfoLineOne>
            <CampingInfoLineOne $short>
                <CampingInfoLineItem><img src={phoneIcon} alt="" /><p style={{fontSize: "14px", opacity: "0.7"}}>{data.campingPlace.phone_number}</p></CampingInfoLineItem>
                <CampingInfoLineItem><img src={homeIcon} alt="" /><p style={{color: "blue"}}>{data.campingPlace.home_page}</p></CampingInfoLineItem>
            </CampingInfoLineOne>
            <div style={{marginTop: "20px"}}>
                <p style={{marginBottom: "10px", color: "blue"}}>Description</p>
                <p style={{fontSize: "14px"}}>{data.campingPlace.description}</p>
            </div>
            <CampingInfoMap src={map} alt="" style={{marginTop: "30px"}}/>
        </div>

        <Snackbar autoHideDuration={1000} color='success' open={open} variant={variant}onClose={(event, reason) => {if (reason === 'clickaway') {return;}setOpen(false);}}>Copied!</Snackbar>
    </CampingInfoContainer>
  )
}

export default CampingInfo
