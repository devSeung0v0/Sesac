import React from "react";
import "./OrderPage.css";
import "./OrderPages.css";
import OrderPages from "./OrderPages";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SendPage from "./SendPages/SendPages.jsx";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./OrderPages.css";

function OrderPage() {
  const [ProductData, setProductData] = useState([
    "엑공박스 베이직",
    "엑공박스 프리미엄",
    "엑공박스 골드프리미엄",
  ]);
  const [value, setValue] = useState([60000, 70000, 80000]);
  const [quantity, setQuantity] = useState(0);
  const [totalNumber, settotalNumber] = useState([10, 20, 30]);
  const [totalPrice, settotalPrice] = useState("0");
  /* const caculator = 20000; */
  let [HowMuch, setHowmuch] = useState();
  return (
    <div className='orderPage-contents inner-box'>
      <div className='orderPage-left'>
        <h3 className='orderPage-h3'>
          <b>HR샵</b>
        </h3>
        <span className='orderPage-span'>
          __교육에 필요한 옵션 및 상품정보를 제공합니다.
        </span>
        <OrderPages />
        <div className='orderPage-infoBtn'>
          <button className='btn-type1 small'>
            <span>상세정보</span>
          </button>
          <button className='btn-type2 small'>
            <span>반품/교환정보</span>
          </button>
        </div>
      </div>
      <div className='orderPage-right'>
        <div className='shareBtn'>
          <button>공유</button>
        </div>

        <div className='orderInfo'>
          <h2 className='orderPage-h2'>{ProductData[0]}</h2>
          <p className='orderPage-p'>{value[0]}원</p>
          <input
            className='orderPage-input'
            type='text'
            placeholder='요청사항을 입력해주세요'
          ></input>
          <div class='c-inp-select-box'>
            <p className='orderPage-p'>배송여부</p>
            <select className='OrderPage-select'>
              <option>선택해주세요</option>
              <option>개별배송</option>
              <option>일반배송</option>
              <option>현장지급</option>
            </select>
          </div>
          <p className='alertMsg'>
            배송형태에 따라 추가비용이 발생할 수 있습니다.
          </p>
          <button
            className='plusMinusBtn'
            onClick={() => setQuantity(quantity + 1)}
          >
            <span>+</span>
          </button>
          {quantity}
          <button
            className='plusMinusBtn'
            onClick={() => setQuantity(quantity - 1)}
          >
            <span>-</span>
          </button>
          <div className='totalInfo'>
            <dt>
              <dd>총 수량 {totalNumber[0]}개</dd>
              <dd>총{totalPrice}원</dd>
            </dt>
          </div>
          <div className='C-btn-box orderPage-infoBtn'>
            <button className='btn-type1 small'>
              <span>문의하기</span>
            </button>
            <Link to='./sendpage'>
              <button className='btn-type2 small'>
                <span>주문하기</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default OrderPage;
