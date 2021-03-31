import { useEffect, useState } from 'react'
import axios from './api/axios'
import requests from './api/requests'
import Banner from './components/Banner'
import ImageSlider from './components/ImageSlider'
import Features from './components/Features'
import DetailInfo from './components/DetailInfo'
import Location from './components/Location'
import Direction from './components/Direction'
import Recommendations from './components/Recommendations'
import { withRouter, useParams } from 'react-router-dom'
import Container from '@material-ui/core/Container'
import KeyboardBackspaceSharpIcon from '@material-ui/icons/KeyboardBackspaceSharp'
import './AttractionDetail.scss'
import LocationOnRoundedIcon from '@material-ui/icons/LocationOnRounded'

function AttractionDetail(props) {
  const [spot, setSpot] = useState({
    id: 351,
    name: '臺北市立兒童新樂園',
    name_zh: null,
    open_status: 1,
    introduction:
      '由臺北市政府打造的兒童新樂園，占地約5公頃，內有遊樂設施、免費遊戲區及如果兒童劇團負責的兒童劇場，假日還有精彩的免費表演。\r\n\r\n兒童新樂園是臺北都會區的親子樂園，共有13項遊樂設施，除了全新的水果摩天輪、幸福碰碰車、海洋總動員(音樂馬車)、小飛龍(龍鳳船)、宇宙迴旋(輻射飛椅)、銀河號(小火車)及轉轉咖啡杯以外，更比兒童育樂中心(兒童樂園)新增了6項好玩又有趣的雲霄飛車、飛天巴士、自由落體、海盜船、旋轉小飛機、和迴旋椅。\r\n\r\n兒童新樂園有4大特色，包含結合悠遊卡的消費模式，持悠遊卡即可驗票入園、搭乘遊樂設施及園內部分商店消費，園內增設悠遊卡加值機等，方便遊客一卡在手、悠遊樂園。此外，園區內設置美食街、便利超商、紀念品商店等20間販賣店；另規劃室內汽機車停車場及多元化室內親子遊戲空間(免費遊戲區、球池及投幣式遊戲機)，讓遊客不論是晴天或是雨天，都能在兒童新樂園盡情遊玩！\r\n\r\n兒童新樂園北側為基河路臨雙溪，東側為基河路臨美崙公園，南側為士商路臨科學教育館，未來遊客可搭捷運至劍潭站或士林站，再轉搭接駁公車。',
    open_time:
      '每日09:00~17:00。\r\n週六、寒暑假期間及連續假期（除收假日外）延長營運至20:00。\r\n週日或連假假期收假日延長營運至18:00。\r\n農曆除夕為休園日不對外開放。\r\n營運時間如有調整將另行公告。',
    zipcode: '111',
    distric: '士林區',
    address: '111 臺北市士林區承德路五段55號',
    tel: '+886-2-28333823#217',
    fax: '',
    email: '',
    months: '01,07,02,08,03,09,04,10,05,11,06,12',
    nlat: 25.09724,
    elong: 121.51494,
    official_site: 'https://www.tcap.taipei/Default.aspx',
    facebook: 'https://www.tcap.taipei/Default.aspx',
    ticket: '參考門票資訊連結',
    remind: '',
    staytime: '',
    modified: '2021-03-29 10:02:10 +08:00',
    url: 'https://www.travel.taipei/zh-tw/attraction/details/351',
    category: [
      {
        id: 19,
        name: '親子共遊',
      },
      {
        id: 20,
        name: '北北基景點',
      },
    ],
    target: [],
    service: [
      {
        id: 144,
        name: '餐飲',
      },
      {
        id: 145,
        name: '購物',
      },
      {
        id: 146,
        name: '公廁',
      },
    ],
    friendly: [
      {
        id: 387,
        name: '英語友善',
      },
      {
        id: 390,
        name: '行動裝置充電',
      },
      {
        id: 392,
        name: '無障礙友善服務',
      },
      {
        id: 393,
        name: '性別友善',
      },
      {
        id: 394,
        name: '信用卡/悠遊卡/第三方支付服務',
      },
      {
        id: 395,
        name: '素食友善',
      },
      {
        id: 396,
        name: '友善廁所',
      },
      {
        id: 398,
        name: 'WiFi友善',
      },
      {
        id: 399,
        name: '自行車友善',
      },
      {
        id: 400,
        name: '哺(集)乳友善',
      },
    ],
    images: [
      {
        src: 'https://www.travel.taipei/image/65604',
        subject: '',
        ext: '.jpg',
      },
      {
        src: 'https://www.travel.taipei/image/65605',
        subject: '',
        ext: '.jpg',
      },
      {
        src: 'https://www.travel.taipei/image/65606',
        subject: '',
        ext: '.jpg',
      },
      {
        src: 'https://www.travel.taipei/image/65607',
        subject: '',
        ext: '.jpg',
      },
      {
        src: 'https://www.travel.taipei/image/65598',
        subject: '',
        ext: '.jpg',
      },
      {
        src: 'https://www.travel.taipei/image/65599',
        subject: '',
        ext: '.jpg',
      },
      {
        src: 'https://www.travel.taipei/image/65600',
        subject: '',
        ext: '.jpg',
      },
      {
        src: 'https://www.travel.taipei/image/65601',
        subject: '',
        ext: '.jpg',
      },
      {
        src: 'https://www.travel.taipei/image/65602',
        subject: '',
        ext: '.jpg',
      },
      {
        src: 'https://www.travel.taipei/image/65603',
        subject: '',
        ext: '.jpg',
      },
    ],
    files: [],
    links: [
      {
        src: 'https://www.tcap.taipei/cp.aspx?n=EE083F2DED91AB99',
        subject: '門票資訊',
      },
    ],
  })
  console.log(spot)
  const { id } = useParams()
  useEffect(() => {
    let pageNow = 1
    function fetchData(pageNow) {
      let noDataFound = true
      axios
        .get(requests.fetchAllAttractions, {
          page: pageNow,
        })
        .then(
          (res) => {
            const response = res.data
            if (response.data.length > 0) {
              if (id !== undefined) {
                for (let i = 0; i < response.data.length; i++) {
                  if (+response.data[i].id === +id) {
                    noDataFound = false
                    console.log(response.data[i])
                    // setSpot(response.data[i])
                    return false
                  }
                }
              }
              pageNow++
              fetchData(pageNow)
              if (noDataFound) {
                // props.history.push('/')
                console.log('notfound')
              }
            }
          },
          (error) => {
            console.log('error', error)
          }
        )
    }
    fetchData(pageNow)
  }, [id])

  return (
    <Container maxWidth={false} className="attractions-list-container">
      <Banner Icon={LocationOnRoundedIcon} bannerInfo={spot} />
      <div
        onClick={() => {
          props.history.push('/')
        }}
        className="to-list-btn"
      >
        <KeyboardBackspaceSharpIcon />
        <span>回列表</span>
      </div>
      <div className="detail-flex">
        <div className="detail-left">
          <ImageSlider images={spot.images} />
          <Features
            targets={spot.target}
            categories={spot.category}
            services={spot.service}
            friendly={spot.friendly}
          />
          <DetailInfo attraction={spot} />
        </div>
        <div className="detail-right">
          <Location attraction={spot} />
          <Direction attraction={spot} />
          <Recommendations attraction={spot} />
        </div>
      </div>
    </Container>
  )
}

export default withRouter(AttractionDetail)
