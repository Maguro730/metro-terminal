// 逐条核对的本地周边资料；来源说明见 docs/nearby-sources.md。
// 不代表实时营业状态；无可靠关联的旧条目已撤下，页面显示待核实提示。
// 英文用于辅助理解，未标注为场所统一官方译名；不提供出口、距离、时间或票价。
const nearbyReviewedOn = "2026-10-13";

const nearbySources = {
  "metroFacilities": {
    "title": "广州地铁：卫生间、母婴室和 AED 信息（2025年1月）",
    "url": "https://www.gz.gov.cn/attachment/7/7792/7792257/10198995.pdf",
    "note": "以第3–4页站外商业设施表核实车站关联，不引用步行时间。"
  },
  "baiyunTour": {
    "title": "白云区文旅部门：嘉禾望岗主题旅游线路（2026-02-04）",
    "url": "https://www.by.gov.cn/ywdt/mtxx/content/post_10675813.html",
    "note": "仅采用明确标出地铁站且无需换乘公交的地点；不采用笼统的嘉禾游玩线路关联。"
  },
  "yunmen": {
    "title": "新世界中国：云门 NEW PARK 项目与交通",
    "url": "https://www.nwcl.com.cn/property/developments/yunmennew-parkyunliyunyue",
    "note": "运营方明确关联嘉禾望岗。"
  },
  "parc": {
    "title": "天环 Parc Central：交通指引",
    "url": "https://www.parccentral.com.hk/zh-HK/directionsAndTravelling",
    "note": "运营方地铁交通指引。"
  },
  "parcPassage": {
    "title": "广州市国资委/广州地铁：体育西路地下通道",
    "url": "https://gzw.gz.gov.cn/qy/qydt/content/post_9188848.html",
    "note": "明确通往天环与天河南的既有地下通道。"
  },
  "grandview": {
    "title": "广州市文旅局：正佳广场",
    "url": "https://wglj.gz.gov.cn/ztmb/gzhyn/ajjq/4a/content/post_8929272.html",
    "note": "核实地点和用途。"
  },
  "tiyuArea": {
    "title": "广州市生态环境局：体育西路站周边（2026）",
    "url": "https://sthjj.gz.gov.cn/qxxx/thq/content/post_10833864.html",
    "note": "核实体育中心、正佳与车站的关联。"
  },
  "tiyuSports": {
    "title": "天河区政府：2026天河迎春花市交通指引",
    "url": "https://www.thnet.gov.cn/thdt/mtjj/content/post_10690452.html",
    "note": "体育中心与体育西路站的步行关联；不把临时花市作为常设地点。"
  },
  "bookCenter": {
    "title": "广州市政府：广州购书中心",
    "url": "https://www.gz.gov.cn/zlgz/tsgz/content/mpost_9969938.html",
    "note": "核实书店及位置。"
  },
  "bookLocation": {
    "title": "广州市招考办：天河路购书中心附近交通地址",
    "url": "https://gzzk.gz.gov.cn/zwgk/zkyw/content/post_9854367.html",
    "note": "结合购书中心地址与体育西路站交通地址判断附近关联；未引用距离。"
  },
  "southHub": {
    "title": "广州市交通运输局：广州南站接驳指南",
    "url": "https://jtj.gz.gov.cn/xwdt/gzdt/content/post_7104854.html",
    "note": "仅使用铁路枢纽及地铁关联；不沿用旧出租车位置。"
  },
  "panyuIntercity": {
    "title": "广州市政府：番禺城际站与广州南站换乘",
    "url": "https://www.gz.gov.cn/zwfw/zxfw/jtfw/content/post_9666864.html",
    "note": "番禺城际站位于广州南站地下，与番禺广场站不同。"
  },
  "coach": {
    "title": "广州市交通运输局：客运站基础信息",
    "url": "https://www.gz.gov.cn/zlgz/gzly/xlyf/content/post_8313356.html",
    "note": "核实南站枢纽客运站正式名称。"
  },
  "southTaxi": {
    "title": "广州市交通运输局：广州南站东广场新出租车场（2025-09）",
    "url": "https://jtj.gz.gov.cn/xwdt/gzdt/content/post_10436729.html",
    "note": "新上客区已启用，邻近汽车客运站；不显示距离。"
  },
  "airRail": {
    "title": "广州市交通运输局：空铁联运服务点（2025-01）",
    "url": "https://jtj.gz.gov.cn/xwdt/gzdt/content/post_10081454.html",
    "note": "只介绍南站服务柜台；不引用机场T1旧运营安排或巴士班次。"
  },
  "childrenPark": {
    "title": "广州市林业园林局：广州市儿童公园交通",
    "url": "https://lyylj.gz.gov.cn/zmhd/cjwt/gyjq/content/post_10908777.html",
    "note": "明确白云公园站。"
  },
  "capiland": {
    "title": "凯德官网：凯德广场·云尚项目介绍",
    "url": "https://www.capitaland.com/cn/zh/newsroom/CLI-announces-application-to-launch-inaugural-onshore-REIT-in-China.html",
    "note": "明确紧邻白云公园站、项目正在运营。"
  },
  "planning": {
    "title": "广州市科技局：城市规划展览中心",
    "url": "https://kjj.gz.gov.cn/kpzl/kpjd/content/post_2684005.html",
    "note": "明确白云文化广场站及展览路地址。"
  },
  "planningCurrent": {
    "title": "广州市文旅局：城市规划展览中心",
    "url": "https://wglj.gz.gov.cn/ztmb/gzhyn/ajjq/4a/content/post_8930903.html",
    "note": "补充开馆和展览用途。"
  },
  "parks": {
    "title": "广州市交通运输局：搭乘公共交通游公园指引",
    "url": "https://jtj.gz.gov.cn/xwdt/gzdt/content/post_8756799.html",
    "note": "逐行使用公园—地铁站对应表；不将小港公园误配到2号线萧岗站。"
  },
  "nanyue": {
    "title": "南越王博物院：参观指引",
    "url": "https://www.nywmuseum.org.cn/News/VisitIndex/undefined",
    "note": "王宫展区对应公园前，王墓展区对应越秀公园。"
  },
  "guangzhouMuseum": {
    "title": "广州博物馆：镇海楼展区交通指南",
    "url": "https://www.guangzhoumuseum.cn/website_cn/Web/Visit/VisitGuide.aspx?id=14",
    "note": "越秀公园内镇海楼展区，与其他分馆区分。"
  },
  "tower": {
    "title": "广州市文旅局：广州塔",
    "url": "https://wglj.gz.gov.cn/ztmb/gzhyn/ajjq/4a/content/post_8928935.html",
    "note": "景点存在；花城广场与海心沙隔江，不直接列作塔站周边。"
  },
  "haixinBridge": {
    "title": "广州市政府：海心桥",
    "url": "https://www.gz.gov.cn/xw/zwlb/bmdt/content/post_9034907.html",
    "note": "南接广州塔。"
  },
  "towerPromenade": {
    "title": "广州市住建局：广州塔滨水岸线开放（2025）",
    "url": "https://zfcj.gz.gov.cn/zwgk/zdlyxxgkzl/zdgz/content/post_10468477.html",
    "note": "确认广州塔与海心桥广场的既有慢行联系。"
  },
  "gdMuseum": {
    "title": "广东省博物馆：交通路线",
    "url": "https://www.gdmuseum.org.cn/col666/",
    "note": "官方列出珠江新城站步行路线；不声称出站即达。"
  },
  "library": {
    "title": "广州图书馆：交通位置",
    "url": "https://gzlib.org.cn/contactus/index.jhtml",
    "note": "官方列出珠江新城站与步行路线。"
  },
  "opera": {
    "title": "广州大剧院：联系方式",
    "url": "https://www.gzdjy.org/service.html?name=%25E8%2581%2594%25E7%25B3%25BB%25E6%2588%2591%25E4%25BB%25AC&rid=14406",
    "note": "核实珠江西路1号场馆位置。"
  },
  "huacheng": {
    "title": "广州市政府：珠江新城与花城广场空间关系",
    "url": "https://www.gz.gov.cn/zt/jrshts/2021n/gqj/zxxx/jt/content/post_7811714.html",
    "note": "仅使用站与广场位置，其他线路旧规划信息不入库。"
  },
  "taikoo": {
    "title": "太古汇官方：前往方法",
    "url": "https://www.taikoohui.com/zh-cn/about-us/how-to-get-here/",
    "note": "M层连通石牌桥站。"
  },
  "chimelong": {
    "title": "长隆欢乐世界：游客须知与到达交通",
    "url": "https://www.chimelong.com/gz/chimelongparadise/notice/",
    "note": "汉溪长隆步行前往欢乐世界；另列城际广州长隆站。"
  },
  "waterpark": {
    "title": "长隆水上乐园官网",
    "url": "https://www.chimelong.com/gz/waterpark/?from=group",
    "note": "季节性开放，必须保留运营季提醒。"
  },
  "chimelongTraffic": {
    "title": "长隆官方：广州园区交通",
    "url": "https://bk.chimelong.com/gz/traffic/type_2.html?tab=1",
    "note": "仅使用汉溪长隆与园区位置关系，不引用旧地铁运营线路/班次。"
  },
  "infinitus": {
    "title": "广州市规划资源局：14号线二期商业连接（2026-05）",
    "url": "https://ghzyj.gz.gov.cn/ywpd/cxgh/ghxkgsgb/gzyjfk/content/post_10815588.html",
    "note": "乐嘉路站连通无限极广场；鹤龙站的预留接口不视为已经开放。"
  },
  "airportClosure": {
    "title": "广州市交通运输局：T1封闭改造相关公交调整（2026-05）",
    "url": "https://jtj.gz.gov.cn/gkmlpt/content/10/10804/post_10804638.html",
    "note": "用于排除旧T1正常营业介绍；机场南站保留待核实提示。"
  },
  "hubs2026": {
    "title": "广州市交通运输局：2026秋季开学枢纽地铁服务",
    "url": "https://jtj.gz.gov.cn/xwdt/gzdt/content/post_10986461.html",
    "note": "确认铁路与机场枢纽站点关联；不将临时新生驿站入库。"
  },
  "rail2026": {
    "title": "广州市交通运输局：2026清明铁路枢纽交通保障",
    "url": "https://jtj.gz.gov.cn/gkmlpt/content/10/10756/post_10756521.html",
    "note": "确认广州站、广州东站铁路枢纽仍有运输服务。"
  },
  "airportT2": {
    "title": "广州市政府：2026机场航站楼轨道接驳",
    "url": "https://www.gz.gov.cn/zwfw/zxfw/jtfw/content/post_10690829.html",
    "note": "机场北对应T2，仅用于T2关联；不沿用早于T1封闭改造的T1营业信息。"
  }
};

const nearbyData = {
  "jiahe-wanggang": {
    "items": [
      {
        "nameZh": "云门 NEW PARK",
        "nameEn": "Yunmen NEW PARK",
        "typeZh": "商圈购物",
        "typeEn": "Shopping",
        "descriptionZh": "购物、餐饮与休闲综合体，运营方交通指引对应嘉禾望岗站。",
        "descriptionEn": "Shopping and dining complex served by Jiahe Wanggang station.",
        "sourceIds": [
          "yunmen"
        ]
      }
    ]
  },
  "tiyu-xilu": {
    "items": [
      {
        "nameZh": "天河城",
        "nameEn": "Teemall",
        "typeZh": "商圈购物",
        "typeEn": "Shopping",
        "descriptionZh": "车站附近的综合购物中心。",
        "descriptionEn": "Shopping mall near the station.",
        "sourceIds": [
          "metroFacilities"
        ]
      },
      {
        "nameZh": "天环 Parc Central",
        "nameEn": "Parc Central",
        "typeZh": "商圈购物",
        "typeEn": "Shopping",
        "descriptionZh": "可经体育西路站地下通道前往的购物中心。",
        "descriptionEn": "Shopping mall linked by an underground passage from Tiyu Xilu.",
        "sourceIds": [
          "parc",
          "parcPassage"
        ]
      },
      {
        "nameZh": "正佳广场",
        "nameEn": "Grandview Mall",
        "typeZh": "商圈购物",
        "typeEn": "Shopping",
        "descriptionZh": "天河路大型购物及文旅综合体；场内展馆请分别查询预约安排。",
        "descriptionEn": "Tianhe Road shopping and leisure complex. Check individual attractions for reservations.",
        "sourceIds": [
          "grandview",
          "tiyuArea"
        ]
      },
      {
        "nameZh": "天河体育中心",
        "nameEn": "Tianhe Sports Center",
        "typeZh": "景点文化",
        "typeEn": "Culture & attractions",
        "descriptionZh": "体育场馆与公共活动空间，赛事期间请关注入场安排。",
        "descriptionEn": "Sports and public activity venue. Event access may vary.",
        "sourceIds": [
          "tiyuSports"
        ]
      },
      {
        "nameZh": "广州购书中心",
        "nameEn": "Guangzhou Book Center",
        "typeZh": "景点文化",
        "typeEn": "Culture & attractions",
        "descriptionZh": "天河路图书零售与阅读场所，可结合商圈出行到访。",
        "descriptionEn": "Tianhe Road bookstore and reading destination.",
        "sourceIds": [
          "bookCenter",
          "bookLocation"
        ]
      }
    ]
  },
  "guangzhou-south": {
    "items": [
      {
        "nameZh": "广州南站（铁路）",
        "nameEn": "Guangzhou South Railway Station",
        "typeZh": "交通枢纽",
        "typeEn": "Transport hub",
        "descriptionZh": "高铁出行枢纽，请区分地铁出站、铁路进站与检票区域。",
        "descriptionEn": "High-speed rail hub. Follow signs for railway entry and ticket checks.",
        "sourceIds": [
          "southHub"
        ]
      },
      {
        "nameZh": "番禺站（城际铁路）",
        "nameEn": "Panyu Intercity Railway Station",
        "typeZh": "交通枢纽",
        "typeEn": "Transport hub",
        "descriptionZh": "位于广州南站地下，可接驳城际铁路；不是番禺广场地铁站。",
        "descriptionEn": "Intercity station beneath Guangzhou South; distinct from Panyu Square metro station.",
        "sourceIds": [
          "panyuIntercity"
        ]
      },
      {
        "nameZh": "南站枢纽客运站",
        "nameEn": "Guangzhou South Coach Terminal",
        "typeZh": "交通枢纽",
        "typeEn": "Transport hub",
        "descriptionZh": "广州南站配套长途汽车站，乘车前核对班次及上车点。",
        "descriptionEn": "Long-distance coach terminal serving Guangzhou South. Confirm departure details before travel.",
        "sourceIds": [
          "coach",
          "southTaxi"
        ]
      },
      {
        "nameZh": "广州南站东广场巡游出租车上客区",
        "nameEn": "East Square Taxi Pick-up Area",
        "typeZh": "公共服务",
        "typeEn": "Public services",
        "descriptionZh": "2025年启用的出租车上客区，请沿现场出租车标识前往。",
        "descriptionEn": "Taxi boarding area opened in 2025. Follow the on-site taxi signs.",
        "sourceIds": [
          "southTaxi"
        ]
      },
      {
        "nameZh": "白云机场（广州南站）空铁中转服务点",
        "nameEn": "Baiyun Airport Air–Rail Service Desk at Guangzhou South",
        "typeZh": "公共服务",
        "typeEn": "Public services",
        "descriptionZh": "广州南站出站层西门旅客服务柜台，可咨询航空接驳信息。",
        "descriptionEn": "Service desk by the west exit on the arrival level for air–rail connection enquiries.",
        "sourceIds": [
          "airRail"
        ]
      }
    ]
  },
  "baiyun-park": {
    "items": [
      {
        "nameZh": "广州市儿童公园",
        "nameEn": "Guangzhou Children's Park",
        "typeZh": "公园广场",
        "typeEn": "Parks & squares",
        "descriptionZh": "面向亲子游客的城市公园，官方交通指引对应白云公园站。",
        "descriptionEn": "Family park served by Baiyun Park metro station.",
        "sourceIds": [
          "childrenPark"
        ]
      },
      {
        "nameZh": "凯德广场·云尚",
        "nameEn": "CapitaMall SKY+",
        "typeZh": "商圈购物",
        "typeEn": "Shopping",
        "descriptionZh": "紧邻白云公园站的购物中心。",
        "descriptionEn": "Shopping mall next to Baiyun Park station.",
        "sourceIds": [
          "capiland"
        ]
      }
    ]
  },
  "baiyun-cultural-square": {
    "items": [
      {
        "nameZh": "广州市城市规划展览中心",
        "nameEn": "Guangzhou Urban Planning Exhibition Center",
        "typeZh": "景点文化",
        "typeEn": "Culture & attractions",
        "descriptionZh": "展览路的城市规划主题展馆，出行前查看参观安排。",
        "descriptionEn": "Urban-planning exhibition on Zhanlan Road. Check visitor arrangements before arrival.",
        "sourceIds": [
          "planning",
          "planningCurrent"
        ]
      }
    ]
  },
  "yuexiu-park": {
    "items": [
      {
        "nameZh": "越秀公园",
        "nameEn": "Yuexiu Park",
        "typeZh": "公园广场",
        "typeEn": "Parks & squares",
        "descriptionZh": "城市公园，可结合园内文化景点游览。",
        "descriptionEn": "City park with cultural landmarks.",
        "sourceIds": [
          "parks"
        ]
      },
      {
        "nameZh": "南越王博物院（王墓展区）",
        "nameEn": "Nanyue King Museum — Royal Tomb Site",
        "typeZh": "景点文化",
        "typeEn": "Culture & attractions",
        "descriptionZh": "位于解放北路的王墓遗址展区，与王宫展区不同。",
        "descriptionEn": "Royal tomb site on Jiefang North Road; separate from the palace site.",
        "sourceIds": [
          "nanyue"
        ]
      },
      {
        "nameZh": "广州博物馆（镇海楼展区）",
        "nameEn": "Guangzhou Museum — Zhenhai Tower",
        "typeZh": "景点文化",
        "typeEn": "Culture & attractions",
        "descriptionZh": "位于越秀公园内，展示广州历史文化。",
        "descriptionEn": "Guangzhou history exhibitions inside Yuexiu Park.",
        "sourceIds": [
          "guangzhouMuseum"
        ]
      },
      {
        "nameZh": "流花湖公园",
        "nameEn": "Liuhua Lake Park",
        "typeZh": "公园广场",
        "typeEn": "Parks & squares",
        "descriptionZh": "流花路城市湖泊公园。",
        "descriptionEn": "Urban lake park on Liuhua Road.",
        "sourceIds": [
          "parks"
        ]
      }
    ]
  },
  "gongyuanqian": {
    "items": [
      {
        "nameZh": "广州市人民公园",
        "nameEn": "Guangzhou People's Park",
        "typeZh": "公园广场",
        "typeEn": "Parks & squares",
        "descriptionZh": "传统城市中心的公共公园。",
        "descriptionEn": "Public park in the historic city center.",
        "sourceIds": [
          "parks"
        ]
      },
      {
        "nameZh": "南越王博物院（王宫展区）",
        "nameEn": "Nanyue King Museum — Palace Site",
        "typeZh": "景点文化",
        "typeEn": "Culture & attractions",
        "descriptionZh": "中山四路宫署遗址展区；王墓展区请在越秀公园站前往。",
        "descriptionEn": "Palace remains on Zhongshan 4th Road. The tomb site is served by Yuexiu Park station.",
        "sourceIds": [
          "nanyue"
        ]
      }
    ]
  },
  "guangzhou-railway": {
    "items": [
      {
        "nameZh": "广州站（铁路）",
        "nameEn": "Guangzhou Railway Station",
        "typeZh": "交通枢纽",
        "typeEn": "Transport hub",
        "descriptionZh": "铁路出行枢纽，请按车票核对广州站、广州东站或广州南站。",
        "descriptionEn": "Railway hub. Check your ticket carefully: Guangzhou, Guangzhou East and Guangzhou South are different stations.",
        "sourceIds": [
          "hubs2026",
          "rail2026"
        ]
      },
      {
        "nameZh": "草暖公园",
        "nameEn": "Caonuan Park",
        "typeZh": "公园广场",
        "typeEn": "Parks & squares",
        "descriptionZh": "环市西路的公园休憩空间。",
        "descriptionEn": "Park on Huanshi West Road.",
        "sourceIds": [
          "parks"
        ]
      }
    ]
  },
  "sun-yat-sen-memorial-hall": {
    "items": [
      {
        "nameZh": "广州中山纪念堂",
        "nameEn": "Sun Yat-sen Memorial Hall",
        "typeZh": "景点文化",
        "typeEn": "Culture & attractions",
        "descriptionZh": "历史建筑及文化活动场所。",
        "descriptionEn": "Historic building and cultural venue.",
        "sourceIds": [
          "parks",
          "metroFacilities"
        ]
      }
    ]
  },
  "haizhu-square": {
    "items": [
      {
        "nameZh": "海珠广场",
        "nameEn": "Haizhu Square",
        "typeZh": "公园广场",
        "typeEn": "Parks & squares",
        "descriptionZh": "珠江北岸的城市广场。",
        "descriptionEn": "City square on the north bank of the Pearl River.",
        "sourceIds": [
          "parks"
        ]
      }
    ]
  },
  "jiangnanxi": {
    "items": [
      {
        "nameZh": "江南新地",
        "nameEn": "Jiangnan Sunday",
        "typeZh": "商圈购物",
        "typeEn": "Shopping",
        "descriptionZh": "站旁地下商业空间。",
        "descriptionEn": "Underground shopping near the station.",
        "sourceIds": [
          "metroFacilities"
        ]
      },
      {
        "nameZh": "晓港公园",
        "nameEn": "Xiaogang Park",
        "typeZh": "公园广场",
        "typeEn": "Parks & squares",
        "descriptionZh": "前进路公园，可从江南西站前往。",
        "descriptionEn": "Park on Qianjin Road, accessible from Jiangnanxi.",
        "sourceIds": [
          "parks"
        ]
      }
    ]
  },
  "shipaiqiao": {
    "items": [
      {
        "nameZh": "广州太古汇",
        "nameEn": "Taikoo Hui Guangzhou",
        "typeZh": "商圈购物",
        "typeEn": "Shopping",
        "descriptionZh": "商场M层连通石牌桥站，提供购物及餐饮服务。",
        "descriptionEn": "Shopping and dining complex linked to Shipaiqiao station at level M.",
        "sourceIds": [
          "taikoo"
        ]
      }
    ]
  },
  "guangzhou-east": {
    "items": [
      {
        "nameZh": "广州东站（铁路）",
        "nameEn": "Guangzhou East Railway Station",
        "typeZh": "交通枢纽",
        "typeEn": "Transport hub",
        "descriptionZh": "铁路出行枢纽，按现场导向前往对应候车及检票区域。",
        "descriptionEn": "Railway hub. Follow current signs to the correct waiting and ticket-check areas.",
        "sourceIds": [
          "hubs2026",
          "rail2026"
        ]
      },
      {
        "nameZh": "东方宝泰",
        "nameEn": "Po Park",
        "typeZh": "商圈购物",
        "typeEn": "Shopping",
        "descriptionZh": "广州东站旁的购物中心。",
        "descriptionEn": "Shopping mall by Guangzhou East station.",
        "sourceIds": [
          "metroFacilities"
        ]
      }
    ]
  },
  "canton-tower": {
    "items": [
      {
        "nameZh": "广州塔",
        "nameEn": "Canton Tower",
        "typeZh": "景点文化",
        "typeEn": "Culture & attractions",
        "descriptionZh": "城市地标与观光设施，登塔参观请查询官方预约信息。",
        "descriptionEn": "City landmark and observation attraction. Check official admission arrangements.",
        "sourceIds": [
          "tower"
        ]
      },
      {
        "nameZh": "海心桥（南端）",
        "nameEn": "Haixin Bridge — South End",
        "typeZh": "公园广场",
        "typeEn": "Parks & squares",
        "descriptionZh": "从广州塔滨水区域前往的步行桥，过桥安排以现场指引为准。",
        "descriptionEn": "Pedestrian bridge reached from the Canton Tower waterfront. Follow current access guidance.",
        "sourceIds": [
          "haixinBridge",
          "towerPromenade"
        ]
      }
    ]
  },
  "zhujiang-new-town": {
    "items": [
      {
        "nameZh": "花城广场",
        "nameEn": "Huacheng Square",
        "typeZh": "公园广场",
        "typeEn": "Parks & squares",
        "descriptionZh": "珠江新城核心公共广场，可串联周边文化场馆。",
        "descriptionEn": "Central public square linking cultural venues in Zhujiang New Town.",
        "sourceIds": [
          "huacheng"
        ]
      },
      {
        "nameZh": "广东省博物馆",
        "nameEn": "Guangdong Museum",
        "typeZh": "景点文化",
        "typeEn": "Culture & attractions",
        "descriptionZh": "位于珠江东路，出站后需步行前往；参观前查看预约要求。",
        "descriptionEn": "Museum on Zhujiang East Road, reached on foot after leaving the station. Check reservation requirements.",
        "sourceIds": [
          "gdMuseum"
        ]
      },
      {
        "nameZh": "广州图书馆",
        "nameEn": "Guangzhou Library",
        "typeZh": "景点文化",
        "typeEn": "Culture & attractions",
        "descriptionZh": "花城广场东侧公共图书馆，官方指引提供本站步行路线。",
        "descriptionEn": "Public library east of Huacheng Square, with an official walking route from this station.",
        "sourceIds": [
          "library"
        ]
      },
      {
        "nameZh": "广州大剧院",
        "nameEn": "Guangzhou Opera House",
        "typeZh": "景点文化",
        "typeEn": "Culture & attractions",
        "descriptionZh": "珠江西路演出场馆，观演请提前查询场次与入场安排。",
        "descriptionEn": "Performance venue on Zhujiang West Road. Check programmes and admission arrangements.",
        "sourceIds": [
          "opera",
          "gdMuseum"
        ]
      }
    ]
  },
  "hanxi-changlong": {
    "items": [
      {
        "nameZh": "长隆欢乐世界",
        "nameEn": "Chimelong Paradise",
        "typeZh": "景点文化",
        "typeEn": "Culture & attractions",
        "descriptionZh": "可从汉溪长隆站步行前往的主题乐园，入园规则以园区公告为准。",
        "descriptionEn": "Theme park reachable on foot from Hanxi Changlong. Check the park's entry rules.",
        "sourceIds": [
          "chimelong"
        ]
      },
      {
        "nameZh": "长隆水上乐园",
        "nameEn": "Chimelong Water Park",
        "typeZh": "景点文化",
        "typeEn": "Culture & attractions",
        "descriptionZh": "长隆园区的季节性水上乐园；请先确认运营季及当日开放情况。",
        "descriptionEn": "Seasonal water park in the Chimelong resort. Check the operating season and daily opening before travel.",
        "sourceIds": [
          "waterpark",
          "chimelongTraffic"
        ]
      },
      {
        "nameZh": "广州长隆站（城际铁路）",
        "nameEn": "Guangzhou Changlong Intercity Station",
        "typeZh": "交通枢纽",
        "typeEn": "Transport hub",
        "descriptionZh": "可与汉溪长隆地铁站接驳的城际铁路车站。",
        "descriptionEn": "Intercity station connected to Hanxi Changlong metro station.",
        "sourceIds": [
          "chimelong"
        ]
      }
    ]
  },
  "lejia-lu": {
    "items": [
      {
        "nameZh": "无限极广场",
        "nameEn": "Infinitus Plaza",
        "typeZh": "商圈购物",
        "typeEn": "Shopping",
        "descriptionZh": "乐嘉路站通过地下通道连接的商业综合体。",
        "descriptionEn": "Commercial complex connected to Lejia Road station by an underground passage.",
        "sourceIds": [
          "infinitus"
        ]
      },
      {
        "nameZh": "远景路韩国风情商业街",
        "nameEn": "Yuanjing Road Korean Shopping Street",
        "typeZh": "商圈购物",
        "typeEn": "Shopping",
        "descriptionZh": "以餐饮为特色的街区。",
        "descriptionEn": "Street known for Korean dining.",
        "sourceIds": [
          "baiyunTour"
        ]
      }
    ]
  },
  "xinshi-xu": {
    "items": [
      {
        "nameZh": "广州百信广场",
        "nameEn": "Guangzhou Baixin Plaza",
        "typeZh": "商圈购物",
        "typeEn": "Shopping",
        "descriptionZh": "新市墟商圈购物中心。",
        "descriptionEn": "Shopping destination in Xinshi Xu.",
        "sourceIds": [
          "baiyunTour"
        ]
      },
      {
        "nameZh": "广州白云万象汇",
        "nameEn": "Guangzhou Baiyun MixC One",
        "typeZh": "商圈购物",
        "typeEn": "Shopping",
        "descriptionZh": "新市墟站服务的商业综合体。",
        "descriptionEn": "Shopping complex served by Xinshi Xu.",
        "sourceIds": [
          "baiyunTour"
        ]
      }
    ]
  },
  "yunxiao-lu": {
    "items": [
      {
        "nameZh": "白云五号 T5 MALL",
        "nameEn": "Baiyun T5 Mall",
        "typeZh": "商圈购物",
        "typeEn": "Shopping",
        "descriptionZh": "云霄路站服务的购物及餐饮场所。",
        "descriptionEn": "Shopping and dining destination served by Yunxiao Road station.",
        "sourceIds": [
          "baiyunTour"
        ]
      }
    ]
  },
  "sanyuanli": {
    "items": [
      {
        "nameZh": "三元里人民抗英斗争纪念馆",
        "nameEn": "Sanyuanli Anti-British Struggle Memorial Hall",
        "typeZh": "景点文化",
        "typeEn": "Culture & attractions",
        "descriptionZh": "三元里历史主题纪念馆。",
        "descriptionEn": "Museum of Sanyuanli history.",
        "sourceIds": [
          "baiyunTour"
        ]
      }
    ]
  },
  "huangbian": {
    "items": [
      {
        "nameZh": "广州设计之都设计殿堂",
        "nameEn": "Guangzhou City of Design — Design Hall",
        "typeZh": "景点文化",
        "typeEn": "Culture & attractions",
        "descriptionZh": "设计主题文化场所。",
        "descriptionEn": "Design-focused cultural venue.",
        "sourceIds": [
          "baiyunTour"
        ]
      }
    ]
  },
  "baiyun-dadao-bei": {
    "items": [
      {
        "nameZh": "安华汇",
        "nameEn": "Anhua Hui",
        "typeZh": "商圈购物",
        "typeEn": "Shopping",
        "descriptionZh": "购物与家庭休闲综合体。",
        "descriptionEn": "Shopping and family-leisure complex.",
        "sourceIds": [
          "baiyunTour"
        ]
      }
    ]
  },
  "jiangxia": {
    "items": [
      {
        "nameZh": "江夏新天地商业广场",
        "nameEn": "Jiangxia Xintiandi Shopping Mall",
        "typeZh": "商圈购物",
        "typeEn": "Shopping",
        "descriptionZh": "车站附近的购物广场。",
        "descriptionEn": "Shopping mall near the station.",
        "sourceIds": [
          "metroFacilities"
        ]
      }
    ]
  },
  "dongxiaonan": {
    "items": [
      {
        "nameZh": "东晓胜汇里",
        "nameEn": "Dongxiao Victory Convergence",
        "typeZh": "商圈购物",
        "typeEn": "Shopping",
        "descriptionZh": "车站附近的商业综合体。",
        "descriptionEn": "Commercial complex near the station.",
        "sourceIds": [
          "metroFacilities"
        ]
      }
    ]
  },
  "changgang": {
    "items": [
      {
        "nameZh": "海珠合生生活天地",
        "nameEn": "Haizhu Hopson Life Center",
        "typeZh": "商圈购物",
        "typeEn": "Shopping",
        "descriptionZh": "车站附近的购物中心。",
        "descriptionEn": "Shopping center near the station.",
        "sourceIds": [
          "metroFacilities"
        ]
      }
    ]
  },
  "luoxi": {
    "items": [
      {
        "nameZh": "喜邻里商业中心",
        "nameEn": "Hey Linli Community Center",
        "typeZh": "商圈购物",
        "typeEn": "Shopping",
        "descriptionZh": "车站附近的社区商业中心。",
        "descriptionEn": "Community shopping near the station.",
        "sourceIds": [
          "metroFacilities"
        ]
      }
    ]
  },
  "airport-north": {
    "items": [
      {
        "nameZh": "广州白云国际机场 T2 航站楼",
        "nameEn": "Guangzhou Baiyun International Airport — Terminal 2",
        "typeZh": "交通枢纽",
        "typeEn": "Transport hub",
        "descriptionZh": "机场北站对应T2航站楼；出行前核对机票上的航站楼。",
        "descriptionEn": "Airport North serves Terminal 2. Check the terminal shown on your flight booking.",
        "sourceIds": [
          "airportT2",
          "hubs2026"
        ]
      }
    ]
  }
};

// 车站名复用线路库，避免两处维护产生中英文不一致。
Object.entries(nearbyData).forEach(([stationId, data]) => {
  const item = metroLineSegments.flatMap(segment => segment.stations).find(item => item.id === stationId);
  data.stationZh = item.zh;
  data.stationEn = item.en;
});
