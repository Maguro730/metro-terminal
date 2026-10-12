// 这是本地原型使用的车站周边资料，用于验证页面结构和信息浏览流程。
// 出口编号、步行距离和实时营业信息暂不加入，避免在没有可靠资料时作出断言。

const nearbyData = {
  "jiahe-wanggang": {
    stationZh: "嘉禾望岗",
    stationEn: "Jiahe Wanggang",
    items: [
      { nameZh: "嘉禾金铂天地", nameEn: "Jiahe Gold World", typeZh: "购物", typeEn: "Shopping", descriptionZh: "嘉禾望岗片区的商业综合体。", descriptionEn: "A commercial complex in the Jiahe Wanggang area." },
      { nameZh: "云门NEW PARK", nameEn: "Yunmen NEW PARK", typeZh: "购物", typeEn: "Shopping", descriptionZh: "嘉禾望岗片区的商业与休闲空间。", descriptionEn: "A shopping and leisure destination in the Jiahe Wanggang area." },
      { nameZh: "白海面涌碧道", nameEn: "Baihaimian River Greenway", typeZh: "公共空间", typeEn: "Public space", descriptionZh: "嘉禾望岗片区正在完善的水岸公共空间。", descriptionEn: "A riverside public space being improved in the Jiahe Wanggang area." }
    ]
  },
  "baiyun-park": {
    stationZh: "白云公园",
    stationEn: "Baiyun Park",
    items: [
      { nameZh: "广州市儿童公园", nameEn: "Guangzhou Children's Park", typeZh: "公园", typeEn: "Park", descriptionZh: "面向亲子游客的城市公园。", descriptionEn: "An urban park for families and children." },
      { nameZh: "白云公园", nameEn: "Baiyun Park", typeZh: "公园", typeEn: "Park", descriptionZh: "白云新城片区的公共开放空间。", descriptionEn: "An open public space in Baiyun New Town." },
      { nameZh: "白云山风景名胜区（南门方向）", nameEn: "Baiyun Mountain Scenic Area (South Gate area)", typeZh: "景点", typeEn: "Attraction", descriptionZh: "广州具有代表性的城市山地景区，具体步行路线需现场确认。", descriptionEn: "A well-known mountain scenic area in Guangzhou; the walking route should be checked on site." }
    ]
  },
  "baiyun-cultural-square": {
    stationZh: "白云文化广场",
    stationEn: "Baiyun Culture Square",
    items: [
      { nameZh: "广州市城市规划展览中心", nameEn: "Guangzhou Urban Planning Exhibition Center", typeZh: "展览", typeEn: "Exhibition", descriptionZh: "展示广州城市规划与建设内容的公共文化场所。", descriptionEn: "A public cultural venue about Guangzhou's urban planning and development." },
      { nameZh: "广州白云国际会议中心", nameEn: "Guangzhou Baiyun International Convention Center", typeZh: "地标", typeEn: "Landmark", descriptionZh: "白云新城片区的会议与公共活动场所。", descriptionEn: "A convention and public events venue in Baiyun New Town." },
      { nameZh: "云溪植物园", nameEn: "Yunxi Botanical Garden", typeZh: "公园", typeEn: "Park", descriptionZh: "白云区具有代表性的植物景观空间。", descriptionEn: "A botanical landscape space in Baiyun District." }
    ]
  },
  "guangzhou-railway": {
    stationZh: "广州火车站",
    stationEn: "Guangzhou Railway Station",
    items: [
      { nameZh: "广州火车站", nameEn: "Guangzhou Railway Station", typeZh: "交通枢纽", typeEn: "Transport hub", descriptionZh: "广州重要铁路与城市交通枢纽。", descriptionEn: "A major railway and urban transport hub in Guangzhou." },
      { nameZh: "越秀公园", nameEn: "Yuexiu Park", typeZh: "公园", typeEn: "Park", descriptionZh: "广州中心城区具有代表性的城市公园。", descriptionEn: "A well-known urban park in central Guangzhou." },
      { nameZh: "广州博物馆（镇海楼）", nameEn: "Guangzhou Museum (Zhenhai Tower)", typeZh: "博物馆", typeEn: "Museum", descriptionZh: "位于越秀公园内的广州历史文化展示场所。", descriptionEn: "A museum presenting Guangzhou history and culture in Yuexiu Park." },
      { nameZh: "流花湖公园", nameEn: "Liuhua Lake Park", typeZh: "公园", typeEn: "Park", descriptionZh: "广州中心城区的湖泊型城市公园。", descriptionEn: "A lake park in central Guangzhou." }
    ]
  },
  "gongyuanqian": {
    stationZh: "公园前",
    stationEn: "Gongyuanqian",
    items: [
      { nameZh: "北京路步行街", nameEn: "Beijing Road Pedestrian Street", typeZh: "商业街", typeEn: "Shopping street", descriptionZh: "广州中心城区知名的历史文化商业街区。", descriptionEn: "A well-known historic and commercial pedestrian street in central Guangzhou." },
      { nameZh: "广州市人民公园", nameEn: "Guangzhou People's Park", typeZh: "公园", typeEn: "Park", descriptionZh: "位于广州传统城市中心的公共公园。", descriptionEn: "A public park in Guangzhou's historic city center." },
      { nameZh: "广州城市规划展览中心（旧中轴片区）", nameEn: "Guangzhou Urban Planning Exhibition Center (old central axis area)", typeZh: "展览", typeEn: "Exhibition", descriptionZh: "可了解广州城市发展与规划信息。", descriptionEn: "A place to learn about Guangzhou's urban development and planning." }
    ]
  },
  "canton-tower": {
    stationZh: "广州塔",
    stationEn: "Canton Tower",
    items: [
      { nameZh: "广州塔", nameEn: "Canton Tower", typeZh: "地标", typeEn: "Landmark", descriptionZh: "广州具有代表性的城市地标。", descriptionEn: "One of Guangzhou's best-known urban landmarks." },
      { nameZh: "海心沙亚运公园", nameEn: "Haixinsha Asian Games Park", typeZh: "公园", typeEn: "Park", descriptionZh: "珠江沿岸的公共休闲空间。", descriptionEn: "A public leisure space along the Pearl River." },
      { nameZh: "珠江新城花城广场", nameEn: "Huacheng Square", typeZh: "公共空间", typeEn: "Public space", descriptionZh: "珠江新城核心公共空间，步行距离需现场确认。", descriptionEn: "A central public space in Zhujiang New Town; walking distance should be checked on site." }
    ]
  },
  "zhujiang-new-town": {
    stationZh: "珠江新城",
    stationEn: "Zhujiang New Town",
    items: [
      { nameZh: "花城广场", nameEn: "Huacheng Square", typeZh: "公共空间", typeEn: "Public space", descriptionZh: "广州中央商务区的城市开放空间。", descriptionEn: "An open urban space in Guangzhou's central business district." },
      { nameZh: "广东省博物馆", nameEn: "Guangdong Museum", typeZh: "博物馆", typeEn: "Museum", descriptionZh: "展示自然、历史和文化内容的综合博物馆。", descriptionEn: "A museum covering natural history, culture and regional history." },
      { nameZh: "广州大剧院", nameEn: "Guangzhou Opera House", typeZh: "文化场馆", typeEn: "Cultural venue", descriptionZh: "珠江新城的代表性文化建筑。", descriptionEn: "A landmark cultural building in Zhujiang New Town." },
      { nameZh: "广州图书馆", nameEn: "Guangzhou Library", typeZh: "公共文化", typeEn: "Public culture", descriptionZh: "面向公众开放的城市图书馆。", descriptionEn: "A public city library open to visitors." }
    ]
  },
  "tiyu-xilu": {
    stationZh: "体育西路",
    stationEn: "Tiyu Xilu",
    items: [
      { nameZh: "天河体育中心", nameEn: "Tianhe Sports Center", typeZh: "体育场馆", typeEn: "Sports venue", descriptionZh: "天河路商圈的代表性体育场馆。", descriptionEn: "A major sports venue in the Tianhe Road commercial area." },
      { nameZh: "天河城", nameEn: "Tee Mall", typeZh: "购物", typeEn: "Shopping", descriptionZh: "天河路商圈的商业综合体。", descriptionEn: "A major shopping complex in the Tianhe Road commercial area." },
      { nameZh: "正佳广场", nameEn: "Grandview Mall", typeZh: "购物", typeEn: "Shopping", descriptionZh: "天河路商圈的综合商业体。", descriptionEn: "A large shopping and leisure complex in Tianhe." }
    ]
  },
  "hanxi-changlong": {
    stationZh: "汉溪长隆",
    stationEn: "Hanxi Changlong",
    items: [
      { nameZh: "长隆旅游度假区", nameEn: "Chimelong Tourist Resort", typeZh: "旅游度假", typeEn: "Resort", descriptionZh: "广州南部具有代表性的综合旅游度假区。", descriptionEn: "A major integrated tourist resort in southern Guangzhou." },
      { nameZh: "长隆欢乐世界", nameEn: "Chimelong Paradise", typeZh: "主题乐园", typeEn: "Theme park", descriptionZh: "大型主题乐园，开放时间以官方公告为准。", descriptionEn: "A large theme park; opening times should be checked on its official channels." },
      { nameZh: "长隆野生动物世界", nameEn: "Chimelong Safari Park", typeZh: "动物园", typeEn: "Wildlife park", descriptionZh: "以野生动物展示为主题的旅游景区。", descriptionEn: "A wildlife park and tourist attraction." },
      { nameZh: "长隆水上乐园", nameEn: "Chimelong Water Park", typeZh: "主题乐园", typeEn: "Water park", descriptionZh: "季节性开放的水上主题乐园。", descriptionEn: "A seasonal water theme park." }
    ]
  },
  "guangzhou-south": {
    stationZh: "广州南站",
    stationEn: "Guangzhou South Railway Station",
    items: [
      { nameZh: "广州南站", nameEn: "Guangzhou South Railway Station", typeZh: "交通枢纽", typeEn: "Transport hub", descriptionZh: "广州重要的铁路与城市交通枢纽。", descriptionEn: "A major railway and urban transport hub in Guangzhou." },
      { nameZh: "广州南站商务区", nameEn: "Guangzhou South Station Business District", typeZh: "城市片区", typeEn: "Urban district", descriptionZh: "围绕广州南站发展的综合商务片区。", descriptionEn: "A mixed business district around Guangzhou South Railway Station." },
      { nameZh: "大夫山森林公园", nameEn: "Dafushan Forest Park", typeZh: "公园", typeEn: "Park", descriptionZh: "番禺区具有代表性的城市近郊公园，出行路线需现场确认。", descriptionEn: "A well-known suburban park in Panyu; the route should be checked on site." }
    ]
  },
  "airport-north": {
    stationZh: "机场北（2号航站楼）",
    stationEn: "Airport North (T2)",
    items: [
      { nameZh: "广州白云国际机场2号航站楼", nameEn: "Guangzhou Baiyun International Airport Terminal 2", typeZh: "交通枢纽", typeEn: "Transport hub", descriptionZh: "白云国际机场的主要航站楼之一。", descriptionEn: "One of the main terminals of Guangzhou Baiyun International Airport." },
      { nameZh: "广州白云国际机场交通中心", nameEn: "Guangzhou Baiyun International Airport Transportation Center", typeZh: "交通设施", typeEn: "Transport facility", descriptionZh: "机场范围内的综合交通换乘设施。", descriptionEn: "An integrated transport interchange within the airport area." }
    ]
  },
  "conghua-coach-terminal": {
    stationZh: "从化客运站",
    stationEn: "Conghua Coach Terminal",
    items: [
      { nameZh: "从化区公共交通换乘区域", nameEn: "Conghua public transport interchange area", typeZh: "交通枢纽", typeEn: "Transport hub", descriptionZh: "连接从化城区与周边地区的公共交通节点。", descriptionEn: "A public transport node connecting central Conghua with nearby areas." },
      { nameZh: "从化温泉旅游区", nameEn: "Conghua Hot Spring Tourist Area", typeZh: "旅游景区", typeEn: "Tourist area", descriptionZh: "从化具有代表性的旅游目的地，前往方式需另行规划。", descriptionEn: "A well-known destination in Conghua; onward travel needs separate planning." }
    ]
  }
};

// 其余线路站点也提供基础周边资料。地点采用公共景点、交通枢纽或片区名称，
// 不加入未经核实的出口编号和步行距离，便于后续继续补充可靠资料。
function addStationArea(id, stationZh, stationEn, places) {
  nearbyData[id] = {
    stationZh,
    stationEn,
    items: places.map((place) => ({
      nameZh: place[0],
      nameEn: place[1],
      typeZh: place[2] || "公共空间",
      typeEn: place[3] || "Public space",
      descriptionZh: `${stationZh}站周边的代表性公共目的地，具体地点、出入口和步行路线仍待核实。`,
      descriptionEn: `A representative public destination near ${stationEn}; the exact place, exits and walking directions are still to be verified.`
    }))
  };
}

[
  ["shibi", "石壁", "Shibi", [["广州南站综合交通枢纽", "Guangzhou South transport hub", "交通枢纽", "Transport hub"], ["石壁站周边公共服务区", "Shibi station public service area"]]],
  ["huijiang", "会江", "Huijiang", [["洛浦公园", "Luopu Park", "公园", "Park"], ["会江站周边公共服务区", "Huijiang station public service area"]]],
  ["nanpu", "南浦", "Nanpu", [["海珠湿地公园", "Haizhu Wetland Park", "公园", "Park"], ["南浦岛公共空间", "Nanpu Island public space"]]],
  ["luoxi", "洛溪", "Luoxi", [["洛浦公园", "Luopu Park", "公园", "Park"], ["洛溪片区公共服务区", "Luoxi public service area"]]],
  ["nanzhou", "南洲", "Nanzhou", [["海珠湿地公园", "Haizhu Wetland Park", "公园", "Park"], ["南洲片区公共空间", "Nanzhou public space"]]],
  ["dongxiaonan", "东晓南", "Dongxiaonan", [["石溪涌碧道", "Shixi River Greenway", "公共空间", "Public space"], ["海珠湿地公园", "Haizhu Wetland Park", "公园", "Park"]]],
  ["jiangtai-lu", "江泰路", "Jiangtai Road", [["晓港公园", "Xiaogang Park", "公园", "Park"], ["江南西商圈", "Jiangnanxi commercial area", "商业街区", "Commercial area"]]],
  ["changgang", "昌岗", "Changgang", [["晓港公园", "Xiaogang Park", "公园", "Park"], ["江南西商圈", "Jiangnanxi commercial area", "商业街区", "Commercial area"]]],
  ["jiangnanxi", "江南西", "Jiangnanxi", [["江南西商圈", "Jiangnanxi commercial area", "商业街区", "Commercial area"], ["海珠区公共文化空间", "Haizhu public cultural area"]]],
  ["shiergong", "市二宫", "The 2nd Workers' Cultural Palace", [["海珠广场", "Haizhu Square", "公共空间", "Public space"], ["海珠区公共文化空间", "Haizhu public cultural area"]]],
  ["haizhu-square", "海珠广场", "Haizhu Square", [["海珠广场", "Haizhu Square", "公共空间", "Public space"], ["石室圣心大教堂", "Sacred Heart Cathedral", "地标", "Landmark"]]],
  ["sun-yat-sen-memorial-hall", "纪念堂", "Sun Yat-sen Memorial Hall", [["中山纪念堂", "Sun Yat-sen Memorial Hall", "地标", "Landmark"], ["越秀山", "Yuexiu Mountain", "公园", "Park"]]],
  ["yuexiu-park", "越秀公园", "Yuexiu Park", [["越秀公园", "Yuexiu Park", "公园", "Park"], ["广州博物馆（镇海楼）", "Guangzhou Museum (Zhenhai Tower)", "博物馆", "Museum"]]],
  ["sanyuanli", "三元里", "Sanyuanli", [["三元里抗英斗争纪念公园", "Sanyuanli Anti-British Invasion Memorial Park", "纪念公园", "Memorial park"], ["三元里商圈", "Sanyuanli commercial area", "商业街区", "Commercial area"]]],
  ["feixiang-park", "飞翔公园", "Feixiang Park", [["白云万达广场", "Baiyun Wanda Plaza", "购物", "Shopping"], ["白云新城公共空间", "Baiyun New Town public space"]]],
  ["xiaogang", "萧岗", "Xiao-gang", [["白云新城公共空间", "Baiyun New Town public space"], ["白云区公共文化设施", "Baiyun public cultural facilities"]]],
  ["jiangxia", "江夏", "Jiangxia", [["江夏站周边公共服务区", "Jiangxia station public service area"], ["黄石片区公共空间", "Huangshi public space"]]],
  ["huangbian", "黄边", "Huangbian", [["广州设计之都", "Guangzhou Design Capital", "地标", "Landmark"], ["白云山北门方向", "Baiyun Mountain North Gate area", "景点", "Attraction"]]],
  ["panyu-square", "番禺广场", "Panyu Square", [["番禺广场", "Panyu Square", "公共空间", "Public space"], ["番禺区公共文化设施", "Panyu public cultural facilities"]]],
  ["bangjiang", "傍江", "Bangjiang", [["傍江站周边公共服务区（待核实）", "Bangjiang station public service area (to be verified)", "待核实", "To be verified"]]],
  ["shiqi-nan", "石碁南", "Shiqinan", [["石碁南站周边公共服务区（待核实）", "Shiqinan station public service area (to be verified)", "待核实", "To be verified"]]],
  ["haichong-lu", "海涌路", "Haichong Lu", [["海涌路站周边公共服务区（待核实）", "Haichong Lu station public service area (to be verified)", "待核实", "To be verified"]]],
  ["haibang", "海傍", "Haibang", [["海傍站周边公共服务区（待核实）", "Haibang station public service area (to be verified)", "待核实", "To be verified"]]],
  ["shiqiao", "市桥", "Shiqiao", [["星海公园", "Xinghai Park", "公园", "Park"], ["番禺广场", "Panyu Square", "公共空间", "Public space"]]],
  ["dashi", "大石", "Dashi", [["洛浦公园", "Luopu Park", "公园", "Park"], ["长隆旅游度假区", "Chimelong Tourist Resort", "旅游度假", "Resort"]]],
  ["xiajiao", "厦滘", "Xiajiao", [["洛浦公园", "Luopu Park", "公园", "Park"], ["洛溪岛公共空间", "Luoxi Island public space"]]],
  ["lijiao", "沥滘", "Lijiao", [["海珠湿地公园", "Haizhu Wetland Park", "公园", "Park"], ["海珠湖公园", "Haizhu Lake Park", "公园", "Park"]]],
  ["datang", "大塘", "Datang", [["海珠湖公园", "Haizhu Lake Park", "公园", "Park"], ["海珠湿地公园", "Haizhu Wetland Park", "公园", "Park"]]],
  ["kecun", "客村", "Kecun", [["广州塔", "Canton Tower", "地标", "Landmark"], ["TIT创意园", "TIT Creative Industry Zone", "创意园区", "Creative district"]]],
  ["shipaiqiao", "石牌桥", "Shipaiqiao", [["天河城", "Tee Mall", "购物", "Shopping"], ["太古汇", "Taikoo Hui", "购物", "Shopping"]]],
  ["gangding", "岗顶", "Gangding", [["天河电脑城", "Tianhe Computer Market", "商业街区", "Commercial area"], ["华南师范大学", "South China Normal University", "公共机构", "Public institution"]]],
  ["south-china-normal-university", "华南师范大学", "South China Normal University", [["华南师范大学", "South China Normal University", "公共机构", "Public institution"], ["天河公园", "Tianhe Park", "公园", "Park"]]],
  ["wushan", "五山", "Wushan", [["华南理工大学", "South China University of Technology", "公共机构", "Public institution"], ["华南农业大学", "South China Agricultural University", "公共机构", "Public institution"]]],
  ["tianhe-coach-terminal", "天河客运站", "Tianhe Coach Terminal", [["天河客运站", "Tianhe Coach Terminal", "交通枢纽", "Transport hub"], ["火炉山森林公园", "Huolushan Forest Park", "公园", "Park"]]],
  ["airport-south", "机场南（1号航站楼）", "Airport South (T1)", [["广州白云国际机场1号航站楼", "Guangzhou Baiyun International Airport Terminal 1", "交通枢纽", "Transport hub"], ["机场综合交通中心", "Airport transportation center", "交通设施", "Transport facility"]]],
  ["gaozeng", "高增", "Gaozeng", [["广州白云国际机场综合交通中心", "Guangzhou Baiyun International Airport transportation center", "交通枢纽", "Transport hub"], ["空港经济区公共服务区", "Airport economic zone public service area"]]],
  ["renhe", "人和", "Renhe", [["人和镇公共服务区", "Renhe town public service area"], ["白云机场空港片区", "Baiyun Airport area", "交通片区", "Transport area"]]],
  ["longgui", "龙归", "Longgui", [["龙归街公共服务区", "Longgui public service area"], ["白云区北部公共空间", "Northern Baiyun public space"]]],
  ["baiyun-dadao-bei", "白云大道北", "Baiyun Dadao Bei", [["白云山风景区", "Baiyun Mountain Scenic Area", "景点", "Attraction"], ["白云山北门方向", "Baiyun Mountain North Gate area", "景点", "Attraction"]]],
  ["yongtai", "永泰", "Yongtai", [["白云山北门方向", "Baiyun Mountain North Gate area", "景点", "Attraction"], ["永泰公园", "Yongtai Park", "公园", "Park"]]],
  ["tonghe", "同和", "Tonghe", [["白云山风景区", "Baiyun Mountain Scenic Area", "景点", "Attraction"], ["同和片区公共服务区", "Tonghe public service area"]]],
  ["jingxi-nanfang-hospital", "京溪南方医院", "Jingxi Nanfang Hospital", [["南方医院", "Nanfang Hospital", "公共机构", "Public institution"], ["白云山风景区", "Baiyun Mountain Scenic Area", "景点", "Attraction"]]],
  ["meihuayuan", "梅花园", "Meihuayuan", [["燕岭公园", "Yanling Park", "公园", "Park"], ["白云山风景区", "Baiyun Mountain Scenic Area", "景点", "Attraction"]]],
  ["yantang", "燕塘", "Yantang", [["燕岭公园", "Yanling Park", "公园", "Park"], ["天河区公共文化空间", "Tianhe public cultural area"]]],
  ["guangzhou-east", "广州东站", "Guangzhou East", [["广州东站", "Guangzhou East Railway Station", "交通枢纽", "Transport hub"], ["天河体育中心", "Tianhe Sports Center", "体育场馆", "Sports venue"]]],
  ["linhexi", "林和西", "Linhexi", [["天河体育中心", "Tianhe Sports Center", "体育场馆", "Sports venue"], ["广州东站", "Guangzhou East Railway Station", "交通枢纽", "Transport hub"]]],
  ["pengbian", "彭边", "Pengbian", [["彭边站周边公共服务区", "Pengbian station public service area"], ["白云区北部公共空间", "Northern Baiyun public space"]]],
  ["he-long", "鹤龙", "Helong", [["鹤龙片区公共服务区（待核实）", "Helong public service area (to be verified)", "待核实", "To be verified"]]],
  ["he-bian", "鹤边", "Hebian", [["鹤边片区公共服务区（待核实）", "Hebian public service area (to be verified)", "待核实", "To be verified"]]],
  ["mawu", "马务", "Mawu", [["白云湖公园", "Baiyun Lake Park", "公园", "Park"], ["石井片区公共服务区", "Shijing public service area"]]],
  ["xinshi-xu", "新市墟", "Xinshi Xu", [["新市商业区", "Xinshi commercial area", "商业街区", "Commercial area"], ["白云新城公共空间", "Baiyun New Town public space"]]],
  ["yunxiao-lu", "云霄路", "Yunxiao Road", [["云霄路站周边公共服务区（待核实）", "Yunxiao Road station public service area (to be verified)", "待核实", "To be verified"]]],
  ["lejia-lu", "乐嘉路", "Lejia Road", [["无限极广场", "Infinitus Plaza", "地标", "Landmark"], ["机场路商圈", "Jichang Road commercial area", "商业街区", "Commercial area"]]],
  ["baiyun-dongping", "白云东平", "Baiyun Dongping", [["白云山北门方向", "Baiyun Mountain North Gate area", "景点", "Attraction"], ["东平片区公共服务区", "Dongping public service area"]]],
  ["xialiang", "夏良", "Xialiang", [["帽峰山森林公园", "Maofeng Mountain Forest Park", "公园", "Park"], ["太和片区公共服务区", "Taihe public service area"]]],
  ["taihe", "太和", "Taihe", [["帽峰山森林公园", "Maofeng Mountain Forest Park", "公园", "Park"], ["太和文化广场", "Taihe Cultural Square", "公共空间", "Public space"]]],
  ["zhuliao", "竹料", "Zhuliao", [["帽峰山森林公园", "Maofeng Mountain Forest Park", "公园", "Park"], ["竹料镇公共服务区", "Zhuliao public service area"]]],
  ["zhongluotan", "钟落潭", "Zhongluotan", [["帽峰山森林公园", "Maofeng Mountain Forest Park", "公园", "Park"], ["钟落潭镇公共服务区", "Zhongluotan public service area"]]],
  ["mali", "马沥", "Mali", [["从化北部公共服务区", "Northern Conghua public service area"], ["流溪河沿岸公共空间", "Liuxi River public space"]]],
  ["xinhe", "新和", "Xinhe", [["从化北部公共服务区", "Northern Conghua public service area"], ["流溪河沿岸公共空间", "Liuxi River public space"]]],
  ["taiping", "太平", "Taiping", [["从化温泉旅游区", "Conghua Hot Spring Tourist Area", "旅游景区", "Tourist area"], ["太平镇公共服务区", "Taiping public service area"]]],
  ["shengang", "神岗", "Shengang", [["从化温泉旅游区", "Conghua Hot Spring Tourist Area", "旅游景区", "Tourist area"], ["流溪河国家森林公园", "Liuxi River National Forest Park", "公园", "Park"]]],
  ["chicao", "赤草", "Chicao", [["从化温泉旅游区", "Conghua Hot Spring Tourist Area", "旅游景区", "Tourist area"], ["流溪河国家森林公园", "Liuxi River National Forest Park", "公园", "Park"]]],
  ["dongfeng", "东风", "Dongfeng", [["从化温泉旅游区", "Conghua Hot Spring Tourist Area", "旅游景区", "Tourist area"], ["从化区公共服务区", "Conghua public service area"]]]
].forEach((entry) => addStationArea(entry[0], entry[1], entry[2], entry[3]));
