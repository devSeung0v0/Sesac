import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./sidemenu.css";

const SideMenu = () => {
  return (
    <>
      <div className="sideMenuBox">
        <ul className="info">
          <em>회원정보</em>
          <li>
            <Link to="/manage">- 회원정보관리</Link>
          </li>
          <li>
            <Link to="/changepw">- 비밀번호 변경</Link>
          </li>
        </ul>
        <ul className="info">
          <em>수강정보</em>
          <li>
            <Link to="/confirmclass">- 수강신청 확인/취소</Link>
          </li>
          <li>
            <Link to="/classlist">- 수강 내역</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SideMenu;
