/**
 *
 * create by liangguodong on 2018/8/24
 *
 * @flow
 */
import '../common/shirm';
import React, { Component } from 'react';
import styled from 'styled-components';
import Widget from '../consts/index';
import { px2emcss } from '../css/units';
import type { DividerType, DividerPosition } from '../css/divider';
import { getBeforePositionCSS, getAfterPositionCSS, getColor, getDashed } from '../css/divider';
const em = px2emcss(1.2);

const Divider = styled.div`
  display: table;
  white-space: nowrap;
  text-align: center;
  background: transparent;
  font-weight: 500;
  color: ${getColor};
  margin: ${em(24)} ${em(10)};
  width: 100%;
  height: ${em(1)};
  ::before {
    content: '';
    display: table-cell;
    position: relative;
    top: 50%;
    ${getBeforePositionCSS};
    border-top: ${em(1)} ${getDashed} ${getColor};
    transform: translateY(50%);
  }
  ::after {
    content: '';
    display: table-cell;
    position: relative;
    top: 50%;
    ${getAfterPositionCSS};
    border-top: ${em(1)} ${getDashed} ${getColor};
    transform: translateY(50%);
  }
`;
const VerticalDivider = styled.div`
  margin: 0 ${em(6)};
  display: inline-block;
  height: 100%;
  width: ${em(1)};
  vertical-align: middle;
  position: relative;
  background: ${getColor};
`;
const ChildText = styled.span`
  display: inline-block;
  white-space: nowrap;
  text-align: center;
  background: transparent;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.85);
  margin: 0 ${em(6)};
`;

type DividerProps = {|
  viewClass: string,
  dashed: boolean,
  position: DividerPosition,
  type: DividerType,
  content?: string,
|};

class LineBox extends Component<DividerProps, DividerState> {
  static defaultProps = {
    viewClass: Widget.Divider,
    dashed: false,
    type: 'horizontal',
  };
  static displayName = Widget.Divider;

  constructor(props: dividerProps) {
    super(props);
  }
  getChildText() {
    const { content } = this.props;
    if (content !== undefined) {
      return <ChildText>{content}</ChildText>;
    }
    return null;
  }
  getDivider() {
    const { type, position, dashed, content } = this.props;
    if (type === 'vertical') {
      return <VerticalDivider />;
    }
    return (
      <Divider dashed={dashed} position={position} content={content}>
        {this.getChildText()}
      </Divider>
    );
  }
  render() {
    return this.getDivider();
  }
}
export default LineBox;
