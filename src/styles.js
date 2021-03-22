import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    color: ${(props) => props.theme.mainColor};
    background-color: ${(props) => props.theme.backgroundColor}
  }
`;

const Title = styled.h1`
  text-align: center;
  color: purple;
`;

const Description = styled.h4`
  text-align: center;
`;

const ShopImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
`;

const ListWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;

  @media screen and (max-width: 1600px) {
    width: 100%;
    display: block;
    margin-bottom: 20px;
  }
`;

const ActorWrapper = styled.div`
  margin: 20px;

  img {
    width: 200px;
    height: 200px;
  }

  p {
    text-align: center;
  }
  &.actor-price {
    color: ${(props) => props.theme.pink};
  }
`;

const ThemeButton = styled.button`
  border: none;
  padding: 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  transition-duration: 0.4s;
  float: left;
  cursor: pointer;
  background-color: ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.backgroundColor};
`;

const SearchBarStyled = styled.input`
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 40%;
`;

const DetailWrapper = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;

  img {
    width: 40%;
    float: left;
  }

  p {
    vertical-align: middle;
  }
`;

const DeleteButtonStyled = styled.p`
  color: ${(props) => props.theme.red};
`;

const NavbarRow = styled.div`
  display: inline;
  float: right;
  margin-bottom: 1px;
  height: 50px;
  width: 100vw;
  background-color: ${(props) => props.theme.z};
  justify-content: space-between;
`;

const NavbarButton = styled.button`
  border: none;
  padding: 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  transition-duration: 0.4s;
  float: left;
  cursor: pointer;
  color: ${(props) => props.theme.mainColor};
  background-color: ${(props) => props.theme.backgroundColor}; /* Green */

  &:hover {
    background-color: ${(props) => props.theme.mainColor}; /* Green */
    color: ${(props) => props.theme.backgroundColor};
  }
`;

const ActorCard = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  float: left;
  width: 25%;
  padding: 0 10px;
  margin: 20px;
  text-align: center;
  color: purple;
  filter: ${(props) => props.theme.pink};
`;

const ActorImage = styled.img`
  height: 300px;
  width: 100%; ;
`;

const ActorButton = styled.button`
  border: none;
  outline: 0;
  padding: 12px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;

  &:hover {
    opacity: 0.7;
  }
`;

const ContainerWrapper = styled.div`
  margin-left: auto;
  width: 100%;
  padding-top = 10px
  `;

export {
  ActorWrapper,
  Description,
  GlobalStyle,
  ListWrapper,
  Title,
  ShopImage,
  ThemeButton,
  SearchBarStyled,
  DetailWrapper,
  DeleteButtonStyled,
  NavbarRow,
  NavbarButton,
  ActorCard,
  ActorImage,
  ActorButton,
  ContainerWrapper,
  
};
