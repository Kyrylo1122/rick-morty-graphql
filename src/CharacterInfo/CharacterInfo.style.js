import styled from "styled-components";
import { TbArrowUpLeft } from "react-icons/tb";
import { Link } from "react-router-dom";
export const Return = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  color: grey;

  :hover,
  :focus {
    color: orange;
  }
`;

export const CharacterName = styled.h1`
  color: orange;
  padding: 20px 0;
`;
export const EpisodesTitle = styled.h2`
  color: Grey;
  padding: 20px 0;
`;
export const Ico = styled(TbArrowUpLeft)`
  color: inherit;
`;
