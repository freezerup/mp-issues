import { isSupportNavigation, getSystemInfoLocal, getMenuButtonBoundingClientRectLocal } from '../../utils/storage'

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    fixed: {
      type: Boolean,
      value: true,
    },
    background: String,
    isTool: {
      type: Boolean,
      value: true,
    }
  },

  lifetimes: {
    attached() {
      if (isSupportNavigation()) {
        const { statusBarHeight = 0, windowWidth } = getSystemInfoLocal()
        const { width = 87, height = 32, right = 365, bottom = 82, paddingBottom } = getMenuButtonBoundingClientRectLocal()
        this.setData({
          statusBarHeight,
          capsuleHeight: height,
          capsuleWidth: width,
          capsulePaddingRight: windowWidth - right,
          navHeight: bottom + paddingBottom,
        })
      }
    },
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
