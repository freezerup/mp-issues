// pages/swiper/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperData: [
      {
        url: "https://img.wzj.com/upload/goods-evaluate/40510/0b389ce5c60d6431fa4601b562ed179e.jpg",
        name: '第1张卡片',
      },
      {
        url: "https://img.wzj.com/upload/goods-evaluate/40510/f312a65d36f833617546ad4ec5d64789.jpg",
        name: '第2张卡片',
      },
      {
        url: "https://img.wzj.com/homer/comment/PIC2262040011761.jpg",
        name: '第3张卡片',
      },
      {
        url: "https://img.wzj.com/homer/comment/PIC2262039594456.jpg",
        name: '第4张卡片',
      },
      {
        url: "https://img.wzj.com/upload/homer/410ed1cec2aa45c57591f403a7f578caf5a105ac.jpg",
        name: '第5张卡片',
      },
      {
        url: "https://img.wzj.com/homer/comment/PIC4241554434785.jpg",
        name: '第6张卡片',
      },
      {
        url: "https://img.wzj.com/upload/homer/bdb513f741d5a3886e8ab63d9e06c1820d5982e4.jpg",
        name: '第7张卡片',
      },
      {
        url: "https://img.wzj.com/upload/homer/e61afbf8d0f5fa83189c48a617a686fe72887bb7.jpg",
        name: '第8张卡片',
      },
      {
        url: "https://img.wzj.com/upload/homer/a31e3810c3176c210bea20cd3833020a7cecbb2f.jpg",
        name: '第9张卡片',
      },
      {
        url: "https://img.wzj.com/upload/homer/b882eac7f9a39d58048ca7c644ec17fee3f5531e.jpg",
        name: '第10张卡片',
      },
      {
        url: "https://img.wzj.com/upload/goods-evaluate/40510/0b389ce5c60d6431fa4601b562ed179e.jpg",
        name: '第11张卡片',
      },
      {
        url: "https://img.wzj.com/upload/goods-evaluate/40510/f312a65d36f833617546ad4ec5d64789.jpg",
        name: '第12张卡片',
      },
      {
        url: "https://img.wzj.com/homer/comment/PIC2262040011761.jpg",
        name: '第13张卡片',
      },
      {
        url: "https://img.wzj.com/homer/comment/PIC2262039594456.jpg",
        name: '第14张卡片',
      },
      {
        url: "https://img.wzj.com/upload/homer/410ed1cec2aa45c57591f403a7f578caf5a105ac.jpg",
        name: '第15张卡片',
      },
      {
        url: "https://img.wzj.com/homer/comment/PIC4241554434785.jpg",
        name: '第16张卡片',
      },
      {
        url: "https://img.wzj.com/upload/homer/bdb513f741d5a3886e8ab63d9e06c1820d5982e4.jpg",
        name: '第17张卡片',
      },
      {
        url: "https://img.wzj.com/upload/homer/e61afbf8d0f5fa83189c48a617a686fe72887bb7.jpg",
        name: '第18张卡片',
      },
      {
        url: "https://img.wzj.com/upload/homer/a31e3810c3176c210bea20cd3833020a7cecbb2f.jpg",
        name: '第19张卡片',
      },
      {
        url: "https://img.wzj.com/upload/homer/b882eac7f9a39d58048ca7c644ec17fee3f5531e.jpg",
        name: '第20张卡片',
      },
      {
        url: "https://img.wzj.com/upload/goods-evaluate/40510/0b389ce5c60d6431fa4601b562ed179e.jpg",
        name: '第21张卡片',
      },
      {
        url: "https://img.wzj.com/upload/goods-evaluate/40510/f312a65d36f833617546ad4ec5d64789.jpg",
        name: '第22张卡片',
      },
      {
        url: "https://img.wzj.com/homer/comment/PIC2262040011761.jpg",
        name: '第23张卡片',
      },
      {
        url: "https://img.wzj.com/homer/comment/PIC2262039594456.jpg",
        name: '第24张卡片',
      },
      {
        url: "https://img.wzj.com/upload/homer/410ed1cec2aa45c57591f403a7f578caf5a105ac.jpg",
        name: '第25张卡片',
      },
      {
        url: "https://img.wzj.com/homer/comment/PIC4241554434785.jpg",
        name: '第26张卡片',
      },
      {
        url: "https://img.wzj.com/upload/homer/bdb513f741d5a3886e8ab63d9e06c1820d5982e4.jpg",
        name: '第27张卡片',
      },
      {
        url: "https://img.wzj.com/upload/homer/e61afbf8d0f5fa83189c48a617a686fe72887bb7.jpg",
        name: '第28张卡片',
      },
      {
        url: "https://img.wzj.com/upload/homer/a31e3810c3176c210bea20cd3833020a7cecbb2f.jpg",
        name: '第29张卡片',
      },
      {
        url: "https://img.wzj.com/upload/homer/b882eac7f9a39d58048ca7c644ec17fee3f5531e.jpg",
        name: '第30张卡片',
      },
      {
        url: "https://img.wzj.com/upload/goods-evaluate/40510/0b389ce5c60d6431fa4601b562ed179e.jpg",
        name: '第1张卡片',
      },
      {
        url: "https://img.wzj.com/upload/goods-evaluate/40510/f312a65d36f833617546ad4ec5d64789.jpg",
        name: '第2张卡片',
      },
      {
        url: "https://img.wzj.com/homer/comment/PIC2262040011761.jpg",
        name: '第3张卡片',
      },
      {
        url: "https://img.wzj.com/homer/comment/PIC2262039594456.jpg",
        name: '第4张卡片',
      },
      {
        url: "https://img.wzj.com/upload/homer/410ed1cec2aa45c57591f403a7f578caf5a105ac.jpg",
        name: '第5张卡片',
      },
      {
        url: "https://img.wzj.com/homer/comment/PIC4241554434785.jpg",
        name: '第6张卡片',
      },
      {
        url: "https://img.wzj.com/upload/homer/bdb513f741d5a3886e8ab63d9e06c1820d5982e4.jpg",
        name: '第7张卡片',
      },
      {
        url: "https://img.wzj.com/upload/homer/e61afbf8d0f5fa83189c48a617a686fe72887bb7.jpg",
        name: '第8张卡片',
      },
      {
        url: "https://img.wzj.com/upload/homer/a31e3810c3176c210bea20cd3833020a7cecbb2f.jpg",
        name: '第9张卡片',
      },
      {
        url: "https://img.wzj.com/upload/homer/b882eac7f9a39d58048ca7c644ec17fee3f5531e.jpg",
        name: '第10张卡片',
      },
      {
        url: "https://img.wzj.com/upload/goods-evaluate/40510/0b389ce5c60d6431fa4601b562ed179e.jpg",
        name: '第11张卡片',
      },
      {
        url: "https://img.wzj.com/upload/goods-evaluate/40510/f312a65d36f833617546ad4ec5d64789.jpg",
        name: '第12张卡片',
      },
      {
        url: "https://img.wzj.com/homer/comment/PIC2262040011761.jpg",
        name: '第13张卡片',
      },
      {
        url: "https://img.wzj.com/homer/comment/PIC2262039594456.jpg",
        name: '第14张卡片',
      },
      {
        url: "https://img.wzj.com/upload/homer/410ed1cec2aa45c57591f403a7f578caf5a105ac.jpg",
        name: '第15张卡片',
      },
      {
        url: "https://img.wzj.com/homer/comment/PIC4241554434785.jpg",
        name: '第16张卡片',
      },
      {
        url: "https://img.wzj.com/upload/homer/bdb513f741d5a3886e8ab63d9e06c1820d5982e4.jpg",
        name: '第17张卡片',
      },
      {
        url: "https://img.wzj.com/upload/homer/e61afbf8d0f5fa83189c48a617a686fe72887bb7.jpg",
        name: '第18张卡片',
      },
      {
        url: "https://img.wzj.com/upload/homer/a31e3810c3176c210bea20cd3833020a7cecbb2f.jpg",
        name: '第19张卡片',
      },
      {
        url: "https://img.wzj.com/upload/homer/b882eac7f9a39d58048ca7c644ec17fee3f5531e.jpg",
        name: '第20张卡片',
      },
      {
        url: "https://img.wzj.com/upload/goods-evaluate/40510/0b389ce5c60d6431fa4601b562ed179e.jpg",
        name: '第21张卡片',
      },
      {
        url: "https://img.wzj.com/upload/goods-evaluate/40510/f312a65d36f833617546ad4ec5d64789.jpg",
        name: '第22张卡片',
      },
      {
        url: "https://img.wzj.com/homer/comment/PIC2262040011761.jpg",
        name: '第23张卡片',
      },
      {
        url: "https://img.wzj.com/homer/comment/PIC2262039594456.jpg",
        name: '第24张卡片',
      },
      {
        url: "https://img.wzj.com/upload/homer/410ed1cec2aa45c57591f403a7f578caf5a105ac.jpg",
        name: '第25张卡片',
      },
      {
        url: "https://img.wzj.com/homer/comment/PIC4241554434785.jpg",
        name: '第26张卡片',
      },
      {
        url: "https://img.wzj.com/upload/homer/bdb513f741d5a3886e8ab63d9e06c1820d5982e4.jpg",
        name: '第27张卡片',
      },
      {
        url: "https://img.wzj.com/upload/homer/e61afbf8d0f5fa83189c48a617a686fe72887bb7.jpg",
        name: '第28张卡片',
      },
      {
        url: "https://img.wzj.com/upload/homer/a31e3810c3176c210bea20cd3833020a7cecbb2f.jpg",
        name: '第29张卡片',
      },
      {
        url: "https://img.wzj.com/upload/homer/b882eac7f9a39d58048ca7c644ec17fee3f5531e.jpg",
        name: '第30张卡片',
      }
    ],
    currentIndex: 0,
  },
  handleChangeSwiper(event) {
    const { current }	 = event.detail
    this.setData({
      currentIndex: current,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})