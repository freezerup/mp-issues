// 获取设备信息
export function getSystemInfo() {
  return new Promise((resolve, reject) => {
    wx.getSystemInfo({
      success(res) {
        return resolve(res)
      },
      fail(res) {
        return reject(res)
      },
    })
  })
}

export function getStorageSync(key) {
  return wx.getStorageSync(key)
}
export function setStorageSync(key, data) {
  return wx.setStorageSync(key, data)
}
