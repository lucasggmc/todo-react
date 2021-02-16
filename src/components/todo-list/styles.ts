import styled from 'styled-components'

export const ContainerCenter = styled.div`
    height: 100%;
    /* border: 1px solid red; */
    display: flex;
    /* flex-flow: row nowrap; */
    justify-content: center;
    align-items: center;
`;

export const Card = styled.div`
    //background: orange;
    width: auto;
    min-width: 300px;
    margin: 15px;
    height: 300px;

    background: #fff;
    border-radius: 4px;
    box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.5);
    //max-width: 400px;
    display: flex;
    flex-direction: row;
    border-radius: 25px;
    position: relative;
`;