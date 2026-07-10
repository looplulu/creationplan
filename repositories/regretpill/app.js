const FALLBACKS = {
  learning: {
    match: /学习|英语|大学|读书|考试|专业|学历|考研|技能/,
    category: "学习成长",
    regret: "没有把学习坚持下去",
    coreNeed: "你怀念的可能不只是知识本身，而是那个本可以更有准备、更相信自己的版本。",
    timelines: [
      {
        key: "reality",
        title: "现实轨迹",
        content: "你沿着原来的生活继续前进，偶尔在机会出现时想起这件事。你也在别的领域积累了经验，只是这项能力一直没有成为你的底气。",
        gain: "时间流向了当时更紧迫的生活，也形成了别的能力与关系。",
        cost: "一些机会需要更高的重新开始成本，自我怀疑可能被反复唤起。",
      },
      {
        key: "alternate",
        title: "如果当初坚持",
        content: "你可能在最初几年忍受枯燥与缓慢进步，后来拥有更广的学习或职业入口。但坚持本身也会挤占娱乐、休息和探索其他方向的时间。",
        gain: "更早建立能力、自信与选择空间。",
        cost: "长期投入并不保证回报，还可能错过其他兴趣和经历。",
      },
      {
        key: "today",
        title: "如果今天开始",
        content: "你不再拥有当年的空白时间，却拥有更清楚的目的。把目标缩到每天可以完成的一小块，半年后仍可能重新建立学习节奏。",
        gain: "成熟的判断能让学习更聚焦，也更知道为什么而学。",
        cost: "进步不会补回所有错过，仍需要在现在的责任中腾出位置。",
      },
    ],
    todayAction: {
      title: "不补偿过去，只为今天建立一个能持续的学习入口。",
      steps: ["选定一个足够具体的目标，只保留一门内容。", "把第一次学习缩到 15 分钟，在今天完成。", "七天后只检查是否出现过，不评价学得够不够。"],
    },
  },
  health: {
    match: /运动|跑步|健身|健康|熬夜|睡觉|减肥|身体/,
    category: "健康习惯",
    regret: "没有更早照顾自己的身体",
    coreNeed: "你想追回的可能不是某个数字，而是身体本可以给生活提供的轻松感和主动权。",
    timelines: [
      {
        key: "reality",
        title: "现实轨迹",
        content: "生活继续被工作、情绪和琐事填满，身体偶尔用疲惫提醒你。你并非什么都没做，只是照顾自己常常排在最后。",
        gain: "时间被用于应付当时真实存在的责任与压力。",
        cost: "体能和恢复能力可能没有得到稳定维护，改变显得越来越难。",
      },
      {
        key: "alternate",
        title: "如果当初开始",
        content: "规律运动可能让你更早拥有稳定体能，也可能认识一群不同的人。但训练会占据时间，错误动作和过度自律同样可能带来损伤。",
        gain: "更早建立身体基础和处理压力的出口。",
        cost: "需要持续安排时间、恢复与饮食，也未必得到理想外形。",
      },
      {
        key: "today",
        title: "如果今天开始",
        content: "从今天开始不等于追赶过去。每周三次温和活动，仍可能在一年后改变你的体能和生活节奏，前提是允许自己慢慢来。",
        gain: "现在更了解自己的限制，能够选择更适合的方式。",
        cost: "变化仍需时间，旧伤或健康问题可能需要专业支持。",
      },
    ],
    todayAction: {
      title: "让身体收到一个信号：从今天起，它不再总排在最后。",
      steps: ["今天走路或拉伸 15 分钟，不追求强度。", "为本周确定三个可执行的活动时段。", "若有疼痛或基础疾病，先咨询专业人士。"],
    },
  },
  relationship: {
    match: /表白|分手|恋爱|喜欢|爱人|结婚|离婚|前任|感情/,
    category: "亲密关系",
    regret: "没有在那段关系里做出另一个选择",
    coreNeed: "你放不下的可能不只是一个人，也包括当时没能被说出、被看见的那部分自己。",
    timelines: [
      {
        key: "reality",
        title: "现实轨迹",
        content: "你们沿着各自的方向继续生活，记忆在某些时刻回来。遗憾保留了关系最有可能性的样子，也避开了它真实而复杂的后半段。",
        gain: "你没有承担另一段关系可能带来的冲突、磨损与责任。",
        cost: "没有发生的答案会被想象反复美化，形成长久悬念。",
      },
      {
        key: "alternate",
        title: "如果当初勇敢",
        content: "你可能得到回应，经历一段重要关系；也可能被拒绝，或在相处后发现彼此并不合适。勇敢只保证答案，不保证结果。",
        gain: "更早获得真实反馈，不必一直猜测另一种可能。",
        cost: "可能面对拒绝、失去关系，或进入一段并不轻松的相处。",
      },
      {
        key: "today",
        title: "如果今天开始",
        content: "今天能改变的未必是追回某个人，而是练习更诚实地表达需要、边界与喜欢，让下一段关系少一点猜测。",
        gain: "把遗憾转换成更成熟的沟通方式和关系选择。",
        cost: "诚实会带来脆弱，也需要接受对方可能不给出想要的回应。",
      },
    ],
    todayAction: {
      title: "不打扰已经结束的人，把未说出口的话变成今后的表达能力。",
      steps: ["写下当时最想说的一句话，但先不发送。", "圈出这句话背后真正的需要或恐惧。", "下一次重要关系中，提前表达一个小小的真实感受。"],
    },
  },
  family: {
    match: /父母|爸爸|妈妈|家人|陪伴|爷爷|奶奶|孩子|家庭/,
    category: "家庭关系",
    regret: "没有更早珍惜与家人的时间",
    coreNeed: "你想改变的可能不是某一次缺席，而是希望爱曾经被更清楚地表达和接住。",
    timelines: [
      {
        key: "reality",
        title: "现实轨迹",
        content: "当时的你也被自己的生活推着走，许多关心停留在心里。关系并非因此全盘失去，但一些时刻确实无法再复制。",
        gain: "你完成了当时必须承担的工作、成长或生活责任。",
        cost: "共同经历和表达机会有限，遗憾可能在时间变化后变得更清晰。",
      },
      {
        key: "alternate",
        title: "如果当初多陪伴",
        content: "你们也许留下更多日常记忆，彼此理解得更深；但更紧密的家庭投入也可能压缩个人发展，并暴露原本被距离遮住的矛盾。",
        gain: "更多共同时间、信息和彼此参与感。",
        cost: "陪伴不自动等于理解，也需要面对边界与家庭摩擦。",
      },
      {
        key: "today",
        title: "如果今天开始",
        content: "无法补回的时间无需假装能够补回。若关系仍在，一次具体的联系和倾听仍能改变接下来的相处；若人已不在，表达也可以用另一种方式继续。",
        gain: "把抽象亏欠转成当下真实的联系、记录或纪念。",
        cost: "关系修复需要双方参与，有些回应可能迟缓或并不理想。",
      },
    ],
    todayAction: {
      title: "爱不需要一次补完，先让它在今天拥有一个具体动作。",
      steps: ["联系一位想念的家人，问一个具体的近况。", "听完再回应，不急着给建议或解释自己。", "约定下一次可以兑现的见面或通话时间。"],
    },
  },
  career: {
    match: /工作|离职|创业|职业|公司|考公|转行|上班|升职/,
    category: "职业发展",
    regret: "没有在职业岔路口选择另一条路",
    coreNeed: "你在意的可能不只是职位，而是自己是否曾经有勇气争取更大的自主权和可能性。",
    timelines: [
      {
        key: "reality",
        title: "现实轨迹",
        content: "原来的选择带来了稳定、经验或必要的安全感，也可能让你在某些时刻觉得停滞。你避免了一部分风险，同时接受了另一种代价。",
        gain: "保留了现金流、履历连续性或熟悉环境中的关系。",
        cost: "新方向的尝试窗口变窄，未行动会被解释成能力不足。",
      },
      {
        key: "alternate",
        title: "如果当初转向",
        content: "你可能更早接近想做的事，也可能经历收入下降、失败或新的不适合。换路能改变问题的类型，却不会让问题消失。",
        gain: "更早验证兴趣和能力，获得另一套经验与人脉。",
        cost: "承担不确定收入、身份落差和重新学习的压力。",
      },
      {
        key: "today",
        title: "如果今天开始",
        content: "今天不一定需要立刻辞职。用小项目、访谈或短期学习先验证方向，三个月后你会拥有比遗憾更可靠的信息。",
        gain: "利用已有经验试错，降低一次性押注带来的风险。",
        cost: "双线尝试会消耗精力，也可能验证出理想方向并不适合。",
      },
    ],
    todayAction: {
      title: "先收集现实证据，再决定是否把人生押到另一条路上。",
      steps: ["写下最想改变的职业变量：内容、收入或自由度。", "联系一个正在那条路上的人，问三个具体问题。", "用两周完成一个最小验证项目，不先辞职。"],
    },
  },
  generic: {
    match: /.*/,
    category: "人生选择",
    regret: "希望当时做出另一个选择",
    coreNeed: "你想重写的可能不只是一个决定，而是希望当时的自己拥有更多信息、勇气或选择权。",
    timelines: [
      {
        key: "reality",
        title: "现实轨迹",
        content: "你沿着已经发生的选择走到今天，得到了一些当时看不见的东西，也失去了一些后来才懂得珍惜的可能。",
        gain: "真实生活留下了经验、关系和对自己的认识。",
        cost: "没有被选择的那条路容易在想象中显得更完整。",
      },
      {
        key: "alternate",
        title: "如果重新选择",
        content: "另一条路可能打开新的机会，也会带来当时无法预料的困难。它不是更好的人生，只是问题、风景和代价都不同。",
        gain: "获得不同的经历、能力和关系网络。",
        cost: "失去这条现实轨迹中已经得到的人与事，并承担新的不确定性。",
      },
      {
        key: "today",
        title: "如果今天开始",
        content: "过去的条件已经改变，但遗憾背后的需要未必全部过期。找到仍可行动的那一小部分，未来会从那里出现新的分支。",
        gain: "不再等待完美重来，而是在已有生活上增加新的选择。",
        cost: "改变不会抹去遗憾，也需要接受行动很小、结果很慢。",
      },
    ],
    todayAction: {
      title: "不要求今天改写人生，只要求它出现一个新的分支。",
      steps: ["写下这件遗憾背后最想得到的东西。", "划掉已经无法改变的部分，只留下仍能行动的部分。", "在 24 小时内完成一个不超过 20 分钟的动作。"],
    },
  },
};

const state = { result: null };

const elements = {
  intake: document.querySelector("#intake"),
  form: document.querySelector("#regretForm"),
  input: document.querySelector("#regretInput"),
  characterCount: document.querySelector("#characterCount"),
  rewinding: document.querySelector("#rewinding"),
  loadingHint: document.querySelector("#loadingHint"),
  result: document.querySelector("#result"),
  category: document.querySelector("#category"),
  regretTitle: document.querySelector("#regretTitle"),
  coreNeed: document.querySelector("#coreNeed"),
  timelineGrid: document.querySelector("#timelineGrid"),
  todayTitle: document.querySelector("#todayTitle"),
  todaySteps: document.querySelector("#todaySteps"),
  ending: document.querySelector("#ending"),
  afterword: document.querySelector("#afterword"),
  restartButton: document.querySelector("#restartButton"),
  copyButton: document.querySelector("#copyButton"),
  copyFeedback: document.querySelector("#copyFeedback"),
  aboutButton: document.querySelector("#aboutButton"),
  aboutDialog: document.querySelector("#aboutDialog"),
  dialogClose: document.querySelector("#dialogClose"),
};

function getPreset(input) {
  return (
    Object.entries(FALLBACKS).find(
      ([key, preset]) => key !== "generic" && preset.match.test(input),
    )?.[1] || FALLBACKS.generic
  );
}

function buildLocalResult(input) {
  const preset = getPreset(input);
  const endings = [
    "今天也是余生最早的一天。",
    "改变永远比反复审判过去更有意义。",
    "人生没有标准答案，但今天可以写下新的答案。",
  ];
  const endingIndex = [...input].reduce((sum, character) => sum + character.charCodeAt(0), 0) % endings.length;

  return {
    category: preset.category,
    regret: input,
    coreNeed: preset.coreNeed,
    timelines: preset.timelines,
    todayAction: preset.todayAction,
    ending: "真正的后悔药，不在昨天，而在今天。",
    afterword: endings[endingIndex],
    source: "local",
  };
}

async function requestAnalysis(input) {
  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), 24000);

  try {
    const response = await fetch("./api/analyze", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ regret: input }),
      signal: controller.signal,
    });

    if (!response.ok) throw new Error("analysis unavailable");
    const payload = await response.json();
    return payload.analysis;
  } catch (_error) {
    return buildLocalResult(input);
  } finally {
    window.clearTimeout(timeout);
  }
}

function renderTimelines(timelines) {
  const letters = ["A", "B", "C"];
  const labels = ["已经发生", "未选择的人生", "仍然开放"];

  elements.timelineGrid.replaceChildren(
    ...timelines.map((timeline, index) => {
      const article = document.createElement("article");
      article.className = `timeline-card is-${timeline.key}`;
      article.dataset.letter = letters[index];

      const indexRow = document.createElement("div");
      indexRow.className = "timeline-index";
      const indexText = document.createElement("span");
      indexText.textContent = `${letters[index]} 线 / ${labels[index]}`;
      const dot = document.createElement("i");
      indexRow.append(indexText, dot);

      const title = document.createElement("h3");
      title.textContent = timeline.title;
      const content = document.createElement("p");
      content.className = "timeline-content";
      content.textContent = timeline.content;

      const tradeoffs = document.createElement("dl");
      tradeoffs.className = "tradeoffs";
      [
        ["得到", timeline.gain, "gain"],
        ["代价", timeline.cost, "cost"],
      ].forEach(([label, text, className]) => {
        const row = document.createElement("div");
        row.className = `tradeoff ${className}`;
        const term = document.createElement("dt");
        term.textContent = label;
        const definition = document.createElement("dd");
        definition.textContent = text;
        row.append(term, definition);
        tradeoffs.append(row);
      });

      article.append(indexRow, title, content, tradeoffs);
      return article;
    }),
  );
}

function renderResult(result) {
  state.result = result;
  elements.category.textContent = result.category;
  elements.regretTitle.textContent = result.regret;
  elements.coreNeed.textContent = result.coreNeed;
  renderTimelines(result.timelines);
  elements.todayTitle.textContent = result.todayAction.title;
  elements.todaySteps.replaceChildren(
    ...result.todayAction.steps.map((step) => {
      const item = document.createElement("li");
      item.textContent = step;
      return item;
    }),
  );
  elements.ending.textContent = result.ending;
  elements.afterword.textContent = result.afterword;
}

function showView(view) {
  elements.intake.hidden = view !== "intake";
  elements.rewinding.hidden = view !== "rewinding";
  elements.result.hidden = view !== "result";
}

elements.input.addEventListener("input", () => {
  elements.characterCount.textContent = `${String(elements.input.value.length).padStart(3, "0")} / 160`;
});

document.querySelectorAll("[data-example]").forEach((button) => {
  button.addEventListener("click", () => {
    elements.input.value = button.dataset.example;
    elements.characterCount.textContent = `${String(elements.input.value.length).padStart(3, "0")} / 160`;
    elements.input.focus();
  });
});

elements.form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const input = elements.input.value.trim();
  if (!input) return;

  showView("rewinding");
  window.scrollTo({ top: 0, behavior: "smooth" });

  const hints = [
    "先理解你真正想改变的，未必只是那件事本身",
    "正在为另一条路补上它可能付出的代价",
    "最后一条时间线，从今天开始写",
  ];
  let hintIndex = 0;
  const hintTimer = window.setInterval(() => {
    hintIndex = (hintIndex + 1) % hints.length;
    elements.loadingHint.textContent = hints[hintIndex];
  }, 1900);

  const result = await requestAnalysis(input);
  window.clearInterval(hintTimer);
  renderResult(result);
  showView("result");
  window.scrollTo({ top: 0, behavior: "smooth" });
});

elements.restartButton.addEventListener("click", () => {
  showView("intake");
  elements.input.focus();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

elements.copyButton.addEventListener("click", async () => {
  if (!state.result) return;
  const text = [
    `给你一粒后悔药｜${state.result.regret}`,
    state.result.coreNeed,
    ...state.result.timelines.map(
      (timeline) =>
        `${timeline.title}：${timeline.content}\n得到：${timeline.gain}\n代价：${timeline.cost}`,
    ),
    `今日处方：${state.result.todayAction.steps.join("；")}`,
    state.result.ending,
  ].join("\n\n");

  try {
    await navigator.clipboard.writeText(text);
    elements.copyFeedback.textContent = "处方已复制。别急着重写人生，先完成第一步。";
  } catch (_error) {
    elements.copyFeedback.textContent = "浏览器没有允许复制，请手动选择页面文字。";
  }
});

elements.aboutButton.addEventListener("click", () => elements.aboutDialog.showModal());
elements.dialogClose.addEventListener("click", () => elements.aboutDialog.close());
elements.aboutDialog.addEventListener("click", (event) => {
  if (event.target === elements.aboutDialog) elements.aboutDialog.close();
});
