# Hostlinku Docs

Dokumentasi publik untuk [Hostlinku](https://hostlinku.com) — gateway API untuk model AI. Dibangun dengan [Mintlify](https://mintlify.com), ter-publish otomatis ke **https://docs.hostlinku.com**.

## Menjalankan lokal

```bash
npx mint dev --port 3220
```

Preview di `http://localhost:3220`.

## Struktur konten (4 bahasa)

| Lokasi | Bahasa |
|---|---|
| root (`*.mdx`) | Bahasa Indonesia (default) |
| `en/` | English |
| `ja/` | 日本語 |
| `zh/` | 简体中文 |

Setiap halaman memiliki path yang sama di keempat bahasa (mis. `chat-completions.mdx`, `en/chat-completions.mdx`, `ja/chat-completions.mdx`, `zh/chat-completions.mdx`). `docs.json` memakai satu sidebar per bahasa. Integrasi, FAQ, dan legal berada dalam grup yang bisa dibuka; halaman model tetap dapat dicari dan ditautkan dari katalog.

## Aturan konten

- **Nama produk, endpoint, dan model tidak diterjemahkan** — tetap dalam bentuk aslinya: `Chat Completions`, `Claude Code`, `Cursor`, `Zed`, `/v1/chat/completions`, `claude-sonnet-4-6`, dst.
- **Kode mesin tidak diterjemahkan.** Pesan error dapat berbeda menurut backend/upstream; gunakan contoh yang cocok dengan format endpoint. Referensi lengkap ada di `errors.mdx`.
- **Placeholder API key** memakai `sk-your-api-key` (bukan variasi lokal).
- Gunakan komponen Mintlify (`<Callout>`, `<Steps>`, `<Card>`, dst.) untuk konsistensi. `styles.css` menetapkan sudut 0 px untuk seluruh UI, termasuk hover dan popover.
- Beranda memandu request pertama; `api-reference.mdx` hanya ikhtisar. Parameter dan contoh lengkap berada di halaman endpoint. FAQ berisi solusi singkat dan tautan, bukan salinan seluruh referensi.
- Deskripsi model dibuat pendek dari nama, provider, dan konteks katalog. Harga, batas output, serta kapabilitas mengacu katalog aktif; jangan mengganti nilai karena ingin merapikan teks.

## Verifikasi

```bash
npx mint validate
npx mint broken-links --check-anchors --check-snippets --check-redirects
```

Buka preview untuk memeriksa sidebar, tautan kartu, tabel/kode, light/dark, dan mobile. Validasi tautan lokal tidak membuktikan semua situs eksternal atau perilaku API produksi.

## Deploy

Merge ke branch `main` → Mintlify auto-build dan publish ke `docs.hostlinku.com`. Status build bisa dilihat di dashboard Mintlify → **Publishes**.

## Kontribusi

1. Buat branch dari `main`.
2. Ubah file `.mdx` di bahasa yang relevan (jaga sinkron antar bahasa bila perlu).
3. Buka Pull Request; merge setelah review.
