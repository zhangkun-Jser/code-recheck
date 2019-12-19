

### project info:
```json
{
  "pro": "重复代码输出示例",
  "gitPath": "http://***********.git#master",
}
```

## prefix


### 序号: 1


  起止行号: 238 - 247
  代码路径: ./output/crm-h5-fe/src/components/edit/ElementPanel.js
  ```js
const mapDispatchToProps = {
    selectStage: (options) => ({
        type: editActions.SELECT_STAGE,
        payload: options
    }),
    changeSelection: (options) => ({
        type: editActions.CHANGE_SELECTION,
        payload: options
    }),
    changeShow: (options) => ({
  ```


  起止行号: 616 - 625
  代码路径: ./output/crm-h5-fe/src/components/edit/Main/EditWrapper.js
  ```js
const mapDispatchToProps = {
    selectStage: (options) => ({
        type: editActions.SELECT_STAGE,
        payload: options
    }),
    changeSelection: (options) => ({
        type: editActions.CHANGE_SELECTION,
        payload: options
    }),
    setEditable: (options) => ({
  ```




### 序号: 2


  起止行号: 9 - 22
  代码路径: ./output/crm-h5-fe/src/components/plugins/ComponentsPlugin/streams.js
  ```js
export function createRect(params) {
    const payload = {
        type: 'shape',
        item: '',
        action: '',
        eleData: {},
        merges: {
            top: 0,
            left: 0,
            width: 100,
            height: 100,
            backColor: '#1ab7ea',
            backColorOpacity: 1,
            fileIcon: 'paper-clip'
  ```


  起止行号: 28 - 41
  代码路径: ./output/crm-h5-fe/src/components/plugins/ComponentsPlugin/streams.js
  ```js
export function createCircle(params) {
    const payload = {
        type: 'shape',
        item: '',
        action: '',
        eleData: {},
        merges: {
            top: 0,
            left: 0,
            width: 100,
            height: 100,
            backColor: '#1ab7ea',
            backColorOpacity: 1,
            borderRadius: 50,
  ```




### 序号: 3


  起止行号: 97 - 119
  代码路径: ./output/crm-h5-fe/src/components/account/Login.js
  ```js
accountEmpty = () => {
    const { setFieldsValue } = this.props.form
    setFieldsValue({
        userName: ''
    })
    this.userNameInput.focus()
    this.setState({
        btnType: ''
    });
}

passwdEmpty = () => {
    const { setFieldsValue } = this.props.form
    setFieldsValue({
        password: ''
    })
    this.passwdInput.focus()
    this.setState({
        btnType: ''
    });
}

onChange = (e) => {
  ```


  起止行号: 211 - 233
  代码路径: ./output/crm-h5-fe/src/components/account/Register.js
  ```js
accountEmpty = () => {
    const { setFieldsValue } = this.props.form
    setFieldsValue({
        userName: ''
    })
    this.userNameInput.focus()
    this.setState({
        btnType: ''
    });
}

passwdEmpty = () => {
    const { setFieldsValue } = this.props.form
    setFieldsValue({
        password: ''
    })
    this.passwdInput.focus()
    this.setState({
        btnType: ''
    });
}

repeatEmpty = () => {
  ```




### 序号: 4


  起止行号: 97 - 119
  代码路径: ./output/crm-h5-fe/src/components/account/Login.js
  ```js
accountEmpty = () => {
    const { setFieldsValue } = this.props.form
    setFieldsValue({
        userName: ''
    })
    this.userNameInput.focus()
    this.setState({
        btnType: ''
    });
}

passwdEmpty = () => {
    const { setFieldsValue } = this.props.form
    setFieldsValue({
        password: ''
    })
    this.passwdInput.focus()
    this.setState({
        btnType: ''
    });
}

onChange = (e) => {
  ```


  起止行号: 211 - 233
  代码路径: ./output/crm-h5-fe/src/components/account/Register.js
  ```js
accountEmpty = () => {
    const { setFieldsValue } = this.props.form
    setFieldsValue({
        userName: ''
    })
    this.userNameInput.focus()
    this.setState({
        btnType: ''
    });
}

passwdEmpty = () => {
    const { setFieldsValue } = this.props.form
    setFieldsValue({
        password: ''
    })
    this.passwdInput.focus()
    this.setState({
        btnType: ''
    });
}

repeatEmpty = () => {
  ```




### 序号: 5


  起止行号: 404 - 407
  代码路径: ./output/crm-h5-fe/src/components/edit/BaseTools/EditTools.js
  ```js
export function updateAnimates (merge, activeLegends){
    const updates = activeLegends.map(active => {
        const newAnimates = active.get('animates').map(animate => {
            if(animate.get('index') === merge.get('index')){
  ```


  起止行号: 1030 - 1033
  代码路径: ./output/crm-h5-fe/src/components/edit/Main/EditWrapperRedux.js
  ```js
if(activeLegends){
    const updates = activeLegends.map(active => {
        const newAnimates = active.get('animates').map(animate => {
            if(animate.get('index') === index){
  ```


  起止行号: 400 - 403
  代码路径: ./output/crm-h5-fe/src/components/plugins/BasePlugin/Tools.js
  ```js
export function updateAnimates (merge, activeLegends){
    const updates = activeLegends.map(active => {
        const newAnimates = active.get('animates').map(animate => {
            if(animate.get('index') === merge.get('index')){
  ```




### 序号: 7


  起止行号: 18 - 24
  代码路径: ./output/crm-h5-fe/src/components/monitor/ChangeLog.js
  ```js
</Timeline.Item>
<Timeline.Item color="green" >
    <h2>1.5</h2>
    <p>2018-12-07</p>
    <ul>
        <li>支持单页长页布局</li>
        <li>预览增加二维码</li>
  ```


  起止行号: 27 - 33
  代码路径: ./output/crm-h5-fe/src/components/monitor/ChangeLog.js
  ```js
</Timeline.Item>
<Timeline.Item color="green" >
    <h2>1.4</h2>
    <p>2018-09-20</p>
    <ul>
        <li>组件插件化改造</li>
        <li>支持布局容器化</li>
  ```


  起止行号: 36 - 42
  代码路径: ./output/crm-h5-fe/src/components/monitor/ChangeLog.js
  ```js
</Timeline.Item>
<Timeline.Item color="green">
    <h2>1.3</h2>
    <p>2018-08-01</p>
    <ul>
        <li>添加微信分享接口</li>
        <li>完善border编辑</li>
  ```


  起止行号: 45 - 51
  代码路径: ./output/crm-h5-fe/src/components/monitor/ChangeLog.js
  ```js
</Timeline.Item>
<Timeline.Item color="green">
    <h2>1.2</h2>
    <p>2018-07-03</p>
    <ul>
        <li>优化动画执行</li>
        <li>优化操作流畅性</li>
  ```


  起止行号: 54 - 62
  代码路径: ./output/crm-h5-fe/src/components/monitor/ChangeLog.js
  ```js
</Timeline.Item>
<Timeline.Item color="green">
    <h2>1.1</h2>
    <p>2018-06-25</p>
    <ul>
        <li>修改api域名</li>
        <li>全部https访问</li>
    </ul>
</Timeline.Item>
  ```




### 序号: 8


  起止行号: 103 - 109
  代码路径: ./output/crm-h5-fe/src/components/edit/BaseTools/MouseTools.js
  ```js
    scaleY: -dragDistanceY
}
if(dragDistanceX < -currentInfo.width){
    styles.left = dragDistanceX + currentInfo.width
    styles.scaleX = -dragDistanceX - 2*currentInfo.width
}
if(dragDistanceY > currentInfo.height){
  ```


  起止行号: 129 - 135
  代码路径: ./output/crm-h5-fe/src/components/edit/BaseTools/MouseTools.js
  ```js
    scaleY: dragDistanceY
}
if(dragDistanceX < -currentInfo.width){
    styles.left = dragDistanceX + currentInfo.width
    styles.scaleX = -dragDistanceX - 2*currentInfo.width
}
if(dragDistanceY < -currentInfo.height){
  ```




### 序号: 9


  起止行号: 133 - 139
  代码路径: ./output/crm-h5-fe/src/components/edit/BaseTools/MouseTools.js
  ```js
    styles.scaleX = -dragDistanceX - 2*currentInfo.width
}
if(dragDistanceY < -currentInfo.height){
    styles.top = dragDistanceY + currentInfo.height
    styles.scaleY = -dragDistanceY - 2*currentInfo.height
}
break
  ```


  起止行号: 160 - 166
  代码路径: ./output/crm-h5-fe/src/components/edit/BaseTools/MouseTools.js
  ```js
    styles.scaleX = dragDistanceX - 2*currentInfo.width
}
if(dragDistanceY < -currentInfo.height){
    styles.top = dragDistanceY + currentInfo.height
    styles.scaleY = -dragDistanceY - 2*currentInfo.height
}
break
  ```




### 序号: 10


  起止行号: 1 - 35
  代码路径: ./output/crm-h5-fe/src/components/edit/Main/CreateContent.js
  ```js
import styled from 'styled-components'
import { hexToRgba } from '../../../util'
import config from '../../../../config'

const bg = (props) =>(
    `
        background-image: url(${config.apiUrl}/api/media/getCeph/${props.backFace});
        background-color: ${hexToRgba(props.backColor, props.backColorOpacity)};
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        opacity: ${props.opacity};
    `
)

const border = (props) => (
    `
        border-style: ${props.borderStyle};
        border-width: ${props.borderWidth}px;
        border-color: ${hexToRgba(props.borderColor, props.borderOpacity)};
        border-radius: ${props.borderRadius}px;
    `
)

export const Normal = styled.div`
    width: ${props=>props.width}px;
    height: ${props=>props.height}px;
    font-size: ${props=>props.fontSize}px;
    font-family: ${props=>props.fontFamily};
    font-weight: ${props=>props.fontWeightNum ? 700 : 'normal'};
    font-style: ${props=>props.fontStyleType ? 'italic' : 'normal'};
    text-decoration: ${props=>props.textDecorationVal ? 'underline' : 'none'};
    text-align: ${props=>props.textAlign};
    color: ${props=>props.fontColor};
    cursor:${props=>props.cursor};
  ```


  起止行号: 1 - 36
  代码路径: ./output/crm-h5-fe/src/components/edit/Slider/CreateView.js
  ```js
import styled from 'styled-components'
import { hexToRgba } from '../../../util'
import config from '../../../../config'

const bg = (props) =>(
    `
        background-image: url(${config.apiUrl}/api/media/getCeph/${props.backFace});
        background-color: ${hexToRgba(props.backColor, props.backColorOpacity)};
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        opacity: ${props.opacity};
    `
)

const border = (props) => (
    `
        border-style: ${props.borderStyle};
        border-width: ${props.borderWidth}px;
        border-color: ${hexToRgba(props.borderColor, props.borderOpacity)};
        border-radius: ${props.borderRadius}px;
    `
)

export const Normal = styled.div`
    width: ${props=>props.width}px;
    height: ${props=>props.height}px;
    box-sizing: border-box;
    font-size: ${props=>props.fontSize}px;
    font-family: ${props=>props.fontFamily};
    font-weight: ${props=>props.fontWeightNum ? 700 : 'normal'};
    font-style: ${props=>props.fontStyleType ? 'italic' : 'normal'};
    text-decoration: ${props=>props.textDecorationVal ? 'underline' : 'none'};
    text-align: ${props=>props.textAlign};
    color: ${props=>props.fontColor};
    border:${props=>props.contentEditable ? '1px solid rgba(157,172,255,.9)' : 'none'};
  ```




### 序号: 11


  起止行号: 62 - 72
  代码路径: ./output/crm-h5-fe/src/components/edit/Main/CreateContent.js
  ```js
export const DynamicText = styled.div`
    width: ${props=>props.width}px;
    height: ${props=>props.height}px;
    font-size: ${props=>props.fontSize}px;
    font-family: ${props=>props.fontFamily};
    font-weight: ${props=>props.fontWeightNum ? 700 : 'normal'};
    font-style: ${props=>props.fontStyleType ? 'italic' : 'normal'};
    text-decoration: ${props=>props.textDecorationVal ? 'underline' : 'none'};
    text-align: ${props=>props.textAlign};
    color: ${props=>props.fontColor};
    cursor:${props=>props.cursor};
  ```


  起止行号: 46 - 57
  代码路径: ./output/crm-h5-fe/src/components/edit/Slider/CreateView.js
  ```js
})`
    width: ${props=>props.width}px;
    height: ${props=>props.height}px;
    box-sizing: border-box;
    font-size: ${props=>props.fontSize}px;
    font-family: ${props=>props.fontFamily};
    font-weight: ${props=>props.fontWeightNum ? 700 : 'normal'};
    font-style: ${props=>props.fontStyleType ? 'italic' : 'normal'};
    text-decoration: ${props=>props.textDecorationVal ? 'underline' : 'none'};
    text-align: ${props=>props.textAlign};
    color: ${props=>props.fontColor};
    border:${props=>props.contentEditable ? '1px solid rgba(157,172,255,.9)' : 'none'};
  ```




### 序号: 12


  起止行号: 119 - 123
  代码路径: ./output/crm-h5-fe/src/components/account/Login.js
  ```js
onChange = (e) => {
    let btnType = ''
    const { getFieldValue } = this.props.form
    const userName = getFieldValue('userName')
    const password = getFieldValue('password')
  ```


  起止行号: 134 - 138
  代码路径: ./output/crm-h5-fe/src/components/account/Login.js
  ```js
onSelect = (e) => {
    let btnType = ''
    const { getFieldValue } = this.props.form
    const userName = getFieldValue('userName')
    const password = getFieldValue('password')
  ```


  起止行号: 255 - 259
  代码路径: ./output/crm-h5-fe/src/components/account/Register.js
  ```js
onChange = (e) => {
    let btnType = ''
    const { getFieldValue } = this.props.form
    const userName = getFieldValue('userName')
    const password = getFieldValue('password')
  ```




### 序号: 13


  起止行号: 290 - 293
  代码路径: ./output/crm-h5-fe/src/components/edit/PublishModal.js
  ```js
<RowWrapper>
    <Col span={4}><Label>分享标题:</Label><Required>*</Required></Col>
    <Col span={16}>
        <Input
  ```


  起止行号: 302 - 305
  代码路径: ./output/crm-h5-fe/src/components/edit/PublishModal.js
  ```js
<RowWrapper>
    <Col span={4}><Label>分享内容:</Label><Required>*</Required></Col>
    <Col span={16}>
        <TextArea
  ```


  起止行号: 315 - 318
  代码路径: ./output/crm-h5-fe/src/components/edit/PublishModal.js
  ```js
<RowWrapper>
    <Col span={4}><Label>分享图标:</Label><Required>*</Required></Col>
    <Col span={16}>
         <Upload {...this.uploadProps()}>
  ```




### 序号: 14


  起止行号: 96 - 100
  代码路径: ./output/crm-h5-fe/src/components/edit/Handle/Switcher.js
  ```js
const mapStateToProps = (state, ownProps) => ({
    global: state.editor.commons.present.get('global'),
    pages: state.editor.commons.present.get('pages'),
    stages: state.editor.commons.present.get('stages')
})
  ```


  起止行号: 178 - 183
  代码路径: ./output/crm-h5-fe/src/components/edit/Slider/index.js
  ```js
const mapStateToProps = (state, ownProps) => ({
    global: state.editor.commons.present.get('global'),
    pages: state.editor.commons.present.get('pages'),
    backStages: state.editor.commons.present.get('back'),
    frontStages: state.editor.commons.present.get('front'),
})
  ```




### 序号: 15


  起止行号: 62 - 94
  代码路径: ./output/crm-h5-fe/src/components/edit/Main/CreateContent.js
  ```js
export const DynamicText = styled.div`
    width: ${props=>props.width}px;
    height: ${props=>props.height}px;
    font-size: ${props=>props.fontSize}px;
    font-family: ${props=>props.fontFamily};
    font-weight: ${props=>props.fontWeightNum ? 700 : 'normal'};
    font-style: ${props=>props.fontStyleType ? 'italic' : 'normal'};
    text-decoration: ${props=>props.textDecorationVal ? 'underline' : 'none'};
    text-align: ${props=>props.textAlign};
    color: ${props=>props.fontColor};
    cursor:${props=>props.cursor};
    user-select: ${props=>props.userSelect};
    user-modify: read-only;
    line-height: ${props=>props.lineHeight};
    ${props=>bg(props)}
    ${props=>border(props)}
`
export const Pic = styled.img`
    width: ${props=>props.width}px;
    height: ${props=>props.height}px;
    ${props=>bg(props)}
    ${props=>border(props)}
`
// 有音频生成封面慢,阻塞请求等, 编辑界面不提供音频播放了
// const Audio = styled.audio`
//     width: ${props=>props.width}
//     height: ${props=>props.height}
// `,
export const Audio = styled.div`
    width: ${props=>props.width}px;
    height: ${props=>props.height}px;
`
export const Video = styled.div`
  ```


  起止行号: 46 - 73
  代码路径: ./output/crm-h5-fe/src/components/edit/Slider/CreateView.js
  ```js
})`
    width: ${props=>props.width}px;
    height: ${props=>props.height}px;
    box-sizing: border-box;
    font-size: ${props=>props.fontSize}px;
    font-family: ${props=>props.fontFamily};
    font-weight: ${props=>props.fontWeightNum ? 700 : 'normal'};
    font-style: ${props=>props.fontStyleType ? 'italic' : 'normal'};
    text-decoration: ${props=>props.textDecorationVal ? 'underline' : 'none'};
    text-align: ${props=>props.textAlign};
    color: ${props=>props.fontColor};
    border:${props=>props.contentEditable ? '1px solid rgba(157,172,255,.9)' : 'none'};
    cursor:${props=>props.cursor};
    user-select: ${props=>props.userSelect};
    ${props=>bg(props)}
    ${props=>border(props)}
`
export const Pic = styled.img`
    width: ${props=>props.width}
    height: ${props=>props.height}
    ${props=>bg(props)}
    ${props=>border(props)}
`
export const Audio = styled.div`
    width: ${props=>props.width}
    height: ${props=>props.height}
`
export const Video = styled.video`
  ```




### 序号: 16


  起止行号: 89 - 112
  代码路径: ./output/crm-h5-fe/src/components/edit/Main/EditWrapperRedux.js
  ```js
function createLegend(payload, pages, back, front, stages, state) {
    const current = state.getIn(['stageStatus', 'current'])
    let newState = state
    let status = null
    const activeStage = getActiveStage(stages)
    //没有活动的Stage 或 stage不是容器
    if(!activeStage || !isFrame(activeStage)){
        status = getInitalStatus(payload)
        switch (current){
            case 1:         // 背景
                newState = state.set('back', back.add(status.get('key')))
                break
            case 4:         // 前景
                newState = state.set('front', front.add(status.get('key')))
                break
            case 3:         // 主编辑界面, 在page的stages中加入新建stage
            default:
                const activePage = getActivePageNum(pages)
                const stages = pages.getIn([activePage, 'stages']) || Set([])
                newState = state.setIn(['pages', activePage, 'stages'], stages.add(status.get('key')))
        }
    }else{
        status = getInitalStatus({
            ...payload,
  ```


  起止行号: 21 - 45
  代码路径: ./output/crm-h5-fe/src/components/plugins/BasePlugin/Tools.js
  ```js
export function createStage({ payload, pages, back, front, stages, state }) {
    const current = state.getIn(['stageStatus', 'current'])
    let newState = state
    let status = null
    const activeStage = getActiveStage(stages)

    //没有活动的Stage 或 stage不是容器
    if(!activeStage || !isFrame(activeStage)){
        status = getInitalStatus(payload)
        switch (current){
            case 1:         // 背景
                newState = state.set('back', back.add(status.get('key')))
                break
            case 4:         // 前景
                newState = state.set('front', front.add(status.get('key')))
                break
            case 3:         // 主编辑界面, 在page的stages中加入新建stage
            default:
                const activePage = getActivePageNum(pages)
                const stages = pages.getIn([activePage, 'stages']) || Set([])
                newState = state.setIn(['pages', activePage, 'stages'], stages.add(status.get('key')))
        }
    }else{
        status = getInitalStatus({
            ...payload,
  ```


  起止行号: 19 - 43
  代码路径: ./output/crm-h5-fe/src/components/plugins/FramePlugin/streams.js
  ```js
function createFrame(payload, { pages, back, front, stages, state }) {
    const current = state.getIn(['stageStatus', 'current'])
    let newState = state
    let status = null
    const activeStage = getActiveStage(stages)

    //没有活动的Stage 或 stage不是容器
    if(!activeStage || !isFrame(activeStage)){
        status = getInitalStatus(payload)
        switch (current){
            case 1:         // 背景
                newState = state.set('back', back.add(status.get('key')))
                break
            case 4:         // 前景
                newState = state.set('front', front.add(status.get('key')))
                break
            case 3:         // 主编辑界面, 在page的stages中加入新建stage
            default:
                const activePage = getActivePageNum(pages)
                const stages = pages.getIn([activePage, 'stages']) || Set([])
                newState = state.setIn(['pages', activePage, 'stages'], stages.add(status.get('key')))
        }
    }else{
        status = getInitalStatus({
            ...payload,
  ```




### 序号: 17


  起止行号: 48 - 54
  代码路径: ./output/crm-h5-fe/src/components/plugins/ComponentsPlugin/creaters.js
  ```js
creaters['shape'] = ({ stage, stages, contentRef, LegendComponents, ComponentHandles, ...rest }) => {
    const stageJson = stage.toJS()

    return (
        <Shape {...stageJson} innerRef={contentRef} />
    )
}
  ```


  起止行号: 55 - 61
  代码路径: ./output/crm-h5-fe/src/components/plugins/ComponentsPlugin/creaters.js
  ```js
creaters['swiper'] = ({ stage, stages, contentRef, LegendComponents, ComponentHandles, ...rest }) => {
    const stageJson = stage.toJS()

    return (
        <SwiperInst uuid={stageJson.key} {...stageJson} innerRef={contentRef} />
    )
}
  ```


  起止行号: 158 - 164
  代码路径: ./output/crm-h5-fe/src/components/plugins/FramePlugin/creaters.js
  ```js
creaters['injectFrame'] = ({ stage, stages, contentRef, LegendComponents, ComponentHandles, ...rest }) => {
    const stageJson = stage.toJS()

    return (
        <Inject {...stageJson} innerRef={contentRef} src={stageJson.injectionUrl} />
    )
}
  ```




### 序号: 18


  起止行号: 173 - 178
  代码路径: ./output/crm-h5-fe/src/components/account/Login.js
  ```js
handleLogin = (e) => {
    e.preventDefault()
    const { validateFields } = this.props.form
    validateFields((err, values) => {
        if(!err){
            this.props.sendLogin({
  ```


  起止行号: 306 - 311
  代码路径: ./output/crm-h5-fe/src/components/account/Register.js
  ```js
handleRegister = (e) => {
    e.preventDefault()
    const { validateFields } = this.props.form
    validateFields((err, values) => {
        if(!err){
            this.props.sendRegister({
  ```




### 序号: 19


  起止行号: 1 - 27
  代码路径: ./output/crm-h5-fe/src/components/edit/BaseTools/BasePopover.js
  ```js
import React, { Component } from 'react'
import { Popover } from 'antd'

class BasePopover extends Component {
    state = {
        visible: false
    }

    hide = () => {
        this.setState({
            visible: false
        })
    }

    handleVisibleChange = (visible) => {
        const { onVisibleChange } = this.props
        onVisibleChange && onVisibleChange(visible)
        this.setState({ visible })
    }

    render() {
        /* eslint-disable */
        const { visible, onVisibleChange, placement, children, ...rest } = this.props
        /* eslint-enable */
        return (
            <Popover {...rest}
                placement={placement || 'top'}
  ```


  起止行号: 1 - 27
  代码路径: ./output/crm-h5-fe/src/components/plugins/BasePlugin/BasePopover.js
  ```js
import React, { Component } from 'react'
import { Popover } from 'antd'

class BasePopover extends Component {
    state = {
        visible: false
    }

    hide = () => {
        this.setState({
            visible: false
        })
    }

    handleVisibleChange = (visible) => {
        const { onVisibleChange } = this.props
        onVisibleChange && onVisibleChange(visible)
        this.setState({ visible })
    }

    render() {
        /* eslint-disable */
        const { visible, onVisibleChange, placement, children, ...rest } = this.props
        /* eslint-enable */
        return (
            <Popover {...rest}
                placement={placement || 'top'}
  ```




### 序号: 20


  起止行号: 9 - 26
  代码路径: ./output/crm-h5-fe/src/components/edit/BaseTools/EditTools.js
  ```js
function getRenderMod(parentType){
        const renderMod = {
            position: 'absolute',
            float: 'none'
        }

        if('autoFrame' === parentType){
            renderMod.layout = 10
            renderMod.position = 'static'
            renderMod.float = 'left'
        }

        return renderMod
}

function getRenderSize(eleData){
    const offset = 20 * (offsetGen() % 20)
    const renderWidth = eleData.eleWidth ? ((eleData.eleWidth > 375) ? 375 : eleData.eleWidth) : 375;
  ```


  起止行号: 63 - 80
  代码路径: ./output/crm-h5-fe/src/components/plugins/BasePlugin/Tools.js
  ```js
function getRenderMod(parentType){
        const renderMod = {
            position: 'absolute',
            float: 'none'
        }

        if('autoFrame' === parentType){
            renderMod.layout = 10
            renderMod.position = 'static'
            renderMod.float = 'left'
        }

        return renderMod
}

function getRenderSize(eleData){
    const offset = 20 * (offsetGen() % 20)
    const renderWidth = eleData.width ? ((eleData.width > 375) ? 375 : eleData.width) : 375;
  ```




### 序号: 21


  起止行号: 27 - 45
  代码路径: ./output/crm-h5-fe/src/components/edit/BaseTools/EditTools.js
  ```js
    const renderHeight = eleData.eleHeight ? renderWidth * eleData.eleHeight / eleData.eleWidth : 100;
    return {
        renderWidth: parseInt(renderWidth, 10),
        renderHeight: parseInt(renderHeight, 10),
        renderLeft: (renderWidth < 375) ? (renderWidth * 0.2 + offset/7) : 0,
        renderTop: parseInt(renderHeight * 0.2 + offset/7, 10)
    }
}
/**
 * @param params: Obj{
 *      创建类型
 *  }
 */
export function getInitalStatus (initial){
    const { type, item, action, eleData, merges, parentType } = initial
    const { renderWidth, renderHeight, renderLeft, renderTop } = getRenderSize(eleData)

    let status = Map({
        name: null,    // 显示名称
  ```


  起止行号: 81 - 99
  代码路径: ./output/crm-h5-fe/src/components/plugins/BasePlugin/Tools.js
  ```js
    const renderHeight = eleData.height ? renderWidth * eleData.height / eleData.width : 100;
    return {
        renderWidth: parseInt(renderWidth, 10),
        renderHeight: parseInt(renderHeight, 10),
        renderLeft: (renderWidth < 375) ? (renderWidth * 0.2 + offset/7) : 0,
        renderTop: parseInt(renderHeight * 0.2 + offset/7, 10)
    }
}
/**
 * @param params: Obj{
 *      创建类型
 *  }
 */
export function getInitalStatus (initial){
    const { type, item, action, eleData, merges, parentType } = initial
    const { renderWidth, renderHeight, renderLeft, renderTop } = getRenderSize(eleData)

    let status = Map({
        name: eleData ? eleData.name : null,    // 显示名称
  ```




### 序号: 22


  起止行号: 473 - 644
  代码路径: ./output/crm-h5-fe/src/components/edit/BaseTools/EditTools.js
  ```js
            animateCtrl: Map(animateCtrl),
            animates: List(formatAnimates),
            events: List(formatEvents),
            playEvents: Map(playEvents),
            subSet: Set(subSet)
        })
    }))

    const back = Set(themeData.back)
    const front = Set(themeData.front)

    const stages = getCurrentStages({
        back,
        page: getCurrentPage(formatPages),
        front,
        legends: formatLegends
    })

    // 状态数据不做恢复了
    // const formatClones = List(themeData.clones.map(legend=>{
    //     const { animateCtrl, animates, subSet, ...rest } = legend
    //     const formatAnimates = animates.map(animate=>Map(animate))
    //     return Map({
    //         ...rest,
    //         animateCtrl: Map(animateCtrl),
    //         animates: List(formatAnimates),
    //         subSet: Set(subSet)
    //     })
    // }))

    return Map({
        global: Map(themeData.global),
        pages: formatPages,
        back,
        loading: Set(themeData.loading),
        legends: formatLegends,
        stages,
        front,
        // clones: formatClones,
        clones: List([]),
        stageStatus: fromJS(themeData.stageStatus)
    })
}
/**
 * @param stage: stage need clone
 * @param old: old stages data
 * @param reducer: where to store new legends,
 * @param parentKey: the stage parentKey
 */
// clone single legend
function cloneStage(stage, old, reducer, parentKey){
    const newKey = uuid()
    let cloned = stage.set('key', newKey)
        .set('parentKey', parentKey)
    const subSet = cloned.get('subSet')
    if(subSet.size){
        const subStages = getAllStageByKeys(subSet.toJS(), old)
        // 子节点
        const cloneSubKeys = subStages.map(stage => {
            return cloneStage(stage, old, reducer, newKey)
        })
        cloned = cloned.set('subSet', cloneSubKeys)
    }
    reducer.push(cloned)
    return newKey
}

/**
 * @param keys: Array, item is legend.key
 * @param old: old legends data
 * @param reducer: where to store new legends
 */
// clone legends whoes key in keys, and renturn new keys && new legends
function cloneStagesByKeys (keys, old, reducer){
    // 清除所有legends的活动状态
    const cleared = clearStages(old)
    const preStages = getAllStageByKeys(keys.toJS(), cleared)
    return preStages.map(stage =>{
            return cloneStage(stage, cleared, reducer, null)
        })
}

/**
 * @param themeData:
 * @param
 */
// 复制主题数据
export function cloneTheme (themeData) {
    const iThemeData = immutableThemeData(themeData)

    const newLegends = []
    const pages = iThemeData.get('pages')
    const back = iThemeData.get('back')
    const loading = iThemeData.get('loading')
    const front = iThemeData.get('front')
    const legends = iThemeData.get('legends')

    const newPages = pages.map(page=>{
        const stages = page.get('stages')
        return page.set('stages',cloneStagesByKeys(stages, legends, newLegends))
  ```


  起止行号: 466 - 625
  代码路径: ./output/crm-h5-fe/src/components/plugins/BasePlugin/Tools.js
  ```js
            animateCtrl: Map(animateCtrl),
            animates: List(formatAnimates),
            events: List(formatEvents),
            playEvents: Map(playEvents),
            subSet: Set(subSet)
        })
    }))

    const back = Set(themeData.back)
    const front = Set(themeData.front)

    const stages = getCurrentStages({
        back,
        page: getCurrentPage(formatPages),
        front,
        legends: formatLegends
    })

    return Map({
        global: Map(themeData.global),
        pages: formatPages,
        back,
        loading: Set(themeData.loading),
        legends: formatLegends,
        stages,
        front,
        // clones: formatClones,
        clones: List([]),
        stageStatus: fromJS(themeData.stageStatus)
    })
}
/**
 * @param stage: stage need clone
 * @param old: old stages data
 * @param reducer: where to store new legends,
 * @param parentKey: the stage parentKey
 */
// clone single legend
function cloneStage(stage, old, reducer, parentKey){
    const newKey = uuid()
    let cloned = stage.set('key', newKey)
        .set('parentKey', parentKey)
    const subSet = cloned.get('subSet')
    if(subSet.size){
        const subStages = getAllStageByKeys(subSet.toJS(), old)
        // 子节点
        const cloneSubKeys = subStages.map(stage => {
            return cloneStage(stage, old, reducer, newKey)
        })
        cloned = cloned.set('subSet', cloneSubKeys)
    }
    reducer.push(cloned)
    return newKey
}

/**
 * @param keys: Array, item is legend.key
 * @param old: old legends data
 * @param reducer: where to store new legends
 */
// clone legends whoes key in keys, and renturn new keys && new legends
function cloneStagesByKeys (keys, old, reducer){
    // 清除所有legends的活动状态
    const cleared = clearStages(old)
    const preStages = getAllStageByKeys(keys.toJS(), cleared)
    return preStages.map(stage =>{
            return cloneStage(stage, cleared, reducer, null)
        })
}

/**
 * @param themeData:
 * @param
 */
// 复制主题数据
export function cloneTheme (themeData) {
    const iThemeData = immutableThemeData(themeData)

    const newLegends = []
    const pages = iThemeData.get('pages')
    const back = iThemeData.get('back')
    const loading = iThemeData.get('loading')
    const front = iThemeData.get('front')
    const legends = iThemeData.get('legends')

    const newPages = pages.map(page=>{
        const stages = page.get('stages')
        return page.set('stages',cloneStagesByKeys(stages, legends, newLegends))
    })

    return iThemeData.set('pages', newPages)
        .set('back', cloneStagesByKeys(back, legends, newLegends))
        .set('loading', cloneStagesByKeys(loading, legends, newLegends))
        .set('front', cloneStagesByKeys(front, legends, newLegends))
        .set('legends', List(newLegends)).toJS()
}

function getStagesByKeys(keys, legends, reducer){
    keys.forEach(key => {
        const stage = legends.find(legend=>(legend.get('key') === key) ? true : false)
  ```




### 序号: 23


  起止行号: 25 - 30
  代码路径: ./output/crm-h5-fe/src/components/edit/Handle/AnimatePanel.js
  ```js
return (
    <Wrapper>
        <div>动画{props.index}</div>
        <Button icon="close" size="small" onClick={(e)=>{props.onDel(e, props.index)}}/>
    </Wrapper>
)
  ```


  起止行号: 26 - 31
  代码路径: ./output/crm-h5-fe/src/components/edit/Handle/EventPanels.js
  ```js
return (
    <Wrapper>
        <div>事件{props.index}</div>
        <Button icon="close" size="small" onClick={(e)=>{props.onDel(e, props.index)}}/>
    </Wrapper>
)
  ```




### 序号: 24


  起止行号: 16 - 35
  代码路径: ./output/crm-h5-fe/src/components/edit/Handle/CombineHandle.js
  ```js
    if(stages.length > 1){                 // 多个元素
        const firEvents = stages[0].events

        const equalEvents = stages.every(stage => {   // 多个元素是否具有相同的动画列表
            if(isEqual(firEvents, stage.events)){
                return true
            }
            return false
        })

        if(equalEvents){                  // 相同则返回原事件列表
            return firEvents
        }else{                            // 不相同则返回空
            return []
        }
    }
    return []
}

class CombineHandle extends Component {
  ```


  起止行号: 98 - 117
  代码路径: ./output/crm-h5-fe/src/components/edit/Handle/EventPanels.js
  ```js
    if(stages.length > 1){                 // 多个元素
        const firEvents = stages[0].events

        const equalEvents = stages.every(stage => {   // 多个元素是否具有相同的动画列表
            if(isEqual(firEvents, stage.events)){
                return true
            }
            return false
        })

        if(equalEvents){                  // 相同则返回原动画列表
            return firEvents
        }else{                              // 不相同则返回空
            return []
        }
    }
    return []
}

class EventPanels extends Component {
  ```




### 序号: 25


  起止行号: 43 - 66
  代码路径: ./output/crm-h5-fe/src/components/edit/Main/Content.js
  ```js
static getDerivedStateFromProps(nextProps, preState){
    const stageJson = nextProps.stage.toJS()
    // const view = setViewChange(stageJson)
    const { key } = stageJson
    if(key === preState.stageJson.key){
        return {
            // ...view,
            stageJson,
            // viewWidth,
            // viewHeight
        }
    }
    // 节点改变则重新渲染
    return {
        // ...view,
        stageJson,
        // viewWidth,
        // viewHeight,
    }
}

shouldComponentUpdate(nextProps, nextState){
    return !this.props.stage.equals(nextProps.stage)
}
  ```


  起止行号: 37 - 51
  代码路径: ./output/crm-h5-fe/src/components/edit/Slider/Subsets.js
  ```js
static getDerivedStateFromProps(nextProps, preState){
    const stageJson = nextProps.stage.toJS()
    const { key } = stageJson
    if(key === preState.stageJson.key){
        return {
            stageJson,
        }
    }
    // 节点改变则重新渲染
    return {
        stageJson,
    }
}

render() {
  ```




### 序号: 26


  起止行号: 214 - 224
  代码路径: ./output/crm-h5-fe/src/components/edit/Main/Content.js
  ```js
switch (item){
    case 'pic':
        return (
            <Pic {...stageJson}
                src={`${config.apiUrl}/api/media/getCeph/${stageJson.url}`}
                innerRef={this.props.contentRef}
            />
        )
    case 'audio':
        return [
            <PauseBtn {...stageJson} {...playEvents} />,
  ```


  起止行号: 81 - 91
  代码路径: ./output/crm-h5-fe/src/components/edit/Slider/Subsets.js
  ```js
switch (item){
    case 'pic':
        return (
            <Pic {...stageJson}
                src={`${config.apiUrl}/api/media/getCeph/${stageJson.url}`}
                innerRef={this.props.contentRef}
            />
        )
    case 'audio':
        return [
            <PauseBtn {...restProps} />,
  ```




### 序号: 27


  起止行号: 213 - 252
  代码路径: ./output/crm-h5-fe/src/components/edit/Main/Content.js
  ```js
    case 'media':
        switch (item){
            case 'pic':
                return (
                    <Pic {...stageJson}
                        src={`${config.apiUrl}/api/media/getCeph/${stageJson.url}`}
                        innerRef={this.props.contentRef}
                    />
                )
            case 'audio':
                return [
                    <PauseBtn {...stageJson} {...playEvents} />,
                    <PlayBtn {...stageJson} {...playEvents} />,
                    <Audio
                        innerRef={this.props.contentRef}
                        preload="auto"
                        loop
                    >
                        <source src={`${config.apiUrl}/api/media/getCeph/${stageJson.url}`} />
                    </Audio>
                ]
            case 'video':
                return (
                    <Video {...stageJson}
                        src={`${config.apiUrl}/api/media/getCeph/${stageJson.url}`}
                        innerRef={this.props.contentRef}
                    />
                )
            default:
        }
        break
    default:
}

if(this.props.pluginCreaters[type]){
    return this.props.pluginCreaters[type]({
        stage,
        stages,
        contentRef: this.props.contentRef,
        LegendComponents,
  ```


  起止行号: 77 - 119
  代码路径: ./output/crm-h5-fe/src/components/edit/Slider/Subsets.js
  ```js
    case 'media':
        /* eslint-disable */
        const { url, fontStyleType, ...restProps } = stageJson
        /* eslint-enable */
        switch (item){
            case 'pic':
                return (
                    <Pic {...stageJson}
                        src={`${config.apiUrl}/api/media/getCeph/${stageJson.url}`}
                        innerRef={this.props.contentRef}
                    />
                )
            case 'audio':
                return [
                    <PauseBtn {...restProps} />,
                    <PlayBtn {...restProps} />,
                    <Audio
                        innerRef={this.props.contentRef}
                        preload="auto"
                        loop
                    >
                        <source src={`${config.apiUrl}/api/media/getCeph/${url}`} />
                    </Audio>
                ]
            case 'video':
                return (
                    <Video {...stageJson}
                        src={`${config.apiUrl}/api/media/getCeph/${stageJson.url}`}
                        innerRef={this.props.contentRef}
                    />
                )
            default:
        }
        break
    default:
}

if(this.props.pluginCreaters[type]){
    return this.props.pluginCreaters[type]({
        stage,
        stages,
        contentRef: this.props.contentRef,
        LegendComponents: LayerComponents,
  ```




### 序号: 28


  起止行号: 85 - 115
  代码路径: ./output/crm-h5-fe/src/components/edit/Main/EditWrapper.js
  ```js
    background: ${globalStyles.themeColor};
    opacity: 0.3;
    border-radius: 50%;
    transition: 0.3s ease;
    z-index: 100;
`
const BackStage = styled.div`
    position: absolute;
    top: 0;
`
const MainStage = styled.div`
    opacity: 1;
`
const Backface = styled.div`
    background-image: url(${props=>`${config.apiUrl}/api/media/getCeph/${props.backFace}`});
    background-color: ${props=>props.backColor};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    opacity: ${props=> props.backOpacity};
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
`
const FrontStage = styled.div`
    position: absolute;
    top: 0;
`
  ```


  起止行号: 45 - 80
  代码路径: ./output/crm-h5-fe/src/components/edit/Slider/Page.js
  ```js
const DelBtn = styled(Button)`
    &&{
        padding-left: 0 !important;
        padding-right: 0 !important;
        background: transparent;
        border: none;
    }
    &:hover {
        color: #000;
    }
`
const BackStage = styled.div`
    position: absolute;
    top: 0;
`
const MainStage = styled.div`
    opacity: 1;
`
const Backface = styled.div`
    background-image: url(${props=>`${config.apiUrl}/api/media/getCeph/${props.backFace}`});
    background-color: ${props=>props.backColor};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    opacity: ${props=> props.backOpacity};
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
`
const FrontStage = styled.div`
    position: absolute;
    top: 0;
`
  ```




### 序号: 29


  起止行号: 320 - 327
  代码路径: ./output/crm-h5-fe/src/components/edit/Main/EditWrapperRedux.js
  ```js
function setPop(stages, state) {
    const active = getActiveStage(stages)
    const index = stages.findIndex(stage=>stage.get('key') === active.get('key'))
    const newLegends = delOneStage(active, state).get('stages').insert(index + 1, active)
    return state.set('stages', newLegends);
}

function setPush(stages, state) {
  ```


  起止行号: 327 - 334
  代码路径: ./output/crm-h5-fe/src/components/edit/Main/EditWrapperRedux.js
  ```js
function setPush(stages, state) {
    const active = getActiveStage(stages)
    const index = stages.findIndex(stage=>stage.get('key') === active.get('key'))
    const newLegends = delOneStage(active, state).get('stages').insert(index - 1, active)
    return state.set('stages', newLegends);
}

function setHead(stages, state) {
  ```




### 序号: 30


  起止行号: 334 - 340
  代码路径: ./output/crm-h5-fe/src/components/edit/Main/EditWrapperRedux.js
  ```js
function setHead(stages, state) {
    const actives = getAllActiveStages(stages)
    const filtered = actives
        .reduce((prev, stage) => delOneStage(stage, prev), state)
        .get('stages')
    return state.set('stages', filtered.concat(actives))
}
  ```


  起止行号: 342 - 348
  代码路径: ./output/crm-h5-fe/src/components/edit/Main/EditWrapperRedux.js
  ```js
function setTail(stages, state) {
    const actives = getAllActiveStages(stages)
    const filtered = actives
        .reduce((prev, stage) => delOneStage(stage, prev), state)
        .get('stages')
    return state.set('stages', actives.concat(filtered))
}
  ```




### 序号: 31


  起止行号: 1083 - 1088
  代码路径: ./output/crm-h5-fe/src/components/edit/Main/EditWrapperRedux.js
  ```js
animatesCount = 0
const updates = stages.map(stage => {
    const newAnimates = stage.get('animates').map(animate => animate.set('play', false))
    return stage.set('animates', newAnimates)
})
return state.set('stages', updates).setIn(['pages', pageIndex, 'animatesPlay'], 0)
  ```


  起止行号: 1098 - 1103
  代码路径: ./output/crm-h5-fe/src/components/edit/Main/EditWrapperRedux.js
  ```js
animatesCount = 0
const updates = stages.map(stage => {
    const newAnimates = stage.get('animates').map(animate => animate.set('play', false))
    return stage.set('animates', newAnimates)
})
return state.set('stages', updates).setIn(['pages', pageIndex, 'animatesPlay'], 0)
  ```




### 序号: 32


  起止行号: 9 - 13
  代码路径: ./output/crm-h5-fe/src/components/edit/Main/Legend.js
  ```js
const LgTrailer = styled.div`
    position: ${props => props.stage.position};
    z-index: ${props => props.stage.zIndex};
    display: ${props => props.stage.renderMode >= 10 ? 'inline-block' : 'block'};
    cursor: ${props => props.stage.active ? 'move' : 'default'};
  ```


  起止行号: 7 - 12
  代码路径: ./output/crm-h5-fe/src/components/edit/Slider/Layer.js
  ```js
const LgTrailer = styled.div`
    position: ${props=>props.stage.position};
    z-index: ${props=>props.stage.zIndex};
    display: ${props=>props.stage.renderMode >= 10 ? 'inline-block' : 'block'};
    cursor: default;
    left: ${props=>props.stage.left}px;
  ```




### 序号: 33


  起止行号: 10 - 35
  代码路径: ./output/crm-h5-fe/src/components/edit/Main/Legend.js
  ```js
    position: ${props => props.stage.position};
    z-index: ${props => props.stage.zIndex};
    display: ${props => props.stage.renderMode >= 10 ? 'inline-block' : 'block'};
    cursor: ${props => props.stage.active ? 'move' : 'default'};
    left: ${props => props.stage.left}px;
    width: ${props => props.stage.layout >= 20 ? 'auto' : props.stage.width + 'px'};
    height: ${props => props.stage.layout >= 20 ? 'auto' : props.stage.height + 'px'};
    top: ${props => props.stage.top}px;
    vertical-align: ${props => props.stage.layout >= 20 ? 'top' : 'baseline'};
    &&{
        animation-duration: ${props => props.animate.duration}s;
        animation-delay: ${props => props.animate.delay}s;
        animation-iteration-count: ${props => props.animate.repeat};
    }
`
const LgSurface = styled.div`
    position: ${props => props.stage.position};
    box-sizing: content-box;
    width: ${props => props.stage.layout >= 20 ? 'auto' : props.stage.width + 'px'};
    height: ${props => props.stage.layout >= 20 ? 'auto' : props.stage.height + 'px'};
    transform: rotate(${props => props.stage.rotate}deg);
    opacity: ${props => props.stage.opacity};
    overflow: hidden;
`

class Legend extends Component {
  ```


  起止行号: 7 - 33
  代码路径: ./output/crm-h5-fe/src/components/edit/Slider/Layer.js
  ```js
const LgTrailer = styled.div`
    position: ${props=>props.stage.position};
    z-index: ${props=>props.stage.zIndex};
    display: ${props=>props.stage.renderMode >= 10 ? 'inline-block' : 'block'};
    cursor: default;
    left: ${props=>props.stage.left}px;
    width: ${props=>props.stage.layout >= 20 ? 'auto' : props.stage.width+'px'};
    height: ${props=>props.stage.layout >= 20 ? 'auto' : props.stage.height+'px'};
    top: ${props=>props.stage.top}px;
    vertical-align: ${props=>props.stage.layout >= 20 ? 'top' : 'baseline'}
    &&{
        animation-duration: ${props=>props.animate.duration}s;
        animation-delay: ${props=>props.animate.delay}s;
        animation-iteration-count: ${props=>props.animate.repeat};
    }
`
const LgSurface = styled.div`
    position: ${props=>props.stage.position};
    box-sizing: content-box;
    width: ${props=>props.stage.layout >= 20 ? 'auto' : props.stage.width+'px'};
    height: ${props=>props.stage.layout >= 20 ? 'auto' : props.stage.height+'px'};
    transform: rotate(${props=>props.stage.rotate}deg);
    opacity: ${props=> props.stage.opacity};
    overflow: hidden;
`

class Layer extends PureComponent {
  ```




### 序号: 34


  起止行号: 35 - 50
  代码路径: ./output/crm-h5-fe/src/components/edit/Main/Legend.js
  ```js
class Legend extends Component {

    constructor(props) {
        super(props)
        this.state = {
            stage: props.stage,
            animatesCount: 0,
        }

        this.contentRef = React.createRef()
        this.surfaceRef = React.createRef()
        this.trailerRef = React.createRef()
    }

    // 存储计算值
    memJson = memoize((stage) => stage.toJS())
  ```


  起止行号: 33 - 48
  代码路径: ./output/crm-h5-fe/src/components/edit/Slider/Layer.js
  ```js
class Layer extends PureComponent {

    constructor(props){
        super(props)
        this.state = {
            stage: props.stage,
            animatesCount: 0
        }

        this.contentRef = React.createRef()
        this.surfaceRef = React.createRef()
        this.trailerRef = React.createRef()
    }

    // 存储计算值
    memJson = memoize((stage) => stage.toJS())
  ```




### 序号: 35


  起止行号: 106 - 133
  代码路径: ./output/crm-h5-fe/src/components/edit/Main/Legend.js
  ```js
startAnimate = () => {
    const { animatesCount } = this.state
    const animate = this.memJson(this.props.stage).animates[animatesCount]

    if (!animate) { return }
    if (animate.play) {
        // 执行动画,需要先显示,无论是否隐藏
        const node = this.trailerRef.current
        node.style['visibility'] = 'visible'
        node.classList.add(animate.type)
    } else {
        // 不需要执行则查找下一个
        this.setState({
            animatesCount: animatesCount + 1,
        })
    }
}

animateEnd = (e, animate) => {
    const { animatesCount } = this.state
    const { animates } = this.memJson(this.props.stage)
    const node = this.trailerRef.current
    // 对退出类动画执行隐藏, 但编辑器不需要隐藏
    // if(hiddenType.includes(animate.type)){
    //     node.style['visibility'] = 'hidden'
    // }
    // 执行后清理动画
    node.classList.remove(animate.type)
  ```


  起止行号: 79 - 103
  代码路径: ./output/crm-h5-fe/src/components/edit/Slider/Layer.js
  ```js
startAnimate = () => {
    const { animatesCount } = this.state
    const animate = this.memJson(this.props.stage).animates[animatesCount]

    if(!animate){ return }
    if(animate.play){
        // 执行动画,需要先显示,无论是否隐藏
        const node = this.trailerRef.current
        node.style['visibility'] = 'visible'
        node.classList.add(animate.type)
    }else{
        // 不需要执行则查找下一个
        this.setState({
            animatesCount: animatesCount + 1,
        })
    }
}

animateEnd = (e, animate) => {
    const { animatesCount } = this.state
    const { animates } = this.memJson(this.props.stage)
    const node = this.trailerRef.current
    // 执行后清理动画
    node.classList.remove(animate.type)
    // 设置下一个
  ```




### 序号: 36


  起止行号: 188 - 199
  代码路径: ./output/crm-h5-fe/src/components/edit/Main/Legend.js
  ```js
if (stage.audioPlay) {
    setTimeout(() => {
        const node = this.contentRef.current
        const playBtn = node.previousSibling
        const pauseBtn = node.previousSibling.previousSibling
        // 有音频生成封面慢,阻塞请求等, 编辑界面不提供音频播放了
        // node.play()
        playBtn.classList.add('playing')
        playBtn.classList.add('audioPlay')
        pauseBtn.classList.remove('pausing')
    }, 0)
}
  ```


  起止行号: 123 - 134
  代码路径: ./output/crm-h5-fe/src/components/edit/Slider/Layer.js
  ```js
if(stageJson.audioPlay){
    setTimeout(()=>{
        const node = this.contentRef.current
        const playBtn = node.previousSibling
        const pauseBtn = node.previousSibling.previousSibling
        // 有音频生成封面慢,阻塞请求等, 编辑界面不提供音频播放了
        // node.play()
        playBtn.classList.add('playing')
        playBtn.classList.add('audioPlay')
        pauseBtn.classList.remove('pausing')
    }, 0)
}
  ```




### 序号: 37


  起止行号: 227 - 236
  代码路径: ./output/crm-h5-fe/src/components/edit/Main/Legend.js
  ```js
render() {
    const stageJson = this.memJson(this.props.stage)
    const { stage, ...rest } = this.props
    const { animatesCount } = this.state
    const animate = stageJson.animates[animatesCount] || {}
    const trailerClass = classNames(
        'lg-trailer',
        'legend-components',
        'animated',
        'magictime',
  ```


  起止行号: 137 - 146
  代码路径: ./output/crm-h5-fe/src/components/edit/Slider/Layer.js
  ```js
render() {
    const stageJson = this.memJson(this.props.stage)
    const {stage, ...rest} = this.props
    const { animatesCount } = this.state
    const animate = stageJson.animates[animatesCount] || {}
    const trailerClass = classNames(
        'lg-trailer',
        'legend-components',
        'animated',
        'magictime',
  ```




### 序号: 38


  起止行号: 69 - 75
  代码路径: ./output/crm-h5-fe/src/components/edit/Medias/MediaPanel.js
  ```js
addGroup = async (args) => {
    const res = await Fetch({
        url: `/api/media/addGroup`,
        args,
    })
    if(res){
        this.props.sendMessage(actions.MESSAGE_SUCCESS, operationMsg[1])
  ```


  起止行号: 80 - 86
  代码路径: ./output/crm-h5-fe/src/components/edit/Medias/MediaPanel.js
  ```js
delGroup = async (args) => {
    const res = await Fetch({
        url: `/api/media/delGroup`,
        args,
    })
    if(res){
        this.props.sendMessage(actions.MESSAGE_SUCCESS, operationMsg[3])
  ```




### 序号: 39


  起止行号: 21 - 34
  代码路径: ./output/crm-h5-fe/src/components/edit/Medias/index.js
  ```js
class Media extends Component {

    constructor(props){
        super(props)
        this.mediaType = 100
        this.state = {
            groupId: '',
            groups: [],
            total: 0,
            items: [],
        }
    }

    componentDidMount(){
  ```


  起止行号: 26 - 41
  代码路径: ./output/crm-h5-fe/src/components/plugins/BasePlugin/Panel.js
  ```js
class PluginPanel extends Component {

    constructor(props){
        super(props)
        this.mediaType = 100
        this.state = {
            groupId: '',
            groups: [],
            total: 0,
            items: [],
        }
    }

    componentDidMount(){

    }
  ```




### 序号: 40


  起止行号: 184 - 201
  代码路径: ./output/crm-h5-fe/src/components/plugins/ComponentsPlugin/handles.js
  ```js
        const handles = {
            '1': {},                        // 编辑Tab
            '2': {},                        // 外观Tab
            '3': {},                        // 动画Tab
            '4': {},                        // 事件Tab
        }

        autoTypes.forEach((type) => {
            handles['1'][type] = this.edition
            handles['2'][type] = this.appearance
            handles['3'][type] = this.animates
            handles['4'][type] = this.events
        })
        return handles
    }
}

export default ComponentsHandles
  ```


  起止行号: 92 - 109
  代码路径: ./output/crm-h5-fe/src/components/plugins/FramePlugin/handles.js
  ```js
        const handles = {
            '1': {},                        // 编辑Tab
            '2': {},                        // 外观Tab
            '3': {},                        // 动画Tab
            '4': {},                        // 事件Tab
        }

        autoTypes.forEach((type)=>{
            handles['1'][type] = this.edition
            handles['2'][type] = this.appearance
            handles['3'][type] = this.animates
            handles['4'][type] = this.events
        })
        return handles
    }
}

export default FrameHandles
  ```




### 序号: 41


  起止行号: 81 - 88
  代码路径: ./output/crm-h5-fe/src/components/plugins/FramePlugin/creaters.js
  ```js
creaters['autoFrame'] = ({ stage, stages, contentRef, LegendComponents, ComponentHandles, ...rest }) => {
    const stageJson = stage.toJS()
    const stageIds = stage.get('subSet')
    const viewWidth = stageJson.viewWidth || getViewSize(stageJson).viewWidth
    const viewHeight = stageJson.viewHeight || getViewSize(stageJson).viewHeight

    return (
        <AutoFrame
  ```


  起止行号: 115 - 122
  代码路径: ./output/crm-h5-fe/src/components/plugins/FramePlugin/creaters.js
  ```js
creaters['fixedFrame'] = ({ stage, stages, contentRef, LegendComponents, ComponentHandles, ...rest }) => {
    const stageJson = stage.toJS()
    const stageIds = stage.get('subSet')
    const viewWidth = stageJson.viewWidth || getViewSize(stageJson).viewWidth
    const viewHeight = stageJson.viewHeight || getViewSize(stageJson).viewHeight

    return (
        <FixedFrame
  ```




### 序号: 42


  起止行号: 10 - 14
  代码路径: ./output/crm-h5-fe/src/containers/Root.dev.js
  ```js
const Root = ({ store, history }) => (
    <Provider store={store}>
        <LocaleProvider locale={zh_CN}>
            <ConnectedRouter history={history}>
                <div id="Wrapper">
  ```


  起止行号: 10 - 14
  代码路径: ./output/crm-h5-fe/src/containers/Root.prod.js
  ```js
const Root = ({ store, history }) => (
    <Provider store={store}>
        <LocaleProvider locale={zh_CN}>
            <ConnectedRouter history={history}>
                <Switch>
  ```




suffix
42 instance(s) found.
