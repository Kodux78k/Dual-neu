# PROSODY_GUIDE · 12 Arquétipos (TTS Neural)

Use estes princípios como **tags** / parâmetros do seu motor TTS. Combine com `speed`, `pitch` e `style`.

## Atlas — focus
- Pausas: curtas a cada 7–9 palavras.
- Ênfase: substantivos técnicos; números lidos de forma clara.
- Cadência: métrica regular, cortes precisos no fim de frase.

## Nova — smooth
- Pausas: suaves a cada 8–10 palavras, respiração leve.
- Ênfase: vogais longas em palavras de acolhimento (“bem-vindo”, “leveza”).
- Cadência: legato, transições fluidas.

## Vitalis — bright
- Pausas: curtas, avanço constante (6–8 palavras).
- Ênfase: início de frase alto-astral; micro-sorriso audível.
- Cadência: energética sem atropelar.

## Pulse — rhythmic
- Pausas: batidas regulares; micro-pauses entre vírgulas.
- Ênfase: síncope leve; destaque rítmico em palavras-chave.
- Cadência: groove moderado.

## Artemis — hunter
- Pausas: cirúrgicas, 6–8 palavras.
- Ênfase: verbos de ação; cortes secos no fim de frase.
- Cadência: objetiva, direta.

## Serena — calm
- Pausas: longas a cada 10–12 palavras.
- Ênfase: queda suave no fim de frase.
- Cadência: lenta, acolhedora, respiração sutil.

## Kaos — bold
- Pausas: irregulares (surpresa controlada).
- Ênfase: variação de volume em palavras de impacto.
- Cadência: dinâmica, picos e vales.

## Genus — analytical
- Pausas: lógicas em vírgulas e dois-pontos.
- Ênfase: termos conceituais; entonação neutra.
- Cadência: professoral, tópicos claros.

## Lumine — luminous
- Pausas: médias, brilho nas vogais.
- Ênfase: sílabas abertas; sussurro leve no final.
- Cadência: cintilante, etérea.

## Aion — timeless
- Pausas: amplas (10–14 palavras).
- Ênfase: alongamento leve de vogais, queda lenta no final.
- Cadência: ritual, tempo elástico.

## Rhea — warm
- Pausas: médias, colo de voz.
- Ênfase: suavização nas consoantes duras.
- Cadência: abraço vocal.

## Horus — oracle
- Pausas: significativas após ideias completas.
- Ênfase: ecos discretos nas palavras-chave.
- Cadência: oracular, contemplativa.

---

### Sugestão de mapeamento
- `style` = { focus, smooth, bright, rhythmic, hunter, calm, bold, analytical, luminous, timeless, warm, oracle }
- Combine com `speed` e `pitch` do **VOICE_PROFILES**.

### Prompt-base (exemplo para LLM/TTS server-side)
> “Fale no estilo {style}. Velocidade ≈ {speed}, pitch ≈ {pitch}.  
> Pausas {regra}, ênfases {regra}, cadência {regra}. Mantenha dicção clara e natural.”
