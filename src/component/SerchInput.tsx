import React from 'react'
import styled from 'styled-components';
import { useEffect,useState,useRef } from 'react';

interface autoDatas {
  sickNm: string;
  growth_from_2000_to_2013: string;
  latitude:number;
  longitude:number;
  population:string;
  rank:string;
  state:string;
}

function SerchInput() {
  const [keyword, setKeyword] = useState<string>("");
    const [index,setIndex] = useState<number>(-1);
    const [keyItems, setKeyItems] = useState<autoDatas[]>([]);
    const autoRef = useRef<HTMLUListElement>(null);
    const onChangeData = (e:React.FormEvent<HTMLInputElement>) => {
    setKeyword(e.currentTarget.value);
  };

  const handleKeyArrow = (e:React.KeyboardEvent) => {
    
    const ArrowDown = "ArrowDown";
const ArrowUp = "ArrowUp";
const Escape = "Escape";
    if (keyItems.length > 0) {
      switch (e.key) {
        case ArrowDown:
          setIndex(index + 1);
          if (autoRef.current?.childElementCount === index + 1) setIndex(0);
          break;
        case ArrowUp:
          setIndex(index - 1);
          if (index <= 0) {
            setKeyItems([]);
            setIndex(-1);
          }
          break;
        case Escape:
          setKeyItems([]);
          setIndex(-1);
          break;
      }  
    } 
  }
  const fetchData = ()  =>{
    return fetch(
      `http://localhost:4000/sick`
    )
      .then((res) => res.json())
  }
  interface IsickNm {
    includes(data:string): boolean;
    sickNm?: any;
  }
  const updateData = async() => {
    const res = await fetchData();
    let sickName = res.filter((list: IsickNm) => list.sickNm.includes(keyword) === true)
                .slice(0,12);
    // console.log(b);
    setKeyItems(sickName);
  }
  useEffect(() => {
    updateData();
    },[keyword])
  return (
    <Container>
      <TitleText>
        국내 모든 임상시험 검색하고 온라인으로 참여하기
      </TitleText>
      <SerchForm>
      <SerchTextInput 
      type="text"
      placeholder="질환명을 입력해주세요."
      value={keyword} onChange={onChangeData} onKeyDown={handleKeyArrow}
      />
      
    <SerchBtn
    >검색</SerchBtn>
    </SerchForm>
    <SerchText>
    {keyword.length > 0 ? <SerchInfoText>추천 검색어</SerchInfoText>:""}
    {keyItems.length > 0 && keyword && (
      
    <AutoSearchWrap ref={autoRef}>
    {keyItems.map((search, idx) => (
      
           <AutoSearchData
           	isFocus={index === idx ? true : false}
            key={search.sickNm}
            onClick={() => {
            setKeyword(search.sickNm);
           }}
            >
              
            <a href="#">{search.sickNm}</a>
           </AutoSearchData>
          ))}
          </AutoSearchWrap>
           )}
      </SerchText>
   
    </Container>
  )}

export default SerchInput

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #D6E8FC;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

const TitleText = styled.div`
  display: flex;
  font-size: 2.5em;
  font-weight: 600;
  width: 12em;
  text-align: center;
  line-height: 1.4em;
  margin-bottom: 1em;
  margin-top: 3em;
`;

const SerchForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 70em;
  margin-bottom: 1em;
`;

const SerchText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 42em;
  border-radius: 10px;
  background-color: white;
  margin-bottom: 5em;
`;

const SerchInfoText= styled.div`
  display: flex;
  font-size: 0.8em;
  width: 12em;
  color: #919497;
  text-align: left;
  margin:2em 37em 1em 0em;
`;

const SerchTextInput = styled.input`
  background-color: white;
  width: 18em;
  height: 2.4em;
  font-size: 2em;
  border-radius: 30px 0px 0px 30px;
  border-color: white;
  text-align: center;
  border: none;
  &:hover {
    border-color: #3C7ADC;
  }
`;

const SerchBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5em;
  height: 4em;
  background-color: #3C7ADC;
  color:white;
  font-size: 1.2em;
  border-radius: 0px 30px 30px 0px;
  cursor: pointer;
  text-align: center;

  &:hover {
    background-color: #315def;
  }
`;
const AutoSearchWrap = styled.ul`
`;

const AutoSearchData = styled.li<{isFocus?: boolean}>`
  padding: 10px 8px;
  width: 48em;
  font-size: 14px;
  font-weight: bold;
  z-index: 4;
  letter-spacing: 2px;
  border-radius: 10px;
  &:hover {
    background-color: #edf5f5;
    cursor: pointer;
  }
  background-color: ${props => props.isFocus? "#edf5f5" : "#fff"};
  position: relative;
  img {
    position: absolute;
    right: 5px;
    width: 18px;
    top: 50%;
    transform: translateY(-50%);
  }
`;