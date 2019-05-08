import { setStorageSync, getStorageSync, removeStorageSync } from './wxTool'

// 设备信息
export function getSystemInfoLocal(opt) {
  const systemInfo = getStorageSync('system_info')
  if (opt && systemInfo) {
    return systemInfo[opt]
  }
  return systemInfo
}

export function setSystemInfoLocal(opt) {
  setStorageSync('system_info', opt)
}

// 最低微信版本7.0.0支持自定义标题栏
export function isSupportNavigation() {
  return parseInt(getSystemInfoLocal('version') || 0) >= 6
}

// 胶囊信息
export function getMenuButtonBoundingClientRectLocal(opt) {
  const menuButtonBoundingClientRect = getStorageSync('menu_button_bounding')
  if (opt && menuButtonBoundingClientRect) {
    return menuButtonBoundingClientRect[opt]
  }
  return menuButtonBoundingClientRect
}

export function setMenuButtonBoundingClientRectLocal(opt) {
  setStorageSync('menu_button_bounding', opt)
}