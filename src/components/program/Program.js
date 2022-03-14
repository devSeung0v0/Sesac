import './program.css';

import React, {useState} from "react";

import MainBanner from '../../components/main/MainBanner';
import MainContents from '../../components/main/MainContents';

import "swiper/css"; 
import "swiper/css/navigation";
import "swiper/css/pagination";
import '../../components/main/main.css';

function Program(){
    // 강의 날짜 변경 버튼
    const onIncrease = () => {
        setMonth(month + 1);
    }
    const onDecrease = () => {
        setMonth(month - 1);
    }

    const [month, setMonth] = useState(1); /* if문 작성해둔거 복붙 */ 

    return(
        <div className="wrapper inner-box">
            <MainBanner />
            <div className="tableSection">
                <h2 className='mainTitle'>월간교육일정</h2>
                <p className='subTitle'>엑스퍼트 아카데미 교육 프로그램의 월간 교육과정을 알려드립니다.</p>
                <div className="top">
                    <button className='downloadBtn'>
                        공개교육 연간일정표 다운로드
                    </button>
                    <div className='date'>
                        <button className='btnPrev' onClick={onDecrease}>prev</button>
                        <h3>2022년 {month}월</h3>
                        <button className='btnNext' onClick={onIncrease}>next</button>
                    </div>
                    <input type="text" placeholder="Search" className="searchBox focus" />
                </div>
                <table>
                    <thead>
                        <tr>
                        <th>
                            구분
                        </th>
                        <th>
                            과정명
                        </th>
                        <th>
                            기간/시간
                        </th>
                        <th>
                            일정
                        </th>
                        <th>
                            교육비
                        </th>
                        <th>
                            교육장소
                        </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th>
                            계층교육
                        </th>
                        <td>
                            사내강사 양성과정
                        </td>
                        <td>
                            1DAY 8H
                        </td>
                        <td>
                            1.19~1.20
                        </td>
                        <td>
                            290,000원
                        </td>
                        <td>
                            송파러닝센터
                        </td>
                        </tr>
                        <tr>
                        <th>
                            DX교육
                        </th>
                        <td>
                            사내강사 양성과정
                        </td>
                        <td>
                            1DAY 8H
                        </td>
                        <td>
                            1.19
                        </td>
                        <td>
                            290,000원
                        </td>
                        <td>
                            비대면 교육
                        </td>
                        </tr>
                        <tr>
                        <th>
                            직무역량
                        </th>
                        <td>
                            사내강사 양성과정
                        </td>
                        <td>
                            1DAY 8H
                        </td>
                        <td>
                            1.20
                        </td>
                        <td>
                            290,000원
                        </td>
                        <td>
                            문정러닝센터
                        </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="listSection">
                <h2 className='mainTitle'>계층교육</h2>
                <p className='subTitle'>임원, 팀장, 중간관리자, 주니어, 신입사원들을 위한 계층별 교육</p>
                <ul className="btn">
                    <li><a href="#">대면교육</a></li>
                    <li><a href="#">비대면 교육</a></li>
                    <li><a href="#">과정문의</a></li>
                </ul>
                <MainContents />
            </div>
        </div>
    )
}

export default Program;