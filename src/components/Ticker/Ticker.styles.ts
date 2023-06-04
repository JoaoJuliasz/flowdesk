import styled from "styled-components";

export const TickerContainer = styled.div`
    margin: 0px auto;
    border-radius: 5px;
    padding: 1px 1rem;
    background: #fff;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
`

export const TickerItem = styled.div`
    display: flex;
    padding: 3px 0px;
    align-items: center;
    border-right: 1px;
`

export const TickerKey = styled.h4 `
    color: #3d3d3d;
`

export const TickerValue = styled.h3`
    margin-left: 7px;
    color: #686464;
    font-size: 18px;
`