const http = uni.$u.http

// 智能体列表
export const agentList = (params) => http.get('/agent/list', params)

// 添加智能体
export const addAgent = (params, config = {}) => http.post('/agent', params, config)

// 设备列表
export const deviceList = (params, config = {}) => http.get('/device/bind/' + params.agentId, config)

// 解绑设备
export const unbindDevice = (params, config = {}) => http.post('/device/unbind', params, config)

// 绑定设备
export const bindDevice = (params, config = {}) => http.post('/device/bind/' + params.agentId + '/' + params.code,
	config)

// 登录
export const login = (params, config = {}) => http.post('/user/login', params, config)

// 注册
export const register = (params, config = {}) => http.post('/user/register', params, config)

// 最新，最热
export const topVideo = (params) => http.get('/video/video', params)

// 关注
export const follow = (params) => http.post('/video/follow', params)

// 取消关注
export const cancelFollow = (params) => http.delete('/video/follow/' + params.vId)

// 视频详情
export const showVideo = (params, config = {}) => http.get('/video/video/' + params.vId, config)

// 拉取最新视频
export const pullVideo = (params) => http.post('/video/video/pull/' + params.vId)

// 视频项详情
export const showItem = (params) => http.get('/video/item/' + params.itemId)

// 重拉当前视频项
export const relaunchItem = (params) => http.post('/video/item/' + params.itemId + '/relaunch')

// 保存观看历史
export const saveViewHis = (params, config = {}) => http.post('/video/view-his', params, config)

// 保存观看历史
export const jump = (params) => http.get('/video/item/jump', params)

// 保存反馈
export const saveFeedback = (params) => http.post('/video/feedback', params)

// 最近更新
export const lastUpdated = (params) => http.get('/video/video/last-updated', params)

// 我的关注
export const myFollow = (params) => http.get('/video/follow', params)

// 个人信息
export const personal = (params) => http.get('/user/user/personal', params)

// 合并列表
export const mergeList = (params) => http.get('/video/video/merge-list', params)

// 合并申请
export const mergeApply = (params) => http.post('/video/application-record', params)

// 设置视频
export const settingVideo = (params) => http.put('/video/video/' + params.vId, params)

// 获取广告入口
export const ads = (params) => http.get('/video/video/ads', params)

// 获取需要页面解密URL
export const getEncryptUrlList = (params) => http.get('/video/video/encrypt-list', params)

// 将解密的URL设置回去
export const setDecryptUrl = (params, config = {}) => http.post('/video/video/decrypt-url', params, config)

// 获取登录二维码
export const loginQrCode = (params) => http.get('/wechat/qrcode', params)

// 扫码登录
export const loginByCode = (params, config = {}) => http.post('/user/user/login-by-code', params, config)

// 专属登录
export const loginByUid = (params, config = {}) => http.post('/user/user/login-by-uid', params, config)

// wxconfig签名
export const jsConfig = (params) => http.get('/wechat/js-config', params)