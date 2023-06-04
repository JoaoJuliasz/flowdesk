import styled from 'styled-components'

export const CurrencyContainer = styled.div`
    display: flex;
    align-items: center;
`

export const SelectContainer = styled.div`
    min-width: 250px;
    text-align: left;
`

export const SubmitBtn = styled.a `
    margin: 0px 7px;
    cursor: pointer;
    color: #747070;
    transition: 0.3s color;

    &:hover {
        color: #aba1a1;
    }
`