import React from 'react';
import * as style from '../../styles/style';

import { Button } from 'antd';
import { useMutation, useQueryClient } from 'react-query';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import { AirportAPI } from '../../axios/api';

function Modal({ isOpen, closeModal, flight }) {
  // 검색 조건 받아오기
  const { search } = useLocation();
  let searchCondition = queryString.parse(search);

  // 항공정보 예약 db로 데이터 보내기
  // 성공시 alert
  // 실패시 alert

  const mutation = useMutation(AirportAPI.postAirport, {
    onSuccess: (response) => {
      alert('예약 완료됐습니다!');
    },
    onError: () => alert('예약 실패!'),
  });

  const useReservationBtn = () => {
    const newReservation = {};
    mutation.mutate(newReservation);
  };

  return (
    <div style={{ display: isOpen ? 'block' : 'none' }}>
      <style.ModalContainer>
        <style.ModalListBox>
          <style.ModalDetail>
            <div>{flight.start_datetime.substring(11, 16)}</div>
            <div>{flight.start_airport.airport_city}</div>
          </style.ModalDetail>
          <style.ModalDetailTravelTime>
            <style.ModalDetailTravleLine></style.ModalDetailTravleLine>
          </style.ModalDetailTravelTime>
          <style.ModalDetail>
            <div>{flight.end_datetime.substring(11, 16)}</div>
            <div>{flight.end_airport.airport_city}</div>
          </style.ModalDetail>
        </style.ModalListBox>

        <style.ModalTotal>
          <style.ModalPersonBox>
            총 인원 : {searchCondition.people_num}
          </style.ModalPersonBox>
          <style.ModalPricesBox>
            총 합계 : {searchCondition.people_num * flight.price} 원
          </style.ModalPricesBox>
        </style.ModalTotal>

        <style.DetailButtonModal>
          <Button
            type='primary'
            size={'large'}
            onClick={useReservationBtn}
            style={{
              margin: '10px',
            }}
          >
            예약하기
          </Button>
          <Button type='primary' size={'large'} onClick={closeModal}>
            닫기
          </Button>
        </style.DetailButtonModal>
      </style.ModalContainer>
    </div>
  );
}

export default Modal;
