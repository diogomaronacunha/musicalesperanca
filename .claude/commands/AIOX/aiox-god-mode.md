# aiox-god-mode

ACTIVATION-NOTICE: This is the Supreme AIOX Operator skill. It provides unified access to all AIOX framework capabilities — creation, operation, and configuration — without switching agents.

CRITICAL: Read the full definition below and operate exactly as specified. This skill does NOT transform you into a persona — it gives you a structured interface to route, create, and configure the AIOX framework.

## AIOX God Mode v3.0

```yaml
skill:
  name: aiox-god-mode
  alias: aios-god-mode
  version: "3.0"
  title: Supreme AIOX Operator
  description: |
    Unified framework orchestration. You describe WHAT. God Mode figures out HOW.
    Routes to the right agent, creates components, or configures the system.
  icon: ⚡

intent-classification:
  OPERATE:
    description: Route tasks, execute workflows, manage story lifecycles
    triggers:
      - "implement", "build", "develop", "create story", "run tests"
      - "deploy", "review", "design", "research", "analyze"
    action: Route to appropriate agent via agent-routing-matrix
  CREATE:
    description: Build new AIOX framework components from scratch
    triggers:
      - "create agent", "create task", "create workflow", "create squad"
      - "new rule", "new template", "new checklist", "new data file"
    action: Execute creation command with structured schema
  CONFIGURE:
    description: Modify system settings, boundaries, contextual rules
    triggers:
      - "configure", "update settings", "change boundary", "add rule"
      - "modify CLAUDE.md", "update permissions"
    action: Execute configuration task with validation

creation-commands:
  - name: create-agent
    syntax: "*create-agent {name}"
    description: Full YAML frontmatter + markdown persona
    schema: .aiox-core/development/tasks/create-agent.md
  - name: create-task
    syntax: "*create-task {name}"
    description: Executable task with pre/post-conditions and elicit gates
    schema: .aiox-core/development/tasks/create-task.md
  - name: create-workflow
    syntax: "*create-workflow {name}"
    description: Multi-phase workflow with error handling
    schema: .aiox-core/development/tasks/create-workflow.md
  - name: create-squad
    syntax: "*create-squad {name}"
    description: Collaborative agent team with manifest
    schema: .aiox-core/development/tasks/create-squad.md # via squad-creator
  - name: create-checklist
    syntax: "*create-checklist {name}"
    description: Validation framework (blocking/advisory)
    schema: .aiox-core/development/checklists/
  - name: create-template
    syntax: "*create-template {name}"
    description: Reusable pattern with variables
  - name: create-rule
    syntax: "*create-rule {name}"
    description: Contextual path-based governance rule
    destination: .claude/rules/
  - name: create-data
    syntax: "*create-data {name}"
    description: YAML registry or heuristics data file
    destination: .aiox-core/development/data/

agent-routing-matrix:
  "@dev (Dex)":
    triggers: [implement, build, fix, code, develop]
    exclusive: [git add, git commit, git branch]
    blocked: [git push, gh pr create]
  "@qa (Quinn)":
    triggers: [test, review, quality, security, qa-gate]
    commands: [*review, *gate, *security-check, *qa-loop]
  "@architect (Aria)":
    triggers: [architecture, design system, technology selection, api design]
    commands: [*design-system, *api-design, *analyze-impact]
  "@pm (Morgan)":
    triggers: [prd, epic, requirements, spec pipeline]
    exclusive: [*create-epic, *execute-epic]
  "@po (Pax)":
    triggers: [validate story, backlog, acceptance criteria]
    exclusive: [*validate-story-draft, story Draft→Ready transition]
  "@sm (River)":
    triggers: [create story, draft story, story from epic]
    exclusive: [*draft, *create-story]
  "@data-engineer (Dara)":
    triggers: [database, schema, migration, RLS, query]
    commands: [*db-bootstrap, *db-apply-migration, *db-rls-audit]
  "@ux-design-expert (Uma)":
    triggers: [UX, UI, design, user journey, wireframe]
    commands: [*design-spec, *user-journey]
  "@analyst (Atlas)":
    triggers: [research, analyze, competitive, feasibility]
    commands: [*research, *brainstorm, *feasibility-study]
  "@devops (Gage)":
    triggers: [push, deploy, PR, release, MCP management]
    exclusive: [git push, gh pr create/merge, MCP add/remove]
  "@aiox-master (Orion)":
    triggers: [framework, meta, orchestrate, create component]
    commands: [*create-agent, *create-task, *create-workflow, *validate-agents]

constitutional-enforcement:
  Article-I:
    principle: CLI First
    severity: NON-NEGOTIABLE
    rule: All operations via Claude Code CLI tools. Never bypass with direct file ops.
  Article-II:
    principle: Agent Authority
    severity: NON-NEGOTIABLE
    rule: |
      Only @devops pushes code. Only @po validates stories (Draft→Ready).
      Only @sm creates stories from epics. Violations are BLOCKED.
  Article-III:
    principle: Story-Driven Development
    severity: MUST
    rule: No implementation without an active story in docs/stories/
  Article-IV:
    principle: No Invention
    severity: MUST
    rule: Every spec statement must trace to FR-*, NFR-*, CON-* or research. No invented features.
  Article-V:
    principle: Quality First
    severity: MUST
    rule: Tests + lint + typecheck must pass before @devops push.

framework-layers:
  L1-Core:
    paths: [".aiox-core/core/", ".aiox-core/constitution.md", "bin/"]
    mutability: NEVER
  L2-Templates:
    paths: [".aiox-core/development/tasks/", ".aiox-core/development/templates/"]
    mutability: NEVER (extend-only for contributors)
  L3-Config:
    paths: [".aiox-core/data/", "agents/*/MEMORY.md", "core-config.yaml"]
    mutability: MUTABLE
  L4-Runtime:
    paths: ["docs/stories/", "apps/", "squads/", "tests/"]
    mutability: ALWAYS

story-lifecycle:
  states: [Draft, Ready, InProgress, InReview, Done, Deployed]
  gates:
    Draft→Ready: "@po *validate-story-draft (10-point checklist)"
    Ready→InProgress: "@dev picks up story"
    InProgress→InReview: "@qa *qa-gate (7 checks)"
    InReview→Done: "QA PASS verdict"
    Done→Deployed: "@devops *push + *create-pr"
  qa-loop:
    max-iterations: 5
    verdicts: [APPROVE, REJECT, BLOCKED]

anti-patterns:
  - Code push by non-@devops agent → BLOCK
  - Feature implementation without story → BLOCK
  - Invented specs without source tracing → BLOCK
  - Skipping QA gate → BLOCK
  - Editing L1/L2 files → BLOCK (deny rules in settings.json)
  - Creating components without schema → WARN

how-to-use:
  - Just describe what you want in natural language
  - God Mode classifies intent (OPERATE/CREATE/CONFIGURE) automatically
  - For OPERATE: routes to correct agent with context
  - For CREATE: runs creation command with structured schema + validation
  - For CONFIGURE: modifies settings with safety checks
  - No need to manually invoke @agent-name — God Mode handles routing
  - You can still invoke agents directly if you prefer explicit control

references:
  - .aiox-core/development/agents/          # All agent definitions
  - .aiox-core/development/tasks/           # All executable tasks
  - .aiox-core/development/workflows/       # All workflow definitions
  - .claude/rules/agent-authority.md        # Delegation matrix
  - .aiox-core/constitution.md              # Constitutional articles
```

---

## Quick Reference

**Criar componente:** `*create-agent nome`, `*create-task nome`, `*create-workflow nome`

**Operar:** Descreva em linguagem natural — God Mode roteia automaticamente

**Implementar feature:** "quero implementar X" → roteia para @dev com story context

**Revisar código:** "revisa o PR" → roteia para @qa

**Arquitetura:** "preciso decidir sobre Y" → roteia para @architect

**Deploy:** "faz o push" → roteia para @devops (exclusivo)

---

*Synkra AIOX God Mode v3.0 — Supreme Operator*
