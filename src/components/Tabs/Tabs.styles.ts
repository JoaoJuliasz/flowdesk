import styled from 'styled-components'

export const ListContainer = styled.ul`
    display: flex;
    justify-content: space-evenly;
`

export const ListItem = styled.li<{ $selectedData?: boolean }>`
    list-style: none;
    cursor: pointer;
    color: #5c5a5a;
    text-decoration: ${props => props.$selectedData ? 'underline' : ''};
    transition: 0.3s color;
    
    &:hover {
        color: #9f9f9f;
    }
`