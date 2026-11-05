# Roster

`preferred_language`: zh-Hant-TW（臺灣繁體中文）

`backup_repo`: Jianruei3112/jianruei
`backup_time`: 07:00
`backup_timezone`: Asia/Taipei
`backup_push`: main bot
`backup_branch`: main

| name | role | reports_to | id | channel |
| --- | --- | --- | --- | --- |
| Lumi（幕僚長） | main bot | 簡睿 | 64e1d453-7a15-4f43-9187-43d5c10ab1e2 | 作戰室（0e449737-f698-48a4-aa01-2460420af9ff）、研發室（dfcc7c6c-6ab1-40d8-9a7c-094b21391a5e） |
| Levi（CTO） | exec | Lumi（幕僚長） | 568a447a-188f-453a-8116-eef879039bce | 作戰室（0e449737-f698-48a4-aa01-2460420af9ff）、研發室（dfcc7c6c-6ab1-40d8-9a7c-094b21391a5e） |
| Mikasa（COO） | exec | Lumi（幕僚長） | a8aca199-0e4f-4387-bbba-0ad4a2dd7bdc | 作戰室（0e449737-f698-48a4-aa01-2460420af9ff） |
| Hisako（AI 產品研發負責人） | lead | Levi（CTO） | e79b19ac-91c7-4238-a21e-0df782e0c1b8 | none |
| Arisu（行政庶務負責人） | lead | Mikasa（COO） | 361a57b5-4725-4261-a9db-4c99038af6bb | none |
| Komaro（標案準備負責人） | lead | Mikasa（COO） | c1523581-7557-4b58-810a-909cf28bccdd | none |
| Otori（社群與日誌負責人） | lead | Mikasa（COO） | 6681f64b-7918-49a9-9f1a-727d884802c7 | none |
| Ume（知識記錄者） | knowledge writer | Lumi（幕僚長） | cff16d9f-375b-4eea-9ff9-05e0283b49f0 | none |
| Rafal（知識回答者） | knowledge reader | Lumi（幕僚長） | 70306844-8ce4-404a-b2da-e2b7b2f5ac81 | none |

Leads may ask the Knowledge Manager. Leads still do not message each other.

Until an id is filled in, do not assume `SendToAgent` can find that bot.

## Roster meta

This is looser than the default rule that leads do not message each other. The human chose it.

| name | meta |
| --- | --- |
| Levi（CTO） | kind: special |

- `kind: special`: any bot may ask this bot directly.
- A direct ask is consult or read-only. Consult means asking questions and looking up information. Read-only means reading what the other bot allows you to see. It changes nothing: the asker does not ask the other bot to do work (no executing, forwarding, writing, or running on its behalf), and does not change anything of the other bot's (files, settings, memory, or project). Assigning work, touching another bot's project, and spending quota go up the org line. The asker still sends its own eight-line report up.
- A bot that gets a direct ask only answers. It does not take the ask as an assignment. If the ask is really a task, it replies that the task must go up the org line.
- Only the human sets or changes meta, after a new yes. A bot never adds or removes meta.

The CEO sample, with placeholder offices only, is `templates/roster-ceo-example.md` in the framework repo. Do not copy ids from anywhere. There are none.
