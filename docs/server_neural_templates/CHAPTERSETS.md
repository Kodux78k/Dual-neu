# CHAPTERSETS · Banco de Capítulos

## Endpoints
- `GET /chaptersets` → retorna lista de sets
- `POST /chaptersets` → cria/atualiza set

### Modelos
**ChapterSet**:
```json
{
  "id": "auto",
  "name": "Set 01",
  "audioUrl": "https://.../tts_long.mp3",
  "duration": 123.4,
  "segments": [ { "start": 0.0, "duration": 8.2, "label": "Intro" } ],
  "createdAt": 1710000000,
  "updatedAt": 1710005000,
  "meta": { "archetype": "Nova" }
}
```

### GET /chaptersets
Resposta: `200 OK`
```json
[ ChapterSet, ... ]
```

### POST /chaptersets
Corpo:
```json
{
  "name": "Set 01",
  "audioUrl": "https://.../tts.mp3",
  "duration": 123.4,
  "segments": [ ... ],
  "meta": { "archetype": "Nova" }
}
```
Resposta: `200 OK` com `{ "ok": true, "id": "..." }`

> Obs.: implemente autenticação e armazenamento no servidor (DB/key-value). O PWA apenas consome.
