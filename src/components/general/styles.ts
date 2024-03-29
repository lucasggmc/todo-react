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
    height: 100%;
    background: var(--white);
    border-radius: 5px;
    box-shadow: 0 0 60px rgb(0 0 0 / 5%);
    padding: 1.5rem 2rem;
    
    text-align: center;

    /* width: auto;
    min-width: 300px;
    margin: 15px;
    min-height: 300px;    
    
    padding: 1.5rem;
    box-shadow: 0 0.125rem 0.25rem rgb(0 0 0 / 15%);
    border: 1px solid #f5f6fe;    
    background: #fff; */
`;

export const CircleIcon = styled.div`
    color: #74cade;
    width: 60px;
    height: 60px;
    background: #f5f6fe;
    display: inline-block;
    border-radius: 50%;
    padding-top: 15px;
`;

export const Title = styled.h4`
    color: var(--text);
    /* font-size: 1.3rem; */
    /* font-weight: bold; */
`;