import styled from 'styled-components';

export const BackgroundColor = styled.div`
    background-color: #1F2328;
    height: 100vh;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const BoxContainer = styled.ul`
    list-style: none;
    max-width: 300px;
    width: 100%;
    display: grid;
    grid-template-columns: 3fr 3fr 3fr;
    text-align: center;
    gap: 3px;
    margin: 10px;
`
export const BoxItems = styled.li`
    background-color: ${props => props.color ? 'green' : '#F6F8FA'};
    padding: 2rem;
    border-radius: 2px;
    cursor: pointer;
`;
