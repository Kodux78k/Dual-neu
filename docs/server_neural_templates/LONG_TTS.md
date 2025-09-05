# LONG_TTS · Orientações

Quando `long: true` vier no corpo do `POST /intent` ou no `POST /tts/{archetype}`:

1) **Segmentação** (no servidor):
   - Divida por frases / pontuação. Limite sugerido: 180–240 caracteres por segmento.
   - Gere TTS por segmento e **una** em um único arquivo (ou retorne `audioUrls` múltiplos).

2) **Streaming** (opcional):
   - Se o seu provedor suportar stream, devolva `audioUrl` para um arquivo em progresso ou use HLS/segmentos.

3) **Metadados** (opcional):
   - `duration` total; `segments` com `offset/duration` para players que exibem capítulo.

4) **Contrato sugerido**:
```json
{
  "text": "Fala sintetizada.",
  "audioUrl": "https://.../tts_long.mp3",
  "duration": 123.4
}
```

> Se preferir múltiplos arquivos, retorne `audioUrls: ["...","..."]`.


## Resposta com capítulos (segments)
Para exibir capítulos no player do PWA, inclua `segments` no JSON de resposta:
```json
{
  "text": "Fala sintetizada.",
  "audioUrl": "https://.../tts_long.mp3",
  "duration": 123.4,
  "segments": [
    { "start": 0.0, "duration": 8.2, "label": "Introdução" },
    { "start": 8.2, "duration": 12.5, "label": "Enunciado A" },
    { "start": 20.7, "duration": 15.1, "label": "Enunciado B" }
  ]
}
```


### CORS para waveform
Para que o PWA desenhe a waveform real (fetch + decode), habilite **CORS** no `audioUrl`:
```
Access-Control-Allow-Origin: *
```
Caso contrário, o app usa uma waveform **sintética** baseada em `segments` (fallback bonito).

### Capítulos nomeados e loop
- Inclua `label` em cada segment para exibir nomes nos botões de capítulo.
- O usuário pode clicar num capítulo → saltar ou ativar loop automático desse trecho.
