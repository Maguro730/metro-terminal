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
    routeViaLines: "乘坐线路",
    routeStops: "站",
    routeTransfers: "次换乘",
    routeNoTransfer: "无需换乘",
    routeRide: "乘坐",
    routeToward: "方向",
    routePass: "途经",
    routeTransferAt: "在",
    routeTransferTo: "换乘",
    routeTransferSameLine: "换乘另一交路列车，并确认列车终点",
    routeUnsupported: "暂不支持该目的地。当前数据库覆盖2号线、3号线和14号线的部分运营区段。",
    routeSameStation: "出发站和目的地相同，无需乘车。",
    routeSearchHint: "请选择目的地站，再点击查询路线。",
    routeVisualTitle: "线路图",
    routeVisualDescription: "按乘车顺序展示站点和换乘节点。",
    routeExpand: "展开完整站点",
    routeCollapse: "收起途经站点",
    routeBoard: "上车",
    routeAlight: "下车",
    routeInstructions: "乘车步骤与提醒",
    routeOrigin: "起点",
    routeDestination: "终点",
    routeTransferLabel: "换乘站",
    nearbyDataTitle: "站点附近的代表性地点",
    nearbyDataIntro: "按车站整理的购物、文化和公共服务地点。出行前请查看场所最新开放安排。",
    nearbyMore: "查看更多地点",
    nearbyLess: "收起更多地点",
    nearbyNoData: "该站的周边资料正在整理中，暂不显示未经核实的地点。",
    nearbyNoDataEn: "Nearby information for this station is still being verified.",
    nearbySourceNote: "信息用于毕业设计原型展示，实际出行请以现场导向和官方信息为准。",
    stationPickerOpen: "打开站点列表",
    stationPickerIndex: "按首字母跳转",
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
    routeViaLines: "Lines",
    routeStops: "stops",
    routeTransfers: "transfer(s)",
    routeNoTransfer: "No transfer",
    routeRide: "Take",
    routeToward: "direction",
    routePass: "Via",
    routeTransferAt: "At",
    routeTransferTo: "change to",
    routeTransferSameLine: "Change trains to the other service pattern; confirm the train destination",
    routeUnsupported: "This destination is not supported yet. The local database currently covers selected operating sections of Lines 2, 3 and 14.",
    routeSameStation: "The origin and destination are the same station.",
    routeSearchHint: "Choose a destination station, then find the route.",
    routeVisualTitle: "Route diagram",
    routeVisualDescription: "Stations and transfer nodes shown in travel order.",
    routeExpand: "Show all stations",
    routeCollapse: "Hide intermediate stations",
    routeBoard: "Board",
    routeAlight: "Alight",
    routeInstructions: "Travel steps and notes",
    routeOrigin: "Origin",
    routeDestination: "Destination",
    routeTransferLabel: "Transfer station",
    nearbyDataTitle: "Representative places near the station",
    nearbyDataIntro: "Shopping, cultural and public-service destinations by station. Check each venue's latest visitor information before travel.",
    nearbyMore: "Show more places",
    nearbyLess: "Show fewer places",
    nearbyNoData: "Nearby information for this station is still being verified.",
    nearbyNoDataEn: "Nearby information for this station is still being verified.",
    nearbySourceNote: "This information is for a graduation project prototype. Follow station signs and official information for actual travel.",
    stationPickerOpen: "Open station list",
    stationPickerIndex: "Jump by initial",
    languageLabel: "Switch language"
  }
};

let currentLanguage = "zh";
let selectedDestinationId = "";
const ROUTE_VISUAL_EXPAND_THRESHOLD = 8;

const stationRegistry = new Map();
metroLineSegments.forEach((segment) => {
  segment.stations.forEach((item) => {
    if (!stationRegistry.has(item.id)) {
      stationRegistry.set(item.id, item);
    }
  });
});

// Most station ids already use the station's Chinese pinyin. These entries
// cover the ids that use an English label or a shortened name instead.
const stationPinyinSortKeys = {
  "airport-north": "jichangbei",
  "airport-south": "jichangnan",
  "canton-tower": "guangzhouta",
  "south-china-normal-university": "huashi",
  "sun-yat-sen-memorial-hall": "jiniantang"
};

const stationPickers = new Map();

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

function stationSortKey(item) {
  if (currentLanguage === "zh") {
    return stationPinyinSortKeys[item.id] || item.id.replace(/-/g, "");
  }
  return item.en;
}

function stationInitial(item) {
  const key = stationSortKey(item).normalize("NFD").replace(/[^a-z]/gi, "");
  return (key.charAt(0) || "#").toUpperCase();
}

function getSortedStationItems() {
  return [...stationRegistry.values()].sort((a, b) => {
    const initialOrder = stationInitial(a).localeCompare(stationInitial(b));
    if (initialOrder !== 0) return initialOrder;
    return stationSortKey(a).localeCompare(stationSortKey(b), currentLanguage === "zh" ? "en" : undefined, { sensitivity: "base" });
  });
}

function getStationGroups() {
  const groups = new Map();
  getSortedStationItems().forEach((item) => {
    const initial = stationInitial(item);
    if (!groups.has(initial)) groups.set(initial, []);
    groups.get(initial).push(item);
  });
  return groups;
}

function populateSelect(select, selectedId) {
  select.innerHTML = "";
  getSortedStationItems().forEach((item) => {
    const id = item.id;
    const option = document.createElement("option");
    option.value = id;
    option.textContent = item[currentLanguage === "zh" ? "zh" : "en"];
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
  getSortedStationItems().forEach((item) => {
    const id = item.id;
    const option = document.createElement("option");
    option.value = id;
    option.textContent = item[currentLanguage === "zh" ? "zh" : "en"];
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

function closeAllStationPickers(exceptPicker = null) {
  stationPickers.forEach((picker) => {
    if (picker !== exceptPicker) setStationPickerOpen(picker, false);
  });
}

function updatePickerTrigger(picker) {
  const selectedId = picker.select.value;
  picker.trigger.textContent = selectedId ? stationName(selectedId) : text("destinationSelectHint");
  picker.trigger.classList.toggle("is-placeholder", !selectedId);
}

function updatePickerActiveLetter(picker) {
  const groups = [...picker.list.querySelectorAll(".station-picker-group")];
  if (groups.length === 0) return;

  const listTop = picker.list.getBoundingClientRect().top + 8;
  let activeLetter = groups[0].dataset.letter;
  groups.forEach((group) => {
    if (group.getBoundingClientRect().top <= listTop) activeLetter = group.dataset.letter;
  });

  picker.index.querySelectorAll("button[data-letter]").forEach((button) => {
    button.classList.toggle("active", button.dataset.letter === activeLetter);
  });
}

function renderStationPicker(picker) {
  const groups = getStationGroups();
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  picker.index.innerHTML = "";
  picker.list.innerHTML = "";

  letters.forEach((letter) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "station-picker-index-button";
    button.dataset.letter = letter;
    button.textContent = letter;
    button.disabled = !groups.has(letter);
    button.setAttribute("aria-label", `${letter}${button.disabled ? "" : `, ${text("stationPickerIndex")}`}`);
    button.addEventListener("click", () => {
      const group = picker.list.querySelector(`[data-letter="${letter}"]`);
      if (!group) return;
      picker.list.scrollTo({ top: group.offsetTop, behavior: "smooth" });
      window.setTimeout(() => updatePickerActiveLetter(picker), 180);
    });
    picker.index.appendChild(button);
  });

  groups.forEach((items, letter) => {
    const group = document.createElement("section");
    group.className = "station-picker-group";
    group.dataset.letter = letter;

    const heading = document.createElement("h3");
    heading.className = "station-picker-group-label";
    heading.textContent = letter;
    group.appendChild(heading);

    items.forEach((item) => {
      const option = document.createElement("button");
      option.type = "button";
      option.className = "station-picker-option";
      option.dataset.value = item.id;
      option.setAttribute("role", "option");
      option.setAttribute("aria-selected", String(item.id === picker.select.value));
      option.textContent = stationName(item.id);
      option.addEventListener("click", () => {
        picker.select.value = item.id;
        picker.select.dispatchEvent(new Event("change", { bubbles: true }));
        updatePickerTrigger(picker);
        setStationPickerOpen(picker, false);
        picker.trigger.focus();
      });
      group.appendChild(option);
    });

    picker.list.appendChild(group);
  });

  updatePickerTrigger(picker);
  updatePickerActiveLetter(picker);
}

function setStationPickerOpen(picker, isOpen) {
  picker.panel.hidden = !isOpen;
  picker.trigger.setAttribute("aria-expanded", String(isOpen));
  picker.wrapper.classList.toggle("is-open", isOpen);
  if (isOpen) {
    closeAllStationPickers(picker);
    renderStationPicker(picker);
    const selected = picker.list.querySelector(`[data-value="${picker.select.value}"]`);
    if (selected) selected.scrollIntoView({ block: "nearest" });
    updatePickerActiveLetter(picker);
  }
}

function createStationPicker(select) {
  if (!select || stationPickers.has(select.id)) return;

  const wrapper = document.createElement("div");
  wrapper.className = "station-picker";
  select.parentNode.insertBefore(wrapper, select);
  wrapper.appendChild(select);
  select.classList.add("station-picker-native");
  select.setAttribute("aria-hidden", "true");
  select.tabIndex = -1;

  const trigger = document.createElement("button");
  trigger.type = "button";
  trigger.className = "station-picker-trigger";
  trigger.id = `${select.id}-trigger`;
  trigger.setAttribute("aria-haspopup", "listbox");
  trigger.setAttribute("aria-expanded", "false");
  trigger.setAttribute("aria-controls", `${select.id}-panel`);
  trigger.setAttribute("aria-label", text("stationPickerOpen"));

  const panel = document.createElement("div");
  panel.className = "station-picker-panel";
  panel.id = `${select.id}-panel`;
  panel.hidden = true;

  const list = document.createElement("div");
  list.className = "station-picker-list";
  list.setAttribute("role", "listbox");
  list.setAttribute("aria-labelledby", trigger.id);

  const index = document.createElement("nav");
  index.className = "station-picker-index";
  index.setAttribute("aria-label", text("stationPickerIndex"));

  panel.append(list, index);
  wrapper.append(trigger, panel);

  const label = document.querySelector(`label[for="${select.id}"]`);
  if (label) label.htmlFor = trigger.id;

  const picker = { select, wrapper, trigger, panel, list, index };
  stationPickers.set(select.id, picker);
  trigger.addEventListener("click", () => setStationPickerOpen(picker, picker.panel.hidden));
  trigger.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setStationPickerOpen(picker, false);
  });
  panel.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setStationPickerOpen(picker, false);
      picker.trigger.focus();
    }
  });
  list.addEventListener("scroll", () => updatePickerActiveLetter(picker));
  renderStationPicker(picker);
}

function initializeStationPickers() {
  document.querySelectorAll("#origin-select, #destination-select, #nearby-station-select").forEach(createStationPicker);
  document.addEventListener("click", (event) => {
    stationPickers.forEach((picker) => {
      if (!picker.wrapper.contains(event.target)) setStationPickerOpen(picker, false);
    });
  });
}

function refreshStationPickers() {
  stationPickers.forEach((picker) => {
    picker.trigger.setAttribute("aria-label", text("stationPickerOpen"));
    picker.index.setAttribute("aria-label", text("stationPickerIndex"));
    renderStationPicker(picker);
  });
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
  if (!stationRegistry.has(originId) || !stationRegistry.has(destinationId)) return null;
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

function routeDirectionLabel(direction) {
  return currentLanguage === "zh" ? `往 ${direction} 方向` : `Towards ${direction}`;
}

function lineClass(number) {
  return `line-${number}`;
}

function routeSegmentLabel(segment) {
  return currentLanguage === "zh" ? segment.nameZh : segment.nameEn;
}

function nextRideGroup(groups, startIndex) {
  return groups.slice(startIndex).find((group) => group.type === "ride") || null;
}

function renderRouteVisualStation(stationId, flags = {}) {
  const classes = ["route-visual-station"];
  if (flags.isOrigin) classes.push("is-origin");
  if (flags.isDestination) classes.push("is-destination");
  if (flags.isTransfer) classes.push("is-transfer");

  const badges = [];
  if (flags.isOrigin) badges.push(`<span class="route-visual-badge is-origin">${text("routeOrigin")}</span>`);
  if (flags.isTransfer) badges.push(`<span class="route-visual-badge is-transfer">${text("routeTransferLabel")}</span>`);
  if (flags.isDestination) badges.push(`<span class="route-visual-badge is-destination">${text("routeDestination")}</span>`);

  return `
    <li class="${classes.join(" ")}" data-station-id="${stationId}">
      <span class="route-visual-marker" aria-hidden="true"></span>
      <span class="route-visual-station-content">
        <strong>${stationName(stationId)}</strong>
        ${badges.length ? `<span class="route-visual-badges">${badges.join("")}</span>` : ""}
      </span>
    </li>
  `;
}

function renderRouteVisual(groups, originId, destinationId) {
  const rideGroups = groups.filter((group) => group.type === "ride");
  if (rideGroups.length === 0) return "";

  const firstRide = rideGroups[0];
  const lastRide = rideGroups[rideGroups.length - 1];
  let html = `
    <section class="route-visual-panel" aria-labelledby="route-visual-title">
      <div class="route-visual-heading">
        <div>
          <h4 id="route-visual-title">${text("routeVisualTitle")}</h4>
          <p>${text("routeVisualDescription")}</p>
        </div>
      </div>
      <div class="route-visual-flow">
  `;

  groups.forEach((group, index) => {
    if (group.type !== "ride") return;

    const segment = metroLineSegments.find((item) => item.id === group.segmentId);
    if (!segment) return;
    const firstStationId = group.stationIds[0];
    const lastStationId = group.stationIds[group.stationIds.length - 1];
    const previousGroup = groups[index - 1];
    const startsAfterTransfer = previousGroup && previousGroup.type === "transfer";
    const transferAfter = groups[index + 1] && groups[index + 1].type === "transfer"
      ? groups[index + 1]
      : null;
    const followingRide = transferAfter ? nextRideGroup(groups, index + 2) : null;
    const followingSegment = followingRide
      ? metroLineSegments.find((item) => item.id === followingRide.segmentId)
      : null;
    const stationCount = Math.max(0, group.stationIds.length - 1);
    const isOpen = stationCount <= ROUTE_VISUAL_EXPAND_THRESHOLD;
    const lineName = routeSegmentLabel(segment);
    const direction = routeDirection(segment, firstStationId, lastStationId);
    const stationItems = group.stationIds.map((stationId) => renderRouteVisualStation(stationId, {
      isOrigin: index === groups.indexOf(firstRide) && stationId === originId,
      isDestination: index === groups.indexOf(lastRide) && stationId === destinationId,
      isTransfer: (transferAfter && stationId === transferAfter.stationId)
        || (startsAfterTransfer && stationId === previousGroup.stationId)
    })).join("");

    html += `
      <details class="route-visual-segment" data-segment-id="${segment.id}" style="--route-line-color: ${segment.color};"${isOpen ? " open" : ""}>
        <summary class="route-visual-segment-summary">
          <span class="route-visual-summary-head">
            <span class="line-pill ${lineClass(segment.number)}">${lineName}</span>
            <span>${stationCount} ${text("routeStops")}</span>
          </span>
          <span class="route-visual-direction">${routeDirectionLabel(direction)}</span>
          <span class="route-visual-mini">
            <span class="route-mini-stop"><span class="route-mini-marker" aria-hidden="true"></span><strong>${stationName(firstStationId)}</strong><span class="route-mini-label">${startsAfterTransfer ? text("routeTransferLabel") : text("routeOrigin")}</span></span>
            <span class="route-mini-stop"><span class="route-mini-marker" aria-hidden="true"></span><strong>${stationName(lastStationId)}</strong><span class="route-mini-label">${transferAfter ? text("routeTransferLabel") : text("routeDestination")}</span></span>
          </span>
          <span class="route-visual-disclosure">
            <span class="when-closed">${text("routeExpand")} ▾</span>
            <span class="when-open">${text("routeCollapse")} ▴</span>
          </span>
        </summary>
        <ol class="route-visual-stations" aria-label="${lineName}">${stationItems}</ol>
      </details>
    `;

    if (transferAfter && followingSegment) {
      const transferInstruction = segment.number === followingSegment.number
        ? text("routeTransferSameLine")
        : `${text("routeTransferTo")} ${routeSegmentLabel(followingSegment)}`;
      const followingDirection = routeDirection(followingSegment, followingRide.stationIds[0], followingRide.stationIds[followingRide.stationIds.length - 1]);
      html += `
        <div class="route-transfer-card" role="group" aria-label="${text("routeTransferAt")} ${stationName(transferAfter.stationId)}">
          <span class="route-transfer-icon" aria-hidden="true">⇄</span>
          <div>
            <strong>${text("routeTransferAt")} ${stationName(transferAfter.stationId)}</strong>
            <p class="route-transfer-lines">
              <span class="line-pill ${lineClass(segment.number)}">${lineName}</span>
              <span class="route-transfer-arrow" aria-hidden="true">→</span>
              <span class="line-pill ${lineClass(followingSegment.number)}">${routeSegmentLabel(followingSegment)}</span>
            </p>
            <p class="route-transfer-direction">${transferInstruction} · ${routeDirectionLabel(followingDirection)}</p>
          </div>
        </div>
      `;
    }
  });

  return `${html}</div></section>`;
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
  const operationNote = hasLine3Service ? `<p class="route-operation-note">${text("routeTerminalConfirmation")}</p>` : "";
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
    const lineName = currentLanguage === "zh" ? segment.nameZh : segment.nameEn;
    return `<li class="route-step"><span class="step-number">${index + 1}</span><div class="step-content"><strong><span class="line-pill ${lineClass(segment.number)}">${lineName}</span>${routeDirectionLabel(routeDirection(segment, first, last))}</strong><p>${text("routeBoard")}：${stationName(first)} → ${text("routeAlight")}：${stationName(last)}</p></div></li>`;
  }).join("");

  resultElement.innerHTML = `
    <div class="result-heading">
      <div>
        <h3>${stationName(originId)} → ${stationName(destinationId)}</h3>
        <p>${text("routeRecommendation")} · ${text("routeViaLines")} ${groups.filter((item) => item.type === "ride").map((item) => { const segment = metroLineSegments.find((candidate) => candidate.id === item.segmentId); return currentLanguage === "zh" ? segment.nameZh : segment.nameEn; }).join(currentLanguage === "zh" ? "、" : ", ")}</p>
      </div>
      <div class="result-stat">${route.stops} ${text("routeStops")}<br>${transferText}</div>
    </div>
    <h4 class="route-instructions-title">${text("routeInstructions")}</h4>
    <ol class="route-step-list">${steps}</ol>
    ${operationNote}
    ${renderRouteVisual(groups, originId, destinationId)}
  `;
}

function renderNearby(stationId) {
  const result = document.getElementById("nearby-result");
  if (!result) return;
  const keepMoreOpen = result.dataset.stationId === stationId && Boolean(result.querySelector(".nearby-more[open]"));
  result.dataset.stationId = stationId;
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
  });

  const more = items.length > 4
    ? `<details class="nearby-more"${keepMoreOpen ? " open" : ""}><summary><span class="when-closed">${text("nearbyMore")} (${items.length - 4})</span><span class="when-open">${text("nearbyLess")}</span></summary><div class="nearby-list">${items.slice(4).join("")}</div></details>`
    : "";
  result.innerHTML = `<h3>${name}</h3><p>${text("nearbyDataIntro")}</p><div class="nearby-list">${items.slice(0, 4).join("")}</div>${more}<p class="nearby-empty">${text("nearbySourceNote")}</p>`;
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
  refreshStationPickers();
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

initializeStationPickers();

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
