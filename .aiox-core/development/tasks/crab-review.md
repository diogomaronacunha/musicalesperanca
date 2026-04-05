# Task: crab-review

**Agent:** @crab (Krak)
**Tipo:** Análise de risco pré-implementação
**Elicit:** true
**Output:** Relatório de Pinça (docs/qa/crab-reports/)

---

## Objetivo

Executar análise completa nas 9 dimensões do Caranguejo Squad sobre qualquer
input (ideia, prompt, arquivo, pasta, proposta). Gerar Relatório de Pinça
com findings classificados por severidade que os demais squads devem endereçar.

---

## Inputs

```yaml
inputs:
  - name: target
    type: string | file_path | folder_path
    description: O que será analisado (ideia, texto, arquivo ou pasta)
    required: true
  - name: context
    type: string
    description: Contexto adicional (qual squad vai usar, qual fase do projeto)
    required: false
  - name: focus_dimensions
    type: list
    description: Dimensões prioritárias (opcional — padrão é todas as 9)
    required: false
    default: [hermes, atlas, raiz, ferro, argus, sentinel, vulcano, cronos, nexus]
```

---

## Pre-conditions

- Input fornecido pelo usuário
- @crab ativo

## Post-conditions

- Relatório de Pinça gerado e exibido
- Findings classificados por severidade
- Recomendações prioritárias listadas

---

## Execution Steps

### FASE 1 — Elicitação (elicit: true)

```
Apresente ao usuário:

"🦀 Caranguejo Squad ativo. Vou analisar o input nas 9 dimensões.

Antes de iniciar, confirme:
1. O que devo analisar? (descreva ou cole o conteúdo / informe o path)
2. Existe contexto importante que devo considerar?
   (ex: fase do projeto, restrições, público-alvo)
3. Alguma dimensão é mais crítica para este caso?
   (1=Fundação, 2=Alicerce, 3=Base/Dados, 4=Estrutura, 5=Visual,
    6=Segurança, 7=Escala, 8=Tempo, 9=Ecossistema)
   [Enter para analisar todas]

Pode responder em texto livre."
```

Aguarde resposta. Extraia:
- `target` — o que será analisado
- `context` — contexto fornecido
- `focus_dimensions` — dimensões prioritárias (ou todas se não informado)

---

### FASE 2 — Análise por dimensão

Para cada dimensão ativa, execute a análise na persona do caranguejo correspondente.
Use os dados do target + context. Seja específico — cite trechos, arquivos, decisões reais.

#### 🦀 Hermes — Fundação
Analise:
- Premissas de negócio (são fatos ou suposições?)
- Viabilidade financeira e ROI
- Modelo de monetização e escala
- Dependência de fornecedores únicos
- O que invalida tudo isso em 6 meses?

#### 🦀 Atlas — Alicerce
Analise:
- Decisões arquiteturais e reversibilidade
- Vendor lock-in e alternativas
- Single points of failure
- Capacidade de escalar a arquitetura
- O que acontece se o componente X falhar?

#### 🦀 Raiz — Base/Dados
Analise:
- Modelo de dados e integridade referencial
- Edge cases e exceções de negócio
- Estratégia de migração e rollback
- Consistência de dados em cenários de erro
- Regras de acesso e RLS

#### 🦀 Ferro — Estrutura/Código
Analise:
- Qualidade e padrões de código
- Dívida técnica visível e oculta
- Acoplamento e coesão
- Testabilidade e manutenibilidade
- Tratamento de erros e logging

#### 🦀 Argus — Visual/UX
Analise:
- Usabilidade real sem instrução
- Feedback de ações e estados de erro
- Consistência e responsividade
- Acessibilidade básica
- Fluxos com saídas claras

#### 🦀 Sentinel — Segurança
Analise:
- OWASP Top 10 aplicável ao contexto
- Exposição de dados sensíveis
- Autenticação e autorização
- LGPD e compliance
- Secrets e credenciais expostos

#### 🦀 Vulcano — Escala/Performance
Analise:
- Gargalos com volume aumentado
- Queries e operações lentas
- Custo de infra em diferentes escalas
- Processos síncronos que deveriam ser assíncronos
- Rate limits e limites de API externos

#### 🦀 Cronos — Tempo/Dependências
Analise:
- Realismo do prazo vs. complexidade
- Dependências bloqueantes e seu tempo
- Trabalho oculto não mapeado
- Sequenciamento correto das etapas
- Decisões externas que podem atrasar

#### 🦀 Nexus — Ecossistema/Integrações
Analise:
- Custos ocultos por volume de APIs externas
- Tratamento de falha em integrações críticas
- Bibliotecas com vulnerabilidades ou desatualizadas
- Webhooks sem validação de origem
- Serviços sem SLA ou com histórico de instabilidade

---

### FASE 3 — Classificação de Findings

Para cada finding identificado, classifique:

```yaml
finding:
  dimensao: [hermes|atlas|raiz|ferro|argus|sentinel|vulcano|cronos|nexus]
  caranguejo: [nome do caranguejo]
  risco: [descrição clara do risco]
  severidade: [CRITICO|ALTO|MEDIO|BAIXO]
  recomendacao: [ação concreta e específica]
```

**Critérios de severidade:**
- **CRÍTICO:** Pode causar falha total do sistema, perda de dados, violação legal, ou inviabilizar o negócio
- **ALTO:** Impacto significativo mas não catastrófico — deve ser resolvido antes de produção
- **MÉDIO:** Impacto moderado, aceitável com monitoramento ou plano de mitigação
- **BAIXO:** Boa prática ignorada ou risco mínimo — registrado para consciência

---

### FASE 4 — Geração do Relatório de Pinça

Gere o relatório no seguinte formato:

```markdown
## 🦀 Relatório de Pinça

**Input analisado:** {target_resumido}
**Data:** {data_atual}
**Dimensões analisadas:** {lista}

---

### 🔴 CRÍTICO — Bloqueante
> Outros squads NÃO avançam sem resolver estes itens.

[Para cada finding CRÍTICO:]
**[Dimensão] — [Caranguejo]**
- **Risco:** {descrição}
- **Recomendação:** {ação concreta}

---

### 🟠 ALTO — Deve ser endereçado
> Outros squads DEVEM incluir resolução na sua resposta.

[Para cada finding ALTO:]
**[Dimensão] — [Caranguejo]**
- **Risco:** {descrição}
- **Recomendação:** {ação concreta}

---

### 🟡 MÉDIO — Risco aceito
> Documentado. Monitorar.

[Lista de findings MÉDIO em formato compacto]

---

### 🟢 BAIXO — Observações
> Registrado para consciência do time.

[Lista de findings BAIXO em formato compacto]

---

### Recomendações prioritárias antes de avançar

1. {primeira ação mais importante}
2. {segunda ação}
3. {terceira ação}

---

**Score de risco:** {X críticos, Y altos, Z médios, W baixos}
*Se houver 0 CRÍTICOS e 0 ALTOS: sinal verde para os outros squads.*

---
*🦀 Caranguejo Squad — vemos de lado o que outros não veem de frente.*
```

---

### FASE 5 — Instrução para outros squads

Ao final do relatório, adicione:

```
---
### Para os demais squads

Os findings CRÍTICOS acima são bloqueantes — não avancem sem resolução.
Os findings ALTOS devem ser explicitamente endereçados em suas respostas.
O objetivo não é parar — é chegar melhor.
```

---

## Error Handling

- Se o input for muito vago: elicite mais contexto antes de analisar
- Se não houver findings em alguma dimensão: registre "Nenhum finding identificado nesta dimensão"
- Se o input for muito grande (pasta completa): priorize arquivos críticos e sinalize o que não foi analisado
- Nunca gere findings sem evidência concreta no input

---

## Output Location

Relatórios salvos em: `docs/qa/crab-reports/{date}-{target-slug}.md`
(Opcional — apenas se o usuário solicitar persistência)
