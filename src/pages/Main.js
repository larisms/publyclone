import React from "react";
import styled from "styled-components";
import Banner from "../components/Banner";

import CardList from "../components/CardList";
import Header from "../components/Header";
import SmallCardList from "../components/SmallCardList";

const Main = () => {
  return (
    <>
      <Header />
      <Banner />
      <div>main banner</div>
      <div>event banner</div>
      <ListWrap>
        <CardList />
      </ListWrap>
      <div>퍼블리 인기 top 10</div>
      <SmallCardList />
      <div>Q&A</div>
      <div>발행 예정 콘텐츠</div>
      <div>큐레이션</div>
    </>
  );
};

const ListWrap = styled.div`
  /* width: 500px; */
  height: 500px;
`;

export default Main;
