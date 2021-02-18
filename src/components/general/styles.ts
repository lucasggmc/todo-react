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
    width: auto;
    min-width: 300px;
    margin: 15px;
    height: 300px;
    
    padding: 1.5rem;
    box-shadow: 0 0.125rem 0.25rem rgb(0 0 0 / 25%);
    border: 1px solid #f5f6fe;    
    background: #fff;
`;