// pages/profile/profile.js
// ...existing code...

// pages/index/agent.js
Page({
  data: {
    name: '',
    age: '',
    gender: '',
    genderIndex: 2, // 0:男 1:女 2:保密
    nickname: '',
    deviceBound: false,
    deviceCode: '',
    showDeviceInput: false,
    showDeviceDetail: false,
    editIndex: null,
    level: '限时免费'
  },
  onLoad(options) {
    if (options.edit && options.index !== undefined) {
      const agents = wx.getStorageSync('agents') || []
      const idx = Number(options.index)
      const agent = agents[idx] || {}
      this.setData({
        name: agent.name || '',
        age: agent.age || '',
        gender: agent.gender || '',
        genderIndex: agent.gender === '男' ? 0 : agent.gender === '女' ? 1 : 2,
        nickname: agent.nickname || '',
        deviceBound: agent.deviceBound || false,
        level: agent.level || '限时免费',
        editIndex: idx
      })
    }
  },
  onInput(e) {
    const { field } = e.currentTarget.dataset
    this.setData({ [field]: e.detail.value })
  },
  onGenderChange(e) {
    const idx = e.detail.value
    const genderArr = ['男', '女', '保密']
    this.setData({
      gender: genderArr[idx],
      genderIndex: Number(idx)
    })
  },
  onSave() {
    const { name, age, gender, nickname, deviceBound, level, editIndex } = this.data
    if (!name) {
      wx.showToast({ title: '请输入智能体名称', icon: 'none' })
      return
    }
    let agents = wx.getStorageSync('agents') || []
    const agent = { name, age, gender, nickname, deviceBound, level }
    if (editIndex !== null) {
      agents[editIndex] = agent
    } else {
      agents.push(agent)
    }
    wx.setStorageSync('agents', agents)
    wx.showToast({ title: '保存成功', icon: 'success' })
    setTimeout(() => {
      wx.navigateBack()
    }, 500)
  },
  onBindDevice() {
    this.setData({ showDeviceInput: true })
  },
  onDeviceCodeInput(e) {
    this.setData({ deviceCode: e.detail.value })
  },
  onDeviceCodeConfirm() {
    // 简单模拟验证码为“123456”
    if (this.data.deviceCode === '123456') {
      this.setData({ deviceBound: true, showDeviceInput: false, deviceCode: '' })
      wx.showToast({ title: '绑定成功', icon: 'success' })
    } else {
      wx.showToast({ title: '验证码错误', icon: 'none' })
    }
  },
  onDeviceCodeCancel() {
    this.setData({ showDeviceInput: false, deviceCode: '' })
  },
  onDeviceIconTap() {
    this.setData({ showDeviceDetail: true })
  },
  onCloseDeviceDetail() {
    this.setData({ showDeviceDetail: false })
  }
})
