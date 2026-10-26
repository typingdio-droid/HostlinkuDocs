# Hostlinku Docs

Dokumentasi publik untuk [Hostlinku](https://hostlinku.com) — gateway API untuk model AI. Dibangun dengan [Mintlify](https://mintlify.com), ter-publish otomatis ke **https://docs.hostlinku.com**.

## Menjalankan lokal

```bash
npx mint dev
```

Preview di `http://localhost:3000`.

## Struktur konten (4 bahasa)

| Lokasi | Bahasa |
|---|---|
| root (`*.mdx`) | Bahasa Indonesia (default) |
| `en/` | English |
| `ja/` | 日本語 |
| `zh/` | 简体中文 |

Setiap halaman memiliki path yang sama di keempat bahasa (mis. `chat-completions.mdx`, `en/chat-completions.mdx`, `ja/chat-completions.mdx`, `zh/chat-completions.mdx`). Navigasi diatur di `docs.json`.

## Aturan konten

- **Nama produk, endpoint, dan model tidak diterjemahkan** — tetap dalam bentuk aslinya: `Chat Completions`, `Claude Code`, `Cursor`, `Zed`, `/v1/chat/completions`, `claude-sonnet-4-6`, dst.
- **Contoh pesan error mengikuti backend** — pesan error di docs adalah pesan aktual yang dikirim backend (`HostlinkuApi`), yang saat ini berbahasa Inggris.
- **Placeholder API key** memakai `sk-your-api-key` (bukan variasi lokal).
- Gunakan komponen Mintlify (`<Callout>`, `<Steps>`, `<Card>`, dst.) untuk konsistensi.

## Deploy

Merge ke branch `main` → Mintlify auto-build dan publish ke `docs.hostlinku.com`. Status build bisa dilihat di dashboard Mintlify → **Publishes**.

## Kontribusi

1. Buat branch dari `main`.
2. Ubah file `.mdx` di bahasa yang relevan (jaga sinkron antar bahasa bila perlu).
3. Buka Pull Request; merge setelah review.
