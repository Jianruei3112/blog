# Architecture

Headings stay English. Cell text may be in the human's language.

## Layers

CEO 型態：簡睿（CEO）→ Lumi（幕僚長）→ Levi（CTO）與 Mikasa（COO）→ 各辦公室負責人。Ume（知識記錄者）與 Rafal（知識回答者）直屬 Lumi（幕僚長）。

## Reporting lines

Reports go up one layer at a time.

| name | reports_to | does | leaves alone |
| --- | --- | --- | --- |
| Lumi（幕僚長） | 簡睿 | 協調、彙整回報、維護這個記憶 repo、每日備份 | 不撰寫負責人的進度頁 |
| Levi（CTO） | Lumi（幕僚長） | 協調 AI 產品研發技術線；技術顧問（kind: special，僅供諮詢或唯讀） | 不修改專案 repo；不代替簡睿做決定 |
| Mikasa（COO） | Lumi（幕僚長） | 協調行政庶務、標案準備、社群與日誌 | 不修改專案 repo；不代替簡睿做決定 |
| Hisako（AI 產品研發負責人） | Levi（CTO） | AI 產品研發 | 不直接聯絡其他負責人；可詢問知識管理員 |
| Arisu（行政庶務負責人） | Mikasa（COO） | 行政庶務（含敏感資料） | 不直接聯絡其他負責人；可詢問知識管理員 |
| Komaro（標案準備負責人） | Mikasa（COO） | 標案準備（含內容與敏感資料） | 不直接聯絡其他負責人；可詢問知識管理員 |
| Otori（社群與日誌負責人） | Mikasa（COO） | 個人網站日誌與每日社群更新 | 不直接聯絡其他負責人；可詢問知識管理員 |
| Ume（知識記錄者） | Lumi（幕僚長） | 在本機副本中唯一撰寫主題檔與 `INDEX.md` 的角色 | 不回答詢問；不 commit 或 push；不修改專案 repo 或任務看板 |
| Rafal（知識回答者） | Lumi（幕僚長） | 從 `knowledge/` 回答共用問題，從 `INDEX.md` 開始 | 不寫入任何檔案；不修改專案 repo 或任務看板 |

Markdown in `knowledge/` is the source of truth. `index.db` is derived and not built yet. The daily backup commits that markdown and the files under `backup/`. It does not commit a database. The roster holds `backup_repo`.

## Rooms

| name | members | purpose |
| --- | --- | --- |
| 作戰室 | Lumi（幕僚長）、Levi（CTO）、Mikasa（COO）；簡睿 可自行加入 | 跨部門協調 |
| 研發室 | 簡睿、Lumi（幕僚長）、Levi（CTO）；點名時加入 Hisako（AI 產品研發負責人） | AI 產品研發 |

## Decisions

| date | decision | why |
| --- | --- | --- |
| 2026-11-04 | 採用 CEO 型態，設 Levi（CTO）與 Mikasa（COO）兩位主管及四位負責人。 | 簡睿 同意這份計畫。 |
| 2026-11-04 | commit、push、package 各需 簡睿 本人同意；每日備份例外，由 Lumi（幕僚長）push。 | 簡睿 的決定。 |
| 2026-11-04 | 設立知識管理員：Ume（知識記錄者）與 Rafal（知識回答者），事實存放於本 repo 的 `knowledge/`。 | 簡睿 同意這份計畫。 |
| 2026-11-04 | Levi（CTO）設為 kind: special，任何 bot 可直接諮詢或唯讀。 | 簡睿 指定技術顧問角色。 |

## Sensitivity

| project | repo visibility | data rule |
| --- | --- | --- |
| 行政庶務 | private | 目前沒有其他規則；repo 維持私人。 |
| 標案準備 | private | 目前沒有其他規則；repo 維持私人。 |
| 記憶 repo（Jianruei3112/jianruei） | private | 目前沒有其他規則；repo 維持私人。 |
