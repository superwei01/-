//index.js
//获取应用实例

var util = require('../../utils/weatherUtil.js');
var bmap = require('../../libs/bmap-wx.js');

Page({

  data: {
    // weather: {},
    weatherData : {}
  },
  onLoad: function () {
    
    var that = this;

    // 新建百度地图对象
    var bMap = new bmap.BMapWX({
      ak: 'aT7SqpTBmlvPb8y5bTtTXL7aXmei5eqM'
    });

    var fail = function(data){
      console.log(data);
    }

    var success = function(data){
      var weatherData = data.currentWeather[0];
      var weather = {};
      var current = {};
      // 当前城市
      weather.city = weatherData.currentCity;
      // 当前日期
      current.formattedDate = weatherData.date;
      // 当前时间（时分秒）
      current.formattedTime = weatherData.date;
      // 现在温度
      current.temperature = weatherData.temperature;
      // 风力
      current.wind = weatherData.wind

      weather.current = current;


      that.setData({
        weatherData: weather
      }); 

    }

    // 发起weather请求 
    bMap.weather({
      fail: fail,
      success: success
    }); 

    // util.loadWeatherData(function(data){
      
    //   console.log(data);
    //   that.setData({
    //     weather: data
    //   });
    //   // that.data.weather = data;

    // });    

  }

})
