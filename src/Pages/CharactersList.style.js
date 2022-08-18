import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { MutatingDots } from "react-loader-spinner";

export const CardItem = styled.li`
  transform: scale(1);
  transition: transform 300ms ease-in-out;
  padding: 15px;
  width: 200px;
  :hover,
  :focus {
    transform: scale(1.1);
    box-shadow: 0px 0px 16px -3px rgba(66, 68, 90, 1);
  }
`;
export const CardLink = styled(NavLink)`
  text-decoration: none;
  color: grey;
`;
export const CardImg = styled.img`
  width: 100%;
  border-radius: 3px;
`;
export const BtnItem = styled.li`
  :not(:last-child) {
    margin-right: 15px;
  }
`;

export const Btn = styled.button`
  display: flex;
  justify-content: center;
  background-color: transparent;
  border: 1px solid grey;
  padding: 15px;
  border-radius: 4px;
  :focus,
  :hover {
    background-color: orange;
    color: white;
  }
`;
export const Load = styled(MutatingDots)`
  width: 300px;
  height: 300px;
`;
