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
  const [spot, setSpot] = useState([
    {
      id: 19,
      name: '國立故宮博物院',
      name_zh: null,
      open_status: 1,
      introduction:
        '國立故宮博物院於1965年在外雙溪落成，中國宮殿式的建築，一至三樓為展覽陳列空間，四樓為休憩茶座「三希堂」，藏有全世界最多的中華藝術寶藏，收藏品主要承襲自宋、元、明、清四朝，幾乎涵蓋了整部五千年的中國歷史，數量達65萬多件，國立故宮博物院擁有「中華文化寶庫」的美名。\r\n\r\n國立故宮博物院庋藏中國歷代文物，其源於北平故宮者，皆出自遜清內府；原屬中央博物院籌備處者，多係古物陳列所舊藏，為熱河、瀋陽行宮所有。因此，今日國立故宮博物院典藏主體，實匯集北平、熱河、瀋陽三處清宮之文物。\r\n\r\n國立故宮博物院除了展覽品豐富以外，提供專業導覽，並定期舉辦各類文物研習課程、專題演講及巡迴展出活動，出版百種以上的刊物及專輯，實為世界的文化寶地，國立故宮博物院是來臺灣旅遊的必訪之地。\r\n\r\n(部分資料來源：國立故宮博物院)',
      open_time:
        '國立故宮博物院北部院區自109年7月1日起延續開放時間調整措施：開放時間為每週二至週日09:00～17:00，每週一休館，取消每日及週末延長開館時間，同時暫停張大千紀念館對外開放。圖書文獻館自2020年10月19日(一)起至2021年1月底暫停對外開放。\r\n\r\n各項措施調整時間，將參考中央流行疫情指揮中心相關指示辦理，請隨時關注國立故宮博物院官網最新消息。造成您的不便，尚請見諒，感謝您的配合！',
      zipcode: '111',
      distric: '士林區',
      address: '111 臺北市士林區至善路二段221號',
      tel: '+886-2-28812021',
      fax: '',
      email: 'service@npm.gov.tw',
      months: '01,07,02,08,03,09,04,10,05,11,06,12',
      nlat: 25.10236,
      elong: 121.54849,
      official_site: 'https://www.npm.gov.tw/',
      facebook: 'https://www.facebook.com/npmgov/',
      ticket: '門票及各展區開放時間依官方網站公告為主。',
      remind:
        '※本景點為【士林北藝-無圍牆博物館】景點範圍\r\n\r\n＊免費參觀時間：1月1日元旦、元宵節、5月18日國際博物館日、9月27日世界觀光日、10月10日國慶日、10月17日台灣文化日。',
      staytime: '2.5-3.5小時',
      modified: '2021-01-15 15:01:17 +08:00',
      url: 'https://www.travel.taipei/zh-tw/attraction/details/19',
      category: [
        {
          id: 13,
          name: '歷史建築',
        },
        {
          id: 15,
          name: '藝文館所',
        },
        {
          id: 19,
          name: '親子共遊',
        },
        {
          id: 20,
          name: '北北基景點',
        },
        {
          id: 25,
          name: '無障礙旅遊推薦景點',
        },
      ],
      target: [
        {
          id: 61,
          name: '親子共學',
        },
        {
          id: 62,
          name: '校外教學',
        },
      ],
      service: [
        {
          id: 141,
          name: '無障礙設施',
        },
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
        {
          id: 147,
          name: '停車場',
        },
        {
          id: 148,
          name: '失物招領',
        },
        {
          id: 149,
          name: '廣播服務',
        },
        {
          id: 150,
          name: '寄物櫃',
        },
      ],
      friendly: [
        {
          id: 387,
          name: '英語友善',
        },
        {
          id: 388,
          name: '日語友善',
        },
        {
          id: 389,
          name: '韓語友善',
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
          id: 400,
          name: '哺(集)乳友善',
        },
        {
          id: 401,
          name: '穆斯林友善',
        },
      ],
      images: [
        {
          src: 'https://www.travel.taipei/image/63465',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/63471',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/163309',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/163310',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/163311',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/163312',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/163313',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/163314',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/163315',
          subject: '',
          ext: '.jpg',
        },
        {
          src: 'https://www.travel.taipei/image/163317',
          subject: '',
          ext: '.jpg',
        },
      ],
      files: [],
      links: [
        {
          src: 'https://www.npm.gov.tw/Article.aspx?sNo=02007001',
          subject: '門票及開放時間',
        },
      ],
    },
  ])
  // const { attractions, setAttractions } = props
  const { id } = useParams()
  console.log(id)
  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await axios.get(requests.fetchAllAttractions, {})
  //     setSpot(response.data.data)
  //     return response
  //   }
  //   fetchData()
  // const index = attractions.findIndex((el) => el.id === 1554)
  // //   console.log(attractions[0])
  // if (index > -1) {
  //   setSpot(attractions[index])
  // }
  // console.log(index)
  // console.log(spot)
  // }, [])

  return (
    // <>
    //   <h5>hi{id}</h5>
    // </>

    <Container maxWidth={false} className="attractions-list-container">
      <Banner Icon={LocationOnRoundedIcon} bannerInfo={spot[0]} />
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
          <ImageSlider images={spot[0].images} />
          <Features
            targets={spot[0].target}
            categories={spot[0].category}
            services={spot[0].service}
            friendly={spot[0].friendly}
          />
          <DetailInfo attraction={spot[0]} />
        </div>
        <div className="detail-right">
          <Location attraction={spot[0]} />
          <Direction attraction={spot[0]} />
          <Recommendations attraction={spot[0]} />
        </div>
      </div>
    </Container>
  )
}

export default withRouter(AttractionDetail)
