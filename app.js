import { getSystemInfo } from './utils/wxTool'
import { setSystemInfoLocal, getSystemInfoLocal, getMenuButtonBoundingClientRectLocal, setMenuButtonBoundingClientRectLocal } from './utils/storage'
App({
  onLaunch: function (options) {
    // 设备系统信息
    if (!getSystemInfoLocal()) {
      getSystemInfo().then(res => {
        setSystemInfoLocal(res)
      })
    }

    if (!getMenuButtonBoundingClientRectLocal()) {
      if (wx.getMenuButtonBoundingClientRect) {
        setMenuButtonBoundingClientRectLocal(Object.assign(wx.getMenuButtonBoundingClientRect(), { paddingBottom: 6 }))
      } else {
        // 低版本：默认iphone6
        setMenuButtonBoundingClientRectLocal({
          width: 87,
          height: 32,
          left: 278,
          top: 26,
          right: 365,
          bottom: 58,
          paddingBottom: 6
        })
      }
    }
  },
})