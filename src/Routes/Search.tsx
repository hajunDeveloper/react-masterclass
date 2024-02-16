import { useLocation } from "react-router-dom";
import styled from "styled-components";

const Overview = styled.p`
  margin-top: 100px;
  font-size: 25px;
  width: 50%;
`;

function Search() {
    const location = useLocation();
    const keyword = new URLSearchParams(location.search).get("keyword");
    return <Overview>해당 페이지는 준비 중에 있습니다.<br/>검색한 제목은 '{keyword}'입니다.</Overview>;
}
export default Search;