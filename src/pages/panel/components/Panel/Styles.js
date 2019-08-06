import styled from "styled-components";

export default styled.div`
  a:hover, a:focus {
    color: #2a6496;
    text-decoration: none;
  }

  .square-panel-block {
    position:relative;
    overflow:hidden;
    margin:15px auto;
    }
  .square-panel-block a {
    background-color: #6699FF;
    border-radius: 5px;
    display: block;
    padding: 60px 20px;
    text-align: center;
    width: 100%;
  }
  .square-panel-block a:hover{
    background-color: rgba(102, 153, 255, 0.8);
    border-radius: 5px;
  }

  .icon {
    color: #fff;
    display: inline-block;
    font-size: 28px;
    margin: 0 0 20px;
  }

  h2.title {
    color: #fff;
    font-size: 20px;
    font-weight: 200;
    margin:0;
    padding:0;
    text-transform: uppercase;
  }
`;