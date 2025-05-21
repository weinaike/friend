// index.js
Page({
  data: {
    agents: [],
    movableX: [], // 每个智能体项的滑动距离
    showDeleteIndex: null // 当前显示删除按钮的智能体索引
  },
  onShow() {
    const agents = wx.getStorageSync('agents') || []
    this.setData({
      agents,
      movableX: new Array(agents.length).fill(0),
      showDeleteIndex: null
    })
  },
  onCreateAgent() {
    console.log('点击新建智能体')
    wx.navigateTo({
      url: '/pages/index/agent'
    })
  },
  onEditAgent(e) {
    const index = e.currentTarget.dataset.index
    console.log('点击编辑智能体', index)
    // 只有未显示删除按钮时才进入编辑
    if (this.data.showDeleteIndex === null) {
      wx.navigateTo({
        url: `/pages/index/agent?edit=1&index=${index}`
      })
    }
  },
  onDeleteAgent(e) {
    const index = e.currentTarget.dataset.index
    let agents = this.data.agents
    wx.showModal({
      title: '提示',
      content: `确定删除“${agents[index].name}”吗？`,
      success: (res) => {
        if (res.confirm) {
          agents.splice(index, 1)
          this.setData({ agents, showDeleteIndex: null })
          wx.setStorageSync('agents', agents)
          wx.showToast({ title: '已删除', icon: 'none' })
        }
      }
    })
  },
  onMovableChange(e) {
    const index = e.currentTarget.dataset.index
    const x = e.detail.x
    const movableX = this.data.movableX
    movableX[index] = x // 修正变量名错误
    // 只有左滑超过-60才显示删除按钮
    if (x < -60) {
      this.setData({ showDeleteIndex: index })
    } else if (x >= 0 && this.data.showDeleteIndex === index) {
      this.setData({ showDeleteIndex: null })
    }
    this.setData({ movableX })
  },
  onMovableTouchEnd(e) {
    const index = e.currentTarget.dataset.index
    const x = this.data.movableX[index]
    // 左滑超过-60rpx则固定显示删除按钮，否则回弹
    if (x < -60) {
      this.setData({
        ["movableX["+index+"]"]: -120,
        showDeleteIndex: index
      })
    } else {
      this.setData({
        ["movableX["+index+"]"]: 0,
        showDeleteIndex: null
      })
    }
  }
})
