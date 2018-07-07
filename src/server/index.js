import axios from 'axios'
import store from '@/store'

let oneLeve = axios.create({
  responseType: 'json',
  transformRequest (data) {
    console.log(data)
    // 发送请求
    store.commit('updatedIsLoading', true)
    return data
  },
  transformResponse (data) {
    console.log(data)
    store.commit('updatedIsLoading', false)
    let o = {}
    if (data.list) {
      o.data = data.list
      o.origin = 'singer'
    } else if (data.banner) {
      o.data = data.data
      o.banner = data.banner
      o.origin = 'new-song'
    } else if (data.rank) {
      o.data = data.rank.list
      o.origin = 'rank'
    } else if (data.plist) {
      o.data = data.plist.list.info
      o.origin = 'plist'
    } else if (data.singers) {
      o.data = data.singers.list.info
      o.origin = 'singers-list'
    } else if (data.songs) {
      o.data = data.songs.list
      o.info = data.info
      o.origin = 'singers-info'
    }
    return o
  }
})

// 获取banner和新歌
export const getNewSongs = (item) => {
  // console.log(item)
  return oneLeve('/proxy/?json=true', { data: item })
}

// 获取排行数据
export const getRankLists = (item) => {
  // console.log(item)
  return oneLeve('/proxy/rank/list?json=true', {data: item})
}
// 获取歌单数据
export const getPlists = (item) => {
  // console.log(item)
  return oneLeve('/proxy/plist/index?json=true', {data: item})
}

// 获取歌手分类数据
export const getSingers = (item) => {
  return oneLeve('/proxy/singer/class?json=true', {data: item})
}

// 根据歌手分类id，获取歌手分类歌手

export const getSingerList = (params = {classid: ''}) => {
  return oneLeve(`/proxy/singer/list/${params.classid}?json=true`)
}

// 根据歌手id，获取歌手歌曲

export const getSingerInfo = (params = { singerid: '' }) => {
  return oneLeve(`/proxy/singer/info/${params.singerid}?json=true`)
}
