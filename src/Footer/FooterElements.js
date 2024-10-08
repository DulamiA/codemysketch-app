import styled from 'styled-components';

export const Box = styled.div`
  background: #20232A;
  position: absolute;
  width: 100%;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
    /* background: red; */
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 
                         minmax(185px, 1fr));
  grid-gap: 20px;
   
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, 
                           minmax(200px, 1fr));
  }
`;

export const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 10px;
  text-decoration: none;
  cursor: pointer;
  font-size: 13px;
   
  &:hover {
      color: #9EE493;
      transition: 200ms ease-in;
  }
`;
   
export const Heading = styled.p`
  font-size: 15px;
  color: #fff;
  margin-bottom: 20px;
  margin-top: 40px;
  font-weight: bold;
`;