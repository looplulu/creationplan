const POSITIONS = [
  { id: "gk", position: "门将", x: 50, y: 90 },
  { id: "lb", position: "左后卫", x: 18, y: 72 },
  { id: "lcb", position: "左中卫", x: 38, y: 76 },
  { id: "rcb", position: "右中卫", x: 62, y: 76 },
  { id: "rb", position: "右后卫", x: 82, y: 72 },
  { id: "dm", position: "后腰", x: 50, y: 58 },
  { id: "lcm", position: "左中场", x: 30, y: 43 },
  { id: "rcm", position: "右中场", x: 70, y: 43 },
  { id: "lw", position: "左边锋", x: 22, y: 22 },
  { id: "rw", position: "右边锋", x: 78, y: 22 },
  { id: "st", position: "前锋", x: 50, y: 14 },
];

const BLUEPRINTS = [
  {
    match: /造物|产品|工具|创作|写作|内容|作品|项目|开发|独立开发|自媒体/,
    abilities: ["身体状态", "时间管理", "抗挫能力", "复盘能力", "长期主义", "学习能力", "产品判断", "AI协作", "创意能力", "传播能力", "行动力"],
    weak: "传播能力",
    mvp: "行动力",
    summary: "这是一个持续输出型目标。阵容的关键不是灵感爆发，而是让产品、反馈和发布节奏连续发生。",
    training: "今天发布一个可被别人看见的小版本，而不是继续打磨到完美。",
  },
  {
    match: /减肥|跑步|运动|健身|体重|马拉松|健康|早睡|熬夜|饮食/,
    abilities: ["恢复能力", "饮食边界", "动作安全", "环境控制", "长期耐心", "身体觉察", "计划执行", "情绪管理", "即时反馈", "社交支持", "行动力"],
    weak: "环境控制",
    mvp: "计划执行",
    summary: "这是一个身体系统目标。真正决定比赛的，往往不是某次高强度训练，而是恢复、饮食和环境是否配合。",
    training: "今天只完成一次 20 分钟低门槛运动，并提前准备下一餐的选择。",
  },
  {
    match: /考研|考试|上岸|学习|英语|读书|证书|大学|学历|专业/,
    abilities: ["睡眠稳定", "资料筛选", "基础巩固", "错题复盘", "长期主义", "理解能力", "计划能力", "专注能力", "表达输出", "信息检索", "每日开工"],
    weak: "错题复盘",
    mvp: "每日开工",
    summary: "这是一个长期备赛目标。阵容里最怕的不是天赋不够，而是每天开不了工、错题不回看。",
    training: "今天完成一个 45 分钟学习块，并只复盘 3 个真正不会的点。",
  },
  {
    match: /工作|求职|新工作|跳槽|面试|转行|职业|升职|简历/,
    abilities: ["精力管理", "简历表达", "风险控制", "行业理解", "长期规划", "学习迁移", "作品证明", "沟通能力", "机会搜索", "人脉触达", "主动争取"],
    weak: "作品证明",
    mvp: "主动争取",
    summary: "这是一个职业跃迁目标。只提升能力还不够，你还需要让市场看见证据，并主动进入机会流。",
    training: "今天改一段简历或补一个作品证明，然后发给一位可信的人看。",
  },
  {
    match: /创业|公司|生意|赚钱|副业|商业|客户|融资/,
    abilities: ["身体续航", "现金流意识", "风险控制", "用户洞察", "战略耐心", "学习速度", "产品能力", "销售表达", "创意破局", "获客能力", "推进力"],
    weak: "获客能力",
    mvp: "用户洞察",
    summary: "这是一个商业比赛。阵容不能只会做产品，还要能找到真实客户，听懂需求，并持续推进。",
    training: "今天联系 3 个潜在用户，问一个真实问题，不急着推销。",
  },
  {
    match: /.*/,
    abilities: ["身体状态", "时间管理", "抗挫能力", "边界感", "长期主义", "学习能力", "判断力", "沟通能力", "创意能力", "资源整合", "行动力"],
    weak: "时间管理",
    mvp: "行动力",
    summary: "这是一个需要持续推进的目标。阵容要先保证比赛不会提前结束，再把行动、判断和反馈连起来。",
    training: "今天把目标拆成一个 30 分钟内能完成的动作，并立刻完成它。",
  },
];

const POSITION_REASONS = {
  "门将": "它守住底线。一旦这里失守，整场比赛很容易提前结束。",
  "左后卫": "它负责补位和保护边界，决定你能不能稳定推进而不被日常打穿。",
  "左中卫": "它负责扛冲击，目标遇到低谷时先靠它不崩盘。",
  "右中卫": "它负责清理混乱，让问题被复盘，而不是变成情绪。",
  "右后卫": "它负责持续覆盖，保证你不是偶尔冲刺，而是能回到轨道。",
  "后腰": "它连接防守和进攻，决定信息、学习和行动能不能衔接起来。",
  "左中场": "它负责组织节奏，让目标从想法变成可执行的安排。",
  "右中场": "它负责协同和传球，让你不只靠一个人硬扛。",
  "左边锋": "它负责创造突破，给目标带来新解法和新角度。",
  "右边锋": "它负责把成果送到外部世界，让机会和反馈进入比赛。",
  "前锋": "它负责临门一脚。没有它，所有分析都会停在战术板上。",
};

const elements = {
  form: document.querySelector("#lineupForm"),
  input: document.querySelector("#goalInput"),
  characterCount: document.querySelector("#characterCount"),
  hero: document.querySelector("#hero"),
  inlineLoading: document.querySelector("#inlineLoading"),
  submitButton: document.querySelector("#submitButton"),
  result: document.querySelector("#result"),
  goalTitle: document.querySelector("#goalTitle"),
  coachSummary: document.querySelector("#coachSummary"),
  formationText: document.querySelector("#formationText"),
  totalScore: document.querySelector("#totalScore"),
  verdict: document.querySelector("#verdict"),
  players: document.querySelector("#players"),
  playerCard: document.querySelector("#playerCard"),
  mvpName: document.querySelector("#mvpName"),
  mvpReason: document.querySelector("#mvpReason"),
  weaknessName: document.querySelector("#weaknessName"),
  weaknessReason: document.querySelector("#weaknessReason"),
  todayTraining: document.querySelector("#todayTraining"),
  shareGoal: document.querySelector("#shareGoal"),
  shareFormation: document.querySelector("#shareFormation"),
  shareMvp: document.querySelector("#shareMvp"),
  shareWeakness: document.querySelector("#shareWeakness"),
  shareTraining: document.querySelector("#shareTraining"),
  restartButton: document.querySelector("#restartButton"),
  copyButton: document.querySelector("#copyButton"),
  copyFeedback: document.querySelector("#copyFeedback"),
  aboutButton: document.querySelector("#aboutButton"),
  aboutDialog: document.querySelector("#aboutDialog"),
  dialogClose: document.querySelector("#dialogClose"),
};

const state = {
  lineup: null,
  selectedIndex: 0,
};

function getBlueprint(goal) {
  return BLUEPRINTS.find((blueprint) => blueprint.match.test(goal)) || BLUEPRINTS.at(-1);
}

function clampRating(value) {
  const number = Number(value);
  if (!Number.isFinite(number)) return 3;
  return Math.min(5, Math.max(1, Math.round(number)));
}

function starText(rating) {
  const full = "★".repeat(clampRating(rating));
  const empty = "☆".repeat(5 - clampRating(rating));
  return full + empty;
}

function scoreFromPlayers(players) {
  const average = players.reduce((sum, player) => sum + clampRating(player.rating), 0) / players.length;
  return Math.round(average * 16 + 12);
}

function makePlayer(position, ability, index, blueprint) {
  const baseRatings = [5, 4, 4, 4, 4, 5, 4, 4, 4, 5, 5];
  let rating = baseRatings[index] || 3;
  if (ability === blueprint.weak) rating = 5;
  if (ability === blueprint.mvp) rating = 5;

  return {
    position: position.position,
    ability,
    rating,
    whyPosition: POSITION_REASONS[position.position],
    currentSignal: rating >= 5
      ? "这是这场目标里的关键位置，忽略它会明显影响推进。"
      : "这项能力不是唯一核心，但会决定目标推进是否稳定。",
    training: `今天给「${ability}」安排一个 20 分钟的小训练。`,
  };
}

function buildLocalLineup(goal) {
  const blueprint = getBlueprint(goal);
  const players = POSITIONS.map((position, index) =>
    makePlayer(position, blueprint.abilities[index], index, blueprint)
  );
  const mvp = players.find((player) => player.ability === blueprint.mvp) || players.at(-1);
  const weakness = players.find((player) => player.ability === blueprint.weak) || players.find((player) => player.rating >= 5) || players[1];
  const totalScore = scoreFromPlayers(players);

  return {
    goal,
    formation: "4-3-3",
    summary: blueprint.summary,
    players,
    mvp: {
      position: mvp.position,
      ability: mvp.ability,
      reason: `${mvp.ability}会直接决定这个目标能不能从计划进入现实。`,
    },
    weakness: {
      position: weakness.position,
      ability: weakness.ability,
      reason: `${weakness.ability}是这个目标最容易卡住推进的位置，应该优先训练。`,
    },
    totalScore,
    verdict: totalScore >= 82 ? "目标关键路径很清楚" : totalScore >= 72 ? "阵容已经成型" : "先把关键位置排清楚",
    todayTraining: blueprint.training,
    source: "local",
  };
}

function normalizeLineup(lineup, goal) {
  if (!lineup || !Array.isArray(lineup.players) || lineup.players.length !== 11) {
    return null;
  }

  const players = lineup.players.map((player, index) => {
    const position = POSITIONS[index];
    return {
      position: typeof player.position === "string" && player.position.trim()
        ? player.position.trim()
        : position.position,
      ability: typeof player.ability === "string" && player.ability.trim()
        ? player.ability.trim().slice(0, 12)
        : `能力${index + 1}`,
      rating: clampRating(player.rating),
      whyPosition: typeof player.whyPosition === "string" && player.whyPosition.trim()
        ? player.whyPosition.trim().slice(0, 90)
        : POSITION_REASONS[position.position],
      currentSignal: typeof player.currentSignal === "string" && player.currentSignal.trim()
        ? player.currentSignal.trim().slice(0, 90)
        : "星级表示这项能力对目标的重要程度，不是你的当前能力。",
      training: typeof player.training === "string" && player.training.trim()
        ? player.training.trim().slice(0, 70)
        : `今天训练一次「${player.ability || "关键能力"}」。`,
    };
  });

  const fallback = buildLocalLineup(goal);
  return {
    goal: typeof lineup.goal === "string" && lineup.goal.trim() ? lineup.goal.trim().slice(0, 60) : goal,
    formation: typeof lineup.formation === "string" && lineup.formation.trim() ? lineup.formation.trim().slice(0, 12) : "4-3-3",
    summary: typeof lineup.summary === "string" && lineup.summary.trim() ? lineup.summary.trim().slice(0, 120) : fallback.summary,
    players,
    mvp: normalizeHighlight(lineup.mvp, fallback.mvp),
    weakness: normalizeHighlight(lineup.weakness, fallback.weakness),
    totalScore: Math.min(99, Math.max(35, Math.round(Number(lineup.totalScore) || scoreFromPlayers(players)))),
    verdict: typeof lineup.verdict === "string" && lineup.verdict.trim() ? lineup.verdict.trim().slice(0, 32) : fallback.verdict,
    todayTraining: typeof lineup.todayTraining === "string" && lineup.todayTraining.trim() ? lineup.todayTraining.trim().slice(0, 80) : fallback.todayTraining,
    source: lineup.source || "deepseek",
  };
}

function normalizeHighlight(value, fallback) {
  if (!value || typeof value !== "object") return fallback;
  return {
    position: typeof value.position === "string" && value.position.trim() ? value.position.trim().slice(0, 10) : fallback.position,
    ability: typeof value.ability === "string" && value.ability.trim() ? value.ability.trim().slice(0, 12) : fallback.ability,
    reason: typeof value.reason === "string" && value.reason.trim() ? value.reason.trim().slice(0, 90) : fallback.reason,
  };
}

async function requestLineup(goal) {
  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), 24000);

  try {
    const response = await fetch("./api/analyze", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ goal }),
      signal: controller.signal,
    });
    window.clearTimeout(timeout);

    if (!response.ok) throw new Error("API unavailable");
    const payload = await response.json();
    const lineup = normalizeLineup(payload.lineup, goal);
    if (!lineup) throw new Error("Invalid lineup");
    return lineup;
  } catch (error) {
    window.clearTimeout(timeout);
    return buildLocalLineup(goal);
  }
}

function renderLineup(lineup) {
  state.lineup = lineup;
  state.selectedIndex = 0;

  elements.goalTitle.textContent = `目标：${lineup.goal}`;
  elements.coachSummary.textContent = lineup.summary;
  elements.formationText.textContent = lineup.formation;
  elements.totalScore.textContent = String(lineup.totalScore);
  elements.verdict.textContent = lineup.verdict;
  elements.mvpName.textContent = `${lineup.mvp.ability} · ${lineup.mvp.position}`;
  elements.mvpReason.textContent = lineup.mvp.reason;
  elements.weaknessName.textContent = `${lineup.weakness.ability} · ${lineup.weakness.position}`;
  elements.weaknessReason.textContent = lineup.weakness.reason;
  elements.todayTraining.textContent = lineup.todayTraining;
  elements.shareGoal.textContent = `目标：${lineup.goal}`;
  elements.shareFormation.textContent = lineup.formation;
  elements.shareMvp.textContent = lineup.mvp.ability;
  elements.shareWeakness.textContent = lineup.weakness.ability;
  elements.shareTraining.textContent = lineup.todayTraining;

  elements.players.innerHTML = "";
  lineup.players.forEach((player, index) => {
    const pos = POSITIONS[index];
    const button = document.createElement("button");
    button.className = "player" + (index === 0 ? " active" : "");
    button.type = "button";
    button.style.left = `${pos.x}%`;
    button.style.top = `${pos.y}%`;
    button.innerHTML = `
      <span class="player-position">${player.position}</span>
      <span class="player-ability">${player.ability}</span>
      <span class="player-stars">${starText(player.rating)}</span>
    `;
    button.addEventListener("click", () => selectPlayer(index));
    elements.players.appendChild(button);
  });

  selectPlayer(0);
}

function selectPlayer(index) {
  const player = state.lineup.players[index];
  state.selectedIndex = index;
  document.querySelectorAll(".player").forEach((button, buttonIndex) => {
    button.classList.toggle("active", buttonIndex === index);
  });
  elements.playerCard.innerHTML = `
    <p class="card-label">${player.position}</p>
    <h3>⚽ ${player.ability}</h3>
    <div class="ability-meta">
      <span class="stars">${starText(player.rating)}</span>
      <span>重要程度 ${player.rating}/5</span>
    </div>
    <p><strong>为什么在这个位置：</strong>${player.whyPosition}</p>
    <p><strong>战术判断：</strong>${player.currentSignal}</p>
    <p><strong>训练建议：</strong>${player.training}</p>
  `;
}

function setStage(stage) {
  elements.hero.hidden = stage !== "hero";
  elements.result.hidden = stage !== "result";
  if (stage !== "result") {
    elements.result.classList.remove("reveal-now");
  }
}

function setSubmitting(isSubmitting) {
  elements.inlineLoading.hidden = !isSubmitting;
  elements.submitButton.disabled = isSubmitting;
  elements.input.disabled = isSubmitting;
}

function revealResultPage() {
  setStage("result");
  elements.result.classList.remove("reveal-now");
  void elements.result.offsetWidth;

  window.requestAnimationFrame(() => {
    elements.result.classList.add("reveal-now");
    elements.result.scrollIntoView({ behavior: "smooth", block: "start" });
    window.setTimeout(() => {
      elements.goalTitle.focus({ preventScroll: true });
    }, 320);
  });
}

async function handleSubmit(event) {
  event.preventDefault();
  const goal = elements.input.value.trim();
  if (!goal) {
    elements.input.focus();
    return;
  }

  setSubmitting(true);
  elements.result.hidden = true;

  try {
    const lineup = await requestLineup(goal);
    renderLineup(lineup);
    revealResultPage();
  } finally {
    setSubmitting(false);
  }
}

function copyReport() {
  if (!state.lineup) return;
  const lineup = state.lineup;
  const text = [
    "人生11人",
    `目标：${lineup.goal}`,
    `阵型：${lineup.formation}`,
    `战术指数：${lineup.totalScore}分，${lineup.verdict}`,
    `MVP：${lineup.mvp.ability}`,
    `优先补强：${lineup.weakness.ability}`,
    `今日训练：${lineup.todayTraining}`,
  ].join("\n");

  navigator.clipboard?.writeText(text).then(() => {
    elements.copyFeedback.textContent = "战报已复制";
    window.setTimeout(() => { elements.copyFeedback.textContent = ""; }, 1800);
  }).catch(() => {
    elements.copyFeedback.textContent = "复制失败，可以直接截图分享卡";
  });
}

elements.form.addEventListener("submit", handleSubmit);
elements.input.addEventListener("input", () => {
  elements.characterCount.textContent = `${elements.input.value.length} / 120`;
});
elements.restartButton.addEventListener("click", () => {
  setStage("hero");
  window.scrollTo({ top: 0, behavior: "smooth" });
  elements.input.focus();
});
elements.copyButton.addEventListener("click", copyReport);
elements.aboutButton.addEventListener("click", () => elements.aboutDialog.showModal());
elements.dialogClose.addEventListener("click", () => elements.aboutDialog.close());
