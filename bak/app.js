// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 检查是否已登录
    const token = wx.getStorageSync('token');
    if (!token) {
      wx.redirectTo({ url: '/pages/login/login' });
      return;
    }

    // 已登录则可在此处获取用户信息
    // 可选：自动刷新用户信息
    // wx.request({
    //   url: 'https://your-api-domain.com/api/user/info',
    //   method: 'GET',
    //   header: { 'Authorization': token },
    //   success: res => {
    //     if (res.data.code === 0) {
    //       wx.setStorageSync('userInfo', res.data.data);
    //     }
    //   }
    // });
  },
  globalData: {
    userInfo: null
  }
})
