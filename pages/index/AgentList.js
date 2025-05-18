Page({
  data: {
    agents: [], // 智能体列表
    swipeIndex: null, // 当前滑开的项
    startX: 0
  },
  onTouchStart(e) {
    this.setData({ startX: e.touches[0].clientX });
  },
  onTouchMove(e) {
    const moveX = e.touches[0].clientX;
    const diff = this.data.startX - moveX;
    if (diff > 40) { // 左滑阈值
      this.setData({ swipeIndex: e.currentTarget.dataset.index });
    }
    if (diff < -40) { // 右滑关闭
      this.setData({ swipeIndex: null });
    }
  },
  onTouchEnd() {
    // 可选：补充逻辑
  },
  onDelete(e) {
    const idx = e.currentTarget.dataset.index;
    let agents = this.data.agents;
    agents.splice(idx, 1);
    this.setData({ agents, swipeIndex: null });
    wx.setStorageSync('agents', agents);
  }
})
