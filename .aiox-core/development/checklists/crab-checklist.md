# Checklist: Caranguejo Squad
**Versão:** 1.0
**Agente:** @crab (Krak)
**Uso:** Execução manual rápida ou integração com *review

---

## Instruções de uso

Este checklist é executado antes de qualquer implementação, investimento ou entrega.
Para cada item: ✅ OK | ⚠️ Atenção | 🔴 Crítico | N/A Não aplicável

Score mínimo para avançar: **0 itens Críticos, máximo 3 itens Atenção**

---

## 🦀 Hermes — Fundação

### Negócio e Viabilidade
- [ ] As premissas de negócio são fatos validados (não suposições)?
- [ ] O ROI foi calculado com custos reais (infra, licenças, mão de obra)?
- [ ] O modelo de monetização funciona em pelo menos 3 cenários de escala?
- [ ] Existe pesquisa de mercado ou validação com usuários reais?
- [ ] A solução resolve um problema que as pessoas realmente têm?

### Riscos de Negócio
- [ ] O negócio sobrevive se o fornecedor principal aumentar 3x o preço?
- [ ] Existe estratégia para o cenário em que o maior concorrente copiar a ideia?
- [ ] O que invalida toda essa proposta em 6 meses foi mapeado?
- [ ] Existe dependência crítica de um parceiro/fornecedor único?
- [ ] Os custos de aquisição de cliente foram considerados?

---

## 🦀 Atlas — Alicerce

### Arquitetura
- [ ] As decisões tecnológicas foram documentadas com justificativa?
- [ ] Existem alternativas mapeadas para o tech stack escolhido?
- [ ] A arquitetura foi avaliada para 10x o volume atual?
- [ ] Decisões irreversíveis foram identificadas e aceitas conscientemente?
- [ ] Existe separação clara de responsabilidades entre componentes?

### Riscos Sistêmicos
- [ ] Os single points of failure foram identificados?
- [ ] Existe plano de contingência para falha de cada componente crítico?
- [ ] O vendor lock-in foi avaliado (cloud, APIs, serviços)?
- [ ] A integração entre sistemas foi documentada com contratos claros?
- [ ] Existe estratégia de disaster recovery?

---

## 🦀 Raiz — Base/Dados

### Modelo de Dados
- [ ] O modelo de dados suporta todos os requisitos funcionais?
- [ ] As relações entre entidades estão corretas e normalizadas?
- [ ] Os índices necessários para performance foram definidos?
- [ ] As regras de acesso (RLS) estão implementadas corretamente?
- [ ] Dados sensíveis estão identificados e protegidos?

### Integridade e Consistência
- [ ] Existe strategy de migração com rollback testado?
- [ ] Os edge cases de negócio foram mapeados no modelo?
- [ ] Transações estão sendo usadas onde necessário?
- [ ] O que acontece com dados existentes durante migrações está planejado?
- [ ] Existe validação de integridade referencial?

---

## 🦀 Ferro — Estrutura/Código

### Qualidade
- [ ] O código segue padrões consistentes do projeto?
- [ ] Funções e módulos têm responsabilidade única e clara?
- [ ] Código duplicado foi eliminado ou planejado para refatoração?
- [ ] Todos os erros são tratados explicitamente (sem swallowed errors)?
- [ ] Logging adequado existe para debugging em produção?

### Manutenibilidade
- [ ] Um dev novo conseguiria entender o código em menos de 1 dia?
- [ ] Existe cobertura de testes para o que foi implementado?
- [ ] A dívida técnica foi documentada no backlog?
- [ ] Configurações estão externalizadas (não hardcoded)?
- [ ] As dependências externas estão isoladas em abstrações?

---

## 🦀 Argus — Visual/UX

### Usabilidade
- [ ] Um usuário real consegue completar o fluxo sem instrução?
- [ ] Todos os estados de erro têm mensagens claras e acionáveis?
- [ ] Os estados de loading/processamento estão visíveis?
- [ ] Existe confirmação para ações destrutivas (deletar, enviar, comprar)?
- [ ] Os formulários validam e informam erros campo a campo?

### Consistência e Acessibilidade
- [ ] A experiência é consistente em todos os breakpoints (mobile/tablet/desktop)?
- [ ] O contraste de cores atende WCAG AA mínimo?
- [ ] Fluxos têm saídas claras (cancelar, voltar, sair)?
- [ ] A identidade visual é consistente em toda a interface?
- [ ] Usuários com conexão lenta têm experiência degradada graciosamente?

---

## 🦀 Sentinel — Segurança

### OWASP Top 10
- [ ] Todas as entradas de usuário são validadas e sanitizadas?
- [ ] Não existe exposição de informações sensíveis em logs ou respostas de erro?
- [ ] Autenticação e autorização estão implementadas em todos os endpoints?
- [ ] Não há SQL injection, XSS ou command injection possível?
- [ ] Rate limiting está implementado em endpoints públicos?

### Dados e Compliance
- [ ] Credenciais e secrets estão em variáveis de ambiente (não no código)?
- [ ] Dados pessoais coletados estão mapeados (LGPD)?
- [ ] Existe política de retenção e exclusão de dados?
- [ ] Comunicação com serviços externos usa HTTPS/TLS?
- [ ] Webhooks recebidos validam a origem (signature/token)?

---

## 🦀 Vulcano — Escala/Performance

### Performance
- [ ] Queries ao banco de dados foram analisadas (EXPLAIN/índices)?
- [ ] Existe estratégia de cache para operações frequentes e custosas?
- [ ] Operações pesadas são processadas assincronamente?
- [ ] Uploads e processamentos têm limites de tamanho definidos?
- [ ] Memory leaks foram verificados em operações de longa duração?

### Escala e Custos
- [ ] O custo mensal com 1.000, 10.000 e 100.000 usuários foi estimado?
- [ ] Os rate limits de APIs externas foram verificados para a escala esperada?
- [ ] O que quebra primeiro com crescimento foi identificado?
- [ ] Existe estratégia de horizontal scaling se necessário?
- [ ] CDN ou edge caching está sendo usado onde aplicável?

---

## 🦀 Cronos — Tempo/Dependências

### Prazo e Complexidade
- [ ] O prazo considera 30% de buffer para imprevistos?
- [ ] A complexidade foi avaliada por quem vai executar (não quem pediu)?
- [ ] Trabalho oculto (setup, testes, deploy, documentação) está no escopo?
- [ ] Existe sequenciamento correto — nada começa antes de sua dependência?
- [ ] Tarefas em paralelo foram identificadas para otimizar o prazo?

### Dependências e Bloqueios
- [ ] Todas as dependências externas (APIs, pessoas, decisões) foram mapeadas?
- [ ] Existe plano B para cada dependência bloqueante?
- [ ] Decisões que precisam de aprovação externa foram antecipadas?
- [ ] O caminho crítico foi identificado?
- [ ] Existe checkpoint de revisão no meio do prazo?

---

## 🦀 Nexus — Ecossistema/Integrações

### APIs e Serviços Externos
- [ ] Os termos de uso e limites de cada API externa foram verificados?
- [ ] O custo por volume de chamadas foi calculado para a escala esperada?
- [ ] Existe tratamento de falha (retry, fallback) para cada integração crítica?
- [ ] O SLA de cada serviço externo crítico foi verificado?
- [ ] Existe monitoramento para detectar quando integrações falham?

### Dependências de Software
- [ ] As bibliotecas usadas têm vulnerabilidades conhecidas? (npm audit)
- [ ] As versões de dependências estão fixadas (lockfile atualizado)?
- [ ] Existe plano para breaking changes em major versions de libs?
- [ ] Libs abandonadas ou sem manutenção foram identificadas?
- [ ] Existe alternativa para cada dependência crítica de terceiro?

---

## Score Final

```
Totalize por categoria:

HERMES    (Fundação):        ✅__ ⚠️__ 🔴__
ATLAS     (Alicerce):        ✅__ ⚠️__ 🔴__
RAIZ      (Base/Dados):      ✅__ ⚠️__ 🔴__
FERRO     (Estrutura):       ✅__ ⚠️__ 🔴__
ARGUS     (Visual/UX):       ✅__ ⚠️__ 🔴__
SENTINEL  (Segurança):       ✅__ ⚠️__ 🔴__
VULCANO   (Escala):          ✅__ ⚠️__ 🔴__
CRONOS    (Tempo):           ✅__ ⚠️__ 🔴__
NEXUS     (Ecossistema):     ✅__ ⚠️__ 🔴__

TOTAL:                       ✅__ ⚠️__ 🔴__

Resultado:
  0 🔴 e ≤3 ⚠️  → SINAL VERDE — pode avançar
  0 🔴 e >3 ⚠️  → ATENÇÃO — resolva os principais ⚠️ antes de avançar
  ≥1 🔴         → BLOQUEADO — resolva os críticos antes de qualquer avanço
```

---

*🦀 Caranguejo Squad v1.0 — vemos de lado o que outros não veem de frente.*
