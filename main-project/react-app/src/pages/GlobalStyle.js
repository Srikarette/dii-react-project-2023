import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0px;
}

a{
    text-decoration: none;
    color: black;
}

.main-content{
    width: 50%;
    height: 745px;
    margin: 0px 0px 0px 0px;
    /* background: bisque; */
    border-left: 2px solid black;
    border-right:2px solid black ;
    margin-right: 8%;
}
`;

export default GlobalStyle