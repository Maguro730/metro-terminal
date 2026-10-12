// 第二阶段：站点搜索、可解释路线计算、周边信息浏览和中英文界面切换。

const translations = {
  zh: {
    serviceLabel: "广州地铁公共服务",
    pageTitle: "地铁智能出行查询终端",
    currentStation: "当前车站",
    stationName: "嘉禾望岗",
    welcomeKicker: "欢迎使用",
    welcomeTitle: "从嘉禾望岗出发，查找你的下一站",
    welcomeCopy: "请选择下方服务，获取线路换乘或车站周边信息。",
    routeTitle: "线路查询",
    routeDescription: "搜索目的地，查看乘车方向与换乘步骤",
    nearbyTitle: "地铁周边",
    nearbyDescription: "查看车站附近的景点、商场和公共地标",
    assistanceText: "本终端提供辅助查询服务，请同时留意站内导向和安全提示。",
    backHome: "返回首页",
    openNearby: "地铁周边",
    openRoute: "线路查询",
    routeKicker: "出行规划",
    routeViewTitle: "线路查询",
    originLabel: "出发站",
    destinationLabel: "目的地",
    destinationPlaceholder: "输入目的地站名，例如：广州南站",
    destinationSelectHint: "请选择目的地站",
    searchRoute: "查询路线",
    popularStations: "常用目的地",
    nearbyKicker: "站点周边",
    nearbyViewTitle: "地铁周边",
    nearbyStationLabel: "选择车站",
    nearbyHelper: "显示已整理的车站周边资料，出口和距离信息以现场指引为准。",
    routeRecommendation: "推荐路线",
    routeTerminalConfirmation: "3号线存在不同运营交路及短线车，请按站内指引确认列车终点。",
    routeStops: "站",
    routeTransfers: "次换乘",
    routeNoTransfer: "无需换乘",
    routeRide: "乘坐",
    routeToward: "方向",
    routePass: "途经",
    routeTransferAt: "在",
    routeTransferTo: "换乘",
    routeTransferSameLine: "在该站调整乘车方向",
    routeUnsupported: "暂不支持该目的地。当前数据库覆盖2号线、3号线和14号线的部分运营区段。",
    routeSameStation: "出发站和目的地相同，无需乘车。",
    routeSearchHint: "请选择目的地站，再点击查询路线。",
    nearbyDataTitle: "站点附近的代表性地点",
    nearbyDataIntro: "以下为本阶段整理的公共目的地资料，未加入出口编号和步行距离。",
    nearbyNoData: "该站的周边资料正在整理中，暂不显示未经核实的地点。",
    nearbyNoDataEn: "Nearby information for this station is still being verified.",
    nearbySourceNote: "信息用于毕业设计原型展示，实际出行请以现场导向和官方信息为准。",
    languageLabel: "切换语言"
  },
  en: {
    serviceLabel: "Guangzhou Metro Public Service",
    pageTitle: "Smart Metro Travel Terminal",
    currentStation: "Current station",
    stationName: "Jiahe Wanggang",
    welcomeKicker: "Welcome",
    welcomeTitle: "Find your next stop from Jiahe Wanggang",
    welcomeCopy: "Choose a service below to view route or station information.",
    routeTitle: "Route search",
    routeDescription: "Search a destination, direction and transfer steps",
    nearbyTitle: "Nearby places",
    nearbyDescription: "Explore attractions, shopping and landmarks near stations",
    assistanceText: "This terminal provides supplementary information. Please also follow station signs and safety notices.",
    backHome: "Back to home",
    openNearby: "Nearby places",
    openRoute: "Route search",
    routeKicker: "Trip planning",
    routeViewTitle: "Route search",
    originLabel: "From",
    destinationLabel: "To",
    destinationPlaceholder: "Enter a station, for example Guangzhou South",
    destinationSelectHint: "Choose a destination station",
    searchRoute: "Find route",
    popularStations: "Popular destinations",
    nearbyKicker: "Around the station",
    nearbyViewTitle: "Nearby places",
    nearbyStationLabel: "Choose a station",
    nearbyHelper: "Browse the prepared station information. Check station signs for exits and distances.",
    routeRecommendation: "Recommended route",
    routeTerminalConfirmation: "Line 3 uses multiple service patterns and short-turn trains; confirm the train destination from station guidance.",
    routeStops: "stops",
    routeTransfers: "transfer(s)",
    routeNoTransfer: "No transfer",
    routeRide: "Take",
    routeToward: "direction",
    routePass: "Via",
    routeTransferAt: "At",
    routeTransferTo: "change to",
    routeTransferSameLine: "adjust direction at this station",
    routeUnsupported: "This destination is not supported yet. The local database currently covers selected operating sections of Lines 2, 3 and 14.",
    routeSameStation: "The origin and destination are the same station.",
    routeSearchHint: "Choose a destination station, then find the route.",
    nearbyDataTitle: "Representative places near the station",
    nearbyDataIntro: "This first set contains public destinations. Exit numbers and walking distances are not included yet.",
    nearbyNoData: "Nearby information for this station is still being verified.",
    nearbyNoDataEn: "Nearby information for this station is still being verified.",
    nearbySourceNote: "This information is for a graduation project prototype. Follow station signs and official information for actual travel.",
    languageLabel: "Switch language"
  }
};

let currentLanguage = "zh";
let selectedDestinationId = "";

const stationRegistry = new Map();
metroLineSegments.forEach((segment) => {
  segment.stations.forEach((item) => {
    if (!stationRegistry.has(item.id)) {
      stationRegistry.set(item.id, item);
    }
  });
});

const stationIds = [...stationRegistry.keys()];
function text(key) {
  return translations[currentLanguage][key] || key;
}

function stationName(stationId) {
  const item = stationRegistry.get(stationId);
  return item ? item[currentLanguage === "zh" ? "zh" : "en"] : stationId;
}

function getStationLines(stationId) {
  return metroLineSegments.filter((segment) => segment.stations.some((item) => item.id === stationId));
}

function populateSelect(select, selectedId) {
  select.innerHTML = "";
  stationIds.forEach((id) => {
    const option = document.createElement("option");
    option.value = id;
    option.textContent = stationName(id);
    option.selected = id === selectedId;
    select.appendChild(option);
  });
}

function populateOriginSelect() {
  const select = document.getElementById("origin-select");
  if (!select) return;
  const selectedId = select.value || defaultOriginStationId;
  populateSelect(select, selectedId);
}

function populateDestinationSelect() {
  const select = document.getElementById("destination-select");
  if (!select) return;
  const selectedId = select.value || selectedDestinationId;
  select.innerHTML = `<option value="" disabled ${selectedId ? "" : "selected"}>${text("destinationSelectHint")}</option>`;
  stationIds.forEach((id) => {
    const option = document.createElement("option");
    option.value = id;
    option.textContent = stationName(id);
    option.selected = id === selectedId;
    select.appendChild(option);
  });
}

function populateNearbySelect() {
  const select = document.getElementById("nearby-station-select");
  if (!select) return;
  const selectedId = select.value || defaultOriginStationId;
  populateSelect(select, selectedId);
}

function segmentIndex(segment, stationId) {
  return segment.stations.findIndex((item) => item.id === stationId);
}

function stateKey(segmentId, stationId) {
  return `${segmentId}::${stationId}`;
}

function compareScore(a, b) {
  if (a.cost !== b.cost) return a.cost - b.cost;
  if (a.transfers !== b.transfers) return a.transfers - b.transfers;
  return a.stops - b.stops;
}

function canTransferBetween(segment, otherSegment, stationId) {
  if (segment.number !== otherSegment.number) return true;
  const allowedStations = new Set([
    ...(segment.transferStations || []),
    ...(otherSegment.transferStations || [])
  ]);
  return allowedStations.has(stationId);
}

function calculateRoute(originId, destinationId) {
  if (originId === destinationId) {
    return { stops: 0, transfers: 0, actions: [] };
  }

  const best = new Map();
  const queue = [];
  getStationLines(originId).forEach((segment) => {
    const key = stateKey(segment.id, originId);
    const record = { key, segmentId: segment.id, stationId: originId, cost: 0, stops: 0, transfers: 0, previous: null, action: null };
    best.set(key, record);
    queue.push(record);
  });

  while (queue.length > 0) {
    queue.sort(compareScore);
    const current = queue.shift();
    const saved = best.get(current.key);
    if (saved !== current) continue;

    const segment = metroLineSegments.find((item) => item.id === current.segmentId);
    const index = segmentIndex(segment, current.stationId);
    const nextStations = [segment.stations[index - 1], segment.stations[index + 1]].filter(Boolean);

    nextStations.forEach((nextStation) => {
      const nextKey = stateKey(segment.id, nextStation.id);
      const candidate = {
        key: nextKey,
        segmentId: segment.id,
        stationId: nextStation.id,
        cost: current.cost + 1,
        stops: current.stops + 1,
        transfers: current.transfers,
        previous: current.key,
        action: { type: "ride", segmentId: segment.id, from: current.stationId, to: nextStation.id }
      };
      const old = best.get(nextKey);
      if (!old || compareScore(candidate, old) < 0) {
        best.set(nextKey, candidate);
        queue.push(candidate);
      }
    });

    getStationLines(current.stationId).forEach((otherSegment) => {
      if (otherSegment.id === segment.id) return;
      if (!canTransferBetween(segment, otherSegment, current.stationId)) return;
      const nextKey = stateKey(otherSegment.id, current.stationId);
      const candidate = {
        key: nextKey,
        segmentId: otherSegment.id,
        stationId: current.stationId,
        cost: current.cost + 100,
        stops: current.stops,
        transfers: current.transfers + 1,
        previous: current.key,
        action: { type: "transfer", stationId: current.stationId, fromSegmentId: segment.id, toSegmentId: otherSegment.id }
      };
      const old = best.get(nextKey);
      if (!old || compareScore(candidate, old) < 0) {
        best.set(nextKey, candidate);
        queue.push(candidate);
      }
    });
  }

  const destinations = [...best.values()].filter((item) => item.stationId === destinationId);
  if (destinations.length === 0) return null;
  const final = destinations.sort(compareScore)[0];
  const actions = [];
  let cursor = final;
  while (cursor && cursor.action) {
    actions.push(cursor.action);
    cursor = best.get(cursor.previous);
  }
  actions.reverse();
  return { stops: final.stops, transfers: final.transfers, actions };
}

function groupRouteActions(route) {
  const groups = [];
  route.actions.forEach((action) => {
    if (action.type === "transfer") {
      groups.push(action);
      return;
    }

    const last = groups[groups.length - 1];
    if (last && last.type === "ride" && last.segmentId === action.segmentId) {
      last.stationIds.push(action.to);
    } else {
      groups.push({ type: "ride", segmentId: action.segmentId, stationIds: [action.from, action.to] });
    }
  });
  return groups;
}

function routeDirection(segment, fromId, toId) {
  const fromIndex = segmentIndex(segment, fromId);
  const toIndex = segmentIndex(segment, toId);
  const end = toIndex > fromIndex ? segment.stations[segment.stations.length - 1] : segment.stations[0];
  return stationName(end.id);
}

function lineClass(number) {
  return `line-${number}`;
}

function renderRouteResult() {
  const resultElement = document.getElementById("route-result");
  const originSelect = document.getElementById("origin-select");
  const destinationSelect = document.getElementById("destination-select");
  if (!resultElement || !originSelect || !destinationSelect) return;
  const originId = originSelect.value || defaultOriginStationId;
  const destinationId = destinationSelect.value || selectedDestinationId;

  resultElement.hidden = false;
  if (!destinationId || !stationRegistry.has(destinationId)) {
    resultElement.innerHTML = `<p class="nearby-empty">${text("routeSearchHint")}</p>`;
    return;
  }

  selectedDestinationId = destinationId;
  const route = calculateRoute(originId, destinationId);
  if (!route) {
    resultElement.innerHTML = `<p class="nearby-empty">${text("routeUnsupported")}</p>`;
    return;
  }

  if (route.stops === 0) {
    resultElement.innerHTML = `<div class="result-heading"><div><h3>${stationName(originId)}</h3><p>${text("routeSameStation")}</p></div></div>`;
    return;
  }

  const transferText = route.transfers === 0 ? text("routeNoTransfer") : `${route.transfers} ${text("routeTransfers")}`;
  const groups = groupRouteActions(route);
  const hasLine3Service = groups.some((group) => group.type === "ride" && ["line-3-main", "line-3-north"].includes(group.segmentId));
  const operationNote = hasLine3Service ? ` · ${text("routeTerminalConfirmation")}` : "";
  const steps = groups.map((group, index) => {
    if (group.type === "transfer") {
      const fromSegment = metroLineSegments.find((item) => item.id === group.fromSegmentId);
      const toSegment = metroLineSegments.find((item) => item.id === group.toSegmentId);
      const stationText = stationName(group.stationId);
      const transferText = fromSegment.number === toSegment.number
        ? text("routeTransferSameLine")
        : `${text("routeTransferTo")} ${currentLanguage === "zh" ? toSegment.nameZh : toSegment.nameEn}`;
      return `<li class="route-step"><span class="step-number">${index + 1}</span><div class="step-content"><strong>${text("routeTransferAt")} ${stationText}</strong><p>${transferText}</p></div></li>`;
    }

    const segment = metroLineSegments.find((item) => item.id === group.segmentId);
    const first = group.stationIds[0];
    const last = group.stationIds[group.stationIds.length - 1];
    const names = group.stationIds.map((id) => stationName(id)).join(currentLanguage === "zh" ? "、" : " → ");
    const lineName = currentLanguage === "zh" ? segment.nameZh : segment.nameEn;
    return `<li class="route-step"><span class="step-number">${index + 1}</span><div class="step-content"><strong><span class="line-pill ${lineClass(segment.number)}">${lineName}</span>${text("routeRide")} ${routeDirection(segment, first, last)} ${text("routeToward")}</strong><p>${text("routePass")}：${names}</p></div></li>`;
  }).join("");

  resultElement.innerHTML = `
    <div class="result-heading">
      <div>
        <h3>${stationName(originId)} → ${stationName(destinationId)}</h3>
        <p>${text("routeRecommendation")} · ${text("routePass")} ${groups.filter((item) => item.type === "ride").map((item) => { const segment = metroLineSegments.find((candidate) => candidate.id === item.segmentId); return currentLanguage === "zh" ? segment.nameZh : segment.nameEn; }).join(currentLanguage === "zh" ? "、" : ", ")}${operationNote}</p>
      </div>
      <div class="result-stat">${route.stops} ${text("routeStops")}<br>${transferText}</div>
    </div>
    <ol class="route-step-list">${steps}</ol>
  `;
}

function renderNearby(stationId) {
  const result = document.getElementById("nearby-result");
  const data = nearbyData[stationId];
  const name = stationName(stationId);
  if (!data) {
    result.innerHTML = `<h3>${name}</h3><p class="nearby-empty">${text("nearbyNoData")}</p>`;
    return;
  }

  const items = data.items.map((item) => {
    const nameKey = currentLanguage === "zh" ? "nameZh" : "nameEn";
    const typeKey = currentLanguage === "zh" ? "typeZh" : "typeEn";
    const descriptionKey = currentLanguage === "zh" ? "descriptionZh" : "descriptionEn";
    return `<article class="nearby-item"><span class="nearby-type">${item[typeKey]}</span><h4>${item[nameKey]}</h4><p>${item[descriptionKey]}</p></article>`;
  }).join("");

  result.innerHTML = `<h3>${currentLanguage === "zh" ? data.stationZh : data.stationEn}</h3><p>${text("nearbyDataIntro")}</p><div class="nearby-list">${items}</div><p class="nearby-empty">${text("nearbySourceNote")}</p>`;
}

function updatePlaceholders() {
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.placeholder = text(element.dataset.i18nPlaceholder);
  });
}

function updatePageLinks(language) {
  document.querySelectorAll("a[href]").forEach((link) => {
    const href = link.getAttribute("href");
    if (!href || href.startsWith("#") || href.startsWith("http") || !href.includes(".html")) return;
    const page = href.split("?")[0];
    link.setAttribute("href", `${page}?lang=${language}`);
  });
}

function updateLanguage(language) {
  currentLanguage = language === "en" ? "en" : "zh";
  document.documentElement.lang = language === "zh" ? "zh-CN" : "en";

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (translations[language][key]) element.textContent = translations[language][key];
  });

  document.querySelectorAll(".language-option").forEach((option) => {
    option.classList.toggle("active", option.dataset.language === language);
  });
  const languageToggle = document.getElementById("language-toggle");
  if (languageToggle) languageToggle.setAttribute("aria-label", text("languageLabel"));
  updatePlaceholders();
  updatePageLinks(currentLanguage);
  populateOriginSelect();
  populateDestinationSelect();
  populateNearbySelect();
  const nearbySelect = document.getElementById("nearby-station-select");
  if (nearbySelect) renderNearby(nearbySelect.value || defaultOriginStationId);
  const routeResult = document.getElementById("route-result");
  if (routeResult && !routeResult.hidden) renderRouteResult();
}

const languageToggle = document.getElementById("language-toggle");
if (languageToggle) {
  languageToggle.addEventListener("click", () => {
    const nextLanguage = currentLanguage === "zh" ? "en" : "zh";
    try { localStorage.setItem("metro-terminal-language", nextLanguage); } catch (error) { /* file:// 环境可能禁用本地存储 */ }
    updateLanguage(nextLanguage);
  });
}

const routeSearchButton = document.getElementById("route-search-button");
if (routeSearchButton) routeSearchButton.addEventListener("click", renderRouteResult);

const destinationSelect = document.getElementById("destination-select");
if (destinationSelect) destinationSelect.addEventListener("change", (event) => {
  selectedDestinationId = event.target.value;
});

const nearbyStationSelect = document.getElementById("nearby-station-select");
if (nearbyStationSelect) nearbyStationSelect.addEventListener("change", (event) => {
  renderNearby(event.target.value);
});

let initialLanguage = "zh";
try {
  const queryLanguage = new URLSearchParams(window.location.search).get("lang");
  initialLanguage = queryLanguage === "en" || queryLanguage === "zh"
    ? queryLanguage
    : (localStorage.getItem("metro-terminal-language") || "zh");
} catch (error) {
  initialLanguage = "zh";
}
updateLanguage(initialLanguage);
