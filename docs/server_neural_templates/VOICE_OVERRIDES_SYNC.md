# Voice Overrides Sync (Opcional)

## Endpoints sugeridos
- `GET /voice-overrides` → retorna JSON `{ "overrides": { "Atlas": { "speed": 0.96, "pitch": -0.5, "style": "focus" }, ... } }`
- `POST /voice-overrides` → recebe JSON `{ "overrides": { ... }, "ts": 1710000000 }` e persiste do lado do servidor (por usuário/autenticação).

### Exemplo de resposta
```json
{
  "overrides": {
    "Nova": { "speed": 1.04, "pitch": 0.5, "style": "smooth" },
    "Horus": { "speed": 0.99, "pitch": -0.4, "style": "oracle" }
  },
  "ts": 1710000000
}
```

> Observação: implemente autenticação (tokens) e storage (DB/kv) no seu servidor. O PWA não guarda chaves; somente chama os endpoints.
