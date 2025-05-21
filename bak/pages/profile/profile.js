Page({
  data: {
    userInfo: {
      avatarUrl: '',
      nickName: '',
      phone: ''
    }
  },
  onShow() {
    // 假设用户信息保存在本地缓存 userInfo
    const userInfo = wx.getStorageSync('userInfo') || {}
    this.setData({
      userInfo: {
        avatarUrl: userInfo.avatarUrl || '',
        nickName: userInfo.nickName || '',
        phone: userInfo.phone || ''
      }
    })
  },
  onEditProfile() {
    wx.showToast({ title: '编辑资料功能待实现', icon: 'none' })
  },
  onLogout() {
    wx.showModal({
      title: '提示',
      content: '确定要退出登录吗？',
      success: (res) => {
        if (res.confirm) {
          wx.removeStorageSync('userInfo')
          wx.showToast({ title: '已退出登录', icon: 'none' })
          // 可跳转到登录页
        }
      }
    })
  }
})