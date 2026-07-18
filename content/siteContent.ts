import type { Locale } from '../lib/i18n';

type Bucket = {
  key: string;
  name: string;
  role: string;
  question: string;
  description: string;
  principle: string;
  examples: string[];
  risk: string;
  evidence: string;
};

type Program = {
  type: string;
  title: string;
  summary: string;
  ideas: string[];
  source: string;
  href?: string;
  action: string;
};

export type SiteContent = {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    framework: string;
    programs: string;
    about: string;
    author: string;
    menu: string;
    language: string;
  };
  common: {
    projectName: string;
    eyebrow: string;
    readMore: string;
    external: string;
    backHome: string;
  };
  buckets: Bucket[];
  programs: Program[];
  home: {
    hero: {
      kicker: string;
      title: string;
      subtitle: string;
      body: string;
      primary: string;
      secondary: string;
      note: string;
    };
    thesis: {
      label: string;
      quote: string;
      body: string;
    };
    problem: {
      eyebrow: string;
      title: string;
      body: string;
      items: Array<{ title: string; body: string }>;
    };
    bridge: {
      eyebrow: string;
      title: string;
      body: string;
      worker: { label: string; title: string; body: string };
      investor: { label: string; title: string; body: string };
      conclusion: string;
    };
    framework: {
      eyebrow: string;
      title: string;
      body: string;
      action: string;
    };
    loop: {
      eyebrow: string;
      title: string;
      body: string;
      steps: Array<{ number: string; title: string; body: string }>;
    };
    programs: {
      eyebrow: string;
      title: string;
      body: string;
      action: string;
    };
    author: {
      eyebrow: string;
      title: string;
      body: string;
      projectBody: string;
      personalSite: string;
      about: string;
    };
    start: {
      eyebrow: string;
      title: string;
      body: string;
      questions: string[];
      action: string;
    };
  };
  frameworkPage: {
    eyebrow: string;
    title: string;
    intro: string;
    definitionLabel: string;
    definition: string;
    distinctionTitle: string;
    distinctions: Array<{ title: string; body: string }>;
    bucketsEyebrow: string;
    bucketsTitle: string;
    bucketsIntro: string;
    systemEyebrow: string;
    systemTitle: string;
    systemIntro: string;
    systemSteps: Array<{ title: string; body: string; output: string }>;
    boundaryEyebrow: string;
    boundaryTitle: string;
    boundaryBody: string;
    boundaryTests: string[];
    auditEyebrow: string;
    auditTitle: string;
    auditBody: string;
    auditQuestions: string[];
    close: string;
  };
  programsPage: {
    eyebrow: string;
    title: string;
    intro: string;
    methodTitle: string;
    methodBody: string;
    synthesisTitle: string;
    synthesisBody: string;
  };
  aboutPage: {
    eyebrow: string;
    title: string;
    intro: string;
    authorEyebrow: string;
    authorTitle: string;
    authorBody: string[];
    relationEyebrow: string;
    relationTitle: string;
    relations: Array<{ name: string; role: string; body: string; href: string }>;
    principlesEyebrow: string;
    principlesTitle: string;
    principles: string[];
  };
  footer: {
    line: string;
    framework: string;
    programs: string;
    about: string;
    personalSite: string;
    youtube: string;
    x: string;
    github: string;
  };
};

export const siteContent = {
  zh: {
    meta: {
      title: 'Human Capital ETF｜把自己当成一只长期资产组合',
      description:
        '一套面向普通工作者的人力资本配置框架：保护 Core，建设 Growth，形成 Distribution，并通过 Meta 持续再平衡。',
    },
    nav: {
      framework: '框架',
      programs: '节目',
      about: '关于',
      author: '作者主页',
      menu: '菜单',
      language: 'EN',
    },
    common: {
      projectName: 'Human Capital ETF',
      eyebrow: '人力资本配置框架',
      readMore: '继续阅读',
      external: '外部链接',
      backHome: '返回首页',
    },
    buckets: [
      {
        key: 'core',
        name: 'Core',
        role: '保护本金',
        question: '我靠什么站稳？',
        description:
          '维持整套系统运转的底盘：健康、可恢复的精力、专业能力、职业信用、稳定现金流与财务安全垫。健康不是其中一个普通子项，而是所有仓位能够结算的前提。',
        principle: 'Core 不是你最想做的事，而是你最不能轻易失去的东西。',
        examples: ['健康与恢复', '专业能力', '现金流与安全垫', '信用与责任'],
        risk: 'Core 失守时，其他仓位会被统一折价。',
        evidence: '你能持续工作、恢复、承担责任，并保有现实选择空间。',
      },
      {
        key: 'growth',
        name: 'Growth',
        role: '建设选择权',
        question: '我靠什么继续增长？',
        description:
          '面向未来三到五年的能力与项目押注。AI、编程、英语、写作或第二曲线只有进入项目、工具、作品和真实反馈，才从“学过”变成资产。',
        principle: 'Growth 的核心不是学习本身，而是增加未来选择权。',
        examples: ['AI 与自动化', '英语与跨域学习', '项目化能力', '第二曲线'],
        risk: '只输入、不转化，会形成伪 Growth 与高损耗学习。',
        evidence: '你能完成以前做不到的事，并获得新的项目、角色或路径。',
      },
      {
        key: 'distribution',
        name: 'Distribution',
        role: '让价值进入市场',
        question: '我的价值如何被看见？',
        description:
          '把经验、能力和判断外部化为文章、视频、作品、产品与可验证的公共记录，让价值被看见、理解、信任和使用。',
        principle: 'Distribution 不是包装自己，而是让内部价值进入外部世界。',
        examples: ['写作与视频', '公开作品', '个人叙事', '信任与连接'],
        risk: '没有 Distribution，能力只能在很小的范围内被定价。',
        evidence: '作品在你不在线时仍能被搜索、传播、引用或使用。',
      },
      {
        key: 'meta',
        name: 'Meta',
        role: '管理整只组合',
        question: '我如何确保没有走偏？',
        description:
          '观察、判断、配置、复盘、风险管理和再平衡的能力。Meta 不替代行动，它负责让有限的时间、精力和注意力回到真正重要的仓位。',
        principle: 'Meta 是基金经理，不是第五个待办清单。',
        examples: ['持仓盘点', '时间配置', '风险暴露', '季度再平衡'],
        risk: '没有 Meta，环境会替你配置时间，焦虑会替你配置注意力。',
        evidence: '你能看见漂移，解释取舍，并根据证据调整配置。',
      },
    ],
    programs: [
      {
        type: '已发布节目 · 框架起点',
        title: '把自己当成一只 ETF 来经营',
        summary:
          '从一生可出售的劳动时间进入，首次提出 Core、Growth、Distribution、Meta 四仓结构，并用热损耗、理想周和再平衡解释如何开始。',
        ideas: ['一篮子人力资本资产', '四仓配置', '学习转化率', '理想周与再平衡'],
        source: '08_PUBLISHED/VIDEO/HCE_INTRO_SCRIPT_PUBLISHED.md',
        href: 'https://www.youtube.com/watch?v=SeVZZnUz5yk',
        action: '观看节目',
      },
      {
        type: '已发布逐字稿 · 框架深化',
        title: 'Human Capital ETF：完整四仓框架',
        summary:
          '把 Growth 定义为未来斜率，把 Distribution 定义为被看见、理解和连接的能力，把 Meta 定义为管理组合的基金经理，并进一步抬高健康在 Core 中的位置。',
        ideas: ['健康是净值基础', 'Growth 是未来斜率', 'Distribution 是放大层', 'Meta 是基金经理'],
        source: '08_PUBLISHED/VIDEO/HCE_FULL_FRAMEWORK_SCRIPT_PUBLISHED.md',
        action: '查看结构整理',
      },
      {
        type: '已发布节目 · 现实约束',
        title: '当工作占满所有时间，个人成长还有可能吗？',
        summary:
          '从连续加班和时间被占有的现实出发，讨论工资现金流如何挤压长期复利系统，以及为什么要把已经消耗的经历沉淀为方法、作品和未来资产。',
        ideas: ['时间被占有', '现金流与长期系统', '经历资产化', '仓位再平衡'],
        source: '08_PUBLISHED/VIDEO/FACTORY_TO_OFFICE_WORKTIME_PUBLISHED.md',
        action: '查看结构整理',
      },
    ],
    home: {
      hero: {
        kicker: 'Human Capital ETF · The Worker Investor 的人力资本操作系统',
        title: '不要让生活随机配置你',
        subtitle: '把自己当成一只需要长期管理的资产组合。',
        body:
          '你的健康、现金流、专业能力、学习、表达和复盘能力，本来就会增值、折旧与失衡。Human Capital ETF 提供一套语言，帮助普通工作者保护本金、建设未来、让价值进入市场，并持续再平衡。',
        primary: '理解四个仓位',
        secondary: '从哪里开始',
        note: '不是成功学。不是把人变成金融产品。是一套从现实约束出发的自我配置框架。',
      },
      thesis: {
        label: '核心母句',
        quote: '你不是一份工作，也不是一个单一技能。你是一组会折旧、会增值、会失衡，也可以被再平衡的人力资本资产。',
        body: '问题不是你有没有努力，而是这些努力最后进入了哪个仓位，沉淀成了什么，又为未来保留了多少选择权。',
      },
      problem: {
        eyebrow: '为什么需要这个框架',
        title: '努力描述动作，配置解释结果',
        body:
          '很多人一直很忙，也一直在学，但无法回答“我究竟增长在了哪里”。Human Capital ETF 把模糊的成长，变成一组可以观察的结构问题。',
        items: [
          { title: '单点集中', body: '全部时间、收入和身份依赖一份工作、一个组织或一种技能。' },
          { title: '高损耗学习', body: '输入很多，却没有进入项目、工具、作品或真实反馈。' },
          { title: '价值不可见', body: '能力只存在于内部或组织内，无法形成更广泛的市场信用。' },
        ],
      },
      bridge: {
        eyebrow: '与 The Worker Investor 的关系',
        title: '一边为今天工作，一边为未来留下资产',
        body:
          'The Worker Investor 不是逃离工作的口号，而是一种双重记账方式。它解释为什么需要积累；Human Capital ETF 解释应该怎样配置。',
        worker: {
          label: '今天的账本',
          title: 'Worker',
          body: '完成交付，建立专业能力，换取工资与现实现金流，承担今天的生活和责任。',
        },
        investor: {
          label: '未来的账本',
          title: 'Investor',
          body: '把工资、经验、技能、注意力和输出的一部分，转成未来仍能工作的资产。',
        },
        conclusion: '同一个人，同时管理两张账。工资不是敌人；只留下工资，才是结构性风险。',
      },
      framework: {
        eyebrow: '四个功能仓位',
        title: '保护、增长、分发、再平衡',
        body:
          '四仓不是统一答案，也不是固定比例。它们是一套功能分类：先看每项投入在组合里承担什么，再判断它是否值得继续持有。',
        action: '查看完整框架',
      },
      loop: {
        eyebrow: '组合如何运行',
        title: '一套循环，而不是四个孤立标签',
        body: 'Core 提供稳定与现金流，Growth 建设新能力，Distribution 把能力转成外部资产，Meta 观察反馈并重新配置。',
        steps: [
          { number: '01', title: '保护', body: '先守住健康、恢复、现金流与专业基本盘。' },
          { number: '02', title: '增长', body: '用项目化投入建设未来三到五年的选择权。' },
          { number: '03', title: '分发', body: '把经验和能力变成能被看见、验证与使用的作品。' },
          { number: '04', title: '再平衡', body: '根据现实反馈调整时间、注意力与风险暴露。' },
        ],
      },
      programs: {
        eyebrow: '从逐字稿到框架',
        title: '这个系统从真实节目中长出来',
        body:
          '官网内容以已经录制的节目、正式定义稿与最新 Worker Investor 写作为来源。这里保留每期内容的核心问题、可复用概念和它对框架的贡献。',
        action: '查看节目与整理方法',
      },
      author: {
        eyebrow: '作者',
        title: '乔迈 · Qiaomai Liu',
        body:
          '工程师、写作者、长期学习者。工作与训练集中在能源、燃烧和整车热管理，目前从事商用车热管理研发。',
        projectBody:
          '我在 69mike.com 持续写作 The Worker Investor，并通过 Human Capital ETF 整理工作、健康、学习、内容与长期选择之间的关系。',
        personalSite: '访问 69mike.com',
        about: '了解作者与项目',
      },
      start: {
        eyebrow: '开始配置',
        title: '先画出你现在的组合',
        body: '不需要先决定理想比例。拿一张纸，用过去四周真实投入的时间、精力与产出来回答四个问题。',
        questions: ['什么正在支撑我站稳？', '什么正在增加未来选择权？', '什么让我的价值进入外部世界？', '我用什么机制观察与纠偏？'],
        action: '使用四仓盘点法',
      },
    },
    frameworkPage: {
      eyebrow: 'Framework / 框架',
      title: 'Human Capital ETF：一套人力资本配置系统',
      intro:
        '这套框架不替你选择职业，也不提供统一持仓比例。它做的事，是把健康、工作、学习、输出和复盘放进同一张结构图里，让投入、转化、风险和漂移变得可见。',
      definitionLabel: '正式定义',
      definition:
        'Human Capital ETF 是一套可以迁移到不同个体的人力资本配置框架。它以时间、精力、注意力和金钱为投入，管理能够维持生存、增加选择权、形成外部价值并支持持续校准的资产组合。',
      distinctionTitle: '它不是什么',
      distinctions: [
        { title: '不是能力清单', body: '同一项能力对不同的人可能属于不同仓位，关键在它承担的功能。' },
        { title: '不是固定比例', body: '职业阶段、健康、家庭与现金流不同，合理配置也不同。' },
        { title: '不是人生全部', body: '爱、关系、休息和无目的体验不必因为框架而被资产化。' },
      ],
      bucketsEyebrow: '四个仓位',
      bucketsTitle: '四个问题，覆盖整套人力资本系统',
      bucketsIntro: '先问功能，再看项目。一个项目可以跨仓，但必须说清它当前解决的主要问题。',
      systemEyebrow: '操作机制',
      systemTitle: '从活动到资产，需要四次转换',
      systemIntro: '忙碌不会自动变成积累。投入只有经过使用、沉淀、验证和复盘，才可能进入组合。',
      systemSteps: [
        { title: '盘点现实持仓', body: '回看过去四周，而不是理想中的自己。按实际时间、精力、产出和现金流记录。', output: '输出：当前持仓图' },
        { title: '设定有限配置', body: '先保护 Core，再为 Growth、Distribution 和 Meta 留出可持续的明确空间。', output: '输出：理想周与季度重点' },
        { title: '提高转化率', body: '让学习进入项目，让经验进入方法，让思考进入作品，让工资结余进入缓冲与资产。', output: '输出：可复用成果' },
        { title: '按证据再平衡', body: '观察健康、现金流、能力兑现、作品反馈和注意力漂移，小幅调整而不是反复归零。', output: '输出：下一周期配置' },
      ],
      boundaryEyebrow: '资产边界',
      boundaryTitle: '不是所有投入都会自动变成人力资本',
      boundaryBody: '课程、忙碌、证书、曝光和计划都只是活动。判断它是否进入资产状态，可以用四个测试。',
      boundaryTests: ['能否被重复使用？', '能否在真实场景部署？', '能否随时间积累而不是每次归零？', '能否提高现金流、影响力、恢复力或选择权？'],
      auditEyebrow: '四仓自测',
      auditTitle: '用二十分钟做第一次持仓盘点',
      auditBody: '写下答案，不追求精确比例。先让配置从不可见变得可见。',
      auditQuestions: ['Core：如果明天失去什么，我的整套系统会立刻受影响？', 'Growth：我正在建设哪一种三到五年后的新能力？', 'Distribution：什么作品能在我不在线时继续传递价值？', 'Meta：我什么时候复盘，依据什么决定加仓、减仓或停止？'],
      close: '人生不会自动复利。看见自己的配置，是重新配置自己的第一步。',
    },
    programsPage: {
      eyebrow: 'Programs / 节目',
      title: '从录制内容中提炼一套稳定框架',
      intro:
        '这里不是逐字稿堆放区。每期节目都被重新整理为：它真正回答的问题、需要保留的母句、对四仓定义的修正，以及能够进入官网的稳定概念。',
      methodTitle: '整理方法',
      methodBody:
        '先保留具体经历与核心问题，再压缩重复表达；把个人配置与通用定义分开；删除未经验证的固定比例与夸大回报；最后统一中英文术语和四仓边界。',
      synthesisTitle: '目前形成的共识',
      synthesisBody:
        '健康是 Core 能否结算的真实本金；Growth 必须增加选择权；Distribution 是价值资产化与市场连接；Meta 是配置系统。The Worker Investor 则把这套框架放回普通工作者对工资、时间和未来的现实处境。',
    },
    aboutPage: {
      eyebrow: 'About / 关于',
      title: '一个工程师从真实约束里长出的框架',
      intro:
        'Human Capital ETF 不是匿名的概念站。它来自乔迈对工作第一年、甲状腺手术、持续学习、内容输出、储蓄和时间配置的长期记录。',
      authorEyebrow: '作者',
      authorTitle: '乔迈 · Qiaomai Liu',
      authorBody: [
        '我是一名工程师。学习和工作经历集中在能源、燃烧与整车热管理，目前在 BYD 从事商用车热管理研发。',
        '我也长期写作。对我来说，写作不是主业之外的装饰，而是把经验变成公共资产、把模糊判断变成可检验语言的一种方式。',
        'Human Capital ETF 是配置框架；The Worker Investor 是我理解工资、劳动、资产与未来选择的写作主线；69mike.com 是这些写作、日记与项目的长期母站。',
      ],
      relationEyebrow: '项目关系',
      relationTitle: '三个名字，各自解决一个问题',
      relations: [
        { name: 'Human Capital ETF', role: '配置框架', body: '管理健康、现金流、能力、输出与再平衡。', href: '/framework' },
        { name: 'The Worker Investor', role: '写作主线', body: '讨论普通工作者如何把今天的一部分劳动与收入留给未来。', href: 'https://69mike.com/series/the-worker-investor/' },
        { name: '69mike.com', role: '作者母站', body: '乔迈的长文、日记、书架、研究背景与项目入口。', href: 'https://69mike.com/' },
      ],
      principlesEyebrow: '写作原则',
      principlesTitle: '这个项目坚持什么',
      principles: ['从个人经历进入，但不把个人配置冒充通用答案。', '不发明数据、回报率、进度或实验结果。', '先解释结构，再给建议；先保护本金，再谈增长。', '允许框架随着证据修正，但保留清楚的版本与来源。'],
    },
    footer: {
      line: '保护本金，建设选择权，让价值进入世界，并持续再平衡。',
      framework: '框架',
      programs: '节目',
      about: '关于',
      personalSite: '69mike.com',
      youtube: 'YouTube',
      x: 'X',
      github: 'GitHub',
    },
  },
  en: {
    meta: {
      title: 'Human Capital ETF | Manage Yourself as a Long-Term Portfolio',
      description:
        'A human-capital allocation framework for workers: protect Core, build Growth, create Distribution, and keep the whole portfolio aligned through Meta.',
    },
    nav: {
      framework: 'Framework',
      programs: 'Programs',
      about: 'About',
      author: 'Author site',
      menu: 'Menu',
      language: '中文',
    },
    common: {
      projectName: 'Human Capital ETF',
      eyebrow: 'Human-capital allocation framework',
      readMore: 'Read more',
      external: 'External link',
      backHome: 'Back home',
    },
    buckets: [
      {
        key: 'core',
        name: 'Core',
        role: 'Protect the principal',
        question: 'What keeps me standing?',
        description:
          'The base that keeps the system operational: health, recoverable energy, professional capability, career trust, reliable cash flow, and a financial buffer. Health is not just another item here; it is the condition that allows every position to clear.',
        principle: 'Core is not what you most want to do. It is what you can least afford to lose.',
        examples: ['Health and recovery', 'Professional capability', 'Cash flow and buffer', 'Trust and responsibility'],
        risk: 'When Core fails, every other position is repriced at once.',
        evidence: 'You can keep working, recover, meet obligations, and retain real room to choose.',
      },
      {
        key: 'growth',
        name: 'Growth',
        role: 'Build optionality',
        question: 'What lets me keep growing?',
        description:
          'Capabilities and project bets for the next three to five years. AI, coding, English, writing, or a second curve only become assets when they enter projects, tools, artifacts, and real feedback.',
        principle: 'Growth is not learning for its own sake. It is an increase in future options.',
        examples: ['AI and automation', 'English and cross-domain learning', 'Project capability', 'A second curve'],
        risk: 'Input without conversion creates pseudo-Growth and high-loss learning.',
        evidence: 'You can now do work you could not do before and access new projects, roles, or paths.',
      },
      {
        key: 'distribution',
        name: 'Distribution',
        role: 'Bring value to market',
        question: 'How does my value become visible?',
        description:
          'Externalize experience, capability, and judgment as essays, videos, artifacts, products, and verifiable public records so that value can be seen, understood, trusted, and used.',
        principle: 'Distribution is not self-packaging. It is how internal value enters the outside world.',
        examples: ['Writing and video', 'Public artifacts', 'Personal narrative', 'Trust and connection'],
        risk: 'Without Distribution, capability is priced inside a very small circle.',
        evidence: 'Your work can still be found, shared, cited, or used while you are offline.',
      },
      {
        key: 'meta',
        name: 'Meta',
        role: 'Manage the portfolio',
        question: 'How do I know I am not drifting?',
        description:
          'The ability to observe, judge, allocate, review, manage risk, and rebalance. Meta does not replace action. It returns scarce time, energy, and attention to the positions that matter.',
        principle: 'Meta is the fund manager, not a fifth to-do list.',
        examples: ['Portfolio audit', 'Time allocation', 'Risk exposure', 'Quarterly rebalance'],
        risk: 'Without Meta, organizations allocate your time and anxiety allocates your attention.',
        evidence: 'You can see drift, explain trade-offs, and change allocation in response to evidence.',
      },
    ],
    programs: [
      {
        type: 'Published program · Origin',
        title: 'Manage Yourself Like an ETF',
        summary:
          'Beginning with the labor time available across a working life, this program introduces Core, Growth, Distribution, and Meta, then uses heat loss, an ideal week, and rebalancing to show how to begin.',
        ideas: ['A basket of human-capital assets', 'Four-position allocation', 'Learning conversion', 'Ideal week and rebalancing'],
        source: '08_PUBLISHED/VIDEO/HCE_INTRO_SCRIPT_PUBLISHED.md',
        href: 'https://www.youtube.com/watch?v=SeVZZnUz5yk',
        action: 'Watch program',
      },
      {
        type: 'Published transcript · Deepening',
        title: 'Human Capital ETF: The Full Four-Position Framework',
        summary:
          'Defines Growth as the slope of the future, Distribution as the ability to be seen and understood, Meta as the portfolio manager, and raises health to its proper place inside Core.',
        ideas: ['Health underwrites net value', 'Growth is future slope', 'Distribution amplifies', 'Meta manages'],
        source: '08_PUBLISHED/VIDEO/HCE_FULL_FRAMEWORK_SCRIPT_PUBLISHED.md',
        action: 'Read the synthesis',
      },
      {
        type: 'Published program · Real constraints',
        title: 'Can Personal Growth Survive When Work Takes All Your Time?',
        summary:
          'Starting from overtime and the loss of time sovereignty, this program examines how present cash flow can squeeze long-term compounding—and why consumed experience should still become methods, artifacts, and future assets.',
        ideas: ['Time under external control', 'Cash flow versus long-term systems', 'Turning experience into assets', 'Portfolio rebalancing'],
        source: '08_PUBLISHED/VIDEO/FACTORY_TO_OFFICE_WORKTIME_PUBLISHED.md',
        action: 'Read the synthesis',
      },
    ],
    home: {
      hero: {
        kicker: 'Human Capital ETF · The operating system behind The Worker Investor',
        title: 'Do not let life allocate you by default',
        subtitle: 'Manage yourself as a portfolio built to last.',
        body:
          'Your health, cash flow, professional capability, learning, public work, and judgment already appreciate, depreciate, and drift. Human Capital ETF gives workers a language for protecting the principal, building the future, bringing value to market, and rebalancing over time.',
        primary: 'Understand the four positions',
        secondary: 'Start with an audit',
        note: 'Not self-help. Not a way to turn a person into a financial product. A framework grounded in real constraints.',
      },
      thesis: {
        label: 'Central thesis',
        quote: 'You are not a job or a single skill. You are a set of human-capital assets that can depreciate, appreciate, drift, and be rebalanced.',
        body: 'The question is not whether you worked hard. It is where that effort landed, what it became, and how much future optionality it preserved.',
      },
      problem: {
        eyebrow: 'Why this framework exists',
        title: 'Effort describes motion. Allocation explains outcomes.',
        body:
          'Many people work hard and keep learning, yet cannot answer, “Where exactly did I grow?” Human Capital ETF turns vague growth into structural questions that can be observed.',
        items: [
          { title: 'Single-point concentration', body: 'Time, income, and identity all depend on one job, organization, or skill.' },
          { title: 'High-loss learning', body: 'Heavy input never enters projects, tools, artifacts, or real feedback.' },
          { title: 'Invisible value', body: 'Capability remains private or organizational and never builds wider market trust.' },
        ],
      },
      bridge: {
        eyebrow: 'How this connects to The Worker Investor',
        title: 'Work for today while leaving assets for tomorrow',
        body:
          'The Worker Investor is not a slogan about escaping work. It is double-entry bookkeeping for a worker. It explains why accumulation matters; Human Capital ETF explains how to allocate it.',
        worker: {
          label: 'Today’s ledger',
          title: 'Worker',
          body: 'Deliver work, build professional capability, earn cash flow, and carry today’s life and obligations.',
        },
        investor: {
          label: 'Tomorrow’s ledger',
          title: 'Investor',
          body: 'Convert part of today’s wages, experience, skills, attention, and output into assets that keep working in the future.',
        },
        conclusion: 'The same person manages both ledgers. Wages are not the enemy; leaving nothing but wages is the structural risk.',
      },
      framework: {
        eyebrow: 'Four functional positions',
        title: 'Protect, grow, distribute, rebalance',
        body:
          'The four positions are neither universal answers nor fixed percentages. They classify function: first ask what an investment does in the portfolio, then decide whether it deserves to remain.',
        action: 'Explore the full framework',
      },
      loop: {
        eyebrow: 'How the portfolio operates',
        title: 'One loop, not four isolated labels',
        body: 'Core supplies stability and cash flow. Growth builds new capability. Distribution converts capability into external assets. Meta reads feedback and reallocates.',
        steps: [
          { number: '01', title: 'Protect', body: 'Secure health, recovery, cash flow, and professional foundations first.' },
          { number: '02', title: 'Grow', body: 'Use project-based investment to build optionality for the next three to five years.' },
          { number: '03', title: 'Distribute', body: 'Turn experience and capability into visible, verifiable, useful artifacts.' },
          { number: '04', title: 'Rebalance', body: 'Adjust time, attention, and risk exposure in response to evidence.' },
        ],
      },
      programs: {
        eyebrow: 'From transcripts to framework',
        title: 'The system grew out of real programs',
        body:
          'The site is grounded in recorded programs, a formal-definition draft, and current Worker Investor essays. Each source is reduced to its central problem, reusable concepts, and contribution to the framework.',
        action: 'See the programs and synthesis method',
      },
      author: {
        eyebrow: 'Author',
        title: 'Qiaomai Liu · 乔迈',
        body:
          'Engineer, writer, and lifelong learner. His work and training center on energy, combustion, and vehicle thermal management; he currently works in commercial-vehicle thermal-management R&D.',
        projectBody:
          'At 69mike.com, I write The Worker Investor and use Human Capital ETF to connect work, health, learning, public output, and long-term optionality.',
        personalSite: 'Visit 69mike.com',
        about: 'About the author and projects',
      },
      start: {
        eyebrow: 'Start allocating',
        title: 'Draw your current portfolio first',
        body: 'Do not begin with an ideal ratio. Take one sheet of paper and answer four questions using the actual time, energy, and output of the last four weeks.',
        questions: ['What is keeping me standing?', 'What is expanding my future options?', 'What brings my value into the outside world?', 'What mechanism helps me observe and correct drift?'],
        action: 'Use the four-position audit',
      },
    },
    frameworkPage: {
      eyebrow: 'Framework',
      title: 'Human Capital ETF: a system for allocating human capital',
      intro:
        'The framework does not choose a career for you or prescribe universal weights. It places health, work, learning, public output, and review on one map so that investment, conversion, risk, and drift become visible.',
      definitionLabel: 'Formal definition',
      definition:
        'Human Capital ETF is a transferable framework for allocating human capital. It treats time, energy, attention, and money as inputs and manages a portfolio of assets that sustain life, expand optionality, create external value, and support continuous correction.',
      distinctionTitle: 'What it is not',
      distinctions: [
        { title: 'Not a capability checklist', body: 'The same capability can serve a different function for a different person. Function determines the position.' },
        { title: 'Not a fixed allocation', body: 'Career stage, health, family, and cash flow change what a sound portfolio looks like.' },
        { title: 'Not the whole of life', body: 'Love, relationships, rest, and purposeless experience do not need to be converted into assets.' },
      ],
      bucketsEyebrow: 'Four positions',
      bucketsTitle: 'Four questions that cover the operating system',
      bucketsIntro: 'Ask about function before listing projects. A project may span positions, but its primary job must be clear.',
      systemEyebrow: 'Operating mechanism',
      systemTitle: 'Activity becomes an asset through four conversions',
      systemIntro: 'Busyness does not automatically compound. Inputs enter the portfolio only after use, preservation, validation, and review.',
      systemSteps: [
        { title: 'Audit the real holdings', body: 'Review the last four weeks, not your ideal self. Record actual time, energy, output, and cash flow.', output: 'Output: current portfolio map' },
        { title: 'Choose a finite allocation', body: 'Protect Core first, then reserve sustainable, explicit space for Growth, Distribution, and Meta.', output: 'Output: ideal week and quarterly focus' },
        { title: 'Raise the conversion rate', body: 'Move learning into projects, experience into methods, thinking into artifacts, and wage surplus into buffers and assets.', output: 'Output: reusable results' },
        { title: 'Rebalance from evidence', body: 'Read health, cash flow, capability, artifact feedback, and attention drift. Adjust in small steps instead of resetting life.', output: 'Output: next-cycle allocation' },
      ],
      boundaryEyebrow: 'Asset boundary',
      boundaryTitle: 'Not every investment automatically becomes human capital',
      boundaryBody: 'Courses, busyness, credentials, exposure, and plans are activities. Four tests reveal whether they have entered an asset state.',
      boundaryTests: ['Can it be reused?', 'Can it be deployed in a real setting?', 'Can it accumulate instead of resetting each time?', 'Can it improve cash flow, reach, resilience, or optionality?'],
      auditEyebrow: 'Four-position audit',
      auditTitle: 'Run your first portfolio audit in twenty minutes',
      auditBody: 'Write the answers. Precision can come later; visibility comes first.',
      auditQuestions: ['Core: What loss tomorrow would immediately weaken my whole system?', 'Growth: What capability am I building for three to five years from now?', 'Distribution: What artifact keeps carrying value while I am offline?', 'Meta: When do I review, and what evidence triggers more, less, or a stop?'],
      close: 'Life does not compound automatically. Seeing your allocation is the first step toward changing it.',
    },
    programsPage: {
      eyebrow: 'Programs',
      title: 'Turning recorded thought into a stable framework',
      intro:
        'This is not a transcript dump. Each program is reorganized around the question it truly answers, the sentence worth preserving, the correction it makes to the four positions, and the durable concept that belongs on the site.',
      methodTitle: 'Synthesis method',
      methodBody:
        'Keep the concrete experience and central question, compress repetition, separate the author’s portfolio from the transferable definition, remove unsupported percentages and exaggerated returns, then standardize the Chinese and English vocabulary.',
      synthesisTitle: 'The current synthesis',
      synthesisBody:
        'Health is the principal that lets Core clear. Growth must increase optionality. Distribution turns value into public assets and market connection. Meta manages allocation. The Worker Investor returns the framework to the real conditions of wages, time, and a worker’s future.',
    },
    aboutPage: {
      eyebrow: 'About',
      title: 'A framework built by an engineer inside real constraints',
      intro:
        'Human Capital ETF is not an anonymous concept site. It grew out of Qiaomai’s records of his first working year, thyroid surgery, sustained learning, public writing, saving, and the allocation of time.',
      authorEyebrow: 'Author',
      authorTitle: 'Qiaomai Liu · 乔迈',
      authorBody: [
        'I am an engineer. My training and work center on energy, combustion, and vehicle thermal management. I currently work in commercial-vehicle thermal-management R&D at BYD.',
        'I am also a long-term writer. Writing is not decoration around my job. It is how experience becomes a public asset and vague judgment becomes language that can be examined.',
        'Human Capital ETF is the allocation framework. The Worker Investor is my writing line about wages, labor, assets, and future options. 69mike.com is the long-term home for those essays, diaries, and projects.',
      ],
      relationEyebrow: 'Project map',
      relationTitle: 'Three names, three different jobs',
      relations: [
        { name: 'Human Capital ETF', role: 'Allocation framework', body: 'Manages health, cash flow, capability, public output, and rebalancing.', href: '/framework' },
        { name: 'The Worker Investor', role: 'Writing line', body: 'How an ordinary worker can preserve part of today’s labor and income for the future.', href: 'https://69mike.com/series/the-worker-investor/' },
        { name: '69mike.com', role: 'Author’s home', body: 'Qiaomai’s essays, diary, bookshelf, professional background, and project index.', href: 'https://69mike.com/' },
      ],
      principlesEyebrow: 'Editorial principles',
      principlesTitle: 'What this project commits to',
      principles: ['Begin with lived experience, but never present a personal allocation as a universal answer.', 'Do not invent data, returns, progress, or experimental results.', 'Explain structure before advice; protect the principal before chasing growth.', 'Let evidence revise the framework while keeping versions and sources clear.'],
    },
    footer: {
      line: 'Protect the principal. Build optionality. Bring value into the world. Rebalance.',
      framework: 'Framework',
      programs: 'Programs',
      about: 'About',
      personalSite: '69mike.com',
      youtube: 'YouTube',
      x: 'X',
      github: 'GitHub',
    },
  },
} satisfies Record<Locale, SiteContent>;

export function getContent(locale: Locale) {
  return siteContent[locale];
}
