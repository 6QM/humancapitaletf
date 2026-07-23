# Human Capital ETF Skill

> 用 **Core、Distribution、Meta、Growth** 四个仓位，帮助一个人看见、诊断并再平衡自己的非金融性人力资本。

Human Capital ETF 是由 **乔迈（Qiaomai Liu）**提出的开放框架与交互式 Agent Skill。它帮助用户回答：多年工作和学习究竟留下了什么？哪些能力能够迁移？组合集中在哪里？学习为什么没有转化为作品、反馈或机会？未来 30—90 天应该保护、增加、转化、减少或停止什么？

它不是证券、金融 ETF、人格测试或人的价值评分，也不能替代医疗、心理、法律和金融专业服务。

## 四个仓位

| 仓位 | 功能 |
|---|---|
| **Core** | 保护健康、精力、价值与习惯、已验证能力、判断和持续行动的本金 |
| **Distribution** | 通过作品、表达、案例、关系、声誉、渠道、信息和机会接入，将能力外部化并验证 |
| **Meta** | 观察、学习、选择、停止、复盘、记录、自动化和再平衡 |
| **Growth** | 通过教育、训练、练习、实验与真实项目建立尚未验证的新能力 |

ETF 隐喻最重要的不是固定比例，而是：**仓位角色、分散、漂移检测、生命周期迁移和再平衡。**

## 怎样调用

```text
使用 human-capital-etf，帮我盘点过去五年真正积累的人力资本，并制定 90 天再平衡方案。
```

```text
$human-capital-etf 我学了很多 AI 工具，却没有形成稳定作品。帮我诊断转换瓶颈。
```

用户也可以只描述现实问题：

```text
我在公司内部能力很强，但担心离开后这些经验无法迁移。
```

```text
我同时做了七个学习项目，帮我判断应该停止什么。
```

```text
我每天复盘，但从来没有因为复盘真正改变时间分配。
```

## 四种交互模式

- **Guided diagnosis：**一次一个问题；
- **Context dump：**直接粘贴简历、经历、项目、复盘或自由叙述；
- **Best-guess scan：**信息有限时先建立临时地图，明确假设和置信度；
- **Rebalance review：**比较原计划与实际投入，检查漂移并重新配置。

## 与 Becker《Human Capital》的关系

Gary S. Becker 的人力资本理论提供教育、在职培训、健康、信息、迁移、直接成本、机会成本、回报、折旧，以及一般性与专用性培训的经济学分析。

Becker 并没有提出 Core、Distribution、Meta、Growth。Human Capital ETF 在其理论基础上增加了组合管理层：

- Becker 层回答一项人力资本投资由什么构成、成本与回报是什么；
- HCE 层回答它目前承担什么仓位角色，以及应该如何迁移和再平衡。

一项新能力可能从 Growth 开始，通过真实项目、重复使用和反馈进入 Core；Core 与 Growth 通过 Distribution 获得外部验证；Meta 根据反馈决定继续、维护、减少、转化还是停止。

## 安装

Codex 个人范围：

```text
$HOME/.agents/skills/human-capital-etf/
```

Codex 仓库范围：

```text
$REPO_ROOT/.agents/skills/human-capital-etf/
```

GitHub 负责托管和传播 Skill；真正运行时，Agent 需要读取并激活 `SKILL.md`。

## v0.1.0 的任务边界

首版只稳定完成一件事：

> 建立四仓位人力资本地图，找出主要转换瓶颈，并生成 30 或 90 天再平衡方案。

## 作者与归属

Human Capital ETF framework by **Qiaomai Liu（乔迈）**。

个人网站：`69mike.com`  
框架网站：`humancapitaletf.com`

## License

Apache-2.0。进行大规模转载、改编或再分发时，请保留 Human Capital ETF 框架及作者归属。
