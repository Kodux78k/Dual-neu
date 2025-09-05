# Chapter Sets API (Banco de Capítulos)

Permite salvar e carregar conjuntos de capítulos (segments) no servidor.

## Endpoints sugeridos
- `GET /chaptersets` → lista sets disponíveis (com metadados)
- `GET /chaptersets/{id}` → retorna JSON `{ "id": "...", "title": "...", "segments": [ ... ], "version": 3, "updated": "2025-09-04T12:00:00Z" }`
- `POST /chaptersets` → cria/atualiza set de capítulos
```json
{
  "id": "doc-78k0-cap3",
  "title": "Capítulo 3 do 78K0",
  "segments": [
    { "start": 0.0, "duration": 10.5, "label": "Intro" },
    { "start": 10.5, "duration": 22.0, "label": "Expansão" }
  ],
  "version": 3
}
```

## Observações
- Use autenticação (tokens) por usuário/projeto.
- Armazene versões para histórico (`version` incremental).
- O PWA pode integrar esses endpoints para **carregar sets prontos** e **salvar ajustes** feitos no Import/Export.
