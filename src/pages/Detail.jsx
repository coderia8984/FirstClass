import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { Button, DatePicker, Select, Modal } from "antd";
import { useQuery } from "react-query";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import { WechatOutlined } from "@ant-design/icons";

import * as style from "../styles/style";
import DetailFlight from "../components/DetailFlight";
import { AirportAPI } from "../axios/api";
import ChatModal from "../components/ChatModal";

function Detail() {
  const navigate = useNavigate();
  // token이 없으면 메인 화면으로 돌아가기
  useEffect(() => {
    if (!sessionStorage.getItem("RefreshToken")) {
      alert("로그인이 필요합니다.");
      navigate("/");
    }
  }, []);

  // 검색 조건 받아오기
  const { search } = useLocation();
  let searchCondition = queryString.parse(search);
  console.log(searchCondition);

  // 정렬 조건 state
  const [sortBy, setSortBy] = useState({ field: "price", by: "asc" });
  searchCondition = {
    ...searchCondition,
    ...sortBy,
  };

  // 정렬조건 select box 핸들러
  const sortByChange = (value) => {
    let newSortBy = {
      ...sortBy,
    };

    // value가 1, 2이면 시간, 3, 4이면 가격
    if (value > 2) {
      newSortBy = {
        ...newSortBy,
        field: "price",
      };
    } else {
      newSortBy = {
        ...newSortBy,
        field: "start",
      };
    }

    // value가 1, 3이면 오름차순, 2, 4이면 내림차순
    if (value % 2 === 0) {
      newSortBy = {
        ...newSortBy,
        by: "desc",
      };
    } else {
      newSortBy = {
        ...newSortBy,
        by: "asc",
      };
    }

    setSortBy(newSortBy);

    searchCondition = {
      ...searchCondition,
      ...sortBy,
    };
    // console.log(searchCondition);
  };

  // 날짜 onChange 적용 함수
  const [dataChange, setDataChange] = useState();
  const onChangeDate = (...rest) => {
    const date = rest[1].replace(/-/g, "");
    setDataChange(dataChange);

    const query = `sairport=${searchCondition.sairport}&s_id=${searchCondition.s_id}&s_code=${searchCondition.s_code}&eairport=${searchCondition.eairport}&e_id=${searchCondition.e_id}&e_code=${searchCondition.e_code}&start_datetime=${date}&people_num=${searchCondition.people_num}`;
    navigate(`/detail?${query}`);
  };

  // 채팅창 modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  // 항공편 받아오기
  let { data, isLoading, error } = useQuery(["flights", sortBy, dataChange], () =>
    AirportAPI.getFlights(searchCondition)
  );
  if (isLoading || error) {
    return <></>;
  }
  const flightData = data.data.data;
  // console.log(flightData);

  return (
    <>
      <style.DetailHeaderContainer>
        {/* 상세페이지 헤더 */}
        <style.DetailHeader>
          <style.DetailUserBox>
            <style.DetailDepartArriv>
              <span>{searchCondition.sairport}</span>
              <span>&nbsp;({searchCondition.s_code})</span>
              <span>&nbsp;→&nbsp;</span>
              <span>{searchCondition.eairport}</span>
              <span>&nbsp;({searchCondition.e_code})</span>
            </style.DetailDepartArriv>
            <style.DetailNumClass>
              <span>{searchCondition.people_num} 성인</span>
              <span>&nbsp;|&nbsp;</span>
              <span>First Class</span>
            </style.DetailNumClass>
          </style.DetailUserBox>
          <style.DetailDateBox>
            <DatePicker placeholder="떠나는 날짜" onChange={onChangeDate} />
          </style.DetailDateBox>
        </style.DetailHeader>
      </style.DetailHeaderContainer>
      {/* 상세페이지 body */}
      <style.DetailInputBox>
        <Button
          type="primary"
          icon={<WechatOutlined />}
          style={{ backgroundColor: "skyblue" }}
          onClick={showModal}
        >
          채팅창 연결
        </Button>
        <ChatModal
          title="전체 채팅방"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        />
        <Select
          defaultValue="검색조건"
          style={{
            width: 120,
          }}
          onChange={sortByChange}
          options={[
            {
              value: 1,
              label: "빠른시간",
            },
            {
              value: 2,
              label: "늦은시간",
            },
            {
              value: 3,
              label: "최저가",
            },
            {
              value: 4,
              label: "최고가",
            },
          ]}
        />
      </style.DetailInputBox>
      <style.DetailFlightContainer>
        {flightData.map((flight) => {
          return (
            <DetailFlight key={flight.flight_id} flight={flight}></DetailFlight>
          );
        })}

        {/* <DetailFlight></DetailFlight> */}
      </style.DetailFlightContainer>
    </>
  );
}

export default Detail;
