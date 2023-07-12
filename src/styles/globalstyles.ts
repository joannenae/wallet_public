import { css } from "@emotion/react";

export const globalStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-size: 62.5%;
  }
  :where(.css-dev-only-do-not-override-ixblex).ant-tabs .ant-tabs-tab {
    font-size: 3.5rem;
  }
  :where(.css-dev-only-do-not-override-ixblex).ant-tabs
    .ant-tabs-tab
    + .ant-tabs-tab {
    margin: 0 0 0 300px;
  }
  :where(.css-dev-only-do-not-override-ixblex).ant-tabs
    > .ant-tabs-nav
    .ant-tabs-nav-wrap {
    justify-content: center;
  }

  :where(.css-dev-only-do-not-override-ixblex).ant-steps
    .ant-steps-item-process
    .ant-steps-item-icon
    > .ant-steps-icon {
    color: #fff;
    font-size: 18px;
  }

  :where(.css-dev-only-do-not-override-ixblex).ant-steps
    .ant-steps-item-wait
    .ant-steps-item-icon
    > .ant-steps-icon {
    color: rgba(0, 0, 0, 0.65);
    font-size: 18px;
  }

  .anticon {
    display: inline-block;
    color: inherit;
    font-style: normal;
    font-size: 25px;
    line-height: 0;
    text-align: center;
    text-transform: none;
    vertical-align: -0.125em;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }

  :where(.css-dev-only-do-not-override-ixblex).ant-btn {
    font-size: 21px;
    height: 40px;
    padding: 0px 15px 15px 15px;
    padding-bottom: 20px;
    border-radius: 6px;
  }

  //
  :where(.css-dev-only-do-not-override-ixblex).ant-select-single:not(
      .ant-select-customize-input
    )
    .ant-select-selector {
    width: 100%;
    height: 30px;
    padding: 0 11px;
    border: 1px solid gray;
  }
  :where(.css-dev-only-do-not-override-ixblex).ant-select .ant-select-arrow {
    display: flex;
    align-items: flex-start;
    color: rgba(0, 0, 0, 0.25);
    font-style: normal;
    line-height: 1;
    text-align: center;
    text-transform: none;
    vertical-align: -0.125em;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    position: absolute;
    top: 45%;
    inset-inline-start: auto;
    inset-inline-end: 11px;
    height: 12px;
    margin-top: -6px;
    font-size: 12px;
    pointer-events: none;
    width: 6%;
    /* border: 1px solid red; */
  }
  .ant-select-selection-item {
    font-size: 1.5rem;
    text-align: left;
    line-height: 25px;
  }
  .ant-select-selection-placeholder {
    font-size: 1.3rem;
  }
  .ant-select-item-option-content {
    font-size: 1.4rem;
  }
  .ant-select-show-search:where(
      .css-dev-only-do-not-override-ixblex
    ).ant-select:not(.ant-select-customize-input)
    .ant-select-selector
    input {
    cursor: auto;
    font-size: 1.4rem;
    color: inherit;
  }
  // tab
  :where(.css-dev-only-do-not-override-ixblex).ant-tabs .ant-tabs-tab {
    font-size: 2.6rem;
  }
  :where(.css-dev-only-do-not-override-ixblex).ant-tabs
    .ant-tabs-tab
    + .ant-tabs-tab {
    margin: 0 0 0 100px;
  }
  // radio
  :where(.css-dev-only-do-not-override-ixblex).ant-radio-wrapper
    span.ant-radio
    + * {
    font-size: 1.5rem;
    padding-inline-start: 8px;
    padding-inline-end: 8px;
  }
  @font-face {
    font-family: "globalfont";
    src: url("/font/Raleway-VariableFont_wght.ttf");
  }
  // antd select placeholder fontsize
  .css-1jqq78o-placeholder {
    grid-area: 1/1/2/3;
    color: hsl(0, 0%, 50%);
    margin-left: 2px;
    margin-right: 2px;
    box-sizing: border-box;
    font-size: 13px;
  }
  // ----
`;
