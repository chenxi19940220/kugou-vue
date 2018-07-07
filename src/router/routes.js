import NavBar from '@/components/nav-bar/index'

let NewSong = () => import('@/views/new-song/new-song')
let Rank = () => import('@/views/rank/rank')
let Plist = () => import('@/views/plist/plist')
let Singer = () => import('@/views/singer/singer')

export let routes = [
  {
    path: '/',
    title: '新歌',
    name: 'NewSong',
    components: {
      nav: NavBar,
      default: NewSong
    }
  },
  {
    path: '/rank',
    title: '排行',
    name: 'Rank',
    components: {
      nav: NavBar,
      default: Rank
    }
  },
  {
    path: '/plist',
    title: '歌单',
    name: 'Plist',
    components: {
      nav: NavBar,
      default: Plist
    }
  },
  {
    path: '/singer',
    title: '歌手',
    name: 'Singer',
    components: {
      nav: NavBar,
      default: Singer
    }
  }
]
