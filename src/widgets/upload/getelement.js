/*
 *create by LYQ
 *
 *2018-12-04
 *
 *@flow
 *
 */
import React from 'react';
import Icon from '../icon';
import styled, { keyframes } from 'styled-components';
import Progress from '../progress';
import FileInput from './fileInput';
import { px2emcss } from '../css/units';
import { isKeyInArray } from './upload';
import addEventListener from 'rc-util/lib/Dom/addEventListener';
import colorsFunc from '../css/stateColor';
const { disableColor } = colorsFunc();

const em = px2emcss(1.2);

const Container = styled.div`
  width: ${props => (props.theme.width ? props.theme.width : '366px')};
  position: relative;
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const InputContent = styled.div`
  width: ${props => (props.theme.width ? props.theme.width : '346px')};
  height: 30px;
  border: 1px solid #e8e8e8;
  border-radius: 4px;
  color: #ccc;
  padding: 0 0 0 10px;
  line-height: 30px;
  overflow: hidden;
  box-sizing: border-box;
  position: relative;
  &.done {
    border: 1px solid #684fff;
    color: #333;
    position: relative;
    & i {
      transform: translateY(-50%);
      position: absolute;
      top: 50%;
      right: 10px;
    }
  }
  &.loading {
    border: 1px solid #684fff;
    & .loadIcon {
      margin-right: 10px;
      color: #684fff;
      animation: ${rotate} 0.8s linear infinite;
    }
  }
  &.hasBtn {
    border-radius: 4px 0 0 4px;
    border: 1px solid #9482ff;
    width: 286px;
  }
  &.disabled {
    border: 1px solid #e8e8e8;
    width: 286px;
    cursor: not-allowed;
  }
  & i.right {
    transform: translateY(-50%);
    position: absolute;
    top: 50%;
    right: 10px;
  }
  & i.success {
    color: #56c22d;
  }
  & i.error {
    color: #f22735;
  }
`;

const LoadIcon = styled(Icon)`
  &.loadIcon {
    margin-right: 10px;
  }
`;

const Button = styled.span`
  width: 60px;
  height: 30px;
  background: #684fff;
  display: inline-block;
  float: right;
  text-align: center;
  color: #fff;
  line-height: 30px;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  &.disabled {
    background: ${disableColor};
    color: #ccc;
    cursor: not-allowed;
  }
  &.loading {
    background: #9482ff;
  }
  & .loadIcon {
    animation: ${rotate} 0.8s linear infinite;
  }
  &.button {
    width: 100px;
    border-radius: 4px;
  }
`;

const Ul = styled.ul`
  width: 100%;
`;
const Li = styled.li`
  height: 36px;
  border-bottom: 1px dashed #e8e8e8;
  position: relative;
  padding-left: 5px;
  &.fail {
    color: #f22735;
  }
  &.loading {
    border-bottom: none;
  }
  & i.success {
    color: #56c22d;
  }
  & i.error {
    color: #f22735;
  }
  & > span {
    line-height: 36px;
  }
  & .progress {
    margin-top: -10px;
  }
  & i.right {
    transform: translateY(-50%);
    position: absolute;
    top: 50%;
    right: 10px;
  }

  & i.ccc {
    color: #ccc;
    vertical-align: middle;
    margin-right: 5px;
    font-size: 14px;
  }
  & i.close {
    color: #ccc;
    display: none;
  }
  &:hover {
    background: #f2f2f2;
    i.close {
      display: block;
      font-size: 14px;
    }
    i.error,
    i.success {
      display: none;
    }
  }
`;

const Size = {
  bigger: {
    width: 300,
    height: 150,
    fontSize: 50,
  },
  large: {
    width: 100,
    height: 100,
    fontSize: 30,
  },
  default: {
    width: 80,
    height: 80,
    fontSize: 20,
  },
  small: {
    width: 60,
    height: 60,
    fontSize: 16,
  },
};

function fetchSize(sizeType: string) {
  const size = Size[sizeType];
  return {
    height: `${em(size.height)}`,
    width: `${em(size.width)}`,
    fontSize: `${em(size.fontSize)}`,
  };
}

const getPictureViewSizeCSS = (props: Object) => {
  const { size = 'default' } = props;
  const { height, width } = fetchSize(size);
  return `
    height: ${height};
    width: ${width};
  `;
};

const getPictureViewIconSizeCSS = (props: Object) => {
  const { size = 'default' } = props;
  const { fontSize } = fetchSize(size);
  return `
    font-size: ${fontSize};
  `;
};

const PictureView = styled.div`
  border: 1px dashed #999;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding: 6px;
  &.disabled {
    background: ${disableColor};
    color: #ccc;
    cursor: not-allowed;
  }
  &.done {
    border: 1px dashed #684fff;
  }
  &.fail {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #666;
  }

  ${getPictureViewSizeCSS}
  & i {
    font-size: 30px;
    color: #999;
    ${getPictureViewIconSizeCSS}
  }
  & img {
    width: 100%;
  }
  &.disabled i {
    cursor: not-allowed;
  }
`;

const AreaView = styled.div`
  border: 1px dashed #999;
  border-radius: 4px;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: space-around;
  ${getPictureViewSizeCSS}
  & i {
    font-size: 30px;
    color: #999;
    ${getPictureViewIconSizeCSS}
  }
  &.disabled {
    background: ${disableColor};
    color: #ccc;
    cursor: not-allowed;
  }
  &.disabled i {
    cursor: not-allowed;
  }
`;
const AreaText = styled.div`
  width: 100%;
  font-size: 14px;
  text-align: center;
  margin-top: 24px;
`;
const AreaTextBlue = styled.span`
  font-size: 14px;
  color: #684fff;
  padding: 0 4px;
  border-bottom: 1px solid #684fff;
  .disabled & {
    color: #ccc;
    border-bottom: none;
  }
`;

export const getListIconType = (fileName: ?string): string => {
  if (!fileName) return 'file';
  const filetype = fileName.replace(/.+\./, '');
  const picArr = ['jpg', 'png', 'jpeg', 'gif', 'svg', 'bmp'];
  if (isKeyInArray(picArr, filetype.toLowerCase())) return 'picture';
  const videoArr = ['mpeg', 'avi', 'mov', 'asf', 'wmv', '3gp', 'mkv', 'flv', 'rmvb', 'mp4'];
  if (isKeyInArray(videoArr, filetype.toLowerCase())) return 'video';
  return 'file';
};

export const getIconByType = (status: ?string, props?: Object = {}): ?Object | string => {
  if (!status) return null;
  const { type } = props;
  if (type === 1 && status !== 'loading') return '上传';
  if (status === 'li-delete') {
    const { doFunction, index } = props;
    return (
      <LoadIcon
        iconClass="lugia-icon-reminder_close right close"
        onClick={e => {
          doFunction(index);
        }}
      />
    );
  }

  let className;
  if (status === 'default') {
    className = 'lugia-icon-financial_upload right';
  }
  if (status === 'loading') {
    className = 'lugia-icon-financial_loading_o loadIcon';
  }
  if (status === 'done') {
    className = 'lugia-icon-financial_upload';
  }
  if (status === 'picture') {
    className = 'lugia-icon-financial_pic ccc';
  }
  if (status === 'video') {
    className = 'lugia-icon-financial_video_camera ccc';
  }
  if (status === 'file') {
    className = 'lugia-icon-financial_folder ccc';
  }
  if (status === 'p-default') {
    className = 'lugia-icon-reminder_plus';
  }
  if (status === 'p-fail') {
    className = 'lugia-icon-financial_monitoring';
  }
  if (status === 'uploadcloud') {
    className = 'lugia-icon-financial_upload_cloud';
  }
  if (status === 'li-done') {
    className = 'lugia-icon-reminder_check_circle right success';
  }
  if (status === 'li-fail') {
    className = 'lugia-icon-reminder_close_circle right error';
  }
  return className ? <LoadIcon iconClass={className} /> : null;
};

const getProgress = (item: Object) => {
  const { status } = item;
  if (status === 'done') return;
  if (status === 'loading') {
    const { percent } = item;
    return (
      <div className="progress">
        <Progress size="small" percent={percent} />
      </div>
    );
  }
};

const getFileList = (data: Array<Object>, close: Function) => {
  if (!data) return;
  return (
    <Ul>
      {data.map((item, index) => {
        return (
          <Li className={item.status}>
            {getIconByType(getListIconType(item.name))} <span>{item.name}</span>
            {getIconByType('li-' + item.status)}
            {getIconByType('li-delete', { doFunction: close, index })}
            {getProgress(item)}
          </Li>
        );
      })}
    </Ul>
  );
};

const getElement = (that: Object): ?Object => {
  const { props } = that;
  const { listType } = props;
  if (!listType) return;
  const { state } = that;
  const { classNameStatus } = state;
  if (listType === 'default') {
    const { dropArea, getRegisterInput, getChangeInfo, handleClickToUpload } = that;
    const { inputId, defaultText, disabled } = props;
    return (
      <React.Fragment>
        <FileInput
          id={inputId}
          {...props}
          getChangeInfo={getChangeInfo}
          getRegisterInput={getRegisterInput}
        />
        <InputContent
          className={`${disabled ? 'disabled' : ''} classNameStatus`}
          onClick={handleClickToUpload}
          innerRef={dropArea}
        >
          {getIconByType(classNameStatus)} {defaultText}
        </InputContent>
      </React.Fragment>
    );
  }
  if (listType === 'both') {
    const {
      handleClickToSubmit,
      dropArea,
      getRegisterInput,
      getChangeInfo,
      handleClickToUpload,
    } = that;
    const { inputId, defaultText, showFileList, disabled } = props;
    return (
      <React.Fragment>
        <FileInput
          id={inputId}
          {...props}
          getChangeInfo={getChangeInfo}
          getRegisterInput={getRegisterInput}
        />

        <InputContent
          className={`${classNameStatus} ${disabled ? 'disabled' : ''} hasBtn`}
          onClick={handleClickToUpload}
          innerRef={dropArea}
        >
          {defaultText}
          {showFileList ? null : getIconByType('li-' + classNameStatus)}
        </InputContent>

        <Button className={disabled ? 'disabled' : ''} onClick={handleClickToSubmit}>
          {getIconByType(classNameStatus, { type: 1 })}
        </Button>
      </React.Fragment>
    );
  }
  if (listType === 'button') {
    const { inputId, disabled } = props;
    const { getRegisterInput, getChangeInfo, handleClickToUpload } = that;
    return (
      <React.Fragment>
        <FileInput
          id={inputId}
          {...props}
          getChangeInfo={getChangeInfo}
          getRegisterInput={getRegisterInput}
        />
        <Button className={`${disabled ? 'disabled' : ''} button `} onClick={handleClickToUpload}>
          点击上传
        </Button>
      </React.Fragment>
    );
  }
  if (listType === 'picture') {
    const { previewUrl, size, inputId, disabled } = props;
    const { getRegisterInput, getChangeInfo, handleClickToUpload } = that;
    return (
      <React.Fragment>
        <FileInput
          id={inputId}
          {...props}
          getChangeInfo={getChangeInfo}
          getRegisterInput={getRegisterInput}
        />
        <PictureView
          id={inputId}
          size={size}
          className={`${disabled ? 'disabled' : ''} classNameStatus`}
          onClick={handleClickToUpload}
        >
          {!previewUrl ? getIconByType('p-' + classNameStatus) : <img src={previewUrl} alt="" />}
          {classNameStatus === 'fail' && size !== 'small' ? <span>图片上传失败请重试</span> : null}
        </PictureView>
      </React.Fragment>
    );
  }
  if (listType === 'area') {
    const { dropArea, getRegisterInput, getChangeInfo, handleClickToUpload } = that;
    const { inputId, disabled } = props;
    return (
      <React.Fragment>
        <FileInput
          id={inputId}
          {...props}
          getChangeInfo={getChangeInfo}
          getRegisterInput={getRegisterInput}
        />
        <AreaView
          className={disabled ? 'disabled' : ''}
          size={'bigger'}
          innerRef={dropArea}
          onClick={handleClickToUpload}
        >
          {getIconByType('uploadcloud')}
          <AreaText>
            请将文件拖到此处,或<AreaTextBlue>点击上传</AreaTextBlue>
          </AreaText>
        </AreaView>
      </React.Fragment>
    );
  }
};

type defProps = {
  classNameStatus?: string,
  defaultText: string,
  fileName?: string,
  setChoosedFile: Function,
  showFileList: boolean,
  fileListDone: Array<Object>,
  getTheme: Function,
  setAutoUploadState: Function,
  setDeleteList: Function,
};
type stateProps = {
  status: string,
  inputElement: Object,
  classNameStatus?: string,
  defaultText: string,
};
class GetElement extends React.Component<defProps, stateProps> {
  static defaultProps = {};
  dropArea: any;
  constructor(props: Object) {
    super(props);
    this.dropArea = React.createRef();
  }

  componentDidMount() {
    const { dropArea, getChangeInfo } = this;
    if (!dropArea.current) return;
    const dragDrop = dropArea.current;
    const stopPropagation = (e: Object) => {
      e.stopPropagation();
      e.preventDefault();
    };
    addEventListener(dragDrop, 'dragover', stopPropagation);
    addEventListener(dragDrop, 'dragleave', stopPropagation);

    dragDrop.addEventListener('drop', function(e) {
      console.log(e);
      stopPropagation(e);
      const files = e.target.files || e.dataTransfer.files;
      getChangeInfo('drag', files);
    });
  }

  static getDerivedStateFromProps(defProps: defProps, stateProps: stateProps) {
    const { classNameStatus, defaultText } = defProps;
    if (!stateProps) {
      return {
        classNameStatus,
        defaultText,
      };
    }
    return {
      classNameStatus: 'classNameStatus' in defProps ? classNameStatus : stateProps.classNameStatus,
      defaultText: 'defaultText' in defProps ? defaultText : stateProps.defaultText,
    };
  }
  getRegisterInput = (input: Object) => {
    this.setState({
      inputElement: input.current,
    });
  };
  getChangeInfo = (types: string, e: Object) => {
    const { setChoosedFile } = this.props;
    if (types === 'drag') {
      setChoosedFile && setChoosedFile(e);
    } else {
      setChoosedFile && setChoosedFile(e.target.files);
    }
  };

  render() {
    const { showFileList, fileListDone, getTheme } = this.props;
    return (
      <React.Fragment>
        <Container theme={getTheme()}>{getElement(this)}</Container>
        <React.Fragment>
          {' '}
          {showFileList ? getFileList(fileListDone, this.handleClickToDelete) : null}
        </React.Fragment>
      </React.Fragment>
    );
  }

  handleClickToUpload = () => {
    const { inputElement } = this.state;
    inputElement.click();
  };
  handleClickToSubmit = () => {
    const { setAutoUploadState } = this.props;
    setAutoUploadState && setAutoUploadState(true);
  };
  handleClickToDelete = (index: number) => {
    const { setDeleteList } = this.props;
    setDeleteList && setDeleteList(index);
  };
}

export default GetElement;
