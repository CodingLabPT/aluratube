import styled from "styled-components";

export const StyledBanner = styled.img`
    width: 100%;
    height: 342px;
`;

function Banner(props) {
    return (
        <StyledBanner src={props.banner} alt="foto-perfil"></StyledBanner>
    )
  }

export default Banner