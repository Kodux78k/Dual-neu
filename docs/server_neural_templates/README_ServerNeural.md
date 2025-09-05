# Dual Neural API · Templates

Consulte `openapi.yaml` para o contrato universal (`GET /`, `POST /intent`).

## Novo: OpenAPI TTS por Arquétipo (12 vozes)
Arquivo: `openapi_tts_12.yaml`  
- `POST /tts/{archetype}` com `archetype` ∈ Atlas, Nova, Vitalis, Pulse, Artemis, Serena, Kaos, Genus, Lumine, Aion, Rhea, Horus  
- Corpo: `{ text, speed?, pitch?, style?, format? }`  
- Resposta: `{ text, audioUrl, duration? }`

Data: 2025-09-05


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
