import React from 'react';
import * as style from '../styles/style';
import { Button, DatePicker } from 'antd';
import { useState } from 'react';
import Modal from './common/Modal';

function DetailFlight({ flight }) {
  console.log(flight);

  // 상세페이지 모달창
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <style.DetailFlightBox>
      {/* 시간 */}
      <style.DetailFlightTimeBox>
        <style.DetailTime>
          <style.DetailTimes>
            {flight.start_datetime.substring(11, 16)}
          </style.DetailTimes>
          <style.DetailAirports>
            {flight.start_airport.airport_city}
          </style.DetailAirports>
        </style.DetailTime>
        <style.DetailTravelTime>
          <style.DetailTravleDiv></style.DetailTravleDiv>
          <style.DetailTravleLine></style.DetailTravleLine>
        </style.DetailTravelTime>
        <style.DetailTime>
          <style.DetailTimes>
            {flight.end_datetime.substring(11, 16)}
          </style.DetailTimes>
          <style.DetailAirports>
            {flight.end_airport.airport_city}
          </style.DetailAirports>
        </style.DetailTime>
      </style.DetailFlightTimeBox>
      {/* 가격 & 선택하기 */}
      <style.DetailPriceSelectBox>
        <style.DetailPrices>₩ {flight.price}</style.DetailPrices>
        <div>
          <Button type='primary' size={'large'} onClick={openModal}>
            선택하기
          </Button>
          <Modal isOpen={isModalOpen} closeModal={closeModal} />
        </div>
      </style.DetailPriceSelectBox>
    </style.DetailFlightBox>
  );
}

export default DetailFlight;
