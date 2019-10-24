
Component({
  properties: {
    isFixed: {
      type: Boolean,
      value: false,
    },
    cursorSpacing: {
      type: Number,
      value: 0,
    },
    focus: {
      type: Boolean,
      value: false,
    },
    isAutoFocus: {
      type: Boolean,
      value: false,
    },
    fixedHeight: {
      type: Number,
      observer(val) {
        if (val) {
          this.setData({
            height: val,
          })
        }
      },
    },
    content: String,
    maxLength: Number,
    placeholder: String,
    disabled: {
      type: Boolean,
      value: false,
    },
    maxLineCount: Number, // 最大行数，超出则滚动
    fontSize: {
      type: Number,
      value: 26,
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    autoHeight: false,
    height: 40,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    bindTextareaInput(event) {
      this.triggerEvent('changeValue', { value: event.detail.value, type: 'input' })
    },
    bindTextareaBlur(event) {
      this.triggerEvent('changeValue', { value: event.detail.value, type: 'blur' })
    },
    bindTextareaFocus(event) {
      this.triggerEvent('getKeywordHeight', event.detail.height)
    },
    bindTextareaLineChange(event) {
      const { maxLineCount, fixedHeight } = this.data
      // 设置了固定高度
      if (fixedHeight) return
      const { lineCount = 1, heightRpx = 0 } = event.detail
      if (lineCount === 1) {
        this.data.maxHeight = maxLineCount * heightRpx
      }
      this.setData({
        height: this.data.maxHeight > heightRpx ? heightRpx : this.data.maxHeight,
        autoHeight: maxLineCount - lineCount >= 0,
      })
    },
  },
})
